<template>
    <div class="news" ref="newsRef">
      <div class="logoTitle">
      <div class="cont">
        <img src="https://www.sznews.com/2016mi/images/logo.png" alt="">
      </div>
    </div>
     <div class="top-cont">
      <h1 class="title">桃源街道--珠光社区老龄大学开课啦</h1>
      <span class="desc">时间：2022-11-14 18:20 来源：深圳新闻网</span>
      <p class="line"></p>
     </div>
     <div class="text-cont">
      <p class="cont-item">在新时代文明实践中发挥余热。俗话说:活到老，学到老。老年学校的学员们日复一日地坚持学习，培养兴鑫，除了收获新知识，认识新事物，还能结识新朋友，让老年朋友们对文明城市和文明生活有更深层次的理解，丰富了社区长者的晚年生活，真正让社区的老年人老有所学，者有所为，老有所乐。</p>
      <img src="@/assets/shenzhenxinwen/gd_04.png" alt="">
      <p class="cont-item">老年大学作为加强老年思想政治教育的重要阵地，坚持把思想政治教育与老有所学、老有所为、老有所乐结合起来，组织引导老年学员发挥兴趣特长，展现新时代老年风采，积极为珠光社区高质量发展贡献桑榆力量。
“开学第一课”围绕《学习贯彻习近平总书记视察广东重要讲话重要指示精神》主题进行授课。从“习近平总书记四次视察广东”的时间节点为依据进行授课，以贴近群众生活事例展开深刻阐述，并结合国内外的经济、政治、生态、文化为例展开系统解读。课程主题鲜明、立意深远、内容丰富，既有鲜明的理论指导性，又有丰富具体的事例，让师生们感受到习近平总书记对广东发展的殷切期望和对广东人民的深情牵挂。</p>
     <img src="@/assets/shenzhenxinwen/gd_05.png" alt="">
      <p class="cont-item">通过开学第一课的学习，长青老龄大学的学员们在这里能有所收获，始终保持高涨的学习热情、崭新的精神风貌，充分发挥余热，积极传播正能量，实现老有所学、老有所为、老有所乐。</p>
       <img src="@/assets/shenzhenxinwen/gd_06.png" alt="">
      <p class="cont-item">最后感谢桃源街道党工委，感谢珠光社区党委，积极培育银发经济的多方面发展，从而积极应对老龄化战对老年人的关心与关爱，为长者们提供了一个学习娱乐和交友的平台，促进老年人社会参与，着力构建老年友好型社会，加强新时代老年工作，以“闯”的精神，“创”的劲头，“干”的作风，践行“学习是最好的养老”理念。</p>
     </div>
     <div class="tips">[编辑：刘梦婷 吴超] [责任编辑：黄春才]</div>
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
  