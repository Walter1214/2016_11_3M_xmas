    export default {
        className: "Remind.vue",
        data() {
            return {};
        },
        computed: {

        },
        methods: {
            remind_close: function() {
                this.$emit("remind_close");
            }
        },
        components: {}
    }