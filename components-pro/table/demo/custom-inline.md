---
order: 10
title:
  zh-CN: 自定义行内编辑
  en-US: Custom inline
---

## zh-CN

自定义行内编辑，可仅提交当前行数据

## en-US

Custom inline.

```jsx
import { DataSet, Table, Button, Switch } from 'choerodon-ui/pro';

const { Column } = Table;

class App extends React.Component {
  userDs = new DataSet({
    primaryKey: 'userid',
    transport: {
      read({ params: { page, pagesize } }) {
        return {
          url: `/dataset/user/page/${pagesize}/${page}`,
        };
      },
      create(props) {
        return {
          url: '/dataset/user/mutations',
          method: 'put',
          transformResponse: () => {
            // 新增数据提交成功后，需要返回所有数据以便对 record 回写，如果未返回数据，会重新查询数据
            // mock 接口返回新增数据信息
            const { data } = props;
            const bData = { ...data[0] };
            bData.userid = Date.now();
            return bData;
          }
        };
      },
    },
    name: 'user',
    autoQuery: true,
    pageSize: 5,
    fields: [
      {
        name: 'userid',
        type: 'string',
        label: '编号',
      },
      {
        name: 'name',
        type: 'intl',
        label: '姓名',
        required: true,
      },
      {
        name: 'age',
        type: 'number',
        label: '年龄',
        max: 100,
        step: 1,
      },
      {
        name: 'sex',
        type: 'string',
        label: '性别',
        lookupCode: 'HR.EMPLOYEE_GENDER',
        required: true,
      },
      { name: 'enable', type: 'boolean', label: '是否开启' },
    ],
    events: {
      submit: ({ data }) => console.log('submit data', data),
    },
  });
  handleEdit = (record) => {
    record.setState('editing', true);
  };
  handleAdd = () => {
    const record = this.userDs.create({}, 0);
    record.setState('editing', true);
  };
  handleCancel = (record) => {
    if (record.status === 'add') {
      this.userDs.remove(record);
    } else {
      record.reset();
      record.setState('editing', false);
    }
  };
  
  handleSubmit = async (record) => {
    // 仅提交当前行数据
    const res = await this.userDs.submitRecord(record);
    if (res && res.success) {
      // 提交成功后，修改编辑状态
      record.reset();
      record.setState('editing', false);
    }
    // 对应抛出处理
    console.log(res);
  }
  /**
   * 行内操作按钮组
   */
  commands = ({ record }) => {
    const btns = [];
    if (record.getState('editing')) {
      btns.push(
        <a onClick={this.handleSubmit.bind(this, record)} key='confirm'>
          确认
        </a>,
        <a onClick={() => this.handleCancel(record)} key='cancel'>
          取消
        </a>,
      );
    } else {
      btns.push(
        <a
          key='edit'
          onClick={() => this.handleEdit(record)}
          disabled={record.status === 'delete'}
        >
          编辑
        </a>,
      );
    }
    return [<span className="action-link" key='actions'>{btns}</span>];
  };
  render() {
    const buttons = [
      <Button icon="playlist_add" onClick={this.handleAdd} key="add">
        新增
      </Button>,
      'delete',
      'reset',
    ];
    return (
      <Table key="user" buttons={buttons} buttonsLimit={2} dataSet={this.userDs}>
        <Column name="userid" />
        <Column name="name" editor={(record) => record.getState('editing')} />
        <Column name="age" editor={(record) => record.getState('editing')} />
        <Column name="sex" editor={(record) => record.getState('editing')} />
        <Column name="enable" editor={(record) => record.getState('editing') && <Switch />} />
        <Column header="操作" align="center" renderer={this.commands} className="custom-command" lock="right" />
      </Table>
    );
  }
}
ReactDOM.render(<App />, mountNode);
```

```css
.custom-command a {
  margin: 0 0.1rem;
}
```
