import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
//Plugin de vue para cambiar entre idiomas
import { createI18n } from 'vue-i18n'

//Crea las variables con los diferentes textos para cada idioma especificado
const i18n = createI18n({
    legacy: false,
    locale: 'CAS',
    fallbackLocale: 'CAS', //Si algo no existe en el idioma escogido, se pondrá por defecto el valor en castellano
    messages: {
        CAS: {
            mensaje: 'esto es un mensaje',
            espacio: 'Espacio',
            navegacion: ['ESCLAT','Programa','Invitades','Espacio','FAQ','Entradas'],
            cuentaAtras: ['Días','Horas','Minutos','Segundos']
        },
        VAL: {
            mensaje: 'això és un missatge',
            espacio: 'Espai',
            navegacion: ['ESCLAT','Programa','Convidats','Espai','FAQ','Entrades'],
            cuentaAtras: ['Dies','Hores','Minuts','Segons']
        }
    }
});

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
