import { mount } from "@vue/test-utils";
import App from "@/App.vue";

test("App should work", () => {
  const wrapper = mount(App);
  expect(wrapper.text()).toMatch(`Vue Todo`);
});
