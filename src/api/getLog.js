import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import index from "../../config";

Vue.use(VueAxios, axios)


export const getErrorLog = params => {
  console.log(params)
  let url = index.dev.proxyApiPath + "/api/v1/error_log/"
  Vue.axios.get(url).then((response) => {
    console.log(response.data)
  })
};
