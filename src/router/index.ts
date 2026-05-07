import Home from "@/pages/home/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/pages/Layout.vue";
import About from "@/pages/about/About.vue";
import Programa from "@/pages/programa/Programa.vue";
import Invitades from "@/pages/invitades/Invitades.vue";
import Espacio from "@/pages/espacio/Espacio.vue";
import FAQ from "@/pages/faq/FAQ.vue";
import Entradas from "@/pages/entradas/Entradas.vue";

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
              path: 'espacio',
              name: 'espacio',
              component: Espacio
            },
            {
              path: 'faq',
              name: 'faq',
              component: FAQ
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