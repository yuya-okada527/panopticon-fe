import { mount } from "@vue/test-utils";
import TaskForm from "@/components/molecules/TaskForm.vue";

describe("TaskForm", () => {
  describe("events", () => {
    describe("clickCancel", () => {
      it("テキストエリアがクリアされること", async () => {
        const wrapper = mount(TaskForm, {
          propsData: {
            status: "todo",
          },
        });
        await wrapper.setData({ name: "Test Task" });
        await wrapper
          .find("[data-test-id='task-form-cancel-button']")
          .trigger("click");
        expect(wrapper.vm.$data.name).toBe("");
      });
    });
  });
});
