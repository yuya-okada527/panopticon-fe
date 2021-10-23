<template>
  <v-card class="mx-2 mt-1">
    <router-link
      :to="{ name: 'Task', params: { task_id: task.id } }"
      style="text-decoration: none"
    >
      <v-card-title>{{ task.name }}</v-card-title>
    </router-link>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "TaskCard",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
});
</script>
