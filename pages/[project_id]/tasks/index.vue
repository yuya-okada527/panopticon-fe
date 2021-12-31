<template>
  <div>
    <div class="main-header">
      <h2>Tasks</h2>
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
import ApiUrls from "~~/network/static/urls";

export default defineComponent({
  async setup() {
    const route = useRoute();
    const { data: tasks } = await useFetch(
      ApiUrls.getTasksUrl(
        Array.isArray(route.params.project_id)
          ? route.params.project_id[0]
          : route.params.project_id
      )
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
    return {
      createdTasks,
      todoTasks,
      doingTasks,
      doneTasks,
    };
  },
});
</script>

<style lang="scss" scoped>
.task-board {
  display: flex;
}
</style>
