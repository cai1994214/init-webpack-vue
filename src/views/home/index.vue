<template>
  <div class="news" ref="newsRef">
    <div class="logoTitle">
    <div class="cont">
      <!-- <img src="http://wb.sznews.com/tqPad/webimages/pic01.png" alt=""> -->
      <img src="http://wb.sznews.com/tqPad/webimages/pic-logo.jpg" alt="">
    </div>
  </div>
   <div class="top-cont">
    <h1 class="title">龙光社区长青老年大学秋季开课啦</h1>
    <span class="desc">时间：2023-09-10 21:08未知 编辑:乐小编</span>
    <p class="line"></p>
   </div>
   <div class="text-cont">
    <p class="cont-item">有一种快乐，是重走青春岁月，有一种精神，叫活到老学到老。在这个满载收获的季节，南山区桃源街道办龙光社区长青老年大学秋季学期如约而至。</p>
    <p class="cont-item">9月11日一大早，在欢快的气氛中，新老学员们开始有序进入校园。一个个矫健的身姿、一串串爽朗的笑声……沉寂了两个月的校园再次热闹起来。老友相聚总有说不完的话，新学员相识，从此又多了“老”朋友，师生们互相分享着暑期见闻，整个校园里充满了欢声笑语。</p>
    <img src="@/assets/shenzhenxinwen/szwb1.png" alt="">
    <p class="cont-item">“大思政课”暨“开学第一课”正式开讲，为深入学习宣传贯彻党的二十大精神，充分发挥市老年干部大学政治教育主阵地作用，推动老干部工作高质量发展，以“学习宣传贯彻党的二十大精神”为题，结合全国两会精神，围绕国家高质量发展的顶层设计、把握高质量发展的时代机遇、以学员们便于理解、容易接受的形式对党的二十大精神做了深入浅出的讲解，进一步激发了学员们学习贯彻党的二十大精神的热情。学员们纷纷表示，此次学习对全面理解和把握中国式现代化与深圳高质量发展有了更加深刻的认识和启发。</p>
    <img src="@/assets/shenzhenxinwen/szwb2.png" alt="">
    <p class="cont-item">本学期，根据学员需求，开设了书法、舞蹈、太极、二胡、声乐五门课程。招生消息一经发布，立刻吸引了广大新老学员的关注。短短几天，5个班就全部报满。经过暑假的休整，师生们也精神饱满、激情澎湃，很快就进入了学习状态。书法教室里，笔走龙蛇、挥毫泼墨；二胡教室内，一把琴弓变身灵魂的魔杖；舞蹈教室内，婀娜的身姿翩翩起舞，仿佛整个世界都已在足下</p>
    <img src="@/assets/shenzhenxinwen/szwb3.png" alt="">
    <p class="cont-item">接下来，我校还将深入调研、细化学员需求，打造高质量课程体系。为提升老年教育教学标准化水平，丰富老年教育教研内涵，积极开展老年教育教学体系，系统性和学科化探索。在这个暑假里，市老年大学的教职员工们也在为新的学期积蓄力量。8月1日-8月23日，2023年长青老龄大学“师资认证”培训在宝安、大鹏举行，针对全市“市—区—街—社”长青老龄大学教师进行专业化、系统性培训。提升广大干部职工的理论水平、业务能力，不断提高我校教学管理水平。此外，新学期已经开启，新梦想就此启航。让我们祝愿所有的学员在终身学习的道路上孜孜以求、笃定前行，圆青春梦想，乐享幸福晚年。</p>
   </div>
   <div class="tips">[责任编辑：乐小编]</div>
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
