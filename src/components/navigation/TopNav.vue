<script setup lang="ts"></script>

<template>
  <nav class="flex flex-row space-x-12 items-center px-12 py-6 bg-bgprimary-100">
    <!-- Logo/Dashboard link -->
    <div class="flex flex-row">
      <RouterLink class="text-3xl text-center text-black" to="dashboard"
        >Spaced Learning</RouterLink
      >
    </div>
    <!-- Main link panel -->
    <div class="flex flex-row space-x-8 items-baseline text-gray-700 text-center text-xl">
      <RouterLink to="dashboard">Dashboard</RouterLink>
      <RouterLink to="review">Review</RouterLink>
      <RouterLink to="subjects">Subjects</RouterLink>
    </div>
    <!-- Account/settings -->
    <div></div>
  </nav>
</template>

<style scoped></style>
