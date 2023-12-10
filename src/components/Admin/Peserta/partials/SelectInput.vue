<template lang="">   
    <div class="flex flex-col gap-3 w-full relative col-span-2 md:col-span-1">
        <div>
            <label class="font-semibold" :for="name+'-id'">{{label}}<span class="text-red-700" :class="!required && 'hidden'">*</span></label>
        </div>
        <!-- <div class="w-full flex justify-between border-x-[.5px] border-y-[.5px] outline-0 px-[17px] py-[9px] rounded outline-white bg-transparent items-center border-black "> -->
            <!-- <select :name="name" :id="name + '-id'" :required="required" :disabled="disabled" :placeholder="'Masukkan ' + label" :value="modelValue"  @input="$emit('update:modelValue', $event.target.value)"  id="magang-id" class="select w-full cico-select rounded-xl border-none bg-transparent focus-visible:outline-none appearance-none" v-on:focusin="changeRotate(false)" v-on:focusout="changeRotate(true)">
                <option class="bg-white text-black"  value="">Pilih {{label}}</option>
                <option v-for="(item, index) in data" :key="index" :value="item.value" class="bg-white text-black" >{{item.label}}</option>
            </select > -->

            
            <!-- <svg xmlns="http://www.w3.org/2000/svg" class="duration-200" :class="(rotate) ? 'rotate-180' : 'rotate-0'" width="15" height="11" viewBox="0 0 11 7" fill="none">
                <path d="M1.75 1.625L5.5 5.375L9.25 1.625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div> -->
        <v-select  :name="name" :id="name + '-id'" :required="required" :disabled="disabled" :placeholder="'Masukkan ' + label" :value="modelValue"  @input="$emit('update:modelValue', $event.target.value)"  id="magang-id" class="select w-full cico-select rounded-xl"></v-select>

    </div>
</template>
<script>
import { ref } from 'vue';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';



let rotate = false

export default {
    data(){
        return {
            rotate
        }
    },
    props: {
        label: String,
        modelValue: String,
        required:Boolean,
        placeholder:String,
        name:String,
        disabled:Boolean,
        data: Array
    }   ,
    name:'selectCheck',
    methods: {
        changeRotate(data){
            if (data) this.rotate = false
            else this.rotate = true
        }
    },
    components: {
        vSelect
    }
}
</script>
<style>

.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: white;
  border: none;
  color: black;
  text-transform: lowercase;
  font-variant: small-caps;
}
    
</style>