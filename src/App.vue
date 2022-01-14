<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <Computed/>-->
<!--    <Watch/>-->
    <DynamicForm :formItems="[
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
  },{
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
    ]"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/Test.vue'
// import Computed from "@/components/Computed";
// import Watch from "@/components/Watch";
import DynamicForm from './components/DynamicForm';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Test
    // Computed,
    // Watch
    DynamicForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
