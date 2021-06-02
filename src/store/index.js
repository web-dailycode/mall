import Vue from 'vue'
import Vuex from 'vuex'
// import {INCREMENT} from './mutations-types'

Vue.use(Vuex)

export default new Vuex.Store({
	//共享状态
	state:{
		username:'',
		flag:false,
		number:0,//记录当前登录对象是user数组中的第几个对象
		books:[
		// {
		// // id:1,
		// name:'太阳伞',
		// price:35.00,
		// allprice:35.00,
		// count:1
		// },
		// {
		// // id:2,
		// name:'冰丝阔腿裤',
		// price:95.00,
		// allprice:95.00,
		// count:1
		// }
		],
		user:[
		{username:'',
	     phone:'',
	     address:'',
	     password:'',
	     question:'',
	     answer:''},
	     ],
	     similar:false,//判断是否有重复商品
	     orders:[],
	},
	//一般用于操作事件
	//Vuex的store状态的更新唯一方式:提交mutations
	mutations:{
		success(state,goods) {
			if(state.flag == true) {
				alert("添加购物车成功！");
				for(var i in state.books){
					if(goods.goodsname == state.books[i].name){
						state.books[i].count++;
						this.similar = true;
						break;
					}
					else{
						this.similar = false
					}
				}
				if(!this.similar){
					state.books.splice(state.books.length,0,{
						// id:state.books.length+1,
						name:goods.goodsname,
						price:goods.goodsprice,
						allprice:goods.goodsprice,
						count:1
					})
				}
			}
			else
				alert('请先登录！')
		},
		certain(state,user) {
			const a = state.user.filter(obj => obj.phone == user.tel);
			const myreg = /^[1][0-9][0-9]{9}$/;
			if(user.name == "" | user.tel == "" | user.pas1 == "" | user.pas2 == "") {
	          alert('请输入必填字段！');
	        }
	        else if(!myreg.test(user.tel)){
	          alert('请正确输入11位号码！')
	          
	        }
	        else if(a.length != 0){
				alert('该号码已被注册，请前往登录界面！');
			}
	        else if(user.pas1 != user.pas2) {
    			alert('请重新确认密码！')
    		}
    		else{
    			alert('注册成功!');
    			window.Vue.$router.push('/login');
    			state.user.splice(state.user.length,0,{
				username:user.name,
				phone:user.tel,
				// address:'四川成都',
				password:user.pas1,
				})
				console.log(state.user);
    		}
		},
	},
	actions:{
	},
	getters:{
		message(state) {
			if(state.flag) {
				return state.username
			}
			else
			{
				return "请先登录"
			}
		},
		condition(state,getters) {
			if(state.flag) {
				return getters.message
			}
			else
			{
				return "当前处于游客状态！"
			}
		},
	},
	modules:{
	}
})
