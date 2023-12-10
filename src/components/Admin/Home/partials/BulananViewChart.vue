<template lang="">
    <div class="h-fit w-[80vw] mx-auto mt-5 md:mt-10">
        <Bar
            id="my-chart-id"
            :options="chartOptions"
            :data="chartData"
        />
    </div>
</template>
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
    components:{
        Bar
    },
    name: 'BulananViewChart',
    data(){
        return {
            chartData: {
                labels: [ 'January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'Desember'],
                datasets: [
                    {
                        label: 'Magang Darat',
                        data: [65,65,65,65,65,65,65,65,65,65,100,100],
                        backgroundColor: '#0086C2',
                    },
                    {
                        label: 'Magang Laut',
                        data: [65,65,65,65,65,65,65,65,65,65,100,100],
                        backgroundColor: '#20B996',
                    },
                ]
            },
            chartOptions: {
                responsive: true
            },
            chartOptions: {
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }   
            }
        }
    }
}
</script>
<style lang="">
    
</style>