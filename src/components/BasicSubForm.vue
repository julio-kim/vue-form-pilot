<template>
    <div>
        <h3>Sub Form</h3>
        <hr/>
        <div class="status">Status: {{ status }}</div>
        
        <div>
            <div class="row">
                <span>Field1:</span>
                <InputComponent :able-status="['create', 'delete']" :current-status="status" :value="formObj.field1" />
            </div>
            <div class="row">
                <span>Field2:</span>
                <InputComponent :able-status="['create','update']" :current-status="status" :value="formObj.field2" />
            </div>
            <div class="row">
                <span>Field3:</span>
                <InputComponent :able-status="['create','update']" :current-status="status" :value="formObj.field3" />
            </div>
            <div class="row">
                <span>Field4:</span>
                <InputComponent :able-status="['create','update']" :current-status="status" :value="formObj.field4" />
            </div>
            <div class="row">
                <span>Field5:</span>
                <InputComponent :able-status="['create']" :current-status="status" :value="formObj.field5" />
            </div>
        </div>
    </div>
</template>

<script>
import InputComponent from './InputComponent.vue'

export default {
    data () {
        return {
            status: '',
            formObj: {}
        }
    },
    watch: {
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },
    methods: {
        fetchData () {
            this.status = this.$route.params.status
            this.formObj = {
                field1: 'Field 1',
                field2: 'Field 2',
                field3: 'Field 3',
                field4: 'Field 4',
                field5: 'Field 5',
            }
        }
    },
    components: {
        InputComponent
    }

}
</script>

<style>
.status {
    margin-bottom: 10px;
}
.row {
    margin-bottom: 5px;
}
</style>
