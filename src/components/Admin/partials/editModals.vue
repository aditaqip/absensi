<template>
    <div v-for="items in data">
        <div v-if="items.type == 'text' || items.type == 'password'">
            <InputAdmin :title="items.title" :name="items.name" :type="items.type" :disabled="items.disabled" :hidden="items.hidden" :value="items.value"/>
        </div>
        <input type="hidden" name="ID" :value="id">
    </div>
    <div class="flex justify-center gap-3 mt-8">
        <button class="border rounded-lg px-2 py-1">Update</button>
        <button class="border rounded-lg px-2 py-1">Batal</button>
    </div>
</template>
<script>
import InputAdmin from './../../../components/Forms/partials/admin/input.vue'


export default {
name:'editModals',
components:{
    InputAdmin
},
props: {
    data: Array,
    id: Number,
},
}
</script>
<style lang="">

</style>