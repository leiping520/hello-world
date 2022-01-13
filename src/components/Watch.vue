<template>
  <div>
    <p>侦听器</p>
    <p> 你给个提问吧:<input v-model="question"> </p>
    <p> {{ answer }} </p>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
export default {
  name: "Watch",
  data () {
    return {
      question: '',
      answer: '在你提问前我不能给你一个答案，嘻嘻。'
    }
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = '稍等片刻，正在为你解答...';
      //this.debouncedGetAnswer;
      this.getAnswer();
    }
  },
  created: function () {
    //alert(222222);
    //this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = '提问通常包含一个问号. ;-)';
        return;
      }
      this.answer = '思考中...';
      let vm = this;
      axios.get('https://yesno.wtf/api')
        .then (function (response) {
            vm.answer = _.capitalize(response.data.answer);
         })
         .catch (function (error) {
           vm.answer = '错误呀,' + error
         });
    }
  }
}
</script>

<style scoped>

</style>