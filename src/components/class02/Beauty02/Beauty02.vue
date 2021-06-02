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
    name:'Beauty02',
    data() {
    	return {
    		family:'卸妆水',
            img:require('@/assets/img/other/shoping6.jpg'),
    		familys:[
	    		{
		    		url:require('@/assets/img/Digit/apple01.jpg'),
		    		name:'unny',
                    price:39.99,
                    oldprice:59.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/apple02.jpg'),
		    		name:'美宝莲',
                    price:49.99,
                    oldprice:59.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/apple03.jpg'),
		    		name:'逐本',
                    price:89.99,
                    oldprice:109.99,
		    	},
		    	{
		    		url:require('@/assets/img/Digit/apple04.jpg'),
		    		name:'高斯',
                    price:49.99,
                    oldprice:69.99,
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