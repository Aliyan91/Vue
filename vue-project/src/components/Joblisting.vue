<script setup>
import jobData from "@/jobs.json";
import { ref,computed } from "vue";
import list from "./list.vue";
import { RouterLink } from "vue-router";

const jobs = ref(jobData);
console.log(jobs.value);
defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
});


</script>

<template>
  <section class="bg-blue-100 px-4 py-10">
    <div class="container-xl lg:container mx-auto">
      <h2 class="text-3xl font-bold text-green-500 text-center m-">
        Browse Jobs
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-5">
      <list v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
    </div>
  </section>

  <section v-if="showButton" class="m-auto max-w-lg my-10 px-6">
      <RouterLink
        to="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</RouterLink
      >
    </section>
</template>
