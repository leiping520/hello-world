<template>
  <div>
    <h1>计算属性</h1>
    <table border="1">
      <thead>
        <th>学科</th>
        <th>分数</th>
      </thead>
      <tbody>
        <tr>
          <td>语文</td>
          <td><input type="text" v-model.number="language" /></td>
        </tr>
        <tr>
          <td>数学</td>
          <td><input type="text" v-model.number="math"/></td>
        </tr>
        <tr>
          <td>英语</td>
          <td><input type="text" v-model.number="english"/></td>
        </tr>
        <tr>
          <td>总分</td>
          <td>{{sum}}</td>
        </tr>
        <tr>
          <td>平均分</td>
          <td>{{average}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Computed",
  data() {
    return {
      language: 80,
      math: 90,
      english: 100
    }
  },
  computed: {
    sum: function () {
      return this.language + this.math + this.english;
    },
    average: function () {
      return Math.round(this.sum/3);
    }
  }
}
</script>

<style scoped>

</style>