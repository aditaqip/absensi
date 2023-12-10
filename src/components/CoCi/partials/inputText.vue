<template>
    <div class="flex text-white flex-col gap-[10px] w-full w-max-3/5">
        <div>
            <label :for="name+'-id'">{{label}}<span class="text-red-700" :class="!required && 'hidden'">*</span></label>
        </div>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :name="name" :id="name + '-id'" :required="required" :disabled="disabled" :placeholder="'Masukkan ' + label" class="border-x-[.5px] border-y-[.5px] outline-0 px-[17px] py-[9px] rounded-xl outline-white bg-transparent">
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        modelValue: String,
        required:Boolean,
        placeholder:String,
        name:String,
        disabled:Boolean
    }   ,
    name:'inputText'
}
</script>
<style lang="">
    
</style>