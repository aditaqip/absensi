<template>
    <div v-touch:swipe.right="swiped_right" v-touch:swipe.left="swiped_left" class="relative overflow-hidden w-full mx-auto px-[6px] py-[7px] text-center text-white slideright">
        <div :class="(state == false) ? 'opacity-70' : 'opacity-100'" class=" delay-400 duration-200 relative z-10">
            SLIDE ME IN !!!
        </div>
        <div :class="(state == true) ?  'right-[0%]' : 'right-[100%]'" class="w-full duration-700 absolute h-[100%] top-0 bg-sldier"></div>
        <div :class="(state == true) ? 'left-[100%]' : 'left-0'" class="absolute duration-700 top-0" id="lefttoright">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1185_199)">
                <path d="M5.9 23.2V20H32L28.5 23H28.7C29.5 23 30.3 23.2 30.9 23.5L33.4 21.3L33.6 21.1C34.1 20.5 34.1 19.7 33.8 19C33.4 18.3 32.8 18 32 18H27.6L22.5 11H17C15.3 11 14 12.3 14 14H12V8.09998H6V14.2C4.8 14.6 4 15.7 4 17V24.3L4.1 24.2C4.6 23.7 5.2 23.4 5.9 23.2ZM8 9.99998H10V14H8V9.99998ZM6 17C6 16.4 6.4 16 7 16H16V14C16 13.4 16.4 13 17 13H22L22.6 14H18V16H23.8L25 18.1H6V17Z" fill="#F8F8F8"/>
                <path d="M22 24C20.61 24 19.22 23.53 18 22.67C15.56 24.38 12.44 24.38 10 22.67C8.78 23.53 7.39 24 6 24H4V26H6C7.37 26 8.74 25.65 10 25C12.5 26.3 15.5 26.3 18 25C19.26 25.65 20.62 26 22 26H24V24" fill="#F8F8F8"/>
                <path d="M40 24C38.61 24 37.22 23.53 36 22.67C33.56 24.38 30.44 24.38 28 22.67C26.78 23.53 25.39 24 24 24H22V26H24C25.37 26 26.74 25.65 28 25C30.5 26.3 33.5 26.3 36 25C37.26 25.65 38.62 26 40 26H42V24" fill="#F8F8F8"/>
                </g>
                <defs>
                <clipPath id="clip0_1185_199">
                <rect width="36" height="36" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </div>
    </div>
</template>

<script>
 

    export default {
        data() {
            return {
                state: false,
            };
        },
        name: 'LeftSliding',
        methods:{
            swiped_right () {
                this.state = true
                setTimeout(() => {
                    this.$router.push('/check-in')
                }, 1000)
            },
            swiped_left () {
                this.state = false
            }
        },
    }
</script>

<style scoped>
    .bg-slate-300-opactiies{
        background-color: rgba(100, 116, 139, .3) !important;
    }
    .slideright {
        background: linear-gradient(90deg, rgba(112, 176, 236, 0.60) 0%, rgba(112, 176, 236, 0.29) 12.71%);        
    }
    .bg-sldier{
        background-color: rgba(112, 176, 236);
    }
</style>