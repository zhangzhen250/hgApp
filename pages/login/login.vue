<template>
	<view class="content">
		<!-- <view class="login-title">
				<text>
					用户登录
				</text>
		</view> -->
		<view class="input-group">
			<view class="input-row border">
				<text class="title">账号：</text>
				<m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
			</view>
			<view class="input-row">
				<text class="title">密码：</text>
				<m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" @tap="loginBySms">登录</button>
		</view>

		<view class="pswd">
			<view class="pswd-set">
				<text @tap="onGoSeting">服务器配置</text>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	let weixinAuthService
	export default {
		components: {
			mInput
		},
		data() {
			return {
				loginType: 0,
				loginTypeList: ['免密登录', '密码登录'],
				mobile: '',
				code: '',
				providerList: [],
				hasProvider: false,
				account: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
				codeDuration: 0,
				ip: "",
				port: "",
			}
		},

		onLoad(msg) {
			if (msg.message === "restlogin") {
				uni.showToast({
					icon: "none",
					title: "请重新登录"
				})
			}

			this.onLoading();
		},
		mounted() {
			this.onLoading();
		},
		methods: {
			...mapMutations(['login']),
			onLoading() {
				this.getUser();
				uni.getStorage({
					key: "port",
					success: (res) => {
						if (res.data) {
							this.port = res.data;
						}
					},
					complete: () => {
						uni.getStorage({
							key: "ip",
							success: (res) => {

								if (this.port) {
									this.ip = `${res.data}:${this.port}`
								} else {
									this.ip = res.data;
								}

							}
						})
					}
				})
			},
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},

			getUser() {
				uni.getStorage({
					key: "account",
					success: (res) => {
						if (res.data) {
							this.account = res.data;
						}
					}
				})
				uni.getStorage({
					key: "password",
					success: (res) => {
						if (res.data) {
							this.password = res.data;
						}
					}
				})
			},
			saveUser() {
				uni.setStorage({
					key: "account",
					data: this.account,
				})
				uni.setStorage({
					key: "password",
					data: this.password,
				})
			},
			loginBySms() {
				if (this.account && this.password) {
					this.saveUser();
					this.$api.onlogin(this.ip, this.account, this.password).then(res => {
						if (res.data.success === false || res.data.success === "false") {
							uni.showToast({
								icon: "none",
								title: res.data.message
							})
							return;
						}

						uni.showToast({
							title: "登录成功",
							success: () => {
								this.login(res.data.userName);
								uni.navigateTo({
									url: "../main/main"
								})
							}
						})
					}).catch(res => {
						uni.showToast({
							icon: "none",
							title: "请配置可用服务器地址"
						})
					})
				}
			},
			onGoSeting() {
				uni.navigateTo({
					url: "../setHttp/setHttp"
				})
			},
		},
		onReady() {
			this.initPosition();
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		padding-top: 30%;
		font-size: 18px;
	}

	.pswd {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		.pswd-set {
			display: flex;
			justify-content: center;
			width: 80%;

			>text {
				padding: 4px 12px;
				border: 1px solid #e5e5e5;
				background-color: #FFFFFF;
				border-radius: 4px;
			}
		}
	}

	.login-type-btn {
		line-height: 30px;
		margin: 0px 15px;
	}

	.login-type-btn.act {
		color: #0FAEFF;
		border-bottom: solid 1px #0FAEFF;
	}

	.send-code-btn {
		width: 120px;
		text-align: center;
		background-color: #0FAEFF;
		color: #FFFFFF;
	}

	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.action-row navigator {
		color: #007aff;
		padding: 0 10px;
	}

	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.input-group {
		.m-input {
			font-size: 24px;
		}
	}

	.btn-row {
		width: 90%;

		button {
			width: 100%;
			font-size: 20px;
			line-height: 36px;
		}
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
</style>
