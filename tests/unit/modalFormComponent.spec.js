import ModalForm from "@/components/ModalFormComponent.vue";
import { shallowMount } from "@vue/test-utils";

describe("ModalForm.vue", () => {
  it("should modal form rendered", () => {
    const wrapper = shallowMount(ModalForm);
    expect(wrapper.find("#modalFormView").exists()).toBe(true);
  });
  it("should emit event", () => {
    const wrapper = shallowMount(ModalForm);
    const mockedObject = {
      tool: {
        title: "teste",
        link: "teste",
        description: "teste",
        tags: ["teste"]
      }
    };
    wrapper.vm.submitRegisterNewTool();
    expect(wrapper.emitted().inputDataTool).toEqual([[mockedObject.tool]]);
  });
});
