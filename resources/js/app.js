require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/page1/Layout.vue'));


import SuiVue from 'semantic-ui-vue';
Vue.use(SuiVue);
import 'semantic-ui-css/semantic.min.css';



import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = new Vue({
    el: '#app'
});
