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
    name:'Food03',
    data() {
    	return {
            price:99.99,
            oldprice:199.99,
    		family:'饮料',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Digit/erji01.jpg'),
		    		name:'果茶',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/erji02.jpg'),
		    		name:'气泡水',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/erji03.jpg'),
		    		name:'可乐',
                    price:399.99,
                    oldprice:699.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/erji04.jpg'),
		    		name:'奶茶',
                    price:1499.99,
                    oldprice:1699.99,
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