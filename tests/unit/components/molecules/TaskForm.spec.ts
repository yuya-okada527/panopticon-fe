import { mount } from "@vue/test-utils";
import TaskForm from "@/components/molecules/TaskForm.vue";

describe("TaskForm", () => {
  describe("events", () => {
    describe("clickCancelButton", () => {
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
    describe("clickAddButton", () => {
      let createTaskMock: any;
      let wrapper: any;
      beforeEach(() => {
        createTaskMock = jest.fn();
        wrapper = mount(TaskForm, {
          propsData: {
            status: "doing",
            createTaskFunc: createTaskMock,
          },
        });
      });
      describe("nameの入力ありの場合", () => {
        it("タスク作成関数がコールされること", async () => {
          await wrapper.setData({ name: "Test" });
          await wrapper
            .find("[data-test-id='task-form-add-button']")
            .trigger("click");
          expect(createTaskMock).toBeCalled();
        });
      });
      describe("nameの入力なしの場合", () => {
        it("タスク作成関数がコールされないこと", async () => {
          await wrapper
            .find("[data-test-id='task-form-add-button']")
            .trigger("click");
          expect(createTaskMock).not.toBeCalled();
        });
      });
    });
  });
});
