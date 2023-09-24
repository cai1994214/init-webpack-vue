<template>
    <div class="news" ref="newsRef">
      <div class="logoTitle">
      <div class="cont">
        <img src="https://www.sznews.com/2016mi/images/logo.png" alt="">
      </div>
    </div>
     <div class="top-cont">
      <h1 class="title">贯彻“老有所学，老有所乐”--陶冶情操练声乐</h1>
      <span class="desc">时间：2022-06-10 20:41 来源：深圳新闻网</span>
      <p class="line"></p>
     </div>
     <div class="text-cont">
      <p class="cont-item">珠光社区长青老年大学“增长知识	、丰富生活、陶冶情操，促进健康、服务社会”的办学案目和“学，乐、为”相经合的办学原则，与时偶进，开限创新。希望老年朋友们积极参与，支持珠光社区长青老装大学发展，共同建设优秀校园，批后，珠光社区相关负责人与长青老龄大学负责人为舞题班和智能手机座的两位款师须发聘书。学员始纷表示，“感谢社区提供学习阵地，家门口的大学丰富了老年人精神文化生活，我们将珍性学习机会，老有所学、老有所为，继续发光发热回经社会。"在声乐学习课上，秉持着循序渐进的教学方法，学员跟随声乐老师，从发声方法、唱歌的技巧、怎么样唱好歌等几个方面，让大家了解到了不少声乐基础知识，打好声乐基础。大家一起学习了《送别》，老师就演唱过程中存在的问题，根据学员们的特点进行指导，学员们热情高涨、认真学习，形成了良性互动的课堂氛围。</p>
      <img src="@/assets/shenzhenxinwen/sz_01.png" alt="">
      <p class="cont-item">课上，老师用老年人轻松易懂的的语言讲授了歌唱发声的技巧、歌唱中气息的运用、歌唱时呼吸的技巧、简单的乐理知识、音阶的练习及简单的视唱、节奏的练习、独唱曲及合唱曲等声乐基础知识。</p>
     <img src="@/assets/shenzhenxinwen/sz_02.png" alt="">
      <p class="cont-item">随后老师带领大家一起学习了歌曲《但愿人长久》，学员们跟随着老师的琴声，在老师的指挥下，放声跟唱，歌声飘荡，感情丰富。</p>
       <img src="@/assets/shenzhenxinwen/sz_03.png" alt="">
      <p class="cont-item">珠光社区长青老龄大学得到了广大社区居民们的喜爱和认可，让大家“学起来”、“乐起来”，将文化养老、精神养老、知识养老、才艺养老结合起来，丰富社区居民的精神文化生活，提升老年人的幸福指数，让更多辖区老年人乐享生活。展现了老年人热爱生活、活力洋溢的风采魅力，引导广大老年人老有所学、老有所乐、老有所为，以实际行动践行积极老龄观，提高了老年大学声乐教学水平、促进声乐教学交流与发展，展现老年学员歌颂党和祖国、讴歌新时代、唱响幸福歌的精神风采。</p>
     </div>
     <div class="tips">[责任编辑：孙逊]</div>
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
  