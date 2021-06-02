<template>
    <div class="order">
    	<h2 v-if = "this.$store.state.orders.length == 0">订单为空</h2>
        <!-- 判断基本信息是否存在！！！ -->
        <div v-else>
            <table cellspacing="0">
                <tr>
                    <th>商品名称</th>
                    <th>商品数量</th>
                    <th>商品总价</th>
                    <th>操作</th>
                </tr>
                <tr v-for = "(item,index) in this.$store.state.orders">
                    <td>{{item.name}}</td>
                    <td>{{item.count}}</td>
                    <td>{{item.allprice}}</td>
                    <td class="delete"><button @click = "delect(index)">删除</button></td>
                </tr>
            </table>
            <h3>总价：{{totalPrice | showPrice}}</h3>
            <button @click = "payment" class="payment">支付</button>
            <h3 v-show = "pays">扣款成功</h3>
        </div>

    </div>
</template>

<script>
  export default {
    name:'Order',
    data() {
        return {
            pays:false
        }
    },
    methods:{
        delect(index) {
            this.$store.state.orders.splice(index,1);
        },
        payment() {
            var b = new Boolean(this.$store.state.user[this.$store.state.number].address)
            if(b == false){
                alert("请在修改信息栏输入你的收货地址！")
            }
            //如果一个值为null,undefined,0,'',false 在做bool运算时，都表示false，其余情况表示true，或者 var b=new Boolean(yourinpu)
            else{
                var address = this.$store.state.user[this.$store.state.number]
                let pay = confirm(Object.values(address))
                if(pay){
                    this.pays = true
                    console.log(this.pays)
                }
            }
        }
    },
    filters:{
        showPrice(totalPrice) {
            return '￥'+totalPrice.toFixed(2);
        }
    },
    computed:{
    	flag() {
    		return this.$store.state.flag
    	},
        // flag和address同时为true,才能付款
        totalPrice() {
            return this.$store.state.orders.reduce((pre,n) => pre+n.allprice,0)
        }
    }
  }
</script>

<style scoped>
    .order {
        margin: 20px;
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
    .delete button{
        background-color: red;
        padding:3px 12px;
        color: white;
    }
    h3{
        margin: 20px;
    }
    .payment{
        background-color: green;
        padding:3px 12px;
        color: white;
    }
</style>