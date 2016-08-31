/*
* 导入组件
* */
import Vue from 'vue';
import Vue_Router from "vue-router";
import Vue_Resource from "vue-resource";
//引入独立出去的routers.js，这个文件主要设置路由的跳转
import routerMap from "./routers.js";
Vue.use(Vue_Router);
Vue.use(Vue_Resource);

var App = Vue.extend({});

//独立出路由配置
var router = new Vue_Router({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});
routerMap(router);

//启动路由
router.start(App,"#myApp");
