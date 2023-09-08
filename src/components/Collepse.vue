<template>
    <div class="col-container">
      <div class="fixding" ref="fixding" @click="handleClick"></div>
      <div class="content" ref="content" @animationend="handleAnimationEnd">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, onUpdated, ref, provide, nextTick  } from "vue";
  const fixding = ref(null);
  const content = ref(null);
  let threshold = [...Array(101).keys()].map((v) => v / 100);
  // 吸顶的元素集合
  let fixElements = {};
  /** 点击标识 */
  var tap = false;
  const total = ref(0);
  function handleClick(e) {
    tap = true;
    let target = e.target.parentNode;
    let id = target.dataset.id;
    // 当前吸顶的key
    let fixeles = Object.keys(fixElements).filter((v) => fixElements[v]);
    let header = content.value.querySelector(`.header-${id}`);
    let index = fixeles.indexOf(id);
    // 先滚动到前一个
    let nextheader = target.nextElementSibling;
    if (nextheader) {
      content.value.scrollTop = header.offsetTop;
    }
    nextTick(() => {
      // 滚动到当前
      let unit = target.offsetHeight;
      content.value.scrollTo({
        top: header.offsetTop - index * unit,
        behavior: "smooth",
      });
      let leftFixels = fixeles.slice(index + 1);
      updateClickDom(leftFixels);
      setTimeout(() => {
        tap = false;
      }, 300);
    });
  }
  function updateClickDom(leftFixels) {
    // 更新fix节点
    leftFixels.forEach((key) => {
      fixElements[key] = undefined;
      udpateDom();
    });
    //  传递折叠信息
    if (leftFixels.length > 1) {
      let ziplist = leftFixels.slice(0, -1);
      ziplist.forEach((key) => {
        let el = content.value.querySelector(`.header-${key}`);
        let next = el.parentNode.nextElementSibling;
        next.style.maxHeight = "0px";
      });
    }
  }
  function udpateDom() {
    fixding.value.innerHTML = "";
    let els = Object.values(fixElements).filter((v) => v);
    els.forEach((v) => {
      fixding.value.appendChild(v);
    });
  }
  function foldDom(elem) {
    // 折叠进入
    let target = elem.closest(".col-item");
    target = target.previousElementSibling;
    if (target) {
      let contentval = target.querySelector(".col-content");
      if (contentval.style.maxHeight === "0px") {
        contentval.style.maxHeight = "600px";
        nextTick(() => {
          content.value.scrollTop += contentval.offsetHeight;
        });
      }
    }
  }
  function init() {
    let options = {
      root: document.querySelector(".content"),
      threshold: threshold,
    };
    let targets = Array.from(document.querySelectorAll(".col-move"));
    total.value = targets.length;
    let idxMap = targets.reduce((p, v, i) => {
      p[v.dataset.id] = i;
      return p;
    }, {});
    let unit = 1 / targets.length;
    let callback = (objects, observer) => {
      if (tap) return;
      for (let [kindex, entry] of objects.entries()) {
        let elem = entry.target.querySelector(".col-header");
        let radio = entry.intersectionRatio;
        let id = elem.dataset.id;
        let index = idxMap[id];
        let fixElementslen = Object.values(fixElements).filter((v) => v).length;
        // 计算比例
        let between = radio > unit * index && radio < unit * (index + 1);
        if (index === fixElementslen && between) {
          // 向上
          if (fixElements[id]) return;
          fixElements[id] = elem.cloneNode(true);
          udpateDom();
          if (kindex >= 1) foldDom(elem);
        } else if (index < fixElementslen && radio >= unit * (index + 1)) {
          // 向下
          fixElements[id] = undefined;
          udpateDom();
        }
      }
    };
    let observer = new IntersectionObserver(callback, options);
    Array.from(targets).forEach((v, i) => {
      observer.observe(v);
    });
  }
  onMounted(init);
  provide("count", total);
  </script>
  
  <style lang="scss" scoped>
  .col-container {
    position: relative;
    margin-top: 190px;
    .fixding {
      top: 0;
      position: absolute;
      background-color: #fff;
      /* opacity: 0.3; */
      width: 100%;
      .col-header {
        height: 50px;
      }
    }
    .content {
      overflow: scroll;
      width: 100%;
      height: calc(100vh - 61px);
    }
  }
  </style>
  