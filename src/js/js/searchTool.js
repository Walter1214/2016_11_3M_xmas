export default {
    className: "SearchTool.vue", // 在 init.js 裡有設定 global
    data() {
        return {
            name: ''
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
        }
    },
    components: {

    }
}