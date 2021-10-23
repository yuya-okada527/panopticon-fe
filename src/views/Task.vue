<template>
  <div>
    <h1>This is task id {{ task_id }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["task_id"],
});
</script>
