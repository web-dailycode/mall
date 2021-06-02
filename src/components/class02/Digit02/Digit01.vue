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
    name:'Digit01',
    data() {
    	return {
            price:99.99,
            oldprice:199.99,
    		family:'小米商品',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Digit/xiaomi01.jpg'),
		    		name:'小米一代',
                    price:1599.99,
                    oldprice:3299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/xiaomi02.jpg'),
		    		name:'小米二代',
                    price:1899.99,
                    oldprice:2399.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/xiaomi03.jpg'),
		    		name:'小米三代',
                    price:2399.99,
                    oldprice:2699.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/xiaomi04.jpg'),
		    		name:'小米四代',
                    price:3499.99,
                    oldprice:4699.99,
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