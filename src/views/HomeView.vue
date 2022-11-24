<template>

    <div class="w-full mx-auto">
        <div class="h-screen flex items-center">
            <div class="h-screen lg:h-4/6 w-screen bg-slate-700 lg:rounded-[20px] text-white lg:flex">
                <img 
                    src="../assets/img/header-bg.png" alt="" 
                    class="p-5 object-contain basis-0 hidden lg:inline-block header-img">
                <div class="info py-8">
                    <div class="info-header">
                        <h1 class="text-2xl text-center italic card-heading">Best anime platform</h1>
                        <p class="text-center font-bold mt-8">Where you can find discover new anime series and manga<br> and also track your favorite anime.</p>
                    </div>
                    <div class="info-content">
                        <div class="info-content-card flex" v-for="card in headersCardContent" :key="card.id">
                            <img :src="card.img" alt="" class="content-card-img object-contain">
                            <div class="">
                                <h1 class="text-2xl">{{ card.header }}</h1>
                                <p>{{ card.paragraph }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import NavBar from '@/components/NavBar'
import axiosClient from '@/utils/axiosClient'
import { CardsService } from '@/services/CardsService'
import { onMounted } from '@vue/runtime-core'

export default {
    name: 'Home',
    components: {  
        NavBar,
    },
    setup() {
        const headersCardContent = [
            ...CardsService.getAllCards()
        ]

        return {
            headersCardContent
        }
    }
}
</script>

<style lang="postcss" scoped>

.card-heading {
    font-size: 3rem
}

.header-img {
    /*height: 5rem;
    width: 5rem;*/
}

.content-card-img {
    height: 5rem;
    width: 5rem;
}

</style>