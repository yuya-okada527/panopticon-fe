<template>
  <v-card class="mx-2 mt-4">
    <v-form class="px-1 pt-4">
      <v-textarea dense outlined height="50" class="mx-2" v-model="name" />
      <v-row class="mx-1 pb-2">
        <v-col align="center">
          <v-btn
            color="primary"
            class="px-8"
            @click="addTask"
            data-test-id="task-form-add-button"
          >
            Add
          </v-btn>
        </v-col>
        <v-col align="center">
          <v-btn @click="cancel" data-test-id="task-form-cancel-button">
            Cancel
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";

const callCreateTask = (data: { name: string; status: string }) => {
  axios.post("http://localhost:8000/v1/tasks", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export default Vue.extend({
  name: "TaskForm",
  props: {
    status: {
      type: String,
      required: true,
    },
    createTaskFunc: {
      type: Function,
      required: false,
      default: callCreateTask,
    },
  },
  data: function() {
    return {
      name: "",
    };
  },
  methods: {
    addTask() {
      if (!this.name) {
        return;
      }
      const data = JSON.stringify({ name: this.name, status: this.status });
      this.createTaskFunc?.(data);
      this.name = "";
      this.$emit("addTask");
    },
    cancel() {
      this.name = "";
    },
  },
});
</script>
