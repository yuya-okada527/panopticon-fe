<template>
  <div class="provider-card">
    <div class="name">
      {{ state.provider.name }}
    </div>
    <div>URL : {{ state.provider.provider_url }}</div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    provider: Object,
  },
  async setup(props) {
    const state = {
      provider: props.provider,
    };
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.name {
  font-weight: bold;
}
.provider-card {
  display: block;
  padding: 12px;
  border-radius: 8px;
  background-color: rgba(200, 200, 200, 0.5);
}
</style>
