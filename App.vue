<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>
<style>
	@import "static/style/main.css";
	@import "static/style/icon.css";
	/*每个页面公共css */
	page{
		background: #FAFAFA;	
	}
	.fl{
		float: left;
	}
	.fr{
		float: right;
	}
	.xj-btn{
		    position: relative;
    border: 0 !important;
    border-radius: 5px;
    display: inline-block;
	    width: 100%;
	}
	.xj-btn::after{
		    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scale(0.5, 0.5);
    transform: scale(0.5, 0.5);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    left: 0;
    top: 0;
    border-radius: 10px;
	}

	.xj-btn-small{
		    width: auto;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
	} 
	.xj-green{
		background: #2ea8ab !important;
    color: #fff;
	}
	
</style>
