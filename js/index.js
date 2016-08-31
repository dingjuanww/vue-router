/**
 * Created by Administrator on 2016/8/11.
 */
import Vue from 'vue';
import Vue_Router from "vue-router";
import Vue_Resource from "vue-resource";
import app from '../vue/index.vue';

new Vue({
    el:'#index',
    data:{},
    methods:{}
});

var myApp = new Vue(app);
myApp.message = "我是VUE测试内容";
