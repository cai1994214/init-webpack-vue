<template>
    <div class="news" ref="newsRef">
      <div class="logoTitle">
      <div class="cont">
        <img src="https://www.sznews.com/2016mi/images/logo.png" alt="">
      </div>
    </div>
     <div class="top-cont">
      <h1 class="title">贯彻“老有所学，老有所乐”--秋季声乐开课啦</h1>
      <span class="desc">时间：2022-11-14 17:51 来源：深圳新闻网</span>
      <p class="line"></p>
     </div>
     <div class="text-cont">
      <p class="cont-item">老有所学，老有所为，与时偶进，开创新，珠光社区长青老的大学负责人在政牌时表示，将经续员程“增长知识、丰富生活、南有情播、促进健康、服务社会”的办学家目和“学，乐、为”相合的办学原则，与时偶进，开拓创新，整老年朋友们积板参与，支持续光社区长青老验大学发展，共同建设优秀校园，随后，珠光社区相关负责人与长青老普大学负责人为抑额班和智能手机班的两位教部领发聘书，学员的粉表示，“感谢社区提供学习降地，家门口的大学丰富了老年人精神文化生活，我们将珍性学习机会，老有所学，老有所为，经发光发热回社会。”</p>
      <img src="@/assets/shenzhenxinwen/gd_01.png" alt="">
      <p class="cont-item">在声乐学习课上，秉持着循序渐进的教学方法，学员跟随声乐老师，从发声方法、唱歌的技巧、怎么样唱好歌等几个方面，让大家了解到了不少声乐基础知识，打好声乐基础。大家一起学习了《送别》，老师就演唱过程中存在的问题，根据学员们的特点进行指导，学员们热情高涨、认真学习，形成了良性互动的课堂氛围。</p>
     <img src="@/assets/shenzhenxinwen/gd_02.png" alt="">
      <p class="cont-item">唱响银龄好声音，展现乐龄新风尚。“唱响新时代 银龄展风采——珠光老年大学声乐教学成果交流”旨在提高老年大学声乐教学水平、促进声乐教学交流与发展，展现老年学员歌颂党和祖国、讴歌新时代、唱响幸福歌的精神风采。
此次老年大学声乐课，不仅丰富了学员们的业余文化生活，激发了大家对声乐学习的兴趣，也给辖区内的居民们搭建了学习交流的平台，营造了和谐的社区氛围。</p>
       <img src="@/assets/shenzhenxinwen/gd_03.png" alt="">
      <p class="cont-item">雄关漫道真如铁，而今迈步从头越，新学期新气象，期待通过全体师生共同努力，珠光社区长青老龄大学会越办越好!</p>
     </div>
     <div class="tips">[编辑：单铭捷]</div>
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
  