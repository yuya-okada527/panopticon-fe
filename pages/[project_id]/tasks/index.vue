<template>
  <div>
    <div class="main-header">
      <h2>Tasks</h2>
      <button @click="onAddButtonClick" class="add-button">Add</button>
    </div>
    <div>
      <ul class="task-board">
        <li><TaskList status="Created" :tasks="createdTasks" /></li>
        <li><TaskList status="Todo" :tasks="todoTasks" /></li>
        <li><TaskList status="Doing" :tasks="doingTasks" /></li>
        <li><TaskList status="Done" :tasks="doneTasks" /></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TaskStatus from "~~/models/static/task-status";
import ApiUrls from "~~/network/static/api-urls";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const router = useRouter();
    const { data: tasks } = await useFetch(
      ApiUrls.getTasksUrl(route.params.project_id)
    );
    // @ts-ignore
    const createdTasks = tasks.value.filter(
      (t) => t.status === TaskStatus.CREATED
    );
    // @ts-ignore
    const todoTasks = tasks.value.filter((t) => t.status === TaskStatus.TODO);
    // @ts-ignore
    const doingTasks = tasks.value.filter((t) => t.status === TaskStatus.DOING);
    // @ts-ignore
    const doneTasks = tasks.value.filter((t) => t.status === TaskStatus.DONE);
    // @ts-ignore
    // const closedTasks = tasks.value.filter(
    //   (t) => t.status === TaskStatus.CLOSED
    // );

    const onAddButtonClick = () => {
      router.push(`/${route.params.project_id}/new_task`);
    };
    return {
      createdTasks,
      todoTasks,
      doingTasks,
      doneTasks,
      onAddButtonClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.add-button {
  padding: 12px;
  margin: 12px;
  font-size: 1.2rem;
  background-color: blue;
  border: none;
  border-radius: 12px;
  color: white;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
.task-board {
  display: flex;
}
</style>
