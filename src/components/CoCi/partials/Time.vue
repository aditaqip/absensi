<template>
    <div class="flex">
      <div>
        <!-- <p class="font-bold text-white text-lg">{{ currentTime.toLocaleString() }}</p> -->
    <p class="font-semibold text-white pt-3 text-6xl">{{ splitedList(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true, hourCycle: "h12" }))[0] }} 
      <span class="text-sm align-middle">
          {{ splitedList(currentTime.toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: true }))[1] }}
      </span>
    </p>
      </div>
    </div>
  </template>
  <script>
  import { useCurrentTime } from "./currentTime.js";
  export default {
    name: "CurrentTimeExample",
    setup() {
      const { currentTime } = useCurrentTime();
      return { currentTime };
    },
    methods:{
        splitedList(data){
            return data.split(' ')
        }
    }
  };
  </script>