<template>
  <view>
    <iv-page-body type="top">
      <iv-transition name="fade-up">
        <view class="modify">
          <view class="modify-password">
            <iv-input v-model="mobile.passwordOne" type="password" displayable maxlength="26" placeholder="请输入新密码"></iv-input>
          </view>
          <view class="modify-password">
            <iv-input v-model="mobile.passwordTwo" type="password" maxlength="26" placeholder="请再次确认新密码"></iv-input>
          </view>
          <button class="btn-modify" :class="modifyMobile ? 'btn-modify-active':''" :disabled="!modifyMobile"
            hover-class="btn-modify-hover" @tap="fnModify">提交</button>
        </view>
      </iv-transition>
    </iv-page-body>
  </view>
</template>

<script>
  import ivPageBody from "@/components/cmd-page-body/cmd-page-body.vue"
  import ivTransition from "@/components/cmd-transition/cmd-transition.vue"
  import ivInput from "@/components/cmd-input/cmd-input.vue"

  export default {
    components: {
      ivPageBody,
      ivTransition,
      ivInput
    },

    data() {
      return {
        mobile: {
          passwordOne: '',
          passwordTwo: ''
        },
        passwordReg: /^\w+$/,
        safety: {
          time: 60,
          state: false,
          interval: ''
        },
        modifyMobile: false
      };
    },

    watch: {
      /**
       * 监听表单数值
       */
      mobile: {
        handler(newValue) {
          if (newValue.passwordOne.length >= 8 &&
            newValue.passwordOne == newValue.passwordTwo) {
            this.modifyMobile = true;
          } else {
            this.modifyMobile = false;
          }
        },
        deep: true
      }
    },

    methods: {
      /**
       * 提交按钮点击执行
       */
      fnModify() {
        console.log(JSON.stringify(this.mobile));
      },
    },

    beforeDestroy() {
      /**
       * 关闭页面清除轮询器
       */
      clearInterval(this.safety.interval);
    }
  }
</script>

<style>
  .modify {
    margin-top: 118upx;
    margin-right: 72upx;
    margin-left: 72upx;
  }

  .modify-phone {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2upx #dedede solid;
    margin-top: 118upx;
    margin-bottom: 40upx;
  }

  .modify-phone-getcode {
    color: #3F51B5;
    text-align: center;
    min-width: 140upx;
  }

  .modify-password,
  .modify-code {
    margin-bottom: 40upx;
    border-bottom: 2upx #dedede solid;
  }

  .btn-modify {
    margin-top: 100upx;
    border-radius: 50upx;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(to right, #2ea8ab, #2ea8ab);
  }

  .btn-modify-active {
    background: linear-gradient(to right, #2ea8ab, #2ea8ab);
  }

  .btn-modify-hover {
    background: linear-gradient(to right, #2ea8ab, #2ea8ab);
  }

  button[disabled] {
    color: #fff;
  }
</style>
