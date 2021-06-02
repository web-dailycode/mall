<template>
    <div>
    	<public-tmp :sort = "family" :img = "familys"
    	@into = "changerouter"><p></p></public-tmp>
    </div>
</template>

<script>
  import PublicTmp from './Detail/PublicTmp'
  export default {
    name:'Dress',
    data() {
    	return {
    		family:'服饰类',
    		familys:[
	    		{
		    		url:require('../assets/img/Dress/fashion.jpg'),
		    		name:'女装',
		    		index:0
		    	},
		    	{
		    		url:require('../assets/img/Dress/boy.jpg'),
		    		name:'男装',
		    		index:1
		    	},
		    	{
		    		url:require('../assets/img/Dress/child.jpg'),
		    		name:'童装',
		    		index:2
		    	},
		    	{
		    		url:require('../assets/img/Dress/older.jpg'),
		    		name:'老人装',
		    		index:3
		    	}]
    	}
    },
    components:{
    	PublicTmp
    },
    methods: {
    	changerouter(router,index) {
            switch(index) {
                case 0:router.push('/dress/dress01');break;
                case 1:router.push('/dress/dress02');break;
                case 2:router.push('/dress/dress03');break;
                case 3:router.push('/dress/dress04');break;
                default:router.push('/detail');
            }
    	}
    }
  }
</script>

<style scoped>
    
</style>