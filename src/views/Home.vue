<template>
  <v-main>
    <v-container>
      <v-layout wrap>
        <v-flex md4 v-for="[status, tasks] in statuses" :key="status">
          <v-card color="#eeeeee" class="mx-4" height="600px">
            <v-card-title>{{ status }}</v-card-title>
            <v-card v-for="task in tasks" :key="task.id" class="mx-2 mt-1">
              <router-link
                :to="{ name: 'Task', params: { task_id: task.id } }"
                style="text-decoration: none"
              >
                <v-card-title>{{ task.name }}</v-card-title>
              </router-link>
            </v-card>
            <v-card class="mx-2 mt-4">
              <v-form class="px-1 pt-4">
                <v-textarea dense outlined height="50" class="mx-2" />
                <v-row class="mx-1 pb-2">
                  <v-col align="center">
                    <v-btn color="primary" class="px-8">Add</v-btn>
                  </v-col>
                  <v-col align="center"><v-btn>Cancel</v-btn></v-col>
                </v-row>
              </v-form>
            </v-card>
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

export default Vue.extend({
  name: "Home",
  data: () => {
    return {
      statuses: {},
    };
  },
  created: function() {
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
});
</script>
