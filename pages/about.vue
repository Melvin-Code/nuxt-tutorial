<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sed
      unde aliquam mollitia suscipit amet nam voluptate, officia debitis, nulla
      placeat quis quaerat repellat cumque quo velit. Eum, asperiores doloribus!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur sed
      unde aliquam mollitia suscipit amet nam voluptate, officia debitis, nulla
      placeat quis quaerat repellat cumque quo velit. Eum, asperiores doloribus!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped></style>
