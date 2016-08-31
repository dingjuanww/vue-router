/*
* 导入组件
* */
import Vue from 'vue';
import Vue_Router from "vue-router";
import Vue_Resource from "vue-resource";

Vue.use(Vue_Router);
Vue.use(Vue_Resource);

var Foo = Vue.extend({
    template:'<div>我是foo</div>'
});
var Bar = Vue.extend({
    template:'<div>我是bar</div>'
});

var App = Vue.extend({});


var router = new Vue_Router();
router.map({
    '/foo': {
        component: Foo
    },
    '/bar': {
        component: Bar
    }
});

//启动路由
router.start(App,"#myApp");
