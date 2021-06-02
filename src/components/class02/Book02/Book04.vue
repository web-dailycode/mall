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
    name:'Book04',
    data() {
    	return {
            price:99.99,
            oldprice:199.99,
    		family:'诗歌书籍',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Dress/older01.jpg'),
		    		name:'唐诗三百首',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/older02.jpg'),
		    		name:'飞鸟集',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/older03.jpg'),
		    		name:'现代诗歌精选',
                    price:399.99,
                    oldprice:699.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/older04.jpg'),
		    		name:'生如夏花',
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