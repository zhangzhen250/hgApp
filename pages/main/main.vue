<template>
	<view class="content">
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text class="text-color">生产计划号:</text>
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindPickerChange" :value="index" :range="scPlanArray">
						<view class="uni-input">{{scPlanArray[index]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>生产批次号:</text>
				</view>
				<view class="uni-list-cell-db">
					<input type="text" disabled="true" v-model="scBatchNo" />
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>产品名称:</text>
				</view>
				<view class="uni-list-cell-db">
					<input type="text" disabled="true" v-model="cpName" />
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>生产日期:</text>
				</view>
				<view class="uni-list-cell-db">
					<input type="text" disabled="true" v-model="startTimeStr" />
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text class="text-color">锅次号:</text>
				</view>
				<view class="uni-list-cell-db" @tap="onScBbatch">
					<picker @change="bindScBbatchChange" :disabled="this.index== 0" :value="i" :range="scBbatchNameList">
						<view class="uni-input">{{scBbatchNameList[i]}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>生产产线:</text>
				</view>
				<view class="uni-list-cell-db">
					<input type="text" disabled="true" v-model="deptName" />
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>产线名称:</text>
				</view>
				<view class="uni-list-cell-db">
					<input type="text" disabled="true" v-model="cxNo" />
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text class="text-color">物料名称:</text>
				</view>
				<view class="uni-list-cell-db material-name" @tap="onMaterial">
					<picker @change="bindMaterialChange" :disabled="i==0" :value="k" :range="MaterialNameList">
						<view class="uni-input"><text>{{MaterialNameList[k]}}</text></view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>目标重量:</text>
				</view>
				<view class="uni-list-cell-db">
					<input class="input-text" type="number" disabled="true" v-model="amount" /><text>KG</text>
				</view>
			</view>
		</view>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text class="text-color">物料规格:</text>
				</view>
				
				<view class="uni-list-cell-db">
					<picker @tap="onMaterialSpc" @change="bindMaterialSpcChange" :disabled="k==0" :value="spc" :range="materialSpc">
						<view class="uni-input">{{materialSpc[spc]}}</view>
					</picker>
				</view>
				
			</view>
		</view>

		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text class="text-color">点料人员:</text>
				</view>
				<view class="uni-list-cell-db">
					<picker @change="bindMployChange" :value="k" :range="mployNameList">
						<view class="uni-input">{{mployNameList[j]}}</view>
					</picker>
				</view>
			</view>
		</view>

		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>点数数量:</text>
				</view>
				<view class="uni-list-cell-db">
					<input disabled="true" class="input-text-2" type="number" v-model="countNumber" />
					<image v-if="countImg" @tap="onChooseImg('countImg')" :src="countImg" mode=""></image>
					<view v-else @tap="onChooseImg('countImg')" class="uni-camera">拍照</view>
				</view>
			</view>
		</view>
		<view class="uni-list qrcode-box">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text>零头重量:</text>
				</view>
				<view class="uni-list-cell-db">
					<input class="input-text-2" disabled="true" type="number" v-model="oddNumber" />
					<image v-if="oddImg" @tap="onChooseImg('oddImg')" :src="oddImg" mode=""></image>
					<view v-else @tap="onChooseImg('oddImg')" class="uni-camera">拍照</view>
				</view>
			</view>
		</view>
		
		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					<text class="text-color">零头录入:</text>
				</view>
				<view class="uni-list-cell-db">
					<input class="input-text-2" placeholder="请输入零头重量" type="number" v-model="lrNumber" />
					<image v-if="lrImg" @tap="onChooseImg('lrImg')" :src="lrImg" mode=""></image>
					<view v-else @tap="onChooseImg('lrImg')" class="uni-camera">拍照</view>
				</view>
			</view>
		</view>
		
		<view class="uni-list qrcode-content ">
			<tki-qrcode ref="qrcode" :cid="cid" :val="val" :unit="units" :size="size" :onval="onval" :loadMake="loadMake"
			 :showLoading="showLoading" :loadingText="loadingText" @result="qrR" />
		</view>
		<view class="uni-list">
			<view class="uni-list-cell btn-content">
				<view class="btn">
					<button type="default" @tap="onComfirmUpData">保存并生成投料码</button>
				</view>
			</view>
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

				cid: "20",
				size: 160,
				val: "",
				onval: true,
				loadMake: false,
				showLoading: false,
				loadingText: "二维码生成中",
				units: "px",
				
				array: ['123131', '45323213', '45654321', '96353434'],
				index: 0,
				date: "",
				ip: "",
				port:"",
				scPlanArray: ["请选择生产计划号"],
				scPlanData: [],
				scBatchNo: "", //生产批次号,
				cpName: "", //产品名称
				deptName: "", //生产班组
				cxNo: "", //产线
				startTimeStr: "", //生产时间
				scBbatchNameList: ["请选择锅次号"], //锅次号名称列表
				scBbatchList: [], //锅次号列表
				i: 0, //锅次号的下标
				MaterialList: [], //物料详情列表
				MaterialNameList: ["请选择物料名称"], //物料名称列表
				k: 0, //物料名称列表的下标
				amount: "", //目标重量
				unit: "", //物料规格
				countNumber: "", //点数数量
				oddNumber: "", //零头重量
				lrNumber: "", //零头重量手动录入
				lrImg: "", //零头重量手动录入
				countImg: "", //点数数量拍照
				oddImg: "", //零头重量拍照
				spc:0,//物料规格列表的下标
				materialSpc:["请选择物料规格","25","50"],
				mployList: [], //点料人员信息列表
				mployNameList: ["请选择点料人员"], //点料人员姓名列表
				j: 0, //点料人员列表下标
				tlQrCode: "", //二维码返回path路径
				qrcodeData: "", //二维码携带的数据
				QRCodeStr: "" //拼接后的二维码存放的数据
			}
		},
		computed: {
			...mapState(['forcedLogin', 'hasLogin', 'userName']),
			startDate() {
				return this.getDate('startTimeStr');
			},
			endDate() {
				return this.getDate('end');
			}
		},

		components: {
			
             
		},
		mounted() {
			this.onLoading();

		},
		watch: {
			tlQrCode(newVal, oldVal) {
				if (newVal) {
					this.onSave();
				}
			},
			unit(newVal,oldVal){
				this.countNumber=parseInt(this.amount/this.unit);
				this.oddNumber=(this.amount%this.unit).toFixed(2);
			},
		},
		methods: {
			...mapMutations(['login']),
			onComfirmUpData() {
				// 先验证数据有没有填写
				if(this.oddNumber>0 && !this.oddImg  ){
					uni.showToast({
						icon:"none",
						title: "零头重量不为0需要拍照"
					});
					return;
				}
				
				if(this.countNumber>0 && !this.countImg  ){
					uni.showToast({
						icon:"none",
						title: "点数数量不为0需要拍照"
					});
					return;
				}
				
				if(this.lrNumber>0 && !this.lrImg  ){
					uni.showToast({
						icon:"none",
						title: "录入重量不为0需要拍照"
					});
					return;
				}
				
				if (this.index && this.i && this.k && this.j) {
					this.onReadyQRcode();
				} else {
					uni.showToast({
						icon:"none",
						title: "请先填写数据"
					});
					return;
				}
			},
			
			onScBbatch(){
				if(this.index == 0){
					uni.showToast({
						icon:"none",
						title:"请先选择生产计划号"
					})
				}
			},
			onMaterial(){
				if(this.i == 0){
					uni.showToast({
						icon:"none",
						title:"请先选择锅次号"
					})
				}
			},
			onMaterialSpc(){
				if(this.k==0){
					uni.showToast({
						icon:"none",
						title:"请先选择物料名称"
					})
				}
			},
			onReadyQRcode() {
                uni.showLoading({
                	mask:true,
					title:"保存中"
                });
				
				if(this.lrNumber>0){
					this.oddNumber=this.lrNumber;
				}
				this.qrcodeData = {
					"生产计划号": this.scPlanData[this.index-1].scPlanNo,
					"生产批次号": this.scPlanData[this.index-1].scBatchNo,
					"产品名称": this.scPlanData[this.index-1].cpName,
					"生产日期": this.startTimeStr,
					"锅次号": this.scBbatchList[this.i-1].scBatchF,
					"产线名称": this.scPlanData[this.index-1].cxNo,
					"物料名称": this.MaterialList[this.k-1].materialName,
					"物料编号": this.MaterialList[this.k-1].materialId,
					"目标重量": Number(this.unit*this.countNumber)+ Number(this.oddNumber),
					"物料规格": this.unit,
				};
				for (let i in this.qrcodeData) {
					if (this.qrcodeData[i]) {
						this.QRCodeStr += `${i}:${this.qrcodeData[i]};`
					}
				};
				this.val = this.QRCodeStr;

			},
			qrR(res) {
				uni.getImageInfo({
					src: res,
					success: (img) => {
						this.onUploadFile(img.path, "tlQrCode");
					}
				})
			},
			onSave() {
				
				if(this.lrNumber>0){
					this.oddNumber=this.lrNumber;
					this.oddImg=this.lrImg;
				}
				let data = {
					scPlanQR: {
						scPlanNo: this.scPlanData[this.index-1].scPlanNo,
						scBatchF: this.scBbatchList[this.i-1].scBatchF,
						materialId: this.MaterialList[this.k-1].materialId,
						unit: this.unit + "kg*1",
						employId: this.mployList[this.j-1].empNo,
						countNumber: this.countNumber,
						allNumber:Number(this.unit*this.countNumber)+ Number(this.oddNumber),
						countImg: this.countImg,
						oddNumber:this.oddNumber,
						oddImg: this.oddImg,
						qrImg: this.tlQrCode,
						qrText:this.QRCodeStr,
						

					}
				}
				this.$api.getSave(this.ip, data).then(res => {
					if (res.statusCode == 200) {
						uni.showToast({
							title: "保存成功",
							success: () => {
								this.onGoProductCode(true);
							}
						})
					}
				})
			},
			onLoading() {
				
				uni.getStorage({
					key:"port",
					success: (res) => {
						if(res.data){
							this.port = res.data;
						}
					},
					complete: () => {
						uni.getStorage({
							key: "ip",
							success: (res) => {
								
								if(this.port){
									this.ip = `${res.data}:${this.port}`
								}else{
									this.ip = res.data;
								}
								this.onQueryPlanNum();
								this.onGetEmployList();
								
							}
						})
					}
				})
			},
			onGetScBbatchList() {
				this.$api.getScBbatchList(this.ip, this.scPlanArray[this.index]).then(res => {
					if (res.statusCode == 200) {
						this.scBbatchList = res.data;
						if (res.data.length > 0) {
							this.scBbatchNameList = ["请选择锅次号"];
							res.data.forEach(item => {
								this.scBbatchNameList.push(item.scBatchF)
							})
						}
					}
				})
			},
			onGetEmployList() {
				this.$api.getEmployList(this.ip).then(res => {
					if (res.statusCode == 200) {
						if (res.data.length > 0) {
							this.mployList = res.data;
							this.mployList.forEach(item => {
								this.mployNameList.push(item.name);
							})
						}


					}
				})
			},
			onGetMaterialList() {
				this.$api.getMaterialList(this.ip, this.scBbatchList[this.i-1].scBatchF).then(res => {
					if (res.statusCode == 200) {
						if (res.data.length > 0) {
							this.MaterialList = res.data;
							this.MaterialNameList=["请选择物料名称"];
							res.data.forEach(item => {
								this.MaterialNameList.push(item.materialName)
							})
						}
					}
				})
			},

			onQueryPlanNum() {
				this.$api.queryPlanNum(this.ip).then(res => {
					if (res.statusCode == 200) {
						this.scPlanData = res.data;
						if (res.data.length > 0) {
							this.scPlanArray = ["请选择生产计划号"];
							res.data.forEach(item => {
								this.scPlanArray.push(item.scPlanNo);
							})
						}

					} else {
						uni.showToast({
							title: res.errMsg
						})
					}
				})
			},
			bindMaterialSpcChange(e){
				this.spc = e.target.value;
				if(this.spc){
					this.unit=this.materialSpc[this.spc];
				}else{
					this.oddNumber = 0;
					this.countNumber =0;
				}
			},
			bindPickerChange(e) {
		
		        if(this.index == e.target.value) return;
				
				this.index = e.target.value;
				if(this.index>0){
					this.scBatchNo = this.scPlanData[this.index-1].scBatchNo;
					this.cpName = this.scPlanData[this.index-1].cpName;
					this.deptName = this.scPlanData[this.index-1].deptName;
					this.cxNo = this.scPlanData[this.index-1].cxNo;
					this.startTimeStr = this.scPlanData[this.index-1].startTimeStr;
					this.amount = this.scPlanData[this.index-1].amount;
					this.unit = this.scPlanData[this.index-1].unit;
					this.countNumber = this.scPlanData[this.index-1].countNumber;
					this.oddNumber = this.scPlanData[this.index-1].oddNumber;
					this.i=0;
					this.k=0;
					this.onGetScBbatchList();
				}else{
					this.index = 0;
					this.i =0;
					this.k = 0;
					this.scBatchNo="";
					this.cpName="";
					this.startTimeStr = "";
					this.deptName="";
					this.cxNo="";
					this.amount="";
				}
			},
			bindMaterialChange(e) {
			
				this.k = e.target.value;
				if(this.k){
					this.amount = this.MaterialList[this.k-1].amount;
				}else{
					this.amount ="";
				}
				
			},
			bindScBbatchChange(e) {
				this.i = e.target.value;
				if(this.i){
					this.k = 0;
					this.onGetMaterialList();
				}
			},
			bindMployChange(e) {
				this.j = e.target.value;
			},

			bindDateChange(e) {
				this.startTimeStr = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			onChooseImg(textName) {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //从相册选择
					success: (res) => {
						uni.getImageInfo({
							src: res.tempFilePaths[0],
							success: (img) => {
							
								this.onUploadFile(img.path, textName);
							}
						})


					}
				})
			},
			onUploadFile(file, textName) {
				this.$api.uploadFile(this.ip, file).then(res => {
					
					if (res.statusCode == 200) {
						this[textName] = res.data.path;
					}
				})
			},
			onGoProductCode(dataSatus) {
				if (dataSatus) {
					// this.index = 0;
					this.i =0;
					this.k = 0;
					this.j =0;
					this.spc=0;
					this.tlQrCode = "";
					// this.scBatchNo="";
					// this.cpName="";
					// this.startTimeStr = "";
					// this.deptName="";
					// this.cxNo="";
					this.amount="";
					this.unit="";
					this.countNumber="";
					this.oddNumber="";
					this.countImg="";
					this.oddImg="";
				}
				uni.navigateTo({
					url: "../product-code/product-code?codeData=" + encodeURIComponent(this.QRCodeStr)
				})
			},
		}

	}
</script>

<style lang="scss">
	.hello {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

	.title {
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul {
		font-size: 15px;
		color: #8f8f94;
		margin-top: 25px;
	}

	.ul>view {
		line-height: 25px;
	}

     .text-color{
		 color: #007AFF;
	 }
	.content {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;

		.qrcode-content {
			height: 0;
			overflow: hidden;
		}

		.uni-list {
			display: flex;
			width: 96%;
			margin-top: 4px;

			.uni-list-cell {
				display: flex;
				flex-direction: row;
				align-items: center;
				background-color: #FFFFFF;
				border-radius: 4px;
				padding: 4px 6px;
				width: 100%;

				.uni-list-cell-left {
					display: flex;
					width: 86px;
					justify-content: flex-end;
					text{
						font-size: 15px;
					}
				}

				.uni-list-cell-db {
					display: flex;
					flex: 1;
					margin-left: 5px;
					flex-direction: row;
					align-items: center;

					picker {
						width: 80%;
					}

					.uni-input {
						width: 100%;
						border: 1px solid #e5e5e5;
						border-radius: 4px;
						padding: 4px 4px;
						height: 18px;
					}

					input {
						width: 80%;
					}

					.input-text {
						width: 60%;
					}

					.input-text-2 {
						width: 70%;
					}

					text {
						margin-left: 5px;
					}

					.uni-camera {
						background-color: red;
						color: #ffffff;
						padding: 6px;
						margin-left: 5px;
						border-radius: 4px;
					}

					image {
						display: block;
						width: 40px;
						height: 40px;
						margin-left: 5px;
					}

				}

				.material-name {
					picker {
						view {
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}

			.btn-content {
				display: flex;
				justify-content: center;
				align-items: center;

				.btn {
					margin: 0 5%;
					button {
						background-color: #18B566;
						color: #ffffff;
						font-size: 14px;
					}
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
