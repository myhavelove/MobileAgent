<template>
  <view class="center">
    <view
      class="logo"
      @click="goLogin"
      :hover-class="!login ? 'logo-hover' : ''"
    >
      <image
        class="logo-img"
        :src="login ? uerInfo.avatarUrl : avatarUrl"
      ></image>
      <view class="logo-title">
        <text class="uer-name"
          >Hi，{{ login ? uerInfo.name : "您未登录" }}</text
        >
        <text class="go-login navigat-arrow" v-if="!login"></text>
      </view>
    </view>

     <!-- 功能菜单 -->
    <iv-list-view class="xz-list-view">
      <iv-list-cell @click="inforClick" :arrow="true" class="xz-list">
        <iv-icon name="people-fill" class="icon-llsi" color="#ff7900"></iv-icon>
        <view class="xz-list-cell-name">个人信息</view>
      </iv-list-cell>
      <iv-list-cell @click="pwdClick" :arrow="true" class="xz-list">
        <iv-icon name="pwd" class="icon-llsi" color="#46bec1"></iv-icon>
        <view class="xz-list-cell-name">密码修改</view>
      </iv-list-cell>
    </iv-list-view>



    <button class="btn-logout">退出登录</button>
  </view>
</template>

<script>
import ivListView from "@/components/list-view/list-view";
import ivListCell from "@/components/list-cell/list-cell";
import ivIcon from "@/components/icon/icon";
export default {
  components: { ivListView, ivListCell, ivIcon },
  data() {
    return {
      login: false,
      avatarUrl: "../../static/images/personalInfor/user-image.png",
      uerInfo: {},
    };
  },
  methods: {
    goLogin() {
      if (!this.login) {
         uni.navigateTo({
        url: "../login/index",
      });
      }
    },
    pwdClick() {
      uni.navigateTo({
        url: "modify",
      });
    },
    inforClick() {
      uni.navigateTo({
        url: "infor",
      });
    },
  },
};
</script>

<style>


page {
  background-color: #f8f8f8;
}

.center {
  flex-direction: column;
}

.logo {
  width: 750upx;
  height: 240upx;
  padding: 20upx;
  box-sizing: border-box;
  background-color: #2ea8ab;
  flex-direction: row;
  align-items: center;
  display: flex;

}

.logo-hover {
  opacity: 0.8;
}

.logo-img {
  width: 150upx;
  height: 150upx;
  border-radius: 150upx;
}

.logo-title {
  height: 150upx;
  flex: 1;
  line-height: 150upx;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 20upx;
}

.uer-name {
  height: 60upx;
  line-height: 60upx;
  font-size: 28upx;
  color: #ffffff;
}

.go-login.navigat-arrow {
  font-size: 28upx;
  color: #ffffff;
}

.login-title {
  height: 150upx;
  align-items: self-start;
  justify-content: center;
  flex-direction: column;
  margin-left: 20upx;
}

/* 菜单 */

/* 菜单列表 */
.xz-list-view {
  position: relative;
  z-index: 1;
}

.xz-list-cell-name {
  padding-left: 20upx;
  vertical-align: middle;
  line-height: 30upx;
}
.xz-list {
  height: 60px;
  width: 100%;
}

.xz-list::after {
  left: 94upx !important;
}


/* 按钮 */
.btn-logout {
  margin-top: 100upx;
  width: 80%;
  border-radius: 50upx;
  font-size: 16px;
  color: #fff;
  background: linear-gradient(to right, #2ea8ab, #2ea8ab);
}

.btn-logout-hover {
  background: linear-gradient(to right, #2ea8ab, #2ea8ab);
}
</style>
