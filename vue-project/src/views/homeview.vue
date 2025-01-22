<script setup>
import Hero from "@/components/Hero.vue";
import HomeCard from "@/components/HomeCard.vue";
import Joblisting from "@/components/Joblisting.vue";
</script>

<template>
    <Hero/>
    <HomeCard/>
    <Joblisting :limit="3" :showButton="true"/>
</template>
