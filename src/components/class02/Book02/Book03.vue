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
    name:'Book03',
    data() {
    	return {
            price:99.99,
            oldprice:199.99,
    		family:'前端书籍',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Dress/child01.jpg'),
		    		name:'前端vue',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/child02.jpg'),
		    		name:'前端react',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/child03.jpg'),
		    		name:'前端jquery',
                    price:399.99,
                    oldprice:699.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/child04.jpg'),
		    		name:'前端angular',
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