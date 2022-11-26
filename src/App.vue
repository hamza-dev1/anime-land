<template>
    <header class="overflow-hidden">
        <NavBar />
    </header>
    <div class="wrapper mx-auto">
        <router-view />
    </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
    name: "App",
    components: {
        NavBar,
    },
};
</script>

<style></style>
