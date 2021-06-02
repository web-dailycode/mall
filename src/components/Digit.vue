<template>
    <div>
    	<public-tmp :sort = "family" :img = "familys"
    	@into = "changerouter"><p></p></public-tmp>
    </div>
</template>

<script>
  import PublicTmp from './Detail/PublicTmp'
  export default {
    name:'Digit',
    data() {
    	return {
    		family:'数码类',
    		familys:[
	    		{
		    		url:require('../assets/img/Digit/xiaomi.jpg'),
		    		name:'小米手机',
		    	},
		    	{
		    		url:require('../assets/img/Digit/apple.jpg'),
		    		name:'苹果电脑',
		    	},
		    	{
		    		url:require('../assets/img/Digit/erji.jpg'),
		    		name:'运动耳机',
		    	},
		    	{
		    		url:require('../assets/img/Digit/creame.jpg'),
		    		name:'单反相机',
		    	}]
    	}
    },
    components:{
    	PublicTmp
    },
    methods: {
    	changerouter(router,index) {
            switch(index) {
                case 0:router.push('/digit/digit01');break;
                case 1:router.push('/digit/digit02');break;
                case 2:router.push('/digit/digit03');break;
                case 3:router.push('/digit/digit04');break;
                default:router.push('/detail');
            }
    	}
    }
  }
</script>

<style scoped>
    
</style>