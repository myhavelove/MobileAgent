<template>
  <view class="container">
    <view class="xz-bg-box">
      <image
        src="../../static/images/login/bg_login.png"
        class="tui-bg-img"
      ></image>
      <image src="../../static/images/login/login.png" class="xz-photo"></image>
    </view>
    <view class="box_form">
      <view class="form-box">
        <form @submit="formLogin">
          <view class="tui-login-from">
            <view class="tui-line-cell">
              <iv-icon name="people" :size="20" color="#2ea8ab"></iv-icon>
              <input
                placeholder-class="phcolor"
                class="tui-input"
                name="username"
                placeholder="请输入账号"
                maxlength="11"
                v-model="form.username"
                type="number"
              />
            </view>
            <view class="tui-line-cell tui-top28">
              <iv-icon name="pwd" :size="20" color="#2ea8ab"></iv-icon>
              <input
                placeholder-class="phcolor"
                class="tui-input"
                name="smsCode"
                v-model="form.password"
                placeholder="请输入密码"
                type="password"
              />
            </view>
            <button
              class="btn-primary tui-btn-submit"
              hover-class="btn-hover"
              form-type="submit"
            >
              {{ btn }}
            </button>
          </view>
        </form>
      </view>
     
    </view>
  </view>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import IvIcon from "@/components/icon/icon";
import IvButton from "@/components/button/button";
import IvTabs from "@/components/tui-tabs/tui-tabs";
const util = require("@/utils/util.js");
export default {
  components: {
    IvIcon,
    IvButton,
    IvTabs
  },
  data() {
    return {
      disabled: false,
      form: {
        username: "", //手机号
        password: "", //密码
      },
      type: "primary",

      currentTab: 0,
      btn: "登录" //登录按钮样式
    };
  },
  methods: {
    ...mapMutations(["login"]),
    // 账号密码
    async formLogin() {
           let _this = this;
      if (_this.form.username=='') {
        _this.xjzj.toast("请输入账号");
        return;
      }  else if (_this.form.password=='') {
        _this.xjzj.toast("请输入密码");
        return;
      }
      // _this.btn = "请稍等...";
      let postDate = {
        UserName: _this.form.username,
        SmsCode: _this.form.password,
      };
          uni.navigateTo({
                url: "../index/index"
              });
      // _this.xjzj.request('/api/Login/CheckLogin',postDate,'POST',true,false).then(res=>{

      // }).catch(err=>{

      // })
    },
  }
};
</script>

<style scoped>
page {
  background: #fff;
}
.container {
  background: #fff !important;
  margin-top: -5px;
}
.xz-bg-box {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  min-height: 220px;
}
.tui-bg-img {
  width: 100%;
  height: 225px;
  position: absolute;
  top: 0;
}
.xz-photo {
  height: 40px;
  width: 160px;
  display: block;
  margin: 5px auto 0 auto;
  position: relative;
  z-index: 2;
  top: 42px;
}

.xz-bg-img {
  width: 100%;
  height: 173px;
  display: block;
  position: absolute;
  top: 0;
}
.box_form {
  position: relative;
  top: -80px !important;
  background: #fff;
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px #ded3d3;
  border: 1px solid #ecefec;
}
.tui-tabs-view {
  position: relative;
  margin-bottom: 10px;
  width: 88%;
  margin: 0 auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.tui-login-from {
  width: 100%;
  padding: 28px 25px 0 25px;
  box-sizing: border-box;
}

.tui-input {
  font-size: 32upx;
  flex: 1;
  display: inline-block;
  padding-left: 32upx;
  box-sizing: border-box;
  overflow: hidden;
}
.form-box {
  width: 88%;
  position: relative;
  /* top: -81px; */
  z-index: 1;
  background: #fff;
  margin: 0 auto;
}
.tui-line-cell {
  padding: 27upx 0;
  display: -webkit-flex;
  display: flex;
  -webkiit-align-items: center;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.tui-line-cell::after {
  content: "";
  position: absolute;
  border-bottom: 1upx solid #e0e0e0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  bottom: 0;
  right: 0;
  left: 0;
}

.tui-top28 {
  margin-top: 28upx;
}

.tui-btn-class {
  width: 196upx !important;
  height: 48upx !important;
  border-radius: 27upx !important;
  font-size: 28upx !important;
  padding: 0 !important;
  line-height: 54upx !important;
}

.tui-btn-submit {
  margin-top: 100upx;
  background: #45afa4;
  color: #fff;
}

.tui-protocol {
  color: #333;
  font-size: 24upx;
  text-align: center;
  width: 100%;
  margin-top: 29upx;
}

.login-green {
  color: green;
}
.login-blue {
  color: blue;
}
</style>
