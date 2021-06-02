<template>
    <div>
    	<public-tmp :sort = "family" :img = "familys"
    	@into = "changerouter"><p></p></public-tmp>
    </div>
</template>

<script>
  import PublicTmp from './Detail/PublicTmp'
  export default {
    name:'Sport',
    data() {
    	return {
    		family:'运动类',
    		familys:[
	    		{
		    		url:require('../assets/img/Sport/basketball.jpg'),
		    		name:'篮球',
		    	},
		    	{
		    		url:require('../assets/img/Sport/badminton.jpg'),
		    		name:'羽毛球',
		    	},
		    	{
		    		url:require('../assets/img/Sport/football.jpg'),
		    		name:'足球',
		    	},
		    	{
		    		url:require('../assets/img/Sport/baseball.jpg'),
		    		name:'棒球',
		    	}]
    	}
    },
    components:{
    	PublicTmp
    },
    methods:{
    	changerouter(router,index) {
    		switch(index) {
                case 0:router.push('/sport/sport01');break;
                case 1:router.push('/sport/sport02');break;
                case 2:router.push('/sport/sport03');break;
                case 3:router.push('/sport/sport04');break;
                default:router.push('/detail');
            }
    	}
    }
  }
</script>

<style scoped>
    
</style>