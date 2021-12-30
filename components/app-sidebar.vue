<template>
  <div>
    <ul>
      <li v-for="menu in menus" :key="menu.name">
        <NuxtLink :to="menu.to">{{ menu.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  async setup() {
    const route = useRoute();
    const menus = [
      {
        name: "Tasks",
        to: `/${route.params.project_id}/tasks`,
      },
      {
        name: "Providers",
        to: `/${route.params.project_id}/task_providers`,
      },
      {
        name: "Analysis",
        to: `/${route.params.project_id}/analysis`,
      },
      {
        name: "Retrospection",
        to: `/${route.params.project_id}/retrospection`,
      },
    ];
    return {
      menus,
    };
  },
});
</script>

<style lang="scss" scoped></style>
