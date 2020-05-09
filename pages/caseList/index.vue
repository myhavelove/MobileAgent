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
    <view style="padding-top:100px">
      <mescroll-body
        ref="mescrollRef"
        @init="mescrollInit"
        :down="downOption"
        @down="downCallback"
        @up="upCallback"
      >
        <view class="news-li" v-for="news in dataList" :key="news.id">
          <view>{{ news.title }}</view>
          <view class="new-content">{{ news.content }}</view>
        </view>
      </mescroll-body>
    
    </view>
  </view>
</template>
<script>
import ivTabs from "@/components/tui-tabs/tui-tabs";
import MescrollMixin from "@/components/mescroll-uni/mescroll-mixins.js";
import {apiNewList} from "@/api/mock.js"
export default {
  components: {
    ivTabs,
  },
		mixins: [MescrollMixin], // 使用mixin (在main.js注册全局组件)
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
      downOption: {
					auto: false //是否在初始化后,自动执行downCallback; 默认true
				},
        // dataList: [],
        dataList:[
          {

          }
        ]
    };
  },
  methods: {
    // tab切换
    change(e) {
      this.currentTab = e.index;
    },
    //    搜索
    searchTap() {},
    	/*下拉刷新的回调 */
			downCallback() {
				//联网加载数据
				apiNewList().then(data => {
					//联网成功的回调,隐藏下拉刷新的状态
					this.mescroll.endSuccess();
					//设置列表数据
					this.dataList.unshift(data[0]);
				}).catch(()=>{
					//联网失败的回调,隐藏下拉刷新的状态
					this.mescroll.endErr();
				})
			},
			/*上拉加载的回调: 其中page.num:当前页 从1开始, page.size:每页数据条数,默认10 */
			upCallback(page) {
				//联网加载数据
				apiNewList(page.num, page.size).then(curPageData=>{
					//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
					//mescroll会根据传的参数,自动判断列表如果无任何数据,则提示空;列表无下一页数据,则提示无更多数据;
					
					//方法一(推荐): 后台接口有返回列表的总页数 totalPage
					//this.mescroll.endByPage(curPageData.length, totalPage); //必传参数(当前页的数据个数, 总页数)
					
					//方法二(推荐): 后台接口有返回列表的总数据量 totalSize
					//this.mescroll.endBySize(curPageData.length, totalSize); //必传参数(当前页的数据个数, 总数据量)
					
					//方法三(推荐): 您有其他方式知道是否有下一页 hasNext
					//this.mescroll.endSuccess(curPageData.length, hasNext); //必传参数(当前页的数据个数, 是否有下一页true/false)
					
					//方法四 (不推荐),会存在一个小问题:比如列表共有20条数据,每页加载10条,共2页.如果只根据当前页的数据个数判断,则需翻到第三页才会知道无更多数据.
					this.mescroll.endSuccess(curPageData.length);
					
					//设置列表数据
					this.dataList=this.dataList.concat(curPageData);
				}).catch(()=>{
					//联网失败, 结束加载
					this.mescroll.endErr();
				})
			}
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
	/*说明*/
	.notice{
		font-size: 30upx;
		padding: 40upx 0;
		border-bottom: 1upx solid #eee;
		text-align: center;
	}
	/*展示上拉加载的数据列表*/
	.news-li{
		font-size: 32upx;
		padding: 32upx;
		border-bottom: 1upx solid #eee;
	}
	.news-li .new-content{
		font-size: 28upx;
		margin-top: 10upx;
		margin-left: 20upx;
		color: #666;
	}
</style>
