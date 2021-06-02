<template>
    <div>
    	<public-detail :img = 'img' :sort = 'sort'></public-detail>
    </div>
</template>

<script>
  import PublicDetail from '@/components/Detail/PublicDetail'
  export default {
    name:'Dressdetail',
    components: {
    	PublicDetail
    },
    data() {
    	return {
    		img: require('@/assets/img/Dress/gilr01.jpg'),
    		sort:'上衣'

    	}
    }
  }
</script>

<style scoped>
    
</style>