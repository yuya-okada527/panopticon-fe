<template>
  <v-card class="mx-2 mt-4">
    <v-form class="px-1 pt-4">
      <v-textarea dense outlined height="50" class="mx-2" v-model="name" />
      <v-row class="mx-1 pb-2">
        <v-col align="center">
          <v-btn color="primary" class="px-8" @click="addTask">Add</v-btn>
        </v-col>
        <v-col align="center"><v-btn>Cancel</v-btn></v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  name: "TaskForm",
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  data: function() {
    return {
      name: "",
    };
  },
  methods: {
    addTask() {
      const data = JSON.stringify({ name: this.name, status: this.status });
      axios.post("http://localhost:8000/v1/tasks", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      this.name = "";
      this.$emit("addTask");
    },
  },
});
</script>
