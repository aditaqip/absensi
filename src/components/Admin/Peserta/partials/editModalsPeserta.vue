<template>
    <div>
        <InputAdmin title="Npm" name="npm" type="text" disabled="false" hidden="false" v-model="npm"/>
        <InputAdmin title="nama" name="name" type="text" disabled="false" hidden="false" v-model="nama"/>
        <input type="hidden" name="ID" :value="id">
    </div>
    <div class="flex justify-center gap-3 mt-8">
        <button class="border rounded-lg px-2 py-1">Update</button>
        <button class="border rounded-lg px-2 py-1">Batal</button>
    </div>
</template>
<script>
import InputAdmin from './../../../Forms/partials/admin/input.vue'


export default {
name:'editModalsPeserta',
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