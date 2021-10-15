<template>
  <v-content>
    <v-container>
      <v-layout wrap>
        <v-flex md4 v-for="status in statusList" :key="status">
          <v-card class="mx-4">
            <v-card-title>{{ status }}</v-card-title>
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
    return { statusList: ["Todo", "Doing", "Done"] };
  },
});
</script>
