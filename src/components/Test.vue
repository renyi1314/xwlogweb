<template>
  <div>
    <button @click="clickHandler">clickMe</button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import {getErrorLog} from "../api/getLog";

  Vue.use(VueAxios, axios)
  export default {
    name: "Test",
    methods: {
      clickHandler() {
        console.log(123)
        getErrorLog({"name": 123})
      }
    }
  }
</script>

<style scoped>

</style>
