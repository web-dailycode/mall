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
    name:'Sport01',
    data() {
    	return {
            price:99.99,
            oldprice:199.99,
    		family:'篮球类',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Dress/gilr01.jpg'),
		    		name:'斯伯丁',
                    price:99.99,
                    oldprice:199.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/gilr02.jpg'),
		    		name:'李宁',
                    price:199.99,
                    oldprice:299.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/gilr03.jpg'),
		    		name:'耐克',
                    price:199.99,
                    oldprice:399.99,
		    	},
		    	{
		    		url:require('@/assets/img/Dress/gilr04.jpg'),
		    		name:'乔丹',
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
    }
  }
</script>

<style scoped>
    
</style>