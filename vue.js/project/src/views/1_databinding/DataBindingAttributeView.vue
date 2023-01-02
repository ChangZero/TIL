<template>
  <div>
    <input type="text" v-bind:value="userId" randomly />
    <input type="text" :value="userId" randomly />
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'kim',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
