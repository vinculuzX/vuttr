import Modal from "@/components/ModalComponent";
import { shallowMount } from "@vue/test-utils";

describe("Modal Component", () => {
  it("should modal rendered", () => {
    const wrapper = shallowMount(Modal);
    expect(wrapper.find("#modalContent").exists()).toBe(true);
  });
  it(" should emit event ", () => {
    const wrapper = shallowMount(Modal);
    wrapper.vm.removeTool();
    expect(wrapper.emitted().removeDataTool).toEqual([[]]);
  });
  it("should close modal on click X", () => {
    const wrapper = shallowMount(Modal);
    wrapper.find("i").trigger("click");
    expect(wrapper.find("#modalContent").exists()).toBe(false);
  });
});
