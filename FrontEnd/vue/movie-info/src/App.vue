<template>
  <h1>영화정보</h1>
  <div v-for="(movie, i) in data" :key="i">
    <h3 class =  "bg-yellow" :style="textRed">{{ movie.title }}</h3>
    <p>개봉: {{ movie.year }}</p>
    <p>장르: {{ movie.category }}</p>
    <p v-for="(item, i) in movie.foods" :key="i">{{ item }}</p>
    <button @:click="increseLike(i)">좋아요</button><span>{{ movie.like }}</span>
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
        like: 0,
        },
        {
        foods: ["김밥", "순대", "만두"],
        title: "아쿠아맨",
        year: 2023,
        category: "액션, 드라마",
        textRed: "color: red",
        like: 0,
        }
      ]
    }
  },
  methods: {
    increseLike(i){
      this.data[i].like += 1; //객체 내부에서 사용하는 변수는 앞에  this사용
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
