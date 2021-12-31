<template>
  <div>
    <div class="header">
      <h2>Providers</h2>
    </div>
    <ul class="provider-cards">
      <li v-for="provider in state.taskProviders">
        <TaskProvider :provider="provider" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import ApiUrls from "~~/network/static/api-urls";

type State = {
  taskProviders: any;
};

export default defineComponent({
  async setup() {
    const route = useRoute();
    const { data: taskProviders } = await useFetch(
      ApiUrls.getTaskProvidersUrl(route.params.project_id)
    );

    const state: State = {
      taskProviders: taskProviders.value,
    };
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
}
.provider-cards {
  width: 640px;
}
</style>
