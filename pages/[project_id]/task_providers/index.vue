<template>
  <div>
    <div>
      <h2>Providers</h2>
    </div>
    <ul class="provider-cards">
      <li v-for="provider in state.taskProviders">
        <div class="provider-card">
          <div>
            {{ provider.name }}
          </div>
          <div>URL: {{ provider.provider_url }}</div>
        </div>
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
.provider-cards {
  width: 640px;
}
.provider-card {
  display: block;
  padding: 12px;
  border-radius: 8px;
  background-color: rgba(200, 200, 200, 0.5);
}
</style>
