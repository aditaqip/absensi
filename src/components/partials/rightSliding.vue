<template>
    <div v-touch:swipe.right="swiped_rightsliding" v-touch:swipe.left="swiped_leftsliding" class="relative overflow-hidden w-full mx-auto bg-slate-300-opactiies px-[6px] py-[7px] text-center text-white bg-right-left">
        <div :class="(stateslide == false) ? 'opacity-70' : 'opacity-100'" class=" delay-400 duration-200 relative z-10">
            SLIDE ME OUT !!!
        </div>
        <div :class="(stateslide == true) ?  'left-[0%]' : 'left-[100%]'" class="w-full duration-700 absolute h-[100%] top-0 bg-orange-slider"></div>
        <div :class="(stateslide == true) ? 'right-[100%]' : 'right-[0%]'" class="absolute duration-700 top-0">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1197_126)">
                <path d="M30.1 23.2V20H4L7.5 23H7.3C6.5 23 5.7 23.2 5.1 23.5L2.6 21.3L2.4 21.1C1.9 20.5 1.9 19.7 2.2 19C2.6 18.3 3.2 18 4 18H8.4L13.5 11H19C20.7 11 22 12.3 22 14H24V8.09998H30V14.2C31.2 14.6 32 15.7 32 17V24.3L31.9 24.2C31.4 23.7 30.8 23.4 30.1 23.2ZM28 9.99998H26V14H28V9.99998ZM30 17C30 16.4 29.6 16 29 16H20V14C20 13.4 19.6 13 19 13H14L13.4 14H18V16H12.2L11 18.1H30V17Z" fill="#F8F8F8"/>
                <path d="M14 24C15.39 24 16.78 23.53 18 22.67C20.44 24.38 23.56 24.38 26 22.67C27.22 23.53 28.61 24 30 24H32V26H30C28.63 26 27.26 25.65 26 25C23.5 26.3 20.5 26.3 18 25C16.74 25.65 15.38 26 14 26H12V24" fill="#F8F8F8"/>
                <path d="M-4 24C-2.61 24 -1.22 23.53 0 22.67C2.44 24.38 5.56 24.38 8 22.67C9.22 23.53 10.61 24 12 24H14V26H12C10.63 26 9.26 25.65 8 25C5.5 26.3 2.5 26.3 0 25C-1.26 25.65 -2.62 26 -4 26H-6V24" fill="#F8F8F8"/>
                </g>
                <defs>
                <clipPath id="clip0_1197_126">
                <rect width="36" height="36" fill="white" transform="matrix(-1 0 0 1 36 0)"/>
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
                stateslide: false,
            };
        },
        name: 'LeftSliding',
        methods:{
            swiped_rightsliding () {
                this.stateslide = false
            },
            swiped_leftsliding () {
                this.stateslide = true
                setTimeout(() => {
                    this.$router.push('/check-out')
                }, 1000)
            }
        }
    }
</script>

<style scoped>
    .bg-right-left{
        background: linear-gradient(270deg, rgba(255, 103, 1, 0.60) 0%, rgba(255, 103, 1, 0.29) 12.71%);
    }
    .bg-orange-slider{
        background-color: rgba(255, 103, 1);
    }
</style>