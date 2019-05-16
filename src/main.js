import Vue from "vue";
import App from "./App.vue";
import VeeValidate from "vee-validate";
import "./assets/styles/main.styl";

Vue.config.productionTip = false;
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    valid: "is-valid",
    invalid: "is-invalid"
  }
});

new Vue({
  render: h => h(App)
}).$mount("#app");
