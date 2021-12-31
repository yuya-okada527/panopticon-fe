<template>
  <div>
    <div class="header">
      <h2>{{ state.task.name }}</h2>
      <a :href="state.task.external_url" class="external-link">{{
        "#" + state.task.id
      }}</a>
    </div>
    <div class="status">
      <label for="status">Status: </label>
      <select v-model="state.task.status" name="status" id="status">
        <option value="created">Created</option>
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
        <option value="closed">Closed</option>
      </select>
    </div>
    <textarea name="" id="4" cols="80" rows="30">
      {{ state.task.description }}
    </textarea>
  </div>
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

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
}
.external-link {
  margin-left: 8px;
  color: blue;
  text-decoration: none;
}
.status {
  margin: 8px 0;
}
</style>
