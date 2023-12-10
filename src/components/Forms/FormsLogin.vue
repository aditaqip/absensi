<template>
    <div>
        <div class="flex flex-col justify-center items-center gap-3">
            <div>
                <div>
                    <label :for="email.name">{{email.title}}</label>
                </div>
                <div>
                    <input class="border-b rounded border-black px-3 focus:outline-none py-1" :type="email.type" :id="email.name + '-id'" :disabled="email.disabled" :value="email.value" @input="$emit('update:email.value', $event.target.value)">
                </div>
            </div>
            <div>
                <div>
                    <label :for="password.name">{{password.title}}</label>
                </div>
                <div>
                    <input class="border-b rounded border-black px-3 focus:outline-none py-1" :type="password.type" :id="password.name + '-id'" :disabled="password.disabled" :value="password.password" @input="$emit('update:password.value', $event.target.value)">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            emailtype:String,
            emailtitle:String,
            emailname:String,
            emaildisabled: Boolean,
            emailvalue:String,
            emailhidden: Boolean,
            
            passwordtype: String,
            passwordtitle:String,
            passwordname:String,
            passworddisabled: Boolean,
            passwordvalue:String,
            passwordhidden: Boolean
        },
        emits: ['update:email.value','update:password.value'],
        name: 'Input'
    }
</script>