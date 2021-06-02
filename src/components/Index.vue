<template>
    <div>
    	<div class="pagefirst">
    		<table>
    			<tr>
    				<td>手机</td>
    				<td>笔记本</td>
    			</tr>
    			<tr>
    				<td>平板</td>
    				<td>游戏机</td>
    			</tr>
    			<tr>
    				<td>电视</td>
    				<td>空调</td>
    				<td>洗衣机</td>
    			</tr>
    			<tr>
    				<td>厨卫家电</td>
    				<td>小家电</td>
    			</tr>
    			<tr>
    				<td>男装</td>
    				<td>女装</td>
    				<td>鞋</td>
    			</tr>
    			<tr>
    				<td>图书</td>
    				<td>音响</td>
    			</tr>
    			<tr>
    				<td>篮球</td>
    				<td>足球</td>
    				<td>滑板</td>
    			</tr>
    		</table>
    	</div> 
    	<div id="topBanner" style="padding-top: 5px;" class="slide" >
            <div v-for="(item, index) in img" v-show="index===mark" :key="index" class="slideshow">
                  <li class = "left" @click = "goback(index)"
                  >&lt</li>
                  <li>
                      <a href="#">
                        <img :src="item.url" :alt="item.message" v-for = "(item,index) in img" v-show = "index === mark">
                      </a>
                  </li>
                  <li class = "right" @click = "goto(index)"
                  >&gt</li>
                  
            </div>
            <div class="bar">
                   <span v-for="(item, index) in img" :key="index"
                   :class = "{active:mark === index}"
                   @click = "change(index)"
                   ></span>
            </div>
        </div>  
    </div>
</template>

<script>
  export default {
    name:'Index',
    data(){
        return {
            mark:0,
            img:[
            {
                url:require('../assets/img/Index/fashion.jpg'),
                message:'图片1'
            },{
                url:require('../assets/img/Index/gairl.jpg'),
                 message:'图片2'
            },{
                url:require('../assets/img/Index/shoping2.jpg'),
                 message:'图片3'
            },{
                url:require('../assets/img/Index/shoping4.jpg'),
                 message:'图片4'
            }],
            color:"red",
        }
    },
    methods: {  
        autoPlay () {    
            this.mark++;
          if (this.mark === this.img.length) { //当遍历到最后一张图片置零  
            this.mark = 0  
          }
          // console.log(this.mark);

        },  
        play () {
            setInterval(this.autoPlay, 2000) 
        },  
        change (index) {  
          this.mark = index
        },
        goback(index) {
            if(this.mark == 0) {
                this.mark = 3;
            }
            else
            {
                this.mark--;
            }
        },
        goto(index) {
            if(this.mark == 3) {
                this.mark = 0;
            }
            else
            {
                this.mark++;
            }
        }
    },  
   created () {  
     this.play()  
   }
}
</script>

<style scoped>
.pagefirst{
	margin: 10px;
	border-radius: 10px;
	width: 230px;
	background-color: #48609E;
}
td{
	padding: 10px;
	color: white;
}
td:hover{
    color: #4D96FF;
}




.slide {  
    width: 500px;  
    height: 320px;
    overflow: hidden;  
    position: absolute; 
    top:250px;
    left: 350px; 
    /*border: 1px solid #EEEEEE;*/
  }   
  .bar {  
    position: absolute;  
    width: 100%;  
    bottom: 10px;  
    margin: 0 auto;  
    z-index: 10;  
    text-align: center;  
  }  
  .bar span {  
    width: 20px;  
    height: 5px;  
    border: 1px solid;  
    background: white;  
    display: inline-block;  
    margin-right: 10px;  
  }
  .active {
    background-color: red;
  }
  .left,.right {
    width: 30px;
    height: 30px;
    border: 1px solid #4D96FF;
    border-radius: 15px;
    font-size: 20px;
    color:#EEEEEE;
    text-align: center;
    line-height: 30px;
    background-color: rgba(72,96,158,0.2);
    position: absolute;
    top:140px;
  }
  .right{
    right: 5px;
  }
  .left:hover,.right:hover {
    background-color: #EEEEEE;
    color: #4D96FF;
    border: 2px solid #4D96FF;
  }
  @media screen and (max-width:1200px){
    #topBanner{
      display: none;
    }
  }
  @media screen and (max-width:800px){
    .pagefirst{
      display: none;
    }
  }
</style>