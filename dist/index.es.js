import { defineComponent, ref, reactive, computed, watch, onMounted, openBlock, createElementBlock, createElementVNode, normalizeStyle, unref, withDirectives, renderSlot, vShow, Fragment, renderList, normalizeClass, createCommentVNode, toDisplayString } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "yzp-swiper-item" };
const _hoisted_2 = { class: "yzp-swiper-link" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "yzp-swiper-item" };
const _hoisted_5 = { class: "yzp-swiper-link" };
const _hoisted_6 = {
  key: 0,
  class: "yzp-swiper-btn"
};
const _hoisted_7 = {
  key: 1,
  class: "yzp-swiper-text"
};
const _hoisted_8 = { class: "yzp-swiper-title" };
const _hoisted_9 = { class: "yzp-swiper-index" };
const _hoisted_10 = {
  key: 2,
  class: "yzp-swiper-dots"
};
const _hoisted_11 = { class: "yzp-swiper-dots-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    list: { default: () => [] },
    duration: { default: 300 },
    interval: { default: 3e3 },
    autoplay: { type: Boolean, default: true },
    direction: { default: "next" },
    showTitle: { type: Boolean, default: true },
    showDots: { type: Boolean, default: false },
    showArrow: { type: Boolean, default: true }
  },
  emits: ["change", "click"],
  setup(__props, { emit }) {
    const props = __props;
    const newSwiperX = ref(-1);
    const swiperRefs = ref();
    const swiperConfig = reactive({
      index: 0,
      arrow: true,
      inter: void 0,
      width: 0,
      direction: props.direction
    });
    const noAnimated = ref(true);
    const isAnimating = ref(false);
    const translateX = computed(() => {
      const { width, index } = swiperConfig;
      return -width - index * width;
    });
    const items = ref(props.list);
    watch(() => props.list, (val) => {
      swiperConfig.index = 0;
      items.value = val;
    });
    watch(() => swiperConfig.index, (index) => {
      const { width, direction } = swiperConfig;
      const len = items.value.length;
      const duration = props.duration;
      const isNextEnd = index === 0 && direction === "next";
      const isPrevEnd = index === len - 1 && direction === "prev";
      let nextTimer = void 0;
      let prevTimer = void 0;
      clearTimeout(nextTimer);
      clearTimeout(prevTimer);
      if (isNextEnd) {
        newSwiperX.value = -(width * len) + -width;
        isAnimating.value = true;
        nextTimer = setTimeout(() => {
          noAnimated.value = true;
          isAnimating.value = false;
          newSwiperX.value = -width;
        }, duration);
      }
      if (isPrevEnd) {
        newSwiperX.value = 0;
        isAnimating.value = true;
        prevTimer = setTimeout(() => {
          noAnimated.value = true;
          isAnimating.value = false;
          newSwiperX.value = -width * len;
        }, duration);
      }
      if (!isNextEnd && !isPrevEnd) {
        newSwiperX.value = -1;
      }
      emit("change", index);
    });
    const loop = (type) => {
      swiperConfig.index = type == "next" ? 0 : items.value.length - 1;
    };
    const next = () => {
      swiperConfig.direction = "next";
      if (isAnimating.value) {
        return;
      }
      noAnimated.value = false;
      swiperConfig.index++;
      if (swiperConfig.index >= items.value.length) {
        loop("next");
      }
    };
    const prev = () => {
      swiperConfig.direction = "prev";
      if (isAnimating.value) {
        return;
      }
      noAnimated.value = false;
      swiperConfig.index--;
      if (swiperConfig.index <= -1) {
        loop("prev");
      }
    };
    const stop = () => {
      if (props.autoplay) {
        clearInterval(swiperConfig.inter);
      }
    };
    const start = () => {
      if (props.autoplay) {
        clearInterval(swiperConfig.inter);
        swiperConfig.inter = setInterval(() => {
          props.direction === "next" ? next() : prev();
        }, props.interval);
      }
    };
    const onItemClick = (e) => {
      emit("click", e);
    };
    onMounted(() => {
      if (items.value.length) {
        setTimeout(() => {
          swiperConfig.width = swiperRefs.value.clientWidth;
          start();
        }, 100);
      }
    });
    return (_ctx, _cache) => {
      return items.value.length ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "swiperRefs",
        ref: swiperRefs,
        class: "yzp-swiper-wrap",
        onMouseover: stop,
        onMouseout: start
      }, [
        createElementVNode("ul", {
          style: normalizeStyle({
            transform: `translate3d(${newSwiperX.value === -1 ? unref(translateX) : newSwiperX.value}px,0,0)`,
            transition: noAnimated.value ? "none" : `all ${__props.duration / 1e3}s`
          }),
          class: "yzp-swiper-list"
        }, [
          withDirectives(createElementVNode("li", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "swiperItem", {
                item: items.value[items.value.length - 1]
              }, void 0, true)
            ])
          ], 512), [
            [vShow, unref(swiperConfig).width]
          ]),
          (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (item, index) => {
            return openBlock(), createElementBlock("li", {
              style: normalizeStyle({ "z-index": -index }),
              key: index,
              class: "yzp-swiper-item"
            }, [
              createElementVNode("div", {
                class: "yzp-swiper-link",
                onClick: ($event) => onItemClick(item)
              }, [
                renderSlot(_ctx.$slots, "swiperItem", { item }, void 0, true)
              ], 8, _hoisted_3)
            ], 4);
          }), 128)),
          withDirectives(createElementVNode("li", _hoisted_4, [
            createElementVNode("div", _hoisted_5, [
              renderSlot(_ctx.$slots, "swiperItem", {
                item: items.value[0]
              }, void 0, true)
            ])
          ], 512), [
            [vShow, unref(swiperConfig).width]
          ])
        ], 4),
        __props.showArrow && !_ctx.$slots.swiperCustomButton ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createElementVNode("div", {
            class: normalizeClass([{ hasBtnSlot: !!_ctx.$slots.swiperLeftButton }, "yzp-swiper-left"]),
            onClick: prev
          }, [
            renderSlot(_ctx.$slots, "swiperLeftButton", {}, void 0, true)
          ], 2),
          createElementVNode("div", {
            class: normalizeClass([{ hasBtnSlot: !!_ctx.$slots.swiperRightButton }, "yzp-swiper-right"]),
            onClick: next
          }, [
            renderSlot(_ctx.$slots, "swiperRightButton", {}, void 0, true)
          ], 2)
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "swiperCustomButton", {}, void 0, true),
        __props.showTitle && !__props.showDots ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createElementVNode("span", _hoisted_8, toDisplayString(items.value[unref(swiperConfig).index].title || "-"), 1),
          createElementVNode("span", _hoisted_9, toDisplayString(unref(swiperConfig).index + 1) + " / " + toDisplayString(items.value.length), 1)
        ])) : createCommentVNode("", true),
        __props.showDots ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createElementVNode("ul", _hoisted_11, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(items.value, (dot, i) => {
              return openBlock(), createElementBlock("li", {
                key: `dot-${i}`,
                class: normalizeClass([{ active: unref(swiperConfig).index === i }, "yzp-swiper-dots-item"])
              }, null, 2);
            }), 128))
          ])
        ])) : createCommentVNode("", true)
      ], 544)) : createCommentVNode("", true);
    };
  }
});
var Vue3EasySwiper = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6345580d"]]);
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.createApp({}).component("vue3-easy-swiper", Vue3EasySwiper);
}
const install = (app) => {
  app.component("vue3-easy-swiper", Vue3EasySwiper);
};
const globalEasySwiper = {
  install,
  Vue3EasySwiper
};
export { Vue3EasySwiper, globalEasySwiper as default, globalEasySwiper };
