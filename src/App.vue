<template>
  <div id="app">
  	<div id="header">
			<div id="headerTop">
				<router-link to = "/Login" class = "login">您好，{{$store.getters.message}}</router-link>
				<router-link to = "/Register" class = "login">立即注册</router-link>
				<router-link to = "/Login" class = "login">退出</router-link>
			</div>
			<div id="top_left">
				<img src="./assets/img/other/icon.png" alt="图片加载失败">
				<h2 class="shopping">shopping</h2>
			</div>
			<div id="search">
				<input type="text" placeholder ="商品名称/类型/参数" id="goods">
				<input type="button" value="搜索" id="searchBar">
			</div>
	</div>
	<div class="list">
		<router-link
		:class ="['ac',aa]"
		:key = "index"
		:to = 'option.href' v-for = '(option,index) in options'>{{option.name}}</router-link>
	</div>
	<router-view></router-view>
	<div class="state">
		<div class="index-top">
			<p>{{$store.getters.condition}}</p>
		</div>
		<div class="index-bottom">
			<router-link v-for = "(item,index) in messages" :to = "item.url" class = "mess" :key = "index">{{item.name}}</router-link>
		</div>
	</div>
  </div>
</template>

<script>
	import Vue from 'vue'
	import router from './router'
	export default({
	name:'App',
	data() {
		return {
			aa:true,
			messages:[{url:'/message',name:'修改信息'},{url:'/cart',name:'查看购物车'},{url:'/order',name:'查看订单'},{url:'/admin',name:'联系管理'}],
			options:[
			{
				name:'首页',
				href:'/index'
			},
			{
				name:'服装',
				href:'/dress'
			},
			{
				name:'数码',
				href:'/digit'
			},
			{
				name:'食品',
				href:'/food'
			},
			{
				name:'运动',
				href:'/sport'
			},
			{
				name:'书城',
				href:'/book'
			},
			{
				name:'美妆',
				href:'/beauty'
			},
			{
				name:'家电',
				href:'/appliance'
			},
			],
		}
	},

})

</script>

<style>
#app{
	height: 857px;
	background-color: #6C8CD5;
}
*{
	margin: 0;
	padding: 0;
	list-style: none;
	/*325-610*/
}
#headerTop{
	font-size: 14px;
	width: 100%;
	height: 30px;
	background-color: #E3E4E5;
	text-align: right;
}
.login{
	text-decoration: none;
	display: inline-block;
	margin-right: 10px;
	line-height: 30px;
}
.login:hover{
	color: red;
	border-bottom: 1px solid black;
}
#top_left{
	/*width: 100%;*/
	margin: 20px;
	
}
#top_left img{
	width: 40px;
	height: 40px;
	float: left;
}
.shopping{
	margin-left: 20px;
	color: white;
	float: left;
}
#search{
	width: 615px;
	margin: 10px auto;
}
#goods{
	border: 3px solid #4D96FF;
	width: 500px;
	height: 30px;
	border-right: none;
	float: left;
	padding-left: 10px;
	outline: none;
}
#searchBar{
	float: left;
	height: 36px;
	width: 90px;
	background-color: #4D96FF;
	border: none;
	font-size: 16px;
	color: white;
}
#search:after,#top_left:after{
	content: "";
	height: 0;
	clear: both;
	overflow: hidden;
	display: block;
	visibility: hidden;
}
#nav{
	width: 80%;
	height: 30px;
	margin: 0 auto;
}
#nav ul{
	display: flex;
}
#nav ul li{
	float: left;
	flex:11;
	margin: 10px 30px 30px;
	font-size: 15px;
}
.list {
	height: 50px;
	margin:20px auto;
	margin-right: 30px;
	border-bottom: 1px solid #EEEEEE;
}
.ac{
	/*router-link里面有固定的class*/
	display: inline-block;
	line-height: 50px;
	width: 70px;
	color: white;
	font-size: 17px;
	font-weight: bold;
	text-decoration: none;
	text-align: center;
}
.active{
	background-color: #FAFAF4;
	color: #6C8CD5;
}
.login{
	color: #551A8B;
	background-color: #E3E4E5;
}
.state {
	width: 300px;
	height: 450px;
	border: 1px solid #EEEEEE;
	border-radius: 20px;
	position: absolute;
	top:110px;
	right: 30px;
	color:white;
}
.index-top{
	height: 104px;
	line-height: 104px;
	font-size: 20px;
	letter-spacing: 4px;
	text-align: center;
	font-weight: bold;
}
.index-bottom{
	margin-top: 20px;
	width: 300px;
	text-align: center;

}
.mess{
	width: 200px;
	height: 40px;
	margin: 20px auto;
	line-height: 40px;
	text-align: center;
	background-color: #4D96FF;
	border-radius: 10px;
	display: inline-block;
	color: white;
	text-decoration: none;
}
.mess:hover{
	color: #4D96FF;
	background-color: white;
	text-decoration: none;
}
@media screen and (max-width:1200px){
    .state{
    	/*display: none;*/
    	width: 500px;
		height: 450px;
		top:250px;
		right: 100px;
    }
    .index-bottom {
    	margin:0 auto;
    }
}


 </style>
