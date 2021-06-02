<template>
    <div id="Beauty">
    	<public-tmp :sort = "family" :img = "familys"
    	@into = "changerouter"><p></p></public-tmp>
    </div>
</template>

<script>
  import PublicTmp from './Detail/PublicTmp'
  export default {
    name:'Beauty',
    data() {
    	return {
            family:'美妆类',
    		familys:[
		    	{
		    		url:require('../assets/img/Beauty/lipstick.jpg'),
		    		name:'口红',
		    	},
		    	{
		    		url:require('../assets/img/Beauty/cleanning.jpg'),
		    		name:'卸妆',
		    	},
		    	{
		    		url:require('../assets/img/Beauty/liquid.jpg'),
		    		name:'粉底',
		    	},
		    	{
		    		url:require('../assets/img/Beauty/mask.jpg'),
		    		name:'面膜',
		    	},
	    	]
    	}
    },
    components:{
        PublicTmp
    },
    methods:{
    	changerouter(router,index) {
    		switch(index) {
                case 0:router.push('/beauty/beauty01');break;
                case 1:router.push('/beauty/beauty02');break;
                case 2:router.push('/beauty/beauty03');break;
                case 3:router.push('/beauty/beauty04');break;
                default:router.push('/detail');
            }
    	}
    }
}
</script>

<style scoped>
</style>