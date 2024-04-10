<template>
    <div class="news" ref="newsRef">
      <div class="logoTitle">
      <div class="cont">
        <!-- <img src="http://wb.sznews.com/tqPad/webimages/pic01.png" alt=""> -->
        <img src="https://jb.sznews.com/ePaper/static/img/jblogo.d03962ec.png" alt="">
      </div>
    </div>
     <div class="top-cont">
      <h1 class="title">桃源街道龙光社区长青老龄大学开课</h1>
      <span class="desc">时间：2023-05-15 19:34 编辑: 陈龙</span>
      <p class="line"></p>
     </div>
     <div class="text-cont">
      <p class="cont-item">光社区长青老龄大学开课啦！桃源街道龙光社区长青老龄大学（以下简称“龙光校”）举办了开学典礼，桃源街道龙光社区长青老龄大学（以下简称“龙光校”）开展了开学典礼，龙光社区党委副书记兼龙光校校长许潇及校委成员、老师、学员代表近40人参与本次活动。学员们精神饱满地来到教室，热情地洋溢着幸福和自豪，走进长青课堂。
活动当天特别邀请了耳听力专家李剑轩老师并向老年学员们介绍了听力健康的内涵、听力水平下降原因及危害和减缓听力水平下降的方法。讲座引导学员们关注自己的听力健康状况，也引导学员们重视其心理状态，充分给予老年人生理和心理上的关怀。</p>
      <img src="@/assets/jingbao/jingbao1.png" alt="">
      <p class="cont-item">办学专员传达了有关文件精神和重要指示，部署贯彻落实具体措施；表示了长青老龄大学坚持“老有所学、老有所为、老有所乐”的办学方针。通过介绍丰富生动的课程吸引了老年朋友，而长青老龄大学从无到有，从有到优离不开老师、学员们的共同努力。学员们充满热情以持续且热烈的掌声纷纷对两位老师表达了认可和喜爱。</p>
      <img src="@/assets/jingbao/jingbao2.png" alt="">
      <p class="cont-item">龙光社区党委积极响应上级号召，为长者朋友们提供了舒适的教学环境。开设了党课、思政课2门公共课，太极、舞蹈、书法、声乐、二胡学习5门专业课。2023年分为春季、秋季两个学期开学。招收学员开始就受到了长者朋友们的大力支持和踊跃报名，目前已招募学员近80人，龙光社区长青老龄大学将贯彻新发展理念、构建型发展格局、推动高质量发展，坚持“夕阳对象、朝阳事业”的追求，牢固树立全领域理念，构建“党委统筹、各方参与”的工作格局。
在桃源街道党工委的正确领导下，团结协作，积极打造具有桃源特色的长青老龄文化品牌，为深圳打造“老有颐养”民生幸福标杆城市贡献力量。感谢龙光社区党委，对于老年人的关心与关爱，为长者们提供了一个学习娱乐和交友的平台，促进老年人社会参与，着力构建老年友好型社会，加强新时代老年工作。</p>
      <img src="@/assets/jingbao/jingbao3.png" alt="">
      <p class="cont-item">莫道桑榆晚，为霞尚满天。长青老龄大学秉承着“关心老年群体，从实情出发”的使命，结合老年朋友的兴趣爱好，开设多个专业班，极大地丰富了社区老年朋友的生活。祝愿长青老龄大学能越办越好！</p>
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
  