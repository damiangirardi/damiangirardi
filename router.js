import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from '~/pages/index'
import Masterplan from '~/pages/Masterplan/index'
import Apartamentos from '~/pages/Apartamentos/index'


Vue.use(Router)

export function	createRouter() {
	const router = new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				name: 'home',
				component: Home
			},
			{
				path: '/masterplan',
				name: 'Masterplan',
				component: Masterplan
			},
			{
				path: '/topview',
				name: 'Apartamentos',
				component: Apartamentos
			}
		]
	})

	return router
}