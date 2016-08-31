export default function(router){
    router.map({
        '/foo': {
            component: require('./vue/foo.vue')
        },
        '/bar': {
            component: require('./vue/bar.vue')
        }
    });
}