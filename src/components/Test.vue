<template>
  <div v-if="show">
    <ul>
      <li v-for="food in foodList" :key="food.name">
        <a v-bind:class="{active:isActive}" v-bind:href="url">{{ food.name }}</a>
      </li>
    </ul>
  </div>

  <div>
<!--    <h3>v-on指令</h3>-->
<!--    <button v-on="{mouserenter: onEnter,mouseleave: onLeave}" v-on:click="onClick">点我</button>-->
<!--    <form v-on:submit="onSubmit">-->
<!--      <input/>-->
<!--    </form>-->
  </div>

  <div>
    <h3>v-model指令</h3>
    <input v-model="name"> {{name}}
  </div>

</template>

<script>
export default {
  name: "Test",
  data: function () {
    return {
      name: 'hahahah',
      show: true,
      foodList: [
        {name:'葱', price:.76,url:'https://baidu.com'},
        {name:'姜', price:.6, url:'https://taobao.com'},
        {name:'蒜', price:4.6,url:'https://jb.com'}
      ],
      url:'https://baicu.com',
      isActive: true,


      methods: {
        onClick: function() {
          console.log('clicked');
        },
        onEnter: function() {
          console.log('劲来了');
        },
        onLeave: function() {
          console.log('出来了');
        },
        onSubmit: function(e) {
          e.preventDefault();

        }
      }
    }
  }
}
</script>

<style scoped>
  .active {background-color: red;}
</style>