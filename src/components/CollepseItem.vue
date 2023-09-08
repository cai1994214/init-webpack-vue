<template>
    <div class="col-item">
      <div class="col-move" :data-id="id">
        <div class="col-top"></div>
        <header
          class="col-header"
          @click.capture="handleClick"
          :class="`header-${id}`"
          :data-id="id"
        >
          <h1>
            {{ title }}
          </h1>
          <div><slot name="right"></slot></div>
        </header>
      </div>
      <div class="col-content" ref="contentref">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, inject } from "vue";
  function randomStr(len = 8) {
    let t = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
    let val = "";
    for (let i = 0; i < len; i++) {
      val += t.charAt(Math.floor(Math.random() * t.length));
    }
    return val;
  }
  const contentref = ref(null);
  const id = ref(randomStr());
  function handleClick() {
    if (contentref.value) {
      if (contentref.value.style.maxHeight === "0px") {
        contentref.value.style.maxHeight = "600px";
      } else {
        contentref.value.style.maxHeight = "0px";
      }
    }
  }
  const props = defineProps({
    title: {
      type: String,
      default: "",
    },
  });
  const count = inject("count");
  </script>
  
  <style lang="scss" scoped>
  .col-item {
    pointer-events: none;
  }
  .col-header {
    min-height: 50px;
    line-height: 50px;
    background-color: yellow;
    pointer-events: auto;
    cursor: pointer;
    user-select: none;
    h1 {
      display: flex;
      align-items: center;
    }
    .box {
      width: 0;
      height: 0;
      border: 10px solid red;
      border-color: red transparent transparent transparent;
    }
  }
  .col-content {
    min-height: 0px;
    max-height: 600px;
    overflow: hidden;
    pointer-events: auto;
  }
  .col-top {
    height: calc(v-bind("count-1") * 50px);
    width: 100%;
    margin-top: calc(v-bind("count-1") * -50px);
    pointer-events: none;
  }
  </style>
  