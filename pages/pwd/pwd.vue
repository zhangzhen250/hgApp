<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row">
				<text class="title">原密码：</text>
				<m-input type="password" focus clearable v-model="password" placeholder="请输入原密码"></m-input>
			</view>
		</view>
		<view class="input-group">
			<view class="input-row">
				<text class="title">新密码：</text>
				<m-input type="password" focus clearable v-model="newPassword1" placeholder="请输入新密码"></m-input>
			</view>
		</view>
		<view class="input-group">
			<view class="input-row">
				<text class="title">确认密码：</text>
				<m-input type="password" focus clearable v-model="newPassword2" placeholder="请确认密码"></m-input>
			</view>
		</view>

		<view class="btn-row">
			<button type="primary" class="primary" @tap="onSetPassword">提交</button>
		</view>
	</view>
</template>

<script>
	import mInput from '../../components/m-input.vue';

	export default {
		components: {
			mInput
		},
		data() {
			return {}
		},
		methods: {
			onSetPassword() {},
		}
	}
</script>

<style>

</style>
