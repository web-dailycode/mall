import Vue from 'vue'
import Router from 'vue-router'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
// 路由懒加载：在页面请求时，只加载相应的模块，缩减了加载的时间，提高用户使用感
const Login = () => import('../components/Orderindex/Login')
const Register = () => import('../components/Orderindex/Register')
const Index = () => import('../components/Index')
const Dress = () => import('../components/Dress')
const Digit = () => import('../components/Digit')
const Food = () => import('../components/Food')
const Sport = () => import('../components/Sport')
const Book = () => import('../components/Book')
const Beauty = () => import('../components/Beauty')
const Appliance = () => import('../components/Appliance')
const Message = () => import('../components/Message/Message')
const Cart = () => import('../components/Message/Cart')
const Order = () => import('../components/Message/Order')
const Admin = () => import('../components/Message/Admin')
const Detail = () => import('../components/Detail/Detail')
const Dress01 = () => import('../components/class02/Dress02/Dress01')
const Dress02 = () => import('../components/class02/Dress02/Dress02')
const Dress03 = () => import('../components/class02/Dress02/Dress03')
const Dress04 = () => import('../components/class02/Dress02/Dress04')
const Digit01 = () => import('../components/class02/Digit02/Digit01')
const Digit02 = () => import('../components/class02/Digit02/Digit02')
const Digit03 = () => import('../components/class02/Digit02/Digit03')
const Digit04 = () => import('../components/class02/Digit02/Digit04')
const Food01 = () => import('../components/class02/Food02/Food01')
const Food02 = () => import('../components/class02/Food02/Food02')
const Food03 = () => import('../components/class02/Food02/Food03')
const Food04 = () => import('../components/class02/Food02/Food04')
const Appliance01 = () => import('../components/class02/Appliance02/Appliance01')
const Appliance02 = () => import('../components/class02/Appliance02/Appliance02')
const Appliance03 = () => import('../components/class02/Appliance02/Appliance03')
const Appliance04 = () => import('../components/class02/Appliance02/Appliance04')
const Beauty01 = () => import('../components/class02/Beauty02/Beauty01')
const Beauty02 = () => import('../components/class02/Beauty02/Beauty02')
const Beauty03 = () => import('../components/class02/Beauty02/Beauty03')
const Beauty04 = () => import('../components/class02/Beauty02/Beauty04')
const Book01 = () => import('../components/class02/Book02/Book01')
const Book02 = () => import('../components/class02/Book02/Book02')
const Book03 = () => import('../components/class02/Book02/Book03')
const Book04 = () => import('../components/class02/Book02/Book04')
const Sport01 = () => import('../components/class02/Sport02/Sport01')
const Sport02 = () => import('../components/class02/Sport02/Sport02')
const Sport03 = () => import('../components/class02/Sport02/Sport03')
const Sport04 = () => import('../components/class02/Sport02/Sport04')
const Dressdetail = () => import('../components/class02/Dress02/Dressdetail')




Vue.use(Router)

const routes = new Router({
	//配置路由和组件之间的应用关系
  routes: [
    {
      //设置路由的默认路径
      path:'',
      redirect:'/index', //重定向  '/'表示根路径
    },
    {
      path: '/index',
      component: Index,
      meta:{
        title:'首页'
      }
    },
    {
      path:'/dress',
      component:Dress,
      meta:{
        title:'服饰'
      }
    },
    {
      path:'/digit',
      component:Digit,
      meta:{
        title:'数码'
      }
    },
    {
      path:'/food',
      component:Food,
      meta:{
        title:'食品'
      }
    },
    {
      path:'/sport',
      component:Sport,
      meta:{
        title:'运动'
      }
    },
    {
      path:'/book',
      component:Book,
      meta:{
        title:'书籍'
      }
    },
    {
      path:'/beauty',
      component:Beauty,
      meta:{
        title:'美妆'
      }
    },
    {
      path:'/appliance',
      component:Appliance,
      meta:{
        title:'家电'
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        title:'登录'
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        title:'注册'
      }
    },
    {
      path:'/message',
      component:Message,
      meta:{
        title:'用户'
      }
    },
    {
      path:'/cart',
      component:Cart,
      meta:{
        title:'购物车'
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        title:'订单'
      }
    },
    {
      path:'/admin',
      component:Admin,
      meta:{
        title:'管理员'
      }
    },
    {
      path:'/detail',
      component:Detail,
      meta:{
        title:'详情'
      }
    },
    {
      path:'/dress/dress01',
      component:Dress01,
      meta:{
        title:'女装'
      }
    },
    {
      path:'/dress/dress02',
      component:Dress02,
      meta:{
        title:'男装'
      }
    },
    {
      path:'/dress/dress03',
      component:Dress03,
      meta:{
        title:'童装'
      }
    },
    {
      path:'/dress/dress04',
      component:Dress04,
      meta:{
        title:'老人装'
      }
    },
    {
      path:'/digit/digit01',
      component:Digit01,
      meta:{
        title:'小米'
      }
    },
    {
      path:'/digit/digit02',
      component:Digit02,
      meta:{
        title:'苹果'
      }
    },
    {
      path:'/digit/digit03',
      component:Digit03,
      meta:{
        title:'耳机'
      }
    },
    {
      path:'/digit/digit04',
      component:Digit04,
      meta:{
        title:'相机'
      }
    },
    {
      path:'/food/food01',
      component:Food01,
      meta:{
        title:'辣条'
      }
    },
    {
      path:'/food/food02',
      component:Food02,
      meta:{
        title:'薯片'
      }
    },
    {
      path:'/food/food03',
      component:Food03,
      meta:{
        title:'饮料'
      }
    },
    {
      path:'/food/food04',
      component:Food04,
      meta:{
        title:'水果'
      }
    },
    {
      path:'/appliance/appliance01',
      component:Appliance01,
      meta:{
        title:'海尔'
      }
    },
    {
      path:'/appliance/appliance02',
      component:Appliance02,
      meta:{
        title:'格力'
      }
    },
    {
      path:'/appliance/appliance03',
      component:Appliance03,
      meta:{
        title:'苏泊尔'
      }
    },
    {
      path:'/appliance/appliance04',
      component:Appliance04,
      meta:{
        title:'洗衣机'
      }
    },
    {
      path:'/beauty/beauty01',
      component:Beauty01,
      meta:{
        title:'口红'
      }
    },
    {
      path:'/beauty/beauty02',
      component:Beauty02,
      meta:{
        title:'卸妆水'
      }
    },
    {
      path:'/beauty/beauty03',
      component:Beauty03,
      meta:{
        title:'粉底液'
      }
    },
    {
      path:'/beauty/beauty04',
      component:Beauty04,
      meta:{
        title:'面膜'
      }
    },
    {
      path:'/book/book01',
      component:Book01,
      meta:{
        title:'励志'
      }
    },
    {
      path:'/book/book02',
      component:Book02,
      meta:{
        title:'java'
      }
    },
    {
      path:'/book/book03',
      component:Book03,
      meta:{
        title:'web'
      }
    },
    {
      path:'/book/book04',
      component:Book04,
      meta:{
        title:'诗歌'
      }
    },
    {
      path:'/sport/sport01',
      component:Sport01,
      meta:{
        title:'篮球'
      }
    },
    {
      path:'/sport/sport02',
      component:Sport02,
      meta:{
        title:'羽毛球'
      }
    },
    {
      path:'/sport/sport03',
      component:Sport03,
      meta:{
        title:'足球'
      }
    },
    {
      path:'/sport/sport04',
      component:Sport04,
      meta:{
        title:'棒球'
      }
    },

    {
      path:'/dress/dress01/dressdetail',
      component:Dressdetail,
      meta:{
        title:'上衣'
      }
    },

  ],
  //url默认hash表达式,用mode更改为html中的history模式
  mode:'hash',
  linkActiveClass:'active'
})
export default routes

//监听导航跳转
routes.beforeEach((to, from, next) => {
  //从from跳转到to
  document.title = to.matched[0].meta.title
  next()
})
