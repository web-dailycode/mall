<template>
    <div>
    	<public-tmp :sort = "family" :img = "familys"
    	@into = "changerouter"><p></p></public-tmp>
    </div>
</template>

<script>
  import PublicTmp from './Detail/PublicTmp'
  export default {
    name:'Food',
    data() {
    	return {
    		family:'食品类',
    		familys:[
	    		{
		    		url:require('../assets/img/Food/latiao.jpg'),
		    		name:'辣条',
		    	},
		    	{
		    		url:require('../assets/img/Food/shupian.jpg'),
		    		name:'薯片',
		    	},
		    	{
		    		url:require('../assets/img/Food/yinliao.jpg'),
		    		name:'饮品',
		    	},
		    	{
		    		url:require('../assets/img/Food/fruit.jpg'),
		    		name:'水果',
		    	}]
    	}
    },
    components:{
    	PublicTmp
    },
    methods: {
    	changerouter(router,index) {
            switch(index) {
                case 0:router.push('/food/food01');break;
                case 1:router.push('/food/food02');break;
                case 2:router.push('/food/food03');break;
                case 3:router.push('/food/food04');break;
                default:router.push('/detail');
            }
    	}
    }
  }
</script>

<style scoped>
    
</style>