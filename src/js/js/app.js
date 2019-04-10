 import {
     mapGetters,
     mapActions,
     mapState
 } from 'vuex';

 export default {
     className: "App.vue",
     data() {
         return {
             menu_ctrl: false,
             remind_ctrl: false
         }
     },
     mounted() {
         if (!device.desktop() && this.$route.path == '/') {

             this.remind_ctrl = true;
         }
     },
     computed: {
         receipt_ctr: function() {
             //手機版hidden window.screen.width
             if (!device.desktop()) {
                 return false;
             }
             switch (this.$route.path) {
                 case '/':
                     //  case '/index':
                 case '/diy':
                 case '/goods':
                     return true
             }
             return false;
         },
         rootStyle() {
             let appRoot = this.$store.state.appRoot;
             return {
                 //  background: 'red',
                 'min-height': appRoot
             };
         },
     },
     methods: {
         ...mapActions(["showLoading", "postAjax"]),
         menu_show: function() {
             this.menu_ctrl = true;
             // this.showLoading(true);
             // this.ajax('asset/test.json').then(res => {
             //     console.log('ajax', res);
             // });
         },
         menu_close: function() {
             this.menu_ctrl = false;
         },
         remind_close: function() {
             this.remind_ctrl = false;
         }
     },
     components: {
         'menu-component': require("Menu.vue"),
         //  'loading': require("Loading"),
         'remind-component': require('Remind.vue')
     }
 }