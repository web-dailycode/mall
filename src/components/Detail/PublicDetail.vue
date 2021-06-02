<template>
    <div id="PublicDetail">
    	<h2>{{sort}}</h2>
    	<div>
    		<ul>
    			<li>
    				<img :src="img" alt="图片">
		    	</li>
    			<li>
    				<h4>本店范思哲品牌服装产品全部来自厂家正规网络代理渠道，以最直接有效的方式送达最终端消费者手里，避免了中间过多的流通环节。并且本店一直是以薄利多销为原则，在有合理利润的基础下将尽最大可能让利给大家，所以才会比专柜便宜许多!</h4>
                    <table>
                        <tr>
                            <td>身高</td>
                            <td>体重</td>
                            <td>尺码</td>
                        </tr>
                        <tr>
                            <td>150以下</td>
                            <td>80以下</td>
                            <td>XS</td>
                        </tr>
                        <tr>
                            <td>150~160</td>
                            <td>80~100</td>
                            <td>S</td>
                        </tr>
                        <tr>
                            <td>160~170</td>
                            <td>100~120</td>
                            <td>M</td>
                        </tr>
                        <tr>
                            <td>170以上</td>
                            <td>120以上</td>
                            <td>L</td>
                        </tr>
                    </table>
                    <img src="@/assets/img/other/shoping6.jpg" class="img"><button @click = "success(sort,price)">添加购物车</button>
    			</li>
    		</ul>
    	</div>
    </div>
</template>

<script>
  export default {
    name:'PublicDetail',
    props:["sort","img"],
    data() {
        return {
            price:99.99
        }
    },
    methods:{

        success(goodsname,goodsprice) {
            const goods = {goodsname,goodsprice}
            this.$store.commit('success',goods)
        }
    }
  }
</script>

<style scoped>
    #PublicDetail {
        margin: 20px 30px;
    }
    h2 {
        font-family: '黑体'
    }
    ul li{
        margin-right: 30px;
    	float: left;
    }
    img{
        width: 300px;
        height: 300px;
        margin-top: 20px;
        border-radius: 10px;
        position: relative;
    }
    li h4 {
        width: 500px;
        margin-bottom: 15px;
    }
    table{
        text-align: center;
        border: 1px solid #EEEEEE;
        border-collapse: collapse;
    }
    td {
        border: 1px solid #EEEEEE;
        width: 150px;
        height: 40px;
    }
    .img{
        width: 30px;
        height: 30px;
    }
    button{
        width: 100px;
        height: 30px;
        background-color: pink;
    }
    button:active {
        background-color: gray;
    }
</style>