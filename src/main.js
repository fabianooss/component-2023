import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Principal from './view/Principal.vue'
import Sobre from './view/Sobre.vue'
import Outra from './view/Outra.vue'
import Carro from './view/Carro.vue'

import { createRouter, createWebHistory} from 'vue-router'


const routes = [
    { path: '/', component: Principal },
    { path: '/sobre', component: Sobre },
    { path: '/outra', component: Outra },
    { path: '/carro', component: Carro },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

createApp(App).use(router).mount('#app')
