import Vue from 'vue';
import { init } from './util/init';
import store from './vuex/store';
var VueRouter = require("vue-router");
// const Common = require('../lib/common.js');
// var common = new Common();
init();

require('!!file?name=[name].html!../html/receip.html');
require('!!file?name=[name].html!../html/share.html');
require('!!file?name=asset/[path][name].[ext]!../img/w/index_btn.png');
require('../lib/device.min');
require('../lib/common.js');
require("index.jade");
require("main.scss");
require('../lib/ga.js');
require('../lib/youtube.vue.js');


console.log(Check_Version());
// if (Check_Version() < 12 && Check_Version() > 0) {
//     console.log('html2canvas050');
//     require('../lib/html2canvas050.js');

// } else {
// require('../lib/html2canvas050.js');
// }
require("test.json");
require('../img/FB_PNG.png');
require('!!file?name=asset/[path][name].[ext]!../img/favicon.ico');

console.log('--------------------');
console.log('__DEV__', __DEV__);
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
console.log('--------------------');


// var route = [];
// if (device.desktop()) {
//     //桌機版
//     route = [
//         { path: '/', component: require("Index.vue") },
//         { path: '*', component: require("Index.vue") }
//     ];
// } else {
//     //手機版
//     route = [
//         { path: '/', component: require("m_Index.vue") },
//         { path: '*', component: require("m_Index.vue") }
//     ];
// }
// .concat(route)
const router = new VueRouter({
    routes: [
        { path: '/', component: require("Index.vue") },
        { path: '/message', component: require("Message.vue") },
        { path: '/message/result', component: require("Result.vue") },
        { path: '/message/prize', component: require("Prize.vue") },
        { path: '/message/okok', component: require("OKOK.vue") },
        { path: '/search', component: require("Search.vue") },
        { path: '/success', component: require("Success.vue") },
        { path: '/you', component: require("youtube.vue") },
        { path: '/diy', component: require("Diy.vue") },
        { path: '/goods', component: require("Goods.vue") },
        { path: '/rule', component: require("Rule.vue") },
        { path: '/list', component: require("List.vue") },
        { path: '/receipt', component: require("Receipt.vue") },
        { path: '*', component: require("Index.vue") }
    ]
});

router.afterEach(route => {
    window.scrollTo(0, 0);
    if (device.desktop()) {
        //桌機版
        ga('send', 'pageview', route.path + '.html');
        // console.log(route.path);
    } else {
        //手機版
        ga('send', 'pageview', 'm' + route.path + '.html');
    }

});

// var App = require( 'HelloWorld' );
new Vue({
    className: "main.js",
    el: '#app', // 會把 #app 下的 app 元素整個換成 HelloWorld 裡的元素
    components: { 'app': require('App') },
    store,
    router
});