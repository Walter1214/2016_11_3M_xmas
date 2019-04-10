export default {
    className: "m_SearchTool.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            name: '',
            isShow: false
        }
    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        search_go: function() {
            //this.$router.push('/xxxxx?');
            this.$router.push({
                path: "/search",
                query: {
                    name: this.name
                }
            });
        },
        searchSwitch: function() {
            if (this.isShow) {
                this.isShow = false;
            } else {
                this.isShow = true;
            }
        }
    },
    components: {

    }
}