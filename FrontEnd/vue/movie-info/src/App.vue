<template>
  <h1>영화정보</h1>
  <div v-for="(movie, i) in data" :key="i">
    <h3 class =  "bg-yellow" :style="textRed">{{ movie.title }}</h3>
    <p>개봉: {{ movie.year }}</p>
    <p>장르: {{ movie.category }}</p>
    <p v-for="(item, i) in movie.foods" :key="i">{{ item }}</p>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      data: [
        {
        foods: ["김밥", "순대", "만두"],
        title: "노량",
        year: 2023,
        category: "액션, 드라마",
        textRed: "color: red",
        },
        {
        foods: ["김밥", "순대", "만두"],
        title: "아쿠아맨",
        year: 2023,
        category: "액션, 드라마",
        textRed: "color: red",
        }
      ]
    }
  }
}
</script>

<style>
  .bg-yellow{
    background: gold;
    padding: 10px;
  }
</style>
