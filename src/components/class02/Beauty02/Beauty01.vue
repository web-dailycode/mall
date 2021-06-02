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
    name:'Beauty01',
    data() {
    	return {
            price:99.99,
            oldprice:199.99,
    		family:'口红系列',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Digit/xiaomi01.jpg'),
		    		name:'阿玛尼',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/xiaomi02.jpg'),
		    		name:'植村秀',
                    price:199.99,
                    oldprice:399.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/xiaomi03.jpg'),
		    		name:'香奈儿',
                    price:299.99,
                    oldprice:399.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/xiaomi04.jpg'),
		    		name:'迪奥',
                    price:299.99,
                    oldprice:399.99,
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