<template>

    <div class="w-full">
        <div class="h-screen flex lg:mt-10">
            <div class="h-5/6 md:h-3/5 w-screen bg-slate-700 lg:divide-x divide-slate-600 text-white lg:rounded-[20px] lg:flex">
                <img 
                    src="../assets/img/header-bg.png" alt="" 
                    class="p-5 object-contain basis-0 hidden lg:inline-block header-img">
                <div class="info py-8">
                    <div class="info-header ">
                        <h1 class="text-2xl text-center font-bold italic">Best anime platform</h1>
                        <p class="text-sm md:text-md text-center mt-5 px-4">Where you can find discover new anime series and manga<br> and also track your favorite anime.</p>
                    </div>
                    <div class="info-content px-5 pt-5 lg:pt-8 grid grid-cols-1 gap-1 md:gap-5 justify-items-center md:grid-cols-2">
                        <div class="info-content-card flex py-2 transition rounded-[10px] hover:cursor-pointer hover:bg-slate-600" v-for="card in headersCardContent" :key="card.id">
                            <img :src="card.img" alt="" class="content-card-img mr-4 object-contain">
                            <div class="">
                                <h1 class="text-lg font-bold">{{ card.header }}</h1>
                                <p class="text-sm">{{ card.paragraph }}</p>
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
}

.header-img {
    height: 25rem;
    width: 25rem;
}

.content-card-img {
    height: 5rem;
    width: 4rem;
}

@media not all and (min-width: 640px) {

    .content-card-img {
        width: 2rem;
    }

}

</style>