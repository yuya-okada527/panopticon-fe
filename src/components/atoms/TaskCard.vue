<template>
  <v-card class="mx-2 mt-1">
    <router-link
      :to="{ name: 'Task', params: { task_id: task.id } }"
      style="text-decoration: none"
    >
      <v-layout>
        <v-flex md8>
          <v-card-title data-test-id="task-card-title">{{
            task.name
          }}</v-card-title>
        </v-flex>
        <v-flex align-self-center>
          <v-btn color="error" @click.prevent="handleDelete">Delete</v-btn>
        </v-flex>
      </v-layout>
    </router-link>
  </v-card>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  name: "TaskCard",
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleDelete() {
      axios.delete(`http://localhost:8000/v1/tasks/${this.task.id}`);
      this.$emit("deleteTask");
    },
  },
});
</script>
