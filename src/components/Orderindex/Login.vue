<template>
    <div id="login">
    	<h2>登录</h2>
    	<form action="" method="post">
        <div class="tel">
          <label for="telephone">电话：</label>
          <input type="number" id="telephone" name="telephone" placeholder="请输入您的电话"
          v-model.number = "tel" onKeypress="return(/[\d\.]/.test(String.fromCharCode(event.keyCode)))">
        </div>
        <div class="tel">
          <label for="password">密码：</label>
          <input type="password" id="password" name="password" placeholder="请输入你的密码"
          v-model = "pas">
        </div>
        <div class="code">
          <label for="">输入验证码：</label>
          <input type="text" v-model ="aa">
          <span class="spand">{{randCode}}</span>
        </div>
        <div class="option">
          <input type="button" value="确定" @click = "certain">
          <input type="button" value="退出" @click = "exit">
        </div> 
      </form>
    </div>
</template>

<script>
  export default {
    name:'Login',
    data() {
      return {
        tel:'',
        pas:'',
        randCode:'',
        aa:'',
        chars: ['a','b','c','1','2','3']
      }
    },
    methods:{
      certain() {
        const users = this.$store.state.user;
        const thisphone = users.filter(obj => obj.phone == this.tel);
        console.log(thisphone.length);
        console.log(thisphone);
        
        if(this.tel == "" | this.pas == "") {
          alert('请输入必填字段！');
        }
        else if(this.tel != "" && this.tel.toString().length != 11){
          alert('请输入11位号码！')
        }
        else if(thisphone.length == 0){
          alert('该号码未注册，请前往注册界面！');
          this.$router.push('/register');
        }
        else if(this.randCode != this.aa) {
          alert('验证码错误！');
        }
        else if(this.pas != thisphone[0].password) {
          alert('密码错误!');
        }
        else
        {
          alert("登录成功！");
          this.tel = '';
          this.pas = '';
          this.$router.push({
            path:'/index',
            query:{
              name:thisphone[0].username
            }
          });
          this.$store.state.flag = true
          this.$store.state.username = thisphone[0].username
          for(var i in users) {
            if(users[i].phone == thisphone[0].phone){
              this.$store.state.number = parseInt(i)
            }
          }
        }
      },
      exit() {
        var oneconfirm = confirm('确定要退出吗？');
        if(oneconfirm)
        {
          this.$router.push('/index');
        }
      }
    },
    created() {
      for (var i = 0; i < 3; i++) {
        var randPos = Math.floor(Math.random()*(this.chars.length));
        this.randCode += this.chars[randPos];
      }
    }
  }

  // render: h => h(App)
</script>

<style scoped>
    #login{
      margin-top: 30px;
      margin-left: 300px;
      width: 460px;
      height: 330px;
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