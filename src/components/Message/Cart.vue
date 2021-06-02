<template>
    <div id="cart">
    	<p>购物车总数：{{$store.state.books.length}}</p>
    	<div v-if = 'totalPrice != 0'>
    		<table cellspacing="0">
				<thead>
					<tr>
						<!-- <th class="oneline"></th> -->
						<th>商品名称</th>
						<th>单价</th>
						<th>总价</th>
						<th>购买数量</th>
						<th>操作</th>
						<th>生成订单</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for = '(item,index) in $store.state.books'>
						<!-- <td class="oneline">{{item.id}}</td> -->
						<td>{{item.name}}</td>
						<td>{{item.price | showPrice}}</td>
						<td>{{item.allprice | showPrice }}</td>
						<td style="letter-spacing: 3px">
							<button @click = 'decreament(index)' :disabled = 'item.count<=1'>-</button>
							{{item.count}}
							<button @click = 'increament(index)'>+</button>
						</td>
						<td><button @click = 'delect(index)'>移除</button></td>
						<!-- <td><input type="checkbox" v-model = "orders" :value = "item.allprice"></td> -->
						<!-- 把v-model值绑定到allprice上 -->
						<td><input type="checkbox" v-model = "orders" :value="item.name" :key = "index"></td>
					</tr>
				</tbody>
			</table>
			<!-- <p>总价：{{finalPrice(totalPrice)}}</p> -->
			<!-- <button @click = 'addline($store.state.books.length)'>增加</button> -->
			<p>总价：{{totalPrice | showPrice}}</p><!-- 过滤器的使用 -->
    	</div>
		<p v-else>购物车为空</p>
		<!-- 放在index的getters中 -->
		<!-- <p>商品：{{orders}}</p> -->
		<div class="order">
			<!-- <p>订单总价：{{$store.getters.ordertotal}}</p> -->
			<button @click = "updateorders">生成订单</button>
		</div>
	</div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name:'Cart',
    data() {
    	return {
    		orders:[]
    	}
    },
    //过滤器
	filters:{
		showPrice(price){
			return '￥'+price.toFixed(2)
		}
	},
	methods:{
		decreament(index){
			if(this.$store.state.books[index].count <= 1)
				this.$store.state.books[index].conut = 1;
			else
				this.$store.state.books[index].count--;
			var c = this.$store.state.books[index].count
			var p = this.$store.state.books[index].price;
			this.$store.state.books[index].allprice = p * c;
		},
		increament(index){
			this.$store.state.books[index].count++;
			var c = this.$store.state.books[index].count
			var p = this.$store.state.books[index].price;
			this.$store.state.books[index].allprice = p * c;
		},
		delect(index){
			this.$store.state.books.splice(index,1);
			// for(var i in this.$store.state.books){
			// 	this.$store.state.books[i].id = parseInt(i)+1;
			// }
		},
		updateorders() {
			// 获取books里面所有name的值！
			var e = 0;
			var orderlist = new Array();
			var a = this.$store.state.books.map(x => x.name)
			for(var i in this.orders) {
				var b = a.indexOf(this.orders[i]);
				if(b == -1) {
						console.log(b,this.orders[i])
						this.orders.splice(i,1)
					}
					else{
						orderlist[e] = this.$store.state.books[b];
						e++;
					}
			}
			//this.$store.state.orders编写为订单数据对象；
			//this.orders编写为订单数据名字数组
			this.$store.state.orders = orderlist;
		}
		
	},
	computed:{
		totalPrice:function(){
			return this.$store.state.books.reduce((pre,book) => pre+book.allprice,0);
		},
	}
  }
</script>

<style scoped>
    body {
    	height: 800px;
    	background-color: #6C8CD5;
    }
	#cart{
		margin-left: 100px;
	}
	p{
		padding: 8px 16px;
	}
	button{
		padding:3px 12px;
	}
    th,td{
		/*padding: 8px 18px;*/
		height: 50px;
		width: 120px;
		border:1px solid #e9e9e9;
		text-align: center;
	}
	th{
		background-color: #f7f7f7;
		color: #5c6b77;
		font-weight: 600px;
	}
	.oneline{
		width: 70px;
	}
	td:nth-child(5) button {
		width: 80px;
		background-color: red;
	}
	td input{
		width: 20px;
		height: 20px;
	}
	.order {
		width: 700px;
		height: 40px;
	}
	.order p{
		float: left;
	}
	.order button {
		background-color: green;
		height: 40px;
		float: right;
		color: white;
		font-weight: bold;
	}
	.order button:active{
		background-color: white;
		color:green;
	}
</style>