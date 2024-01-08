import { defineComponent as e, computed as l, openBlock as r, createElementBlock as s, normalizeClass as a, unref as p, renderSlot as c } from "vue";
import "./style/index.css";
const m = e({ name: "ea-button" }), _ = /* @__PURE__ */ e({
  ...m,
  props: {
    type: null
  },
  setup(o) {
    const t = o, n = l(() => ({ [`ea-button--${t.type}`]: t.type }));
    return console.log("buttonStyle--", { [`ea-button--${t.type}`]: t.type }), (u, b) => (r(), s("button", {
      class: a(["ea-button", p(n)])
    }, [
      c(u.$slots, "default")
    ], 2));
  }
});
export {
  _ as default
};
