import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'

//? Plugin de vue para cambiar entre idiomas
import { createI18n } from 'vue-i18n'

//? Iconos de font awesome
/*
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)
*/

//? Crea las variables con los diferentes textos para cada idioma especificado
const i18n = createI18n({
    legacy: false,
    locale: 'CAS',
    fallbackLocale: 'CAS', //? Si algo no existe en el idioma escogido, se pondrá por defecto el valor en castellano
    messages: {
        CAS: {
            navegacion: ['ESCLAT','Programa','Invitades','Info','Entradas'],
            cuentaAtras: ['Días','Horas','Minutos','Segundos'],
            home_texto1: ['Tu festival ','gratuito ','de música y cultura en Valencia donde ','rompemos la norma'],
            home_texto2: ['Aquí va el texto'],
            preguntas:['¿Cuánto cuesta la entrada al festival?','¿Cuándo podré adquirir mis entradas?','He recibido el email de confirmación pero no encuentro mi entrada',
                '¿Pueden entrar menores de edad?','¿Está el festival adaptado para personas con movilidad reducida?','¿Hay algún lugar o plataforma para que las personas con movilidad reducida puedan ver los conciertos?',
                '¿Habrá comida en el festival?','¿Pregunta 2?','¿Pregunta 3?'],
            //respuestas:[,,,,,,,,],
            
            // faq1: ['¿Cuánto cuesta la entrada al festival?','Respuesta'],
            // faq2: ['¿Cuándo podré adquirir mis entradas?','Respuesta'],
            // faq3: ['He recibido el email de confirmación pero no encuentro mi entrada','Respuesta'],
            // faq4: ['¿Pueden entrar menores de edad?','Respuesta'],
            // faq5: ['¿Está el festival adaptado para personas con movilidad reducida?','Respuesta'],
            // faq6: ['¿Hay algún lugar o plataforma para que las personas con movilidad reducida puedan ver los conciertos?','Respuesta'],
            // faq7: ['¿Habrá comida en el festival?','Respuesta'],
            // faq8: ['¿Pregunta 2?','Respuesta'],
            // faq9: ['¿Pregunta 3?','Respuesta'],
        },
        VAL: {
            navegacion: ['ESCLAT','Programa','Convidats','Info','Entrades'],
            cuentaAtras: ['Dies','Hores','Minuts','Segons'],
            home_texto1: ['El teu festival ','gratuït ','de música i cultura a València on ','esclatem la norma'],
            home_texto2: ['Ací va el text'],
            preguntas:['¿Cuánto cuesta la entrada al festival?','¿Cuándo podré adquirir mis entradas?','He recibido el email de confirmación pero no encuentro mi entrada',
                '¿Pueden entrar menores de edad?','¿Está el festival adaptado para personas con movilidad reducida?','¿Hay algún lugar o plataforma para que las personas con movilidad reducida puedan ver los conciertos?',
                '¿Habrá comida en el festival?','¿Pregunta 2?','¿Pregunta 3?'],
        }
    }
});

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
