import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */

// http.config.baseUrl = "http://f36f167110.zicp.vip/lzy";


export const onlogin = (ip, account, password) => {
	return http.request({
		url: `${ip}/security/admin/enterpriseLoginForApp`,
		method: "POST",
		data: {
			account: account,
			captcha: "",
			enterpriseCode: "221553450",
			language: "zh",
			password: password,
		}
	})
}

const checkLogin = () => {
	http.interceptor.response = (response) => {
		if (response.data.code == 10104) {
			uni.showToast({
				icon:"none",
				title: response.data.message,
				success: () => {
					uni.reLaunch({
						url: "../../pages/login/login"
					})
				}
			})

		}
		return response;
	}
};

export const queryPlanNum = (ip) => {
	checkLogin();
	return http.request({
		url: `${ip}/sc/scplanQR/queryListForScPlan`,
		method: "POST",
		data: {
			scPlanNo: ""
		}
	})
}

export const getScBbatchList = (ip, num) => {
	checkLogin();
	return http.request({
		url: `${ip}/sc/scplanQR/queryScBatchFByScPlanNo`,
		method: "POST",
		data: {
			scPlanNo: num
		}
	})
}

export const getMaterialList = (ip, num) => {
	checkLogin();
	return http.request({
		url: `${ip}/sc/scplanQR/queryMaterialByBatchF`,
		method: "POST",
		data: {
			scBbatchF: num
		}
	})
}

export const getSave = (ip, data) => {
	checkLogin();
	return http.request({
		url: `${ip}/sc/scplanQR/add`,
		method: "POST",
		data:data
	})
}

export const getEmployList = (ip) => {
	checkLogin();
	return http.request({
		url: `${ip}/sc/scplanQR/queryEmployList`,
		method: "POST"
	})
}

export const uploadFile = (ip, file) => {
	checkLogin();
    return new Promise((reject)=>{
		uni.uploadFile({
			url: `${ip}/sc/scplanQR/uploadFile`, // 后端api接口
			filePath:file, // uni.chooseImage函数调用后获取的本地文件路劲
			name: 'file', //后端通过'file'获取上传的文件对象(字段)
			header: {
				"Content-Type": "multipart/form-data"
			},
			success: (res) => {
			res.data= JSON.parse(res.data);	
				reject(res)
			}
		});
	})
}


// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	onlogin,
	queryPlanNum,
	getScBbatchList,
	getMaterialList,
	uploadFile,
	getEmployList,
	getSave
}
