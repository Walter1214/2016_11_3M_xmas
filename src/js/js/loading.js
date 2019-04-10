    import { mapGetters, mapActions } from 'vuex';
    export default {
        className: "Loading.vue",
        computed: {
            ...mapGetters([
                'showLoading'
            ])
        },
    }