import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/pages/Layout.vue";
import About from "@/pages/about/About.vue";
import Programa from "@/pages/programa/Programa.vue";
import Invitades from "@/pages/invitades/Invitades.vue";
import Entradas from "@/pages/entradas/Entradas.vue";
import Info from "@/pages/info/Info.vue";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      children: [
        {
          path: '', 
          component: Layout,
          children: [
            {
              path: '',
              name: 'home',
              component: Home
            },
            {
              path: 'about',
              name: 'about',
              component: About
            },
            {
              path: 'programa',
              name: 'programa',
              component: Programa
            },
            {
              path: 'invitades',
              name: 'invitades',
              component: Invitades
            },
            {
              path: 'info',
              name: 'info',
              component: Info
            },
            {
              path: 'entradas',
              name: 'entradas',
              component: Entradas
            }
          ]
        }

      ]
    }
    /*
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:patchMatch(.*)',
      redirect: '/'
    }
      */
  ]
})