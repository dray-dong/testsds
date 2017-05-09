import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '../components/Hello'
import Main from '../page/main'
import Overview from '../page/overview'
import ObjectManage from '../page/object'
import Block from '../page/block'
import Alarm from '../page/alarm'
import State from '../page/state'
import Hardware from '../page/hardware'
import Storage from '../page/storage'

Vue.use(Router)

export default new Router({
  routes: [{ 
		path: '/',
		redirect: { name: 'main' }
    },{ 
		path: '/main',
		name: 'main',
		component: Main,
		redirect: { name: 'overview' },
	  	children: [{
	      path: 'overview',
	      name: 'overview',
	      component: Overview
	    },{
	      path: 'storage',
	      name: 'storage',
	      component: Storage
	    },{
	      path: 'object',
	      name: 'object',
	      component: ObjectManage
	    },{
	      path: 'state',
	      name: 'state',
	      component: State
	    },{
	      path: 'hardware',
	      name: 'hardware',
	      component: Hardware
	    },{
	      path: 'alarm',
	      name: 'alarm',
	      component: Alarm
	    },
	    {
	      path: 'block',
	      name: 'block',
	      component: Block
	    }]
    }]
})
