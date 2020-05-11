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
    <!-- 诊所列表 -->
    <view >
       <view
        v-for="(item, index) in clinicList"
        :key="index"
        hover-class="hover"
        :hover-stay-time="150"
        class="list-box"
        @tap="
          handlerButton"
      >
           <view class="list-item">

          <view class="item-box">
            <view class="fl fl_item_box">
              <!-- 诊所名称 -->
              <view class="item-title">
                <view class="item-one-flr">
                  <span class="">{{ item.clinicName }}</span>
                </view>
          
              </view>
                <!-- 诊所状态 -->
              <view class="fl fr_item_box">
                <span class="fr start_item">
                  {{ item.type }}
                </span>
              </view>
              <!-- 操作 -->
                <view class="fl fr_item_type">
                 <button v-if="item.operation==1" class="xj-btn xj-btn-small xj-green" hover-class="tui-primary-hover">开通</button>
                  <button v-if="item.operation==2" class="xj-btn xj-btn-small xj-green" hover-class="tui-primary-hover">暂停</button>

              </view>
            </view>
          </view>
        </view>

      </view>

    </view>


    </view>

</template>
<script>
export default {
   data(){
       return{
         clinicList:[
           {
             clinicName:"如皋贾平口腔门诊部",
             type:"待审核",
             operation:2
           }, {
             clinicName:"深圳慧杰口腔门诊部",
             type:"开通",
             operation:1
           }, {
             clinicName:"光泽肖超口腔诊所",
             type:"暂停",
             operation:2
           }, {
             clinicName:"中华口腔",
             type:"待审核",
             operation:1
           }, {
             clinicName:"颜氏牙科",
             type:"暂停",
             operation:2
           }, {
             clinicName:"萧县交通口腔诊所",
             type:"开通",
             operation:1
           }
         ]
       }
   } ,
   methods: {
    //    搜索
      searchTap(){

      } ,
      // 操作
      handlerButton(){
          uni.navigateTo({
        url: "detailsClinic"
      });
      }
   }
}
</script>
<style scoped>
/* 搜索功能 */

.search-bar {
  display: flex;
  align-items: center;
  position: relative;
  padding: 20upx 30upx 15upx;
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
  width: 50%;

}
.start_item {
  display: block;
color: #ed3f14;
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
  width: 20%;
  padding: 0 10px;
text-align: center;

}
.fr_item_type{
   width:20%;
  padding: 0 10px;
text-align: center;
}
</style>