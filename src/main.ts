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

            
            entradas_seleccion: ['HAZ TU SELECCIÓN', 'CONCIERTOS', 'TALLERES'],
            entradas_aviso: ['Te recordamos que la entrada al evento es','GRATUITA',
                'Rellenar este formulario nos permite llevar un control del aforo para garantiar una experiencia óptima y segura para todes les asistentes del festival.'],
            entradas_datos: ['RELLENA TUS DATOS','Nombre','Apellidos','Correo electrónico','Fecha de nacimiento'],
            entradas_menores: ['Menores de 16 años',
                'Los', 'menores de 14 a 16 años', 'deberán presentar a la entrada del concierto la siguiente autorización', 'firmada', 'por sus progenitores o tutores legales',
                'Los', 'menores de 14 años', 'deberán ir acompañades obligatoriamente por una', 'persona adulta responsable', '(progenitores o tutores) para poder acceder a talleres y/o conciertos',
                'Más informacion', 'en las secciones de', 'Normas y FAQ','en nuestra página de','información'],
            entradas_confirma: ['CONFIRMA Y ENVÍA', 'Confirmo que los CONCIERTOS y/o TALLERES seleccionados son correctos',
                'He leído y acepto las','Normas del evento',
                'He leído y acepto la', 'Política de privacidad'],
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
            preguntas:['Falta la traducción','Falta la traducción','Falta la traducción',
                'Falta la traducción','Falta la traducción','Falta la traducción',
                'Falta la traducción','Falta la traducción','Falta la traducción'],

            
        }
    }
});

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
