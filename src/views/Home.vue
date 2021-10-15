<template>
  <v-content>
    <v-container>
      <v-layout wrap>
        <v-flex md4>
          <v-card class="mx-4">
            <v-card-title>Todo</v-card-title>
          </v-card>
        </v-flex>
        <v-flex md4>
          <v-card class="mx-4">
            <v-card-title>Doing</v-card-title>
          </v-card>
        </v-flex>
        <v-flex md4>
          <v-card class="mx-4">
            <v-card-title>Done</v-card-title>
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

  components: {},
});
</script>
