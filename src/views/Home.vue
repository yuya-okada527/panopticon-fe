<template>
  <v-content>
    <v-container>
      <v-layout wrap>
        <v-flex md4 v-for="(tasks, status) in statuses" :key="status">
          <v-card color="#eeeeee" class="mx-4" height="600px">
            <v-card-title>{{ status }}</v-card-title>
            <v-card v-for="task in tasks" :key="task" class="mx-2 mt-1">
              <v-card-title>{{ task }}</v-card-title>
            </v-card>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  data: () => {
    return {
      statuses: {
        Todo: ["task1"],
        Doing: ["task2", "task2"],
        Done: ["task4"],
      },
    };
  },
});
</script>
