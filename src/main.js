//导入实例化Vue根实例
import Vue from "vue";
import App from './App.vue'

new Vue({
    el: '#app',
    components: {
        App
    },
    template: '<App/>'
})

//挂载App组件/*  */
// consol.log('sada') //报错

const arr = [1, 2, 3].map(e => e + 1);
console.log(arr)