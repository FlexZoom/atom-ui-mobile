window.log = console.log;
window.dir = console.dir;
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';
import router from '@/router';
// import * as types from '@/store/mutation-types';
// API
// import api from '@/api';
// Object.defineProperty(Vue.prototype, '$api', {
//     value: api,
//     writable: false,
//     enumerable: false,
//     configurable: false
// });
// var FastClick = require('fastclick');
// FastClick.attach(document.body, {});
// Object.defineProperty(Vue.prototype, '$lang', {
//     value: lang, // lang存在lang.js文件中
//     writable: false,
//     enumerable: false,
//     configurable: false
// });

//全局样式
import './scss/global.scss';
// UI
import Atom from '@/packages/index.js';
Vue.use(Atom);
// 移动组件指令
import DomPortal from 'vue-dom-portal';
Vue.use(DomPortal);
// import '@/directives/ripple/ripple.scss';
// import ripple from '@/directives/ripple/index.js';
// Vue.directive('ripple', ripple);
// require('vue-touch-ripple/component.css')
// import VueTouchRipple from 'vue-touch-ripple'
// Vue.use(VueTouchRipple)

// 关闭错误提示
Vue.config.silent = false;
// 生产环境提示
Vue.config.productionTip = false;
// 设置为 true 以在浏览器开发工具中启用对组件初始化、编译、渲染和打补丁的性能追踪。只适用于开发模式和支持 performance.mark API 的浏览器上。
Vue.config.performance = true;

/* eslint-disable no-new */
var vm = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});

router.beforeEach(function(to, from, next) {
    next();
});

// 路由切换后触发
router.afterEach(function(to) {
    document.title = to.name;
});

// 测试

// function extend1(parent, sub) {
//   sub.prototype = new parent();
// }

// function P() {
//     this.a = [1, 2, 3];
// }

// function S() {

//   this.setA = function() {
//     this.a.push(54);
//   };
// }

// function inheritObject(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// function extend(parent, sub) {
//   var p = inheritObject(parent.prototype);
//   p.constructor = sub;
//   sub.prototype = p;
// }

// extend(P, S);

// var s = new S();
// var s1 = new S();
// // var p = new P();
// // // s.setA();
// s.a.push(100);
// log(s.a);

// log(s1.a);
// // log(p.a)