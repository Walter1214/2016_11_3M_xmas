const Anteater = require('../../lib/anteater.js');
var anteater = new Anteater();

import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    className: "Receipt.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            receipts: [{
                str: null,
                int: null
            }],
            name: null,
            phone: null,
            email: null,
            code: null,
            method: false,
            codeUrl: ' http://' + location.host + '/customapi/captcha?',
            RuleUrl: ' http://' + location.host + '/#/rule?isInvoice=true'
        }
    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        ...mapActions(["postAjax"]),

        addReceipts: function() {
            if (this.receipts.length < 5) {
                this.receipts.push({
                    str: null,
                    int: null
                });
            }
        },

        registerReceipt: function() {



            var arr = []
            for (var i = 0; i < this.receipts.length; i++) {
                // console.log(!(this.receipts[i].str && this.receipts[i].int));
                if (!(this.receipts[i].str && this.receipts[i].int)) {

                } else {
                    arr.push(this.receipts[i]);
                }
            }

            let err = '';

            if (!this.method) err += '請詳閱並同意活動辦法、注意事 項及個資保護聲明\r';
            if (err !== '') {
                alert(err);
                return false;
            }

            if (arr.length == 0) {
                err += '請輸入發票號碼\r';
                arr.push({
                    str: null,
                    int: null
                });
            }
            // console.log(arr);
            this.receipts = arr;

            if (!this.name) err += '請輸入名字\r';
            if (!this.phone) err += '請輸入電話\r';
            if (!this.email) err += '請輸入信箱\r';
            if (!this.code) err += '請輸入驗證碼\r';
            if (err !== '') {
                alert(err);
                return false;
            }

            for (var i = 0; i < this.receipts.length; i++) {

                if (!anteater.isEnglish(this.receipts[i].str)) {
                    alert('發票格式錯誤(英文)');
                    return;
                }

                if (!anteater.isNumber(this.receipts[i].int)) {
                    alert('發票格式錯誤(數字)');
                    return;
                }
            }


            if (!anteater.isEmail(this.email)) {
                alert('信箱格式錯誤');
                return false;
            }
            if (!anteater.isPhone(this.phone)) {
                alert('手機格式錯誤');
                return false;
            }



            var receiptsList = [];
            for (var i = 0; i < this.receipts.length; i++) {
                receiptsList.push(this.receipts[i].str + this.receipts[i].int);
            }
            var _object = {
                url: 'registerReceipt',
                data: {
                    receipts: receiptsList,
                    name: this.name,
                    phone: this.phone,
                    email: this.email,
                    captcha: this.code
                }
            }
            console.log(JSON.stringify(_object));

            this.postAjax(_object).then(res => {
                console.log('postAjax', res);
                if (res.success) {
                    alert('發票登入成功');
                    this.$router.push({
                        path: "/"
                    })
                } else {
                    alert('驗證碼輸入錯誤?');
                }

            })
            console.log(_object);
        }
    },
    mounted() {
        this.$store.commit('setRoot', '850px');
    },
    components: {

    }
}