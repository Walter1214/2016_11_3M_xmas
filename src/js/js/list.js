    export default {
        className: "List.vue", // 在 init.js 裡有設定 global
        data() {
            return {
                isList: true,
            }
        },
        methods: { // 所有的自定事件都要寫在 methods 裡
            changeRule: function() {
                this.isList = !this.isList;
            }
        },
        components: {

        }
    }