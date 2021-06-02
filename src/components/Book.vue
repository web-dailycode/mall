<template>
    <div>
    	<public-tmp :sort = "family" :img = "familys"
    	@into = "changerouter"><p></p></public-tmp>
    </div>
</template>

<script>
  import PublicTmp from './Detail/PublicTmp'
  export default {
    name:'Book',
    data() {
    	return {
    		family:'图书类',
    		familys:[
	    		{
		    		url:require('../assets/img/Book/book1.jpg'),
		    		name:'励志读物',
		    	},
		    	{
		    		url:require('../assets/img/Book/JAVAbook.jpg'),
		    		name:'JAVA基础',
		    	},
		    	{
		    		url:require('../assets/img/Book/vuejs.jpg'),
		    		name:'前端高级',
		    	},
		    	{
		    		url:require('../assets/img/Book/poetry.jpg'),
		    		name:'诗歌集合',
		    	}]
    	}
    },
    components:{
    	PublicTmp
    },
    methods:{
    	changerouter(router,index) {
    		switch(index) {
                case 0:router.push('/book/book01');break;
                case 1:router.push('/book/book02');break;
                case 2:router.push('/book/book03');break;
                case 3:router.push('/book/book04');break;
                default:router.push('/detail');
            }
    	}
    }
  }
</script>

<style scoped>
    
</style>