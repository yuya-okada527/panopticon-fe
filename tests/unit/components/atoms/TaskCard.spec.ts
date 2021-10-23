import { shallowMount } from "@vue/test-utils";
import TaskCard from "@/components/atoms/TaskCard.vue";

describe("TaskCard", () => {
  describe("props", () => {
    it("タスク名が表示されていること", async () => {
      const wrapper = shallowMount(TaskCard, {
        propsData: {
          task: {
            name: "Test Name",
            id: 1,
            status: "todo",
          },
        },
        stubs: ["router-link"],
      });
      expect(wrapper.find("[data-test-id='task-card-title']").text()).toBe(
        "Test Name"
      );
    });
  });
});
