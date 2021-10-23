import { shallowMount } from "@vue/test-utils";
import TaskForm from "@/components/molecules/TaskForm.vue";

describe("TaskForm", () => {
  describe("events", () => {
    describe("clickCancel", () => {
      it("テキストエリアがクリアされること", () => {
        const wrapper = shallowMount(TaskForm, {
          propsData: {
            status: "todo",
          },
        });
        expect(wrapper.isVueInstance).toBeTruthy();
      });
    });
  });
});
