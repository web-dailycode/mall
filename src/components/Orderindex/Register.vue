<template>
    <div id="Register">
    	<h2>注册</h2>
    	<form action="" method="post">
    		<div class="tel">
	          <label for="name">姓名：</label>
	          <input type="text" id="name" name="name" placeholder="请输入你的姓名"
	          v-model = "name">
	        </div>
	        <div class="tel">
	          <label for="telephone">电话：</label>
	          <input type="number" id="telephone" name="telephone" placeholder="请输入您的电话"
	          v-model.number = "tel" onKeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))">
	        </div>
	        <div class="tel">
	          <label for="passwordone">密码：</label>
	          <input type="password" id="passwordone" name="password" placeholder="请输入你的密码"
	          v-model = "pas1">
	        </div>
	        <div class="tel">
	          <label for="passwordtwo">确认密码：</label>
	          <input type="password" id="passwordtwo" name="password" placeholder="请输入你的密码"
	          v-model = "pas2">
	        </div>
	        <div class="option">
	          <input type="button" value="确定" @click = "certain(name,tel,pas1,pas2)">
	          <input type="button" value="退出" @click = "exit">
	        </div> 
      </form>
    </div>
</template>

<script>
  export default {
    name:'Register',
    data() {
      return {
      	name:'',
        tel:'',
        pas1:'',
        pas2:'',
      }
    },
    methods: {
    	certain(name,tel,pas1,pas2) {
    		const user = {name,tel,pas1,pas2};
			this.$store.commit('certain',user);
    		
    	},
    	exit() {
    		var contain = confirm("确定要退出？")
    		if(contain){
    			this.$router.push('/index');
    		}
    	}
    }
  }
</script>

<style scoped>
    #Register{
    	margin-top: 30px;
        margin-left: 300px;
        width: 460px;
        height: 370px;
        border: 1px solid #EEEEEE;
        color: white;
        border-radius: 15px;
        box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
    }
    h2{
      /*margin: 20px 480px;*/
      margin: 20px auto;
      text-align: center;
      font-family: "黑体";
      font-weight: bold;
      font-size: 30px;
      color: #48609E;
    }
    .tel{
      margin:30px 20px;
    }
    .tel label{
    	display: inline-block;
    	width: 80px;
    	height: 25px;
    	text-align: right;
    }
    .tel input{
      width: 300px;
      height: 25px;
      outline: none;
      padding-left: 10px;
    }
    .option{
      margin: 20px 100px;
    }
    .option input {
      float: left;
      width: 60px;
      height: 30px;
      text-align: center;
      margin-left: 50px;
      outline: none;
    }
    .option input:hover{
      color: blue;
      background-color:white;
      border: 1px solid #48609E;
    }
    .code {
      margin:30px 20px;
    }
    .code input{
      width: 100px;
      height: 25px;
      outline: none;
    }
    .spand {
      display: inline-block;
      width: 60px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      margin-left: 10px;
      background-color: gray;
    }
</style>