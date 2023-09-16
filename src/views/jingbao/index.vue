<template>
    <div class="news" ref="newsRef">
      <div class="logoTitle">
      <div class="cont">
        <!-- <img src="http://wb.sznews.com/tqPad/webimages/pic01.png" alt=""> -->
        <img src="https://jb.sznews.com/ePaper/static/img/jblogo.d03962ec.png" alt="">
      </div>
    </div>
     <div class="top-cont">
      <h1 class="title">珠光社区老年大学结业典礼</h1>
      <span class="desc">时间：2022-11-18 19:34 编辑: 陈龙</span>
      <p class="line"></p>
     </div>
     <div class="text-cont">
      <p class="cont-item">党的十八大以来，在以习主席为核心的党中央望强领导下，党和国家事业取得历史性成就发生历史性变革。"奋进新征程，建功新时代”，生动展现新时代党的创新理论扎根中国大地，引领时代变革的思想伟力，全面展示新时代的突破性进展，标志性成果，充分反映中国人民种厉奋发，笃行不总的精神风貌，自信讲述真实。立体、全面的中国。</p>
      <img src="@/assets/jingbao/jingbao1.png" alt="">
      <p class="cont-item">现场，舞蹈、柔力球、书法、唱歌表演等形式多样的节目轮番上演。参演学员个个神采奕奕、活力充盈，或引吭高歌，或舞步翩跹，或深情演唱……大家用饱满的热情和认真的态度完成各自演出，为全年的学习交上一份完美的“答卷”。</p>
      <img src="@/assets/jingbao/jingbao2.png" alt="">
      <p class="cont-item">精彩的演出引得现场掌声、欢呼声、喝彩声不断。一曲曲悠扬的旋律，唱出了老年人幸福的晚年生活；一个个动人的舞姿，舞出了老年人美丽的夕阳风采；一张张喜悦的笑脸，展现了老年人热爱生活、积极向上、与时俱进的精神风貌。</p>
      <img src="@/assets/jingbao/jingbao3.png" alt="">
      <p class="cont-item">老年大学不仅学习环境好，老师也倾囊相授，对我们零基础的人来说也能轻松跟上上课节奏，学到新的知识。”新加入老年大学学员宛建英说道，老年学员不能放弃精神文化生活，要通过老年大学的学习，让生活圈子丰富起来。接下来，桃源街道将继续践行以人民为中心的发展思想，聚焦民生福祉，着力完善机制，注重精准施策，以“三服务”工作为抓手，围绕惠民、利民、便民目标出实招、破难题，积极整合社会资源和公益力量，推动街道和社区养老服务向精细化管理转型发展，大力培育敬老、爱老、助老的良好社会风尚，让生活在翠云的老年人共享发展成果、安享幸福晚年。</p>
     </div>
     <div class="tips">[责任编辑：陈龙]</div>
    </div>
    
  </template>
  
  <style lang="scss" scoped>
  .logoTitle {
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    background: #fff;
    padding: 10px;
    border-bottom: 1px solid #e8e8e8;
    .cont {
      padding: 10px;
      max-width: 750px;
      box-sizing: border-box;
      & img {
        height: 30px
      }
    }
  }
  .news {
    box-sizing: border-box;
    max-width: 750px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
  .top-cont{
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
    .title {
      text-align: center;
      padding: 0 40px;
    }
    .desc {
      font-size: 12px;
    }
    .line {
      margin-top: 18px;
      border-top: 1px #e5e5e5 solid;
      height: 1px;
      font-size: 0;
      width: 80%;
      margin-bottom: 30px;
    }
  }
  .text-cont{
    background: #fff;
    padding: 0 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    .cont-item {
      font-family: 宋体;
      font-size: 12pt;
      line-height: 1.5;
      text-align: justify;
      text-indent: 2em;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .cont-item-center {
      text-align: center;
      margin: 0;
    }
  
    img {
      max-width: 600px;
    }
  }
  
  .tips {
    text-align: right;
    font-size: 14px;
    color: #8a8a8a;
    background: #fff;
    font-weight: 600;
    padding-right: 14px;
    padding-top: 50px;
    padding-bottom: 5px;
  }
  
  @media screen and (max-width: 750px) {
    .top-cont {
      .title {
        padding: 0 15px;
      }
      .line {
        width: 95%;
      }
    }
    .text-cont {
      img {
        width: 100%;
        min-width: 300px;
        max-width: 600px;
      }
    }
  }
  </style>
  