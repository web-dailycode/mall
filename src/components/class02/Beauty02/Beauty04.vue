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
    name:'Beauty04',
    data() {
    	return {
    		family:'面膜',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Digit/creame01.jpg'),
		    		name:'御泥坊',
                    price:59.99,
                    oldprice:89.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/creame02.jpg'),
		    		name:'一叶子',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/creame03.jpg'),
		    		name:'olay',
                    price:399.99,
                    oldprice:499.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/creame04.jpg'),
		    		name:'wis',
                    price:499.99,
                    oldprice:699.99,
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