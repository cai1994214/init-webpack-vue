<template>
  <div class="news" ref="newsRef">
    <div class="logoTitle">
      <div class="cont">
        <i class="img"></i>
      </div>
    </div>
    <div class="top-cont">
      <h1 class="title">结业啦！龙光社区老龄大学2023年度结业典礼暨教学成果汇报演出圆满落幕</h1>
      <span class="desc">时间：2023-11-16 15:21 来源：南方都市报</span>
      <p class="line"></p>
    </div>
    <div class="text-cont">
      <p class="cont-item">
        时光走笔，岁月成章，秋来冬往，别来无恙。在2023年的一年时间里，龙光社区长青老龄大学得到了平台上和各级领导的关心与支持，教学工作取得了巨大的成绩。今天我们欢聚一堂，在龙井村篮球场举办2023年度龙光社区老龄大学的结业典礼暨教学成果汇报演出，共同见证长青老龄大学学员们蓬勃向上的精神风貌和孜孜不倦的学习成果。
   活动伊始，龙光社区长青老龄大学常务校长何楚丽讲话、龙光社区党委副书记许潇为本次活动致辞，并为老师全体学员颁发结业证书，10名学员获评“优秀学员”。
      </p>
      <img src="@/assets/shenzhenxinwen/ds_01.png" alt="" />
      <img src="@/assets/shenzhenxinwen/ds_02.png" alt="" />
      <p class="cont-item">
        学员们纷纷表示，此次活动为大家提供了一个增进情谊、展示自我的平台，很期待之后的课程，会坚持“活到老，学到老”，把晚年生活过得更加精彩有趣
      </p>
      <img src="@/assets/shenzhenxinwen/ds_03.png" alt="" />
      <p class="cont-item">
        太极班带来的表演《新编二十八式太极拳》
      </p>
      <img src="@/assets/shenzhenxinwen/ds_04.png" alt="" />
      <p class="cont-item">龙光社区老年协会带来的舞蹈《我的祖国》</p>
      <img src="@/assets/shenzhenxinwen/ds_05.png" alt="" />
      <p class="cont-item">二胡班的民歌连奏《摘辣椒》、《鄂伦春小唱》</p>
      <img src="@/assets/shenzhenxinwen/ds_06.png" alt="" />
      <p class="cont-item">龙井兰兰健身舞队带来的表演《我把来生许给你》</p>
      <img src="@/assets/shenzhenxinwen/ds_07.png" alt="" />
      <p class="cont-item">行楷隶篆见功夫，书法艺术耀夜空。书法班的《书法展示》</p>
      <img src="@/assets/shenzhenxinwen/ds_08.png" alt="" />
      <p class="cont-item">社区乐陶陶民乐队的伴唱表演《美丽的草原我的家》、民乐合奏《喜洋洋》</p>
      <img src="@/assets/shenzhenxinwen/ds_09.png" alt="" />
      <p class="cont-item">舞蹈班的佳人们带来的古典舞表演《闲庭絮》</p>
      <img src="@/assets/shenzhenxinwen/ds_10.png" alt="" />
      <p class="cont-item">舞出华夏韵味，彰显民族文化，展现东方神韵，彰显中华风采。龙井兰兰健身舞队带来的表演《中国的广场舞》</p>
      <img src="@/assets/shenzhenxinwen/ds_11.png" alt="" />
      <p class="cont-item">龙光快乐夕阳红舞队的表演《喜事盈门》</p>
      <img src="@/assets/shenzhenxinwen/ds_12.png" alt="" />
      <p class="cont-item">声乐班的合唱表演《家乡的月亮》、《八月桂花遍地开》
    出色的节目，展示了我们龙光社区老龄大学的风采，嘹亮的歌声，表达了全校师生无限的热情，曼妙的舞姿,让我们看到了龙光社区长青老龄大学铸就的无数个潇潇洒酒的俏夕阳。“老有所教、老有所学、老有所乐、老有所为在这里得到了最好的诠释。我们祝愿老年教育的明天更加美丽！伟大的祖国永远繁荣昌盛！感谢学校、感谢演员们的精彩演出,感谢对这次活动支持的龙光社区党委、龙光社区居委会，以及龙光社区党群服务中心!祝愿龙光社区长青老龄大学越办越好!祝愿龙光社区长青老龄大学的未来更加灿烂!汇报演出到此结束。朋友们再见！
    </p>
    <img src="@/assets/shenzhenxinwen/ds_13.png" alt="" />
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
