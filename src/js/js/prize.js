const Anteater = require('../../lib/anteater.js');
var anteater = new Anteater();

import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    className: "Prize.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            name: null,
            phone: null,
            email: null,
            code: null,
            method: false,
            codeUrl: ' http://' + location.host + '/customapi/captcha?',
            RuleUrl: ' http://' + location.host + '/#/rule'
        }
    },
    updated() {

    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        ...mapActions(["postAjax"]),
        sendPowerRegistration: function() {

            let err = '';

            if (!this.method) err += '請詳閱並同意活動辦法、注意事 項及個資保護聲明\r';
            if (err !== '') {
                alert(err);
                return false;
            }
            if (!this.name) err += '請輸入名字\r';
            if (!this.phone) err += '請輸入電話\r';
            if (!this.email) err += '請輸入信箱\r';
            if (!this.code) err += '請輸入驗證碼\r';
            if (err !== '') {
                alert(err);
                return false;
            }

            if (!anteater.isEmail(this.email)) {
                alert('信箱格式錯誤');
                return false;
            }
            if (!anteater.isPhone(this.phone)) {
                alert('手機格式錯誤');
                return false;
            }

            var _object = {
                    url: 'sendPowerRegistration',
                    data: {
                        id: this.$route.query.id,
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                        captcha: this.code
                    }
                }
                // console.log(JSON.stringify(_object));

            this.postAjax(_object).then(res => {
                console.log('postAjax', res);
                if (res.success) {
                    this.$router.push({
                        path: "/message/okok"
                    })
                } else {
                    alert('驗證碼輸入錯誤?');
                }

            });
        }
    },
    components: {

    },
    mounted() {},
}