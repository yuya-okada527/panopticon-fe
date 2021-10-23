<template>
  <v-main>
    <v-container>
      <v-layout wrap>
        <v-flex md4 v-for="[status, tasks] in statuses" :key="status">
          <v-card color="#eeeeee" class="mx-4" height="600px">
            <v-card-title>{{ status }}</v-card-title>
            <task-card
              v-for="task in tasks"
              :task="task"
              :key="task.id"
              @deleteTask="deleteTask"
            />
            <task-form :status="status" @addTask="handleAddEvent" />
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { SearchTasksResponse, Status, Task } from "@/types/task";
import TaskForm from "@/components/molecules/TaskForm.vue";
import TaskCard from "@/components/atoms/TaskCard.vue";

export default Vue.extend({
  components: { TaskForm, TaskCard },
  name: "Home",
  data: () => {
    return {
      statuses: {},
    };
  },
  methods: {
    handleAddEvent() {
      this.refreshTasks();
    },
    deleteTask() {
      this.refreshTasks();
    },
    refreshTasks() {
      axios("http://localhost:8000/v1/tasks").then((res) => {
        const statuses = new Map<Status, Task[]>();
        (res.data as SearchTasksResponse).results.forEach((task: Task) => {
          const tasks = statuses.get(task.status);
          if (tasks) {
            tasks.push(task);
            statuses.set(task.status, tasks);
          } else {
            statuses.set(task.status, [task]);
          }
        });
        this.statuses = statuses;
      });
    },
  },
  created: function() {
    this.refreshTasks();
  },
});
</script>
