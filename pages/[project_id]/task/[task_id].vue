<template>
  <div>
    <div class="header">
      <h2>{{ state.task.name }}</h2>
      <a :href="state.task.external_url" class="external-link">
        {{ "#" + state.task.id }}
      </a>
      <div @click="onUpdateIconClick" class="update-icon"></div>
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
    <textarea
      v-model="state.task.description"
      name="description"
      id="description"
      cols="80"
      rows="30"
    >
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

    const onUpdateIconClick = async () => {
      await useFetch(
        ApiUrls.getTaskUrl(route.params.project_id, route.params.task_id),
        {
          method: "PUT",
          body: {
            name: state.task.name,
            description: state.task.description,
            status: state.task.status,
          },
        }
      );
    };

    return {
      state,
      onUpdateIconClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
}
.update-icon {
  font-size: 16px;
  position: relative;
  margin: 12px;
  width: 1.2em;
  height: 1.2em;
  border-top: 0.2em solid #39a9d6;
  border-left: 0.2em solid #39a9d6;
  border-right: 0.2em solid transparent;
  border-bottom: 0.2em solid #39a9d6;
  border-radius: 100% 100% 100% 100%;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0.9em;
    width: 0;
    height: 0;
    border-top: 0.4em solid transparent;
    border-left: 0.6em solid #39a9d6;
    border-bottom: 0.4em solid transparent;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
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
