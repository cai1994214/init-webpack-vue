<template>
    <div class="news" ref="newsRef">
      <div class="logoTitle">
      <div class="cont">
        <img src="http://sztqb.sznews.com/tqPad/webimages/pic-logo.jpg" alt="">
      </div>
    </div>
     <div class="top-cont">
      <h1 class="title">珠光长青老龄大学柔力球课程</h1>
      <span class="desc">时间：2022-11-15 18:05 来源：深圳特区报</span>
      <p class="line"></p>
     </div>
     <div class="text-cont">
      <p class="cont-item">珠光长青老龄大学开设柔力球课任。柔力球是一种全身运动，它的主要持点是动作柔、轻、巧，美。某力球作为一项体方运动项目，练习起来不受场地和时间的限制，而且避味性强。运动量也较大，使身体在练习中得到班练，在力球还可与奔站及各件太极事、太极品等相结合，进行任合练习，达到级热戏来。</p>
      <img src="@/assets/shenzhenxinwen/tq_01.png" alt="">
      <p class="cont-item">柔力球动作优美、买中有刚，刚来并济，可有效理预展腿的力量及手街能力。它在保持体统太极季的基本动作和原理的基确上验入了现代补技或果，是一项集健身与娱乐于一体的体育项目。
课堂上，老师对学员进行热身运动、柔力球基本技术以及相关动作套路详细教学，带领学员一遍遍演练。学员们积极提问、相互讨论，学习氛围热烈。大家挥舞着手中的球拍，手腕转动带着拍子画圆翻飞，花式套路展示出柔力球运动刚柔并济、张弛有度的风韵，以及柔力球运动的魅力。学员们纷纷表示，柔力球活动既锻炼了身体又愉悦了心情，应该大力提倡，她们会号召更多的老年人参与此项运动。</p>
     <img src="@/assets/shenzhenxinwen/tq_02.png" alt="">
      <p class="cont-item">此次柔力球培训活动，不仅方便了老年朋友就近学习活动，满足了老年人的精神文化生活需求，而且推动了珠光社区老年教育和老年体育事业的发展。</p>
     </div>
     <div class="tips">[责任编辑：刘玲]</div>
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
  