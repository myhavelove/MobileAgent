<template>
  <view class="content">
    <view class="arr_box">
      <view class="tui-cell-class tui-list-cell tui-line-left">
        <view class="xz-title">登录账号</view>
        <view class="name-bottom">
          <input
            v-model="clinicDetail.loginNumber"
            class="input-text"
            disabled
          />
        </view>
      </view>
      <view class="tui-cell-class tui-list-cell tui-line-left">
        <view class="xz-title">诊所名称</view>
        <view class="name-bottom">
          <input
            v-model="clinicDetail.clinicName"
            class="input-text"
            disabled
          />
        </view>
      </view>
      <view class="tui-cell-class tui-list-cell tui-line-left">
        <view class="xz-title">负责人</view>
        <view class="name-bottom">
          <input v-model="clinicDetail.adminName" class="input-text" disabled />
        </view>
      </view>
      <view class="tui-cell-class tui-list-cell tui-line-left">
        <view class="xz-title">联系方式</view>
        <view class="name-bottom">
          <input v-model="clinicDetail.Phone" class="input-text" disabled />
        </view>
      </view>
      <view class="tui-cell-class tui-list-cell tui-line-left">
        <view class="xz-title">区域</view>
        <view class="name-bottom">
          <input v-model="clinicDetail.region" class="input-text" disabled />
        </view>
      </view>
      <view class="tui-cell-class tui-list-cell tui-line-left">
        <view class="xz-title">地址</view>
        <view class="name-bottom">
          <input v-model="clinicDetail.address" class="input-text" disabled />
        </view>
      </view>
         <view class="xz-title">案例统计</view>
         <view class="no-bad-table-wrap">
        <iv-table :columns="columns" :list="clinicDetail.totalStatistics"  row-class-name="rowClassName"></iv-table>

         </view>

    </view>
  </view>
</template>
<script>
import ivTable from "@/components/table/table.vue";
export default {
  components: { ivTable },
  data() {
    return {
      // 诊所详情
      clinicDetail: {
        loginNumber: "XJZJ20040039", //登录账户
        clinicName: "深圳菲尔齿科门诊部	", //诊所名称
        adminName: "林素仍", //负责人
        Phone: "13715184608", //手机号
        region: "广东省深圳市盐田区", //所属区域
        address: "一海街壹海城一层20号菲尔齿科", //地址
        totalStatistics: [{
          orthodontics: '73',
          Positive6: "22",
          repair: "30",
          plant: "23",
        }], //案例总统计
      },
      columns: [
        {
          title: "正畸案例",
          key: "orthodontics",
          $width:"80px"
        },
        {
          title: "正6案例",
          key: "Positive6",
          $width:"80px"
        },
        {
          title: "修复案例",
          key: "repair",
          $width:"80px"
        },
        {
          title: "种植案例",
          key: "plant",
          $width:"80px"
        },
      ],
    };
  },
};
</script>
<style scoped>
page {
  background: #fff;
}
.arr_box {
  background: #fff;
  padding-bottom: 20px;
}
.xz-title {
  line-height: 32rpx;
  flex-shrink: 0;
  padding-right: 15px;
  padding: 10px;
  font-size: 14px;
}
.tui-list-cell {
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 15px;
}
.tui-list-cell:after {
  content: "";
  position: absolute;
  left: 24px;
  top: auto;
  bottom: 0;
  right: auto;
  height: 1px;
  width: 90%;
  background-color: #f4f4f4;
}
.input-text {
  width: 100%;
  text-align: right;
  color: #999;
}
.name-bottom {
  width: 100%;
}
.xz-table{
  font-size: 12px;
    line-height: 45px;
}
.no-bad-table-wrap{
  width: 90%;
  margin: 0 auto;
}
</style>
