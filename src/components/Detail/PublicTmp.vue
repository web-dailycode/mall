<template>
    <div id="Public">
    	<h2>{{sort}}</h2>
    	<div v-for = "(item,index) in img" class="action">
    		<img :src="item.url" alt="" @click = "into(index)">
    		<p>{{item.name}}</p>
            <slot>
                <div class="slot">
                    <h3>{{item.price}}<span>{{item.oldprice}}</span></h3>
                    <img :src="icon" alt="" @click = "success((item.name),(item.price))">
                </div>
            </slot>
    	</div>
    </div>
</template>

<script>
  export default {
    name:'PublicTmp',
    props:["sort","img","icon"],
    methods:{
    		into(index) {
                this.$emit('into',this.$router,index);
            },
            success(goodsname,goodsprice) {
                const goods = {goodsname,goodsprice};
                this.$store.commit('success',goods);
            }
   }

  }
</script>

<style scoped>
    #Public{
    	margin-top: 30px;
        /*background-color: #6C8CD5;*/
    }
    h2{
    	margin: 20px 30px;
    }
    .action{
    	float: left;
    	/*border: 1px solid red;*/
    }
    .action p{
    	margin-top: 10px;
    	font-size: 18px;
    	font-weight: bold;
    	text-align: center;
    }
    img{
    	width: 220px;
    	height:250px;
    	margin-left: 25px;
    }
    h3 {
        margin-left: 40px;
        color: red;
        float: left;
    }
    span {
        margin-left: 10px;
        font-size: 14px;
        color: black;
        text-decoration: line-through;
    }
    .slot img{
        width: 30px;
        height: 30px;
        float: left;
    }
</style>