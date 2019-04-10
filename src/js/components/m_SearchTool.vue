<style scoped lang='scss' src="../../css/m/search_tool.scss">

</style>

<template>
    <div id="m_search_tool" :class="{ON: isShow}">
        <div class="search_logo" :class="{ON: isShow}" @click="searchSwitch"></div>
        <input type="text" placeholder="找給勵作品，請輸入對方暱稱…" v-model="name" class="search_text">
        <a href="javascript:;" class="search_go" @click="search_go"></a>
    </div>
</template>

<script src="../js/m/searchTool.js">
</script>