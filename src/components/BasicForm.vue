<template>
    <div>
        <h1>Basic Form</h1>
        <router-link to="/basic-form/sub/create">create</router-link>
        <router-link to="/basic-form/sub/update">update</router-link>
        <router-link to="/basic-form/sub/delete">delete</router-link>
        <router-link to="/basic-form/sub/read">read</router-link>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a {
    margin-right: 10px;
}
</style>
