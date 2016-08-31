
###　index.html是为了测试webpack编译是否成功。

　　一定要注意js中引入vue组件的路径，是相对自身来import vue。


###  app_old.js是路由的旧版，将模板、路由配置都放在了一起。

     app.js就将模板(foo.vue、bar.vue)和路由配置（routers.js）分开了。一定要注意模板(foo.vue、bar.vue)和路由配置（routers.js）与app.js的关联。

     关联主要是通过routerMap(router)来关联，routerMap实际是引入的js文件：routers.js。然后定义router，router是实例化的Vue_Router({})，最后是启动路由，通过router.start()来实例化根组件，所以就不需要new Vue({});
