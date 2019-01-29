<template>
    <span>
        <input v-if="isEditable" type="text" v-model="value" />
        <span v-else>{{ value }}</span>
    </span>
</template>

<script>
export default {
    name: 'InputComponent',
    props: ['ableStatus', 'currentStatus', 'value'],
    computed: {
        isEditable () {
            return this.ableStatus.indexOf(this.currentStatus) >= 0
        }
    }
}
</script>

<style>

</style>
