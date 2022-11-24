<template>
    
    <nav class="flex justify-between px-20 py-4 items-center bg-gray-900">
        <div class="basis-1 flex flex-col items-center">
            <!--<img src="../assets/img/logo.png" alt="" class="logo">-->
            <h1 class="text-2xl text-white font-bold">AnimeLand</h1>
        </div>
        <div class="flex items-center">
            <ul class="flex items-center space-x-6">
                <li class="font-semibold text-gray-400">
                    <router-link to="/">Home</router-link>
                </li>
                <li class="font-semibold text-gray-400">
                    <router-link to="/about">About</router-link>
                </li>
                <li class="font-semibold text-gray-400">Github</li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style lang="postcss" scoped>
.logo {
    width: 6rem;
}
.router-link-active {
    @apply text-white
}
</style>
