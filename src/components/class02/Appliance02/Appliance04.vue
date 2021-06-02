<template>
    <div id="dress">
        <public-tmp :sort = "family" :img = "familys"
        @into = 'changerouter'
        :icon = "img">
         <!-- <h3>{{price}}</h3>    -->
         <!-- <p>{{oldprice}}</p> -->
        </public-tmp>
    </div>
</template>

<script>
  import PublicTmp from '@/components/Detail/PublicTmp'
  export default {
    name:'Appliance04',
    data() {
    	return {
            price:99.99,
            oldprice:199.99,
    		family:'洗衣机',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Digit/creame01.jpg'),
		    		name:'海尔',
                    price:5199.99,
                    oldprice:8299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/creame02.jpg'),
		    		name:'格力',
                    price:9199.99,
                    oldprice:10299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/creame03.jpg'),
		    		name:'美的',
                    price:9399.99,
                    oldprice:1199.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/creame04.jpg'),
		    		name:'康佳',
                    price:11499.99,
                    oldprice:11699.99,
		    	}]
    	}
    },
    components:{
    	PublicTmp
    },
    methods: {
    	changerouter(router,index) {
            if(index === 0) {
                router.push('/dress/dress01/dressdetail')
            }
            else
                router.push('/detail')
    	}
    },
  }
</script>

<style scoped>
    
</style>