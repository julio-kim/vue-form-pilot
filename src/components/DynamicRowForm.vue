<template>
    <div>
        <h1>Dynamic Row Form</h1>
        <button @click="addRow">+</button>
        <button @click="getRowsStr">Print Rows</button>
        <hr/>
        <div v-for="(row, index) in rows" :key="index" class="row">
            <span>{{ index + 1 }}</span>
            <input type="text" v-model="row.field1"/>
            <input type="text" v-model="row.field2"/>
            <input type="text" v-model="row.field3"/>
        </div>
        <hr/>
        <textarea ref="result" class="result"></textarea>
    </div>
</template>

<script>
export default {
    data () {
        return {
            rows: []
        }
    },
    methods: {
        addRow () {
            this.rows.push({
                field1: '', field2: '', field3: '',
            })
        },
        getRowsStr () {
            this.$refs.result.value = JSON.stringify(this.rows, null, 4)
        }
    }
}
</script>

<style scoped>
input {
    margin-left: 10px;
}
.row {
    margin-bottom: 5px;
}
.result {
    width: 100%;
    height: 300px;
}
button {
    margin-right: 10px;
}
</style>
