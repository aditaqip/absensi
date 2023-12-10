<template>
    <div :class={{Hidden ? hidden : ''}}>
        <div class="flex flex-wrap justify-start gap-3">
            <div class="w-full">
                <label :for={Name}>{title}</label>
            </div>
            <div class="w-full">
                <select :id={Name} :disabled={disabled}>
                    <option v-for="items in option" value="items.value">{items.title}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            Name: String,
            disabled: Boolean,
            Hidden: Boolean,
            value?: String,
            option: Array
        }
    }
</script>