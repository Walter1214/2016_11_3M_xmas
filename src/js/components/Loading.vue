<style scoped lang="scss">
    .loading_wrap {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.85);
        z-index: 9998;
    }
</style>

<template>

<transition name="fade" mode="out-in">
    <div class="loading_wrap" v-show="showLoading">
       Loading        
    </div>
</transition>

</template>

<script src="../js/loading.js">
</script>