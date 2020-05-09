<template>
  <view class="content">
    <!--banner-->
    <view class="xz-banner-box">
      <swiper
        :indicator-dots="true"
        :autoplay="true"
        :interval="5000"
        :duration="150"
        class="xz-banner-swiper"
        :circular="true"
        indicator-color="rgba(255, 255, 255, 0.8)"
        indicator-active-color="#fff"
      >
        <swiper-item
          v-for="(item, index) in banner"
          :key="index"
          class="xz-banner-item"
        >
          <image
            :src="item.ImagerUrl"
            class="xz-slide-image"
            mode="scaleToFill"
            @tap="newsUrl(item.NewsUrl)"
          />
        </swiper-item>
      </swiper>
    </view>

    <!--banner-->
    <!-- 统计图 -->
    <iv-section title="数据统计" type="line"></iv-section>
    <view class="table">
      <iv-table :tableData="tableData" :title="title" align="center" titleBg="#eee"></iv-table>
    </view>
    <!-- 统计图结束 -->
    <!-- 菜单盒子 -->
    <iv-section title="工作台" type="line"></iv-section>
    <view class="example-menu">
      <iv-grid
        :column="3"
        :show-border="false"
        :highlight="true"
        @change="menuChange"
      >
        <iv-grid-item
          v-for="(item, index) in menuList"
          :index="index"
          :key="index"
        >
          <view class="grid-item-box">
            <image :src="item.url" class="image" mode="aspectFill" />
            <text class="text">{{ item.text }}</text>
          </view>
        </iv-grid-item>
      </iv-grid>
    </view>
    <!-- 菜单模型 -->
  </view>
</template>

<script>
import ivSection from "@/components/uni-section/uni-section.vue";
import ivTable from '@/components/table/portrait_table.vue'
import ivGrid from "@/components/grid/uni-grid";
import ivGridItem from "@/components/grid-item/uni-grid-item";
export default {
  components: { ivGrid, ivGridItem, ivSection,ivTable },
  data() {
    return {
      imgUrl: "",
      banner: [
        {
          ImagerUrl: "../../static/images/index/banner/1.png",
          NewsUrl: "",
        },
        {
          ImagerUrl: "../../static/images/index/banner/2.png",
          NewsUrl: "",
        },
        {
          ImagerUrl: "../../static/images/index/banner/1.png",

          NewsUrl: "",
        },
      ],
      menuList: [
        {
          url: "../../static/images/index/manage_clinic.png",
          text: "诊所管理",
        },
        {
          url: "../../static/images/index/add_clinic.png",
          text: "创建诊所",
        },
        {
          url: "../../static/images/index/data_clinic.png",
          text: "数据看板",
        },
      ],
      //表头
      title:[
        {
					label: '类型',
					value: 'name'
				},
        {
					label: '当前使用数量',
					value: 'current'
        },
         {
					label: '累计使用数量',
					value: 'cumulative'
        },
         {
					label: '剩余优惠数量',
					value: 'surplus'
				},
      ],
      // table数据展示
      tableData:[
        {
					name:'简单案例',
					current:'2',
					cumulative:18,
					surplus:'22'
        },
        {
					name:'中等案例',
					current:'3',
					cumulative:18,
					surplus:'22'
        },
        {
					name:'复杂案例',
					current:'4',
					cumulative:18,
					surplus:'33'
        },
        {
					name:'正6',
					current:'11',
					cumulative:18,
					surplus:'33'
				},
      ]
    };
  },
  onLoad() {},
  methods: {
    // 菜单盒子页面
    menuChange(e){
       let {
					index
				} = e.detail
				this.menuList[index].badge && this.menuList[index].badge++
        if(index==0){
          this.tapManage();
          return false;
        }else if(index==1){
          this.tapAdd();
          return false;
        }else if(index==2){
          this.tapData();
          return false;
        }
    },
    // 诊所管理
    tapManage(){
        uni.navigateTo({
        url: "manageClinic"
      });
    },
        // 诊所管理
    tapAdd(){
        uni.navigateTo({
        url: "addClinic"
      });
    },
        // 诊所管理
    tapData(){
        uni.navigateTo({
        url: "dataClinic"
      });
    }
  },
};
</script>

<style>
/*banner*/

.fl {
  float: left;
}
.xz-banner-box {
  width: 100%;
  padding-top: 20rpx;
  box-sizing: border-box;
  background: #fff;
  padding-bottom: 20rpx;
}

.xz-banner-swiper {
  width: 100%;
  height: 290rpx;
}

.xz-banner-item {
  padding: 0 16rpx;
  box-sizing: border-box;
}

.xz-slide-image {
  width: 100%;
  height: 290rpx;
  display: block;
  border-radius: 12rpx;
  /* transition: all 0.1s linear; */
}

.xz-banner-scale {
  transform: scaleY(0.9);
  transform-origin: center center;
}
.table{
  padding-top: 3px;
}
/* 九宫格 */
.example-menu {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  font-size: 14px;
  background-color: #ffffff;
}
.grid-item-box {
  flex: 1;
  /* position: relative;
 */
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
}
.image {
  width: 95rpx;
  height: 95rpx;
}
.text {
  font-size: 26rpx;
  margin-top: 10rpx;
}
</style>
