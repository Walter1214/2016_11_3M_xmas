export default {
    className: "Result.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            imgUrl: null,
            seqId: null,
            id: null,
            redirectURI: null
        }
    },
    mounted() {
        var webShare = getQueryString('webShare');
        console.log(webShare);
        if (!getQueryString('webShare')) {
            //沒有webShare
            this.id = this.$route.query.id;
            this.seqId = this.$route.query.seqId;
            this.imgUrl = this.$route.query.imgUrl;
        } else {
            //有webShare
            var arr = webShare.split('OOOOO');
            var str = arr[2];
            // http%3A%2F%2F3m-xmas2016.azurewebsites.net%2FUpload%2FPower%2F35c2a2a7-4973-4c53-ac0f-a95122a323cc.png);
            str = str.replace('%3A', ':').replace(/%2F/g, '/');

            this.id = arr[0];
            this.seqId = arr[1];
            this.imgUrl = str;
        }
        this.redirectURI = 'http://' + window.location.host + '/#' + this.$route.path + '?webShare=' + this.id + 'OOOOO' + this.seqId + 'OOOOO' + this.imgUrl;
        // console.log(this.redirectURI);
        // console.log(getQueryString('result'));
        // this.imgUrl = this.$route.query.imgUrl;
        // console.log(this.imgUrl);
    },
    computed: {
        imgStyle() {
            return {
                'background-image': 'url("' + this.imgUrl + '")'
            };
        }
    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        goPrize: function() {
            this.$router.push({
                path: "/message/prize",
                query: {
                    id: this.id
                }
            });
        },
        fbShare: function() {
            console.log('http://' + location.host + '/share?id=' + this.seqId);
            // FB.ui({
            //     method: 'share',
            //     href: 'http://' + location.host + '/share?id=' + this.seqId,
            //     mobile_iframe: true
            // }, (response) => {
            //     console.log(response);
            //     // this.emit('FBShareOver', response);
            // });
            FB.ui({
                method: 'feed',
                link: 'http://' + location.host + '/share?id=' + this.seqId,
                caption: '::聖誕超給勵::一起來為考生打打氣',
                redirect_uri: this.redirectURI
            }, (response) => {
                console.log(response);
                // this.emit('FBShareOver', response);
            });
        },
        lineShare: function() {

            window.open('http://line.me/R/msg/text/?' + encodeURIComponent('http://' + location.host + '/share?id=' + this.seqId), "_blank", "toolbar=yes,location=yes,directories=no,status=no, menubar=yes,scrollbars=yes,resizable=no, copyhistory=yes,width=600,height=400")

        }
    },
    components: {

    }
}