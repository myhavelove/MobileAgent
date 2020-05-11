<template>
  <view class="content">
    <form>
      <view class="cu-form-group margin-top">
        <view class="title">登录账号</view>
        <input
          v-model="form.loginNumber"
          class="uni-input-input"
          name="input"
        />
      </view>
      <view class="cu-form-group margin-top">
        <view class="title">设置密码</view>
        <input
          v-model="form.password"
          class="uni-input-input"
          name="input"
          type="password"
        />
      </view>
      <view class="cu-form-group margin-top">
        <view class="title">确认密码</view>
        <input
          v-model="form.confirmPwd"
          class="uni-input-input"
          name="input"
          type="password"
        />
      </view>

      <view class="cu-form-group margin-top">
        <view class="title">诊所名称</view>
        <input v-model="form.clinicName" class="uni-input-input" name="input" />
      </view>
      <view class="cu-form-group margin-top">
        <view class="title">负责人姓名</view>
        <input v-model="form.adminName" class="uni-input-input" name="input" />
      </view>
      <view class="cu-form-group margin-top">
        <view class="title">联系方式</view>
        <input v-model="form.Phone" class="uni-input-input" name="input" />
      </view>
      <view class="cu-form-group margin-top">
        <view class="title">诊所地址</view>
        <view class="search-box">
          <view class="s-input s-select" @tap="showPicker">
            <text class="text wid27">{{ text[0] }}</text>
            <image
              src="../../static/images/index/icon_right.png"
              class="img30 pdr20"
            ></image>
            <text class="text wid27">{{ text[1] }}</text>
            <image
              src="../../static/images/index/icon_right.png"
              class="img30 pdr20"
            ></image>
            <text class="text wid46">{{ text[2] }}</text>
            <image
              src="../../static/images/index/icon_down.png"
              class="img32 flr"
            ></image>
          </view>
        </view>
      </view>
      <view class="cu-form-group margin-top">
        <view class="title">所属代理</view>
        <input
          v-model="form.clinicAgent"
          class="uni-input-input"
          name="input"
        />
      </view>
      <view class="button-ui">
        <button class="cu-btn block button-color margin-tb-sm lg">
          <text class="cuIcon-loading2 cuIconfont-spin"></text> 加载
        </button>
      </view>
    </form>

    <!--picker-view start-->
    <view
      class="tui-mask-screen"
      :class="[showPickerStatus ? 'tui-mask-show' : '']"
      @tap="hidePicker"
    ></view>
    <view
      class="tui-picker-box"
      :class="[showPickerStatus ? 'tui-pickerbox-show' : '']"
    >
      <view class="picker-header list-item">
        <view
          class="btn-cancle"
          hover-class="opcity"
          :hover-stay-time="150"
          @tap.stop="hidePicker"
          >取消</view
        >
        <view
          class="btn-sure"
          hover-class="opcity"
          :hover-stay-time="150"
          @tap.stop="picker"
          >确定</view
        >
      </view>
      <picker-view
        indicator-style="height: 50px;"
        class="picker-view"
        :value="value"
        @change="columnPicker"
      >
        <picker-view-column>
          <view v-for="(item, index) in proviceArr" :key="index" class="item">{{
            item
          }}</view>
        </picker-view-column>
        <picker-view-column>
          <view v-for="(item, index) in cityArr" :key="index" class="item">{{
            item
          }}</view>
        </picker-view-column>
        <picker-view-column>
          <view
            v-for="(item, index) in districtArr"
            :key="index"
            class="item"
            >{{ item }}</view
          >
        </picker-view-column>
      </picker-view>
    </view>
    <!--picker-view end-->
  </view>
</template>
<script>
const cityData = require("@/utils/picker.city.js");
export default {
  data() {
    return {
      form: {
        loginNumber: "XJZS2923124",
        password: "", //输入密码
        confirmPwd: "", //确认密码
        clinicName: "", //诊所名称
        adminName: "林素仍", //负责人
        Phone: "13715184608", //手机号
        clinicAgent: "", //诊所代理
      },
      proviceArr: [],
      cityArr: [],
      districtArr: [],
      value: [0, 0, 0],
      iconHidden: true,
      showPickerStatus: false,
      text: ["请选择", "请选择", "请选择"],
    };
  },
  onLoad: function () {
    //初始化数据
    this.proviceArr = this.toArr(cityData);
    this.cityArr = this.toArr(cityData[0].city);
    this.districtArr = this.toArr(cityData[0].city[0].area);
  },
  methods: {
    toArr(object) {
      let arr = [];
      for (let i in object) {
        arr.push(object[i].name);
      }
      return arr;
    },
    //picker change切换事件
    columnPicker: function (e) {
      let value = e.detail.value;
      //如果两者下标不一致，表示滚动过
      if (this.value[0] !== value[0]) {
        this.proviceArr = this.proviceArr;
        this.cityArr = this.toArr(cityData[value[0]].city);
        this.districtArr = this.toArr(cityData[value[0]].city[0].area);
        this.value = [value[0], 0, 0];
      } else if (this.value[1] !== value[1]) {
        this.proviceArr = this.proviceArr;
        this.cityArr = this.cityArr;
        this.districtArr = this.toArr(
          cityData[value[0]].city[value[1]].area
        );
        this.value = [value[0], value[1], 0];
      } else {
        this.value = value;
      }
    },
    //确定按钮
    picker: function (e) {
      let value = this.value;
      if (cityData.length > 0) {
        let provice = cityData[value[0]].name;
        let city = cityData[value[0]].city[value[1]].name;
        let district =
          cityData[value[0]].city[value[1]].area[value[2]].name;
        this.text = [provice, city, district];
        this.showPickerStatus = false;
      }
    },
    // 显示picker-view
    showPicker: function () {
      this.showPickerStatus = true;
    },
    // 隐藏picker-view
    hidePicker: function () {
      this.showPickerStatus = false;
    },
    //input事件
    bindViewInput: function (e) {
      //e.detail.value
      let hidden = true;
      if (e.detail.value != "") {
        hidden = false;
      }
      this.iconHidden = hidden;
      this.searchKey = e.detail.value;
    },
    resetInput: function (e) {
      this.searchKey = "";
      this.iconHidden = true;
    },
  },
};
</script>

<style scoped>
.margin-top {
  margin-top: 5px;
}
.cu-form-group + .cu-form-group {
  border: 0;
}
.button-ui {
  padding: 10px;
}
.button-color {
  background: #2ea8ab;
  color: #fff;
}
.img30 {
  height: 30upx;
  width: 30upx;
}
.img32 {
  height: 32upx;
  width: 32upx;
}
/* picker start*/

.tui-mask-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99996;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}

.tui-mask-show {
  opacity: 1;
  visibility: visible;
}

.tui-picker-box {
  width: 100%;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  visibility: hidden;
  transform: translate3d(0, 100%, 0);
  transform-origin: center;
  transition: all 0.3s ease-in-out;
  min-height: 20rpx;
  background: #fff;
}

.tui-pickerbox-show {
  transform: translate3d(0, 0, 0);
  visibility: visible;
}

.picker-header {
  width: 100%;
  height: 90upx;
  padding: 0 46upx;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  font-size: 32upx;
  background: #fff;
}

.list-item::after {
  left: 0;
}

.btn-cancle {
  padding: 20upx;
  color: #888;
}

.btn-sure {
  padding: 20upx;
  color: #5677fc;
}

.picker-view {
  width: 100%;
  height: 260px;
}

.item {
  line-height: 50px;
  text-align: center;
}

/* picker end*/
</style>
