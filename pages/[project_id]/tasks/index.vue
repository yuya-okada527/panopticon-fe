<template>
  <div>
    <div class="main-header">
      <h2>Tasks</h2>
    </div>
    <div>
      <ul class="task-board">
        <li><TaskList status="Created" /></li>
        <li><TaskList status="Todo" /></li>
        <li><TaskList status="Doing" /></li>
        <li><TaskList status="Done" /></li>
        <li><TaskList status="Closed" /></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    // TODO implements
  },
});
</script>

<style lang="scss" scoped>
.task-board {
  display: flex;
}
</style>
