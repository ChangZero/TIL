<template>
  <div>
    <input type="text" v-model="userId" />
    <button @click="myFunction">click</button>
    <button @click="changeData">change</button>
    <br />

    <input type="text" v-model="num1" /> +
    <input type="text" v-model="num1" /> =
    <span>{{ num1 + num2 }}</span>
    <br />

    <input type="text" v-model.number="num3" /> +
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: '',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    myFunction() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = 'Jeremy'
    }
  }
}
</script>
