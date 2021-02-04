<template>
	<view class="set-http content">
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>配置IP:</text>
				</view>
				<view class="uni-list-cell-db">
					<input placeholder="请输入域名或ip地址"  type="text" focus="true" v-model="ip"  />
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>端口号:</text>
				</view>
				<view class="uni-list-cell-db">
					<input placeholder="请输入端口号" type="text" v-model="port"  />
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left btn-box">
					<button @tap="onSaveIP" type="default">保存配置</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex';
	export default {
		data() {
			return {
				ip:"",
				port:""
			}
		},
		mounted() {
			this.onLoading();
			
			let ip = 'http://www.baidu.com';
			let str=ip.match(/^http:\/\/(\S*)/)[1];
			console.log(str)

		},
		methods: {
			...mapMutations(['logout']),
			setIP(ip){
				if(/^http/g.test(ip)){
					return ip;
				}else{
					return "http://"+ip;
				}
			},
			getIP(ip){
				
			  if(/^https/g.test(ip)){
				  return ip.match(/^https:\/\/(\S*)/)[1];
			  }	
			  return ip.match(/^http:\/\/(\S*)/)[1];
			  
			},
			onLoading(){
				uni.getStorage({
					key:"ip",
					success:(res)=>{
						this.ip=this.getIP(res.data);
					}
				});
				uni.getStorage({
					key:"port",
					success:(res)=>{
						this.port=res.data;
					}
				});
			},
			onSaveIP(){
				uni.showToast({
					duration:1500,
					title:"开始保存",
					success: () => {
							uni.setStorage({
							    key: 'port',
							    data: this.port,
							});
						if(this.ip){
							uni.setStorage({
							    key: 'ip',
							    data: this.setIP(this.ip),
								success:()=>{
									uni.showToast({
										icon:"success",
										title:"保存配置成功",
										success: () => {
											this.ip="";
											this.port="";
											this.logout();
											uni.redirectTo({
												url:"../login/login?message="+Math.ceil(Math.random()*100),
											})
										}
									})
								},
							    fail:(res)=>{
									uni.showToast({
										icon:"none",
										title:res.data
									})
								}
							});
						}
					}
				})
				
				

			},
		}
	}
</script>

<style lang="scss" scoped>

.set-http{
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
}
.uni-list {
			display: flex;
			width: 96%;
            margin-top: 10px;
			.uni-list-cell {
				display: flex;
				flex-direction: row;
				align-items: center;
				background-color: #FFFFFF;
				border-radius: 4px;
				padding: 12px 6px;
				width: 100%;

				.uni-list-cell-left {
					display: flex;
					width: 86px;
					justify-content: flex-end;
					
				}
				.btn-box{
					display: flex;
					justify-content: center;
					width: 100%;
					button{
						background-color: #007AFF;
						color: #ffffff;
					}
				}

				.uni-list-cell-db {
					display: flex;
					flex: 1;
					margin-left: 5px;
					flex-direction: row;
					align-items: center;
					picker{
						width: 80%;
					}
					.uni-input{
						width: 100%;
						border:1px solid #e5e5e5 ;
						border-radius: 4px;
						padding: 4px 4px;
						height: 18px;
					}
					input{
						width: 80%;
					}
					.input-text{
						width: 60%;
					}
					.input-text-2{
						width: 70%;
					}
					text{
						margin-left: 5px;
					}
					.uni-camera{
						background-color: red;
						color: #ffffff;
						padding: 6px;
						margin-left: 5px;
						border-radius: 4px;
					}
				}
			}
			.btn-content{
				display: flex;
				justify-content: center;
				align-items: center;
				.btn{
					width: 36%;
					margin: 0 5%;
					button{
						background-color: #18B566;
						color: #ffffff;
					}
				}
			}
		}
		input {
			border: 1px solid #e5e5e5;
			border-radius: 4px;
			padding: 4px 4px;
		}
</style>
