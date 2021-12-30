<template>
  <div class="task-list-card">
    <h3 class="task-status">{{ state.status }}</h3>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    status: String,
  },
  async setup(props) {
    const state = reactive({
      status: props.status,
    });
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.task-list-card {
  width: 180px;
  height: 80vh;
  border-radius: 8px;
  border: solid 1px #ddd;
  margin: 0px 4px;
}
.task-status {
  color: #444;
  margin-left: 8px;
}
</style>
