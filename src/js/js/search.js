import {
    mapGetters,
    mapActions
} from 'vuex';

export default {
    className: "Search.vue", // 在 init.js 裡有設定 global
    mounted() {
        if (this.$route.query.name) {
            this.searchPowerList(this.$route.query.name);
        } else {

        }
    },
    data() {
        return {
            list: []
        }
    },
    updated() {},
    watch: {
        $route: function(data) {
            // console.log(data.query.name);
            this.searchPowerList(data.query.name);
        }
    },
    methods: { // 所有的自定事件都要寫在 methods 裡
        ...mapActions(["postAjax"]),
        searchPowerList: function(name) {
            var _object = {
                url: 'searchpowerList',
                data: {
                    keyword: name
                }
            }
            this.postAjax(_object).then((res) => {
                console.log('postAjax', res);
                this.list = res.list;
            });
        }
    },
    components: {
        'search-tool-component': require('SearchTool.vue'),
        'm-search-tool-component': require('m_SearchTool.vue')
    }
}