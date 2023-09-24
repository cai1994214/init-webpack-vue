<template>
  <div class="news" ref="newsRef">
    <div class="logoTitle">
      <div class="cont">
        <i class="img"></i>
      </div>
    </div>
    <div class="top-cont">
      <h1 class="title">珠光老年大学舞蹈课</h1>
      <span class="desc">时间：2022-06-13 15:21 来源：南方都市报</span>
      <p class="line"></p>
    </div>
    <div class="text-cont">
      <p class="cont-item">
        舞蹈课是一门艺术，可以陶冶情操，让人的身心得到放松。初学者不能跳过高难度动作。初学跳舞者要选择难度较低的舞蹈，动作和强度由小到大，循序渐进，老年大学的同学们朝气蓬勃，热爱每一节舞蹈课。舞蹈练习时应穿着合身的舞蹈衣，以便于随时调整身体，每一节课都会带给同学们快乐，在快乐中锻炼身体。
      </p>
      <img src="@/assets/shenzhenxinwen/ds_01.png" alt="" />
      <p class="cont-item">
        为进一步丰富辖区老年人业余文化生活，提升老年人的身体素质和生活质量。珠光社区长青老龄大学春季开展了12节“健康老年 舞动人生”舞蹈课程。
        开课期间舞蹈老师从基本舞步开始耐心教学，学员认真学习，仔细记住老师的每个舞蹈动作的细节。活动室里学员们学习热情高涨，每节课都在欢声笑语中度过。
      </p>
      <img src="@/assets/shenzhenxinwen/ds_02.png" alt="" />
      <p class="cont-item">
        本次舞蹈班成员以辖区中老年舞蹈爱好者为主。在教学过程中，老师细心指导，学员学习认真，专心揣摩每一个动作，并耐心地向老师请教，一个小时的舞蹈课在轻松愉悦的气氛中结束，学员们都热情高涨，认真学习老师教的每一个动作，有的老人表示：“长者服务站每年都开展各类丰富多彩的培训班，既丰富了我们的日常生活，同时增加了我们的知识与技能，希望长者服务站能一直坚持下去，开展更多更好的活动”。
         此次民族舞舞蹈班的开设为社区老年人提供了舞蹈和健身的平台，将丰富他们的精神文化生活，提高他们的舞蹈表演水平，使老人们享受到文化惠民的成果，后续每周五都会准时开课
      </p>
    </div>
    <div class="tips">[责任编辑：徐杰]</div>
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
    //   padding: 10px;
    max-width: 750px;
    box-sizing: border-box;
    & .img {
      display: inline-block;
      text-align: center;
      line-height: 50px;
      background: url(https://ipaper.oeeee.com/ipaper/images/paper_icon.png) no-repeat center -355px;
      background-size: 150px auto;
      box-flex: 1;
      width: 150px;
      height: 50px;
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
.top-cont {
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
.text-cont {
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
