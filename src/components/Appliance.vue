<template>
    <div>
    	<public-tmp :sort = "family" :img = "familys"
    	@into = "changerouter"><p></p></public-tmp>
    </div>
</template>

<script>
  import PublicTmp from './Detail/PublicTmp'
  export default {
    name:'Appliance',
    data() {
    	return {
    		family:'家电类',
    		familys:[
	    		{
		    		url:require('../assets/img/Appliance/Haier.jpg'),
		    		name:'海尔冰箱',
		    	},
		    	{
		    		url:require('../assets/img/Appliance/geli.jpg'),
		    		name:'格力空调',
		    	},
		    	{
		    		url:require('../assets/img/Appliance/suboer.jpg'),
		    		name:'苏泊尔',
		    	},
		    	{
		    		url:require('../assets/img/Appliance/washing.jpg'),
		    		name:'洗衣机',
		    	}]
    	}
    },
    components:{
    	PublicTmp
    },
    methods:{
    	changerouter(router,index) {
    		switch(index) {
                case 0:router.push('/appliance/Appliance01');break;
                case 1:router.push('/appliance/Appliance02');break;
                case 2:router.push('/appliance/Appliance03');break;
                case 3:router.push('/appliance/Appliance04');break;
                default:router.push('/detail');
            }
    	}
    }
  }
</script>

<style scoped>
    
</style>