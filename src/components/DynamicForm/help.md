# 动态表单使用文档

> 参考文档 [Element-UI Form 表单文档](https://element.eleme.cn/#/zh-CN/component/form/)

## Attributes

| 参数       | 说明                                                                                  | 类型    | 可选值 | 默认值 |
| ---------- | ------------------------------------------------------------------------------------- | ------- | ------ | ------ |
| isVertical | 布局：垂直或者横向                                                                    | boolean | -      | false  |
| labelWidth | 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto | string  | -      | -      |
| formProps  | el-form 的 props 属性和 Element-UI 文档一致                                           | object  | -      | -      |
| formItems  | 表单子项列表。配置选项，具体看下表                                                    | array   | -      | -      |
| submitText | 提交按钮文字描述                                                                      | string  | -      | 查询   |
| resetText  | 重置按钮文字描述                                                                      | string  | -      | 重置   |

## formItems

| 参数          | 说明                                                                                                                                    | 类型         | 可选值                          | 默认值 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------- | ------ |
| tag           | 组件标签名`el-${this.tag}` el-前缀已经默认只需要加上后面标签名后缀                                                                      | string       | -                               | input  |
| component     | 组件插入                                                                                                                                | VNode        | -                               | input  |
| formItemProps | el-form-item 的 props，与 Element-UI 文档一致，一般传入 {label: '名称',prop: '键值',}                                                   | object       | 必传                            | -      |
| fieldProps    | el-form-item 原子组件（如：el-input/el-cascader/el-switch/el-date-picker 等）的 props，与 Element-UI 文档一致，额外配置选项，具体看下表 | object       | -                               | -      |
| initialValue  | 初始值                                                                                                                                  | object       | -                               | -      |
| rules         | 必填配置可：{ required: true }，默认预设校验规则 { validator: 'name' 值可选} ，数组配置则和 Element-UI 文档一致                         | object/array | name/phone/ID/url/email/default | -      |

## fieldProps

| 参数  | 说明                                            | 类型     | 可选值 | 默认值 |
| ----- | ----------------------------------------------- | -------- | ------ | ------ |
| on    | Element-UI 原子组件事件，与 Element-UI 文档一致 | function | -      | -      |
| w100  | string 设置该原子组件宽度为 100%                | boolean  | -      | false  |
| style | 样式属性和原生 dom 一致                         | object   | -      | -      |

## 代码示例

```js
// 引入富文本组件等，如上传组件也能如此引入
import Tinymce from '@/components/Tinymce';

export default [
  {
    // 可省略
    // tag: 'input',
    formItemProps: {
      label: '测试',
      prop: 'inputBox',
    },
    fieldProps: {
      'prefix-icon': 'el-icon-search',
      'suffix-icon': h => (
        <i
          slot="suffix"
          class="el-input__icon el-icon-date"
          onClick={e => console.log(`点击事件`, e)}
        ></i>
      ),
    },
    // 默认预设校验规则  var validator = name phone ID url email default 其中一个
    // rules: [{ validator: 'name', required: true, message: '请填写测试输入', trigger: 'blur' }],
    rules: { required: true },
  },
  {
    tag: 'radio-group',
    formItemProps: {
      label: '单选框组',
      prop: 'radio',
    },
    fieldProps: {
      options: [
        { label: '1', text: '测试radio' },
        { label: '2', text: '测试radio2' },
      ],
    },
    rules: { required: true },
    initialValue: ['2'],
  },
  {
    tag: 'checkbox-group',
    formItemProps: {
      label: '多选框组',
      prop: 'checkbox',
    },
    fieldProps: {
      options: [
        { label: '1', text: '测试checkbox' },
        { label: '2', text: '测试checkbox2' },
      ],
    },
    rules: { required: true },
    initialValue: ['2'],
  },
  {
    tag: 'cascader',
    formItemProps: {
      label: '级联示例',
      prop: 'cascaderexample',
    },
    fieldProps: {
      w100: true,
      props: {
        // expandTrigger: 'hover',
        // value: 'id',
        // label: 'catalogName',
        // children: 'subMenu',
        checkStrictly: true,
      },
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
          ],
        },
        {
          value: 'daohang',
          label: '导航',
          children: [
            {
              value: 'cexiangdaohang',
              label: '侧向导航',
            },
            {
              value: 'dingbudaohang',
              label: '顶部导航',
            },
          ],
        },
      ],
    },
    rules: { required: true },
  },
  {
    tag: 'switch',
    // formItems属性
    formItemProps: {
      label: '切换示例',
      prop: 'switch',
    },
    // 校验规则
    rules: [{ required: true, message: '此为必填项', trigger: 'blur' }],
    initialValue: true,
  },
  {
    tag: 'input-number',
    // formItems属性
    formItemProps: {
      label: '数值',
      prop: 'number',
    },
    // 标签属性
    fieldProps: {
      w100: true,
      'controls-position': 'right',
    },
    // 校验规则
    rules: { required: true },
  },
  {
    tag: 'date-picker',
    // formItems属性
    formItemProps: {
      label: '日期范围',
      prop: 'date-picker',
    },
    // 标签属性
    fieldProps: {
      type: 'daterange',
      'range-separator': '至',
      'start-placeholder': '开始日期',
      'end-placeholder': '结束日期',
      style: {
        // width: '100%',
      },
    },
    // 校验规则
    rules: { required: true },
  },
  {
    // 插入组件，比如 富文本
    component: Tinymce,
    // formItems属性
    formItemProps: {
      label: '文章内容',
      prop: 'content',
    },
    // 标签属性
    fieldProps: { height: 200 },
    // 校验规则
    rules: [{ required: true, message: '此为必填项' }],
  },
  // render 写法
  // render: (h, params) => (
  //   <el-switch value={params.status} onInput={$event => (params.status = $event)} type="primary" size="default">
  //     131
  //   </el-switch>
  // ),

  // render: (h, params) => (
  //   <Tinymce value={params.versionDesc} onInput={$event => (params.versionDesc = $event)}></Tinymce>
  // ),
];
```
