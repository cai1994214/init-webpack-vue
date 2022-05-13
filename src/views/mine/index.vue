<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";


const router = useRouter();
const route = useRoute();


</script>
<template>
  个人中心
  <button @click="() => router.push({ name: 'home', params: { id: 2 } })">
    跳转首页
  </button>
   <div class="transit-satellite">
    <div class="list">
      <div class="title">
        <table cellspacing="0">
          <col width="60%" />
          <thead>
            <tr>
              <th>卫星名称</th>
              <th>卫星系列</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.transit-satellite {
  width: 100%;
  height: 586px;

  .list {
    height: 544px;
    display: flex;
    flex-direction: column;
  }
  .list table {
    width: 100%;
    th,
    td {
      padding-left: 40px;
      color: #fff;
    }
  }

  .list .title {
    margin-top: 36px;
    tr {
      transition: all 1s;
      height: 40px;
      line-height: 40px;
      text-align: left;
      background: rgba(3, 157, 206, 0.3);
    }
  }

  .list .content {
    width: 454px;
    height: 470px;
    flex: 1;
    overflow-y: hidden;
    position: relative;
    //无限滚动
    .scroll {
      animation: move 5s linear infinite;
      margin: 0px;
    }
    .scroll:hover {
      animation-play-state: paused;
    }
    @keyframes move {
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-50%); //复制了一份列表 每次回到中间
      }
    }
    @-webkit-keyframes move {
      /* Safari 与 Chrome */
      0% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-50%);
      }
    }
    li {
      display: flex;
      justify-content: space-between;
      padding: 0 40px;
    }
    li span {
      line-height: 50px;
      font-size: 14px;
      color: #fff;
      margin-right: 40px;
      min-width: 100px;
    }
    li:nth-of-type(odd) {
      background: rgba(0, 9, 12, 0.1);
    }
    li:nth-of-type(even) {
      background: rgba(7, 46, 58, 0.2);
    }
  }
  .list .content::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
  }
  .list .content::-webkit-scrollbar-thumb {
    background-color: rgba(102, 255, 255, 0.3);
  }
}
.list-complete-item {
  transition: all 1s;
}
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>
