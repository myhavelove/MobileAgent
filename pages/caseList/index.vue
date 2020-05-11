<template>
  <view class="content">
    <!-- 搜索11 -->
    <view class="search-bar">
      <view class="search-bar-form">
        <view class="search-bar-box">
          <!-- #ifdef APP-PLUS || MP-->
          <icon class="icon-search-in-box" type="search" :size="16"></icon>
          <!-- #endif -->
          <input
            confirm-type="search"
            class="search-bar-input"
            placeholder="请输入诊所编号/诊所名称"
            placeholder-class="phcolor"
            v-model="inputVal"
            @confirm="searchTap"
          />
          <view class="icon-clear" v-if="inputShowed" @tap="clearInput">
            <!-- #ifdef APP-PLUS || MP-->
            <icon type="clear" :size="15"></icon>
            <!-- #endif -->
          </view>
        </view>
      </view>
      <button class="btn-primary" hover-class="btn-hover" @tap="searchTap">
        搜索
      </button>
    </view>
    <!-- 搜索 -->
    <iv-tabs
      :tabs="navbar"
      :currentTab="currentTab > 1 ? 0 : currentTab"
      @change="change"
      itemWidth="50%"
    ></iv-tabs>
    <!-- 诊所列表 -->
    <view v-if="currentTab === 0" style="margin-top: 33px;">
      <view
        v-for="(item, index) in dataList"
        :key="index"
        hover-class="hover"
        :hover-stay-time="150"
        class="list-box"
      >
        <view class="list-item">

          <view class="item-box">
            <view class="fl fl_item_box">
              <!-- 患者姓名/案例号 -->
              <view class="item-title">
                <view class="item-one-flr">
                  <span class="">{{ item.PatientName }}</span>
                </view>
                <view class="item-tow-time">
                  <span class="fl">{{ item.CaseCode }}</span
                  >&nbsp;
                </view>
          
              </view>
                <!-- 诊所名称 -->
              <view class="fl fr_item_box">
                <span class="fr start_item">
                  {{ item.clinicName }}
                </span>
              </view>
                <!-- 类型 -->
               <view class="fl fr_item_type">
                <span class="fr start_item">
                  {{ item.type }}
                </span>
              </view>
              <!-- 操作 -->
                <view class="fl fr_item_type">
                 <button v-if="item.operation==1" class="xj-btn xj-btn-small xj-green" hover-class="tui-primary-hover">通过</button>
                  <view v-if="item.operation==2" class="fr start_item">
                  已通过
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view v-if="currentTab === 1" style="margin-top: 33px;">
      <view
        v-for="(item, index) in repairList"
        :key="index"
        hover-class="hover"
        :hover-stay-time="150"
        class="list-box"
      >
           <view class="list-item">

          <view class="item-box">
            <view class="fl fl_item_box">
              <!-- 患者姓名/案例号 -->
              <view class="item-title">
                <view class="item-one-flr">
                  <span class="">{{ item.PatientName }}</span>
                </view>
                <view class="item-tow-time">
                  <span class="fl">{{ item.CaseCode }}</span
                  >&nbsp;
                </view>
          
              </view>
                <!-- 诊所名称 -->
              <view class="fl fr_item_box">
                <span class="fr start_item">
                  {{ item.clinicName }}
                </span>
              </view>
                <!-- 类型 -->
               <view class="fl fr_item_type">
                <span class="fr start_item">
                  {{ item.type }}
                </span>
              </view>
              <!-- 操作 -->
                <view class="fl fr_item_type">
                 <button v-if="item.operation==1" class="xj-btn xj-btn-small xj-green" hover-class="tui-primary-hover">通过</button>
                  <view v-if="item.operation==2" class="fr start_item">
                  已通过
                </view>
              </view>
            </view>
          </view>
        </view>

      </view>
    </view>
  </view>
</template>
<script>
import ivTabs from "@/components/tui-tabs/tui-tabs";
	import ivButton from "@/components/button/button";

export default {
  components: {
    ivTabs,ivButton
  },
  data() {
    return {
      //  tab参数
      currentTab: 0, //当前案例
      navbar: [
        {
          name: "正畸/正6",
        },
        {
          name: "修复种植",
        },
      ],
      // 正畸案例
      dataList: [{
        CaseCode:"AL12345622",
        PatientName:"方黑豆",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"正畸简单案例",
        operation:1
      },
      {
        CaseCode:"AL12345623",
        PatientName:"方黑花",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"正6",
        operation:2
      },{
        CaseCode:"AL12345624",
        PatientName:"方黑呀",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"正畸简单案例",
        operation:1
      },{
        CaseCode:"AL12345625",
        PatientName:"方黑丫",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"正畸复杂案例",
        operation:2
      },{
        CaseCode:"AL12345626",
        PatientName:"张蓝莓",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"正畸简单案例",
        operation:1
      },{
        CaseCode:"AL12345627",
        PatientName:"方二月",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"正畸简单案例",
        operation:2
      }],
      // 修复案例
      repairList:[{
        CaseCode:"AL12345622",
        PatientName:"方黑豆",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"修复",
        operation:1
      },
      {
        CaseCode:"AL12345623",
        PatientName:"方黑花",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"种植",
        operation:2
      },{
        CaseCode:"AL12345624",
        PatientName:"方黑呀",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"修复",
        operation:1
      },{
        CaseCode:"AL12345625",
        PatientName:"方黑丫",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"种植",
        operation:2
      },{
        CaseCode:"AL12345626",
        PatientName:"张蓝莓",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"修复",
        operation:1
      },{
        CaseCode:"AL12345627",
        PatientName:"方二月",
        clinicName:'孝感市开发区杨志勇口腔',
        type:"种植",
        operation:2
      }]
    };
  },
  methods: {
    // tab切换
    change(e) {
      this.currentTab = e.index;
    },
    //    搜索
    searchTap() {},
  },
};
</script>
<style scoped>
/* 搜索功能 */

.search-bar {
  display: flex;
  align-items: center;
  position: relative;
  padding: 20upx 30upx 10upx;
  background-color: #fff;
  /* box-shadow: 0 2px 2px #ccc;*/
}

.search-bar-form {
  flex: 1;
  position: relative;
  border-radius: 32upx;
  background: #f2f5f7;
}

.search-bar-box {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 20upx;
  padding-right: 20upx;
  height: 64upx;
  z-index: 1;
}

.search-bar-input {
  line-height: normal;
  width: 100%;
  padding-left: 20upx;
  font-size: 30upx;
  color: #333;
}
.btn-primary {
  height: 62upx;
  width: 122upx;
  font-size: 30upx;
  line-height: 62upx;
  margin-left: 30upx;
  background: linear-gradient(-90deg, #1fc4d7, #1fc4d7);
  border-radius: 22px;
  color: #fff;
}

/* 列表 */
.list-box {
  background: #fff;
  position: relative;
  overflow: hidden;
  margin-top: 2px;
}
.list-item {
  padding: 30upx 30upx;
  display: flex;
  align-items: item;
  margin-bottom: 5px;
}


.item-box {
  flex: 1;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item-title {
  font-size: 32upx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  float: left;
  text-align: center;
  width: 150upx;

}
.item-tow-time {
  color: #616e6e;
 font-size: 12px;
  margin-top: 5px;
  height: 15px;

}
.start_item {
  display: block;
color: #616e6e;
font-size: 13px;
width: 100%;
}
.fl_item_box{
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}
.fr_item_box{
  width: 200upx;
  padding: 0 10px;
text-align: center;

}
.fr_item_type{
   width:165rpx;
  padding: 0 10px;
text-align: center;
}
</style>
