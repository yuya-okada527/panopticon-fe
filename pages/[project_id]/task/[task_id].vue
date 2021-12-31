<template>
  <h2>{{ state.task.name }}</h2>
</template>

<script lang="ts">
import ApiUrls from "~~/network/static/api-urls";

type State = {
  task: any;
};

export default defineComponent({
  async setup() {
    const route = useRoute();
    const { data: task } = await useFetch(
      ApiUrls.getTaskUrl(route.params.project_id, route.params.task_id)
    );
    const state: State = {
      task: task.value,
    };
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped></style>
