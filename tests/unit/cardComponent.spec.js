import Card from "@/components/CardComponent";
import { shallowMount } from "@vue/test-utils";

describe("CardComponent", () => {
  it("should render elements props", () => {
    const wrapper = shallowMount(Card, {
      propsData: {
        title: "teste",
        description: "teste",
        tags: ["1"]
      }
    });
    expect(wrapper.find("a").text()).toBe("teste");
    expect(wrapper.find(".small").text()).toBe("teste");
    expect(wrapper.find(".smallest").text()).toBe("#1");
  });
  it("should emit an event", () => {
    const wrapper = shallowMount(Card);
    const id = 1;
    wrapper.vm.updateDataTool(id);
    expect(wrapper.emitted().removeDataArray).toEqual([[1]]);
  });
});
