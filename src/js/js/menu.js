    export default {
        className: "App.vue",
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            menu_close: function() {
                this.$emit("menu_close");
            },
            shareToFB: function() {
                FB.ui({
                    method: 'share',
                    href: 'http://adcount.medialand.com.tw/index.asp?TPC=3M_2016_Xmas&PTL=Share&BNR=Site&CONTENT=',
                    // href: 'http://' + location.host + '/',
                    mobile_iframe: true
                }, (response) => {
                    console.log(response);
                    // this.emit('FBShareOver', response);
                });
            }
        },
        components: {}
    }