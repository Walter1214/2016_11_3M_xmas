// const Common = require('../../lib/common.js');
// var common = new Common();
require('!!file?name=asset/js/[name].[ext]!../../lib/html2canvas.js');
require('!!file?name=asset/js/[name].[ext]!../../lib/html2canvas050.js');

import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    className: "Index.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            giftcardType: 1,
            subject: null,
            name: null,
            comment: null,
            giftcardColor: 'green',
            img: null
        }
    },
    mounted() {

        // this.$store.commit('setRoot', '850px');
    },
    computed: {
        pdClass() {
            return 'pad_' + this.giftcardType + '_' + this.giftcardColor;
        },
        bigPdClass() {
            return 'big_pad_' + this.giftcardType + '_' + this.giftcardColor;
        }
    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        ...mapActions(["postAjax"]),

        sendPower: function() {
            //判斷是否有輸入
            let err = '';

            if (!this.subject) err += '請輸入給勵主旨\r';
            if (!this.name) err += '請輸入名字\r';
            if (!this.comment) err += '請輸入內容\r';
            if (err !== '') {
                alert(err);
                return false;
            }

            window.fbq('track', 'Purchase', { value: '0.00', currency: 'USD' });
            // console.log(navigator.userAgent);
            if (Check_Version() < 12 && Check_Version() > 0) {
                html2canvas(document.getElementById('big_pad'), { height: 630, width: 630 }).then((canvas) => {
                    // document.body.appendChild(canvas);
                    this.img = canvas.toDataURL("image/png").replace("data:image/png;base64,", "");
                    var _object = {
                        url: 'sendPower',
                        data: {
                            giftcardType: this.giftcardType,
                            subject: this.subject,
                            name: this.name,
                            comment: this.comment,
                            giftcardColor: this.giftcardColor,
                            img: this.img
                        }
                    };
                    this.postAjax(_object).then(res => {
                        console.log('postAjax', res);
                        this.$router.push({
                            path: "/success",
                            query: {
                                id: res.id,
                                seqId: res.seqId,
                                imgUrl: res.img
                            }
                        })
                    });
                });
            } else {
                // html to canvas to base64 send API
                html2canvas(document.getElementById('big_pad'), {
                    letterRendering: true,
                    height: 630,
                    width: 630,
                    onrendered: (canvas) => {
                        // document.body.appendChild(canvas);
                        this.img = canvas.toDataURL("image/png").replace("data:image/png;base64,", "");
                        // console.log(this.img);
                        // document.body.appendChild(canvas);
                        // canvas is the final rendered <canvas> element
                        var _object = {
                            url: 'sendPower',
                            data: {
                                giftcardType: this.giftcardType,
                                subject: this.subject,
                                name: this.name,
                                comment: this.comment,
                                giftcardColor: this.giftcardColor,
                                img: this.img
                            }
                        };
                        this.postAjax(_object).then(res => {
                            console.log('postAjax', res);
                            this.$router.push({
                                path: "/success",
                                query: {
                                    id: res.id,
                                    seqId: res.seqId,
                                    imgUrl: res.img
                                }
                            })
                        });
                    }
                });
            }
        },

        changeChannel: function(Ch_int) {
            this.giftcardType = Ch_int;
        },

        changeColor: function(str) {
            this.giftcardColor = str;
        }
    },
    components: {

    }
}