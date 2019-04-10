<style scoped lang='scss' src="../../css/search_tool.scss">

</style>

<template>
    <div class="search_tool">
        <div class="search_logo"></div>
        <input type="text" placeholder="找給勵作品，請輸入對方暱稱…" v-model="name" class="search_text">
        <a href="javascript:;" class="search_go" @click="search_go"></a>
    </div>
</template>

<script src="../js/searchTool.js">
</script>