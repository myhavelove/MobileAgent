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
    <view>


    </view>


    </view>

</template>
<script>
export default {
   data(){
       return{

       }
   } ,
   methods: {
    //    搜索
      searchTap(){

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
  padding: 20upx 30upx 0upx;
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
</style>