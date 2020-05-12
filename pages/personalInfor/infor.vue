<template>
  <view>
    <iv-page-body type="top">
      <iv-transition name="fade-up">
        <view>
          <iv-cel-item title="姓名" addon="陈桂琴" ></iv-cel-item>
          <iv-cel-item title="登录账号" addon="zhejiang" ></iv-cel-item>
          <iv-cel-item title="省代状态" addon="开通" ></iv-cel-item>
          <iv-cel-item title="省代编码" addon="PA0009" ></iv-cel-item>
          <iv-cel-item title="联系方式" addon="15676109501" ></iv-cel-item>
          <iv-cel-item title="证件号码" addon="450112xxxxxxxx2017" ></iv-cel-item>
          <iv-cel-item title="我的地址" addon="浙江省杭州市萧山区 浙江省杭州市萧山区新街街道海塘路687号1栋5楼" ></iv-cel-item>
       
        </view>
      </iv-transition>
    </iv-page-body>
  </view>
</template>

<script>
  import ivPageBody from "@/components/cmd-page-body/cmd-page-body.vue"
  import ivTransition from "@/components/cmd-transition/cmd-transition.vue"
  import ivCelItem from "@/components/cmd-cell-item/cmd-cell-item.vue"

  export default {
    components: {
      ivPageBody,
      ivTransition,
      ivCelItem
    },

    data() {
      return {};
    },

    mounted() {},
    
    methods:{
      /**
       * 点击触发
       * @param {Object} type 跳转页面名或者类型方式
       */
      fnClick(type){
        if(type == 'modify'){
          uni.navigateTo({
            url:'/pages/user/modify/modify'
          })
        }
      }
    }
  }
</script>

<style>
.cmd-cell-item-right {
 white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: 70%;
}
.cmd-cell-item-right .cmd-cell-addon-text{
 
}
</style>
