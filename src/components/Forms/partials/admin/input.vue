<template>
    <div :class="(hidden) ? 'hidden' : ''">
        <div class="flex flex-col justify-center items-center gap-3 text-center">
            <div>
                <label :for="name">{{title}}</label>
            </div>
            <div>
                <input class="border-b rounded border-black px-3 focus:outline-none py-1" :type="type" :id="name" :disabled="disabled" :value="modelValue"
                @input="onInput" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            name: String,
            type: String,
            disabled: Boolean,
            hidden: Boolean,
            placeholder: String,
            modelValue: String
        },
        emits:["update:modelValue"],
        methods:{
            onInput(e){
                this.$emit("update:modelValue",e.target.value)
            }
        },
        name: 'InputAdmin'
    }
</script>