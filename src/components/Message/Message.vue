<template>
    <div id="message">
    	<table>
    		<tr>
    			<td>
    				<p>姓名</p>
    				<input type="text" v-model = "username">
    			</td>
    			<td>
    				<p>电话</p>
    				<input type="text" v-model = "userphone">
    			</td>
    			<td>
    				<p>地址</p>
    				<input type="text" v-model = "useraddress">
    			</td>
    		</tr>
    		<tr>
    			<td>
    				<p>密码</p>
    				<input type="text" v-model = "userpassword">
    			</td>
    			<td>
    				<p>问题</p>
    				<input type="text" v-model = "userquestion">
    			</td>
    			<td>
    				<p>答案</p>
    				<input type="text" v-model = "useranswer">
    			</td>
    		</tr>
    		<button>取消</button>
    		<button @click = "keep()" class="keep">保存</button>
    	</table>
    </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name:'Message',
    data() {
        return {
            username:'',
            userphone:'',
            useraddress:'',
            userpassword:'',
            userquestion:'',
            useranswer:'',
        }
    },
    methods:{
        keep() {
            // console.log(this.$store.state.user[this.$store.state.number].question);
            // console.log(this.$store.state.user[this.$store.state.number].answer);
            // this.$store.state.user[this.$store.state.number].question = "how are you?"
            const number = this.$store.state.number;
            const user = this.$store.state.user;
            //数组不能通过索引值修改他的参数！！！
            Vue.set(user,number,{
                username:this.username,
                phone:this.userphone,
                address:this.useraddress,
                password:this.userpassword,
                question:this.userquestion,
                answer:this.useranswer
            })
            console.log(this.username,this.userphone,this.useraddress,this.userpassword,this.userquestion,this.useranswer)
        }
    },
    created() {
        const number = this.$store.state.number;
        const user = this.$store.state.user;
        this.username = user[number].username;
        this.userphone = user[number].phone;
        this.useraddress = user[number].address;
        this.userpassword = user[number].password;
        this.userquestion = user[number].question;
        this.useranswer = user[number].answer;  
    }
  }
</script>

<style scoped>
    #message{
    	margin-left: 50px;
    }
    td{
    	width: 200px;
    	height: 60px;
    	border: 1px solid #e9e9e9;
    	margin-bottom: 20px;
    }
    button{
        background-color: red;
        padding:3px 12px;
        color: white;
        margin: 20px 20px 0 0;
    }
    .keep{
        background-color: green;
    }
</style>