<template>
	<view class="qrimg">
	    <tki-qrcode
	    ref="qrcode"
	    :cid="cid"
	    :val="val"
		:unit="unit"
	    :size="size"
	    :onval="onval"
	    :loadMake="loadMake"
	    :showLoading="showLoading"
	    :loadingText="loadingText"
		:lv="lv"
	    @result="qrR" />
		<view class="btn-content">
			<button type="default" @tap="onCancle">返回主页</button>
		</view>
		<view class="btn-content">
			<button type="default" @tap="onClose">退出系统</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		data() {
			return {
				cid:"21",
				size:300,
				val:"www.baidu.com",
				onval:true,
				loadMake:true,
				showLoading:true,
				lv:0,
				loadingText:"二维码生成中",
				unit:"px",
			};
		},
		components:{
			tkiQrcode
		},
		onLoad(data) {
			if(data.codeData){
				this.val = data.codeData;
			}
		},
		methods:{
			...mapMutations(['logout']),
			qrR(res){
			},
			onCancle(){
				uni.navigateBack();
			},
			onClose(){
				this.logout();
				uni.redirectTo({
					url:"../login/login"
				})
			}
		}
	}
</script>

<style lang="scss">

.qrimg{
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	padding-top:10% ;
	.btn-content{
		button{
			margin-top: 20px;
			background-color: #007AFF;
			color: #ffffff;
		}
	}
}
</style>
