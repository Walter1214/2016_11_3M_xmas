require('file?name=asset/js/[name].[ext]!../../fla/3M_title_2_Canvas.js');

import TitleCanvas from './TitleCanvas.js';
export default {
    className: "Success.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            msg: 'Success!',
            titleCanvas: null
        }
    },
    methods: { // 所有的自定事件都要寫在 methods 裡

    },
    mounted() {

        // this.$store.commit('setRoot', '1000px');
        console.log(this.$route.query.seqId);
        $.ajax({
            url: "https://graph.facebook.com/",
            method: "POST",
            data: { id: encodeURIComponent('http://' + location.host + '/share?id=' + this.$route.query.seqId), scrape: true },
            success: function(res) {
                // state.showLoading = false;
                console.log(res);
            },
            fail: function(err) {
                // state.showLoading = false;
                console.log(err);
            }
        })

        this.titleCanvas = new TitleCanvas((e) => {
            return this.$router.push({
                path: "/message/result",
                query: {
                    id: this.$route.query.id,
                    seqId: this.$route.query.seqId,
                    imgUrl: this.$route.query.imgUrl
                }
            });
        });
    },
    destroyed() {
        this.titleCanvas.destroy();
        this.titleCanvas = null;
    },
    components: {

    }
}