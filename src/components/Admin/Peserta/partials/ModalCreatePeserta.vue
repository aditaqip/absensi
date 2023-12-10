<template>
        <div v-for="items in data">
            <div v-if="items.type == 'text' || items.type == 'password'">
                <InputAdmin :title="items.title" :name="items.name" :type="items.type" :disabled="items.disabled" :hidden="items.hidden" v-model="items.models"/>
            </div>
        </div>
        <div class="flex justify-center gap-3 mt-8">
            <button class="border rounded-lg px-2 py-1" @click="created">Tambah</button>
            <button class="border rounded-lg px-2 py-1">Batal</button>
        </div>
</template>
<script>
import InputAdmin from './../../../components/Forms/partials/admin/input.vue'
export default {
    name:'ModalCreatePeserta',
    components:{
        InputAdmin
    },
    props: {
        data: Array
    },
}
</script>
<style lang="">
    
</style>