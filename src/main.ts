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
<<<<<<< Updated upstream
            navegacion: ['ESCLAT','Programa','Invitades','Info','Entradas'],
=======
            home: {
                texto1: ['Tu festival ','gratuito ','de música y cultura en Valencia donde ','rompemos la norma'],
                texto2: ['Durante estos tres días os invitamos de forma gratuita a disfrutar de los conciertos, podréis asistir a las distintas charlas y talleres que se organizarán por la mañana, pasaros por el mercadillo de ropa de segunda mano y el intercambio de libros, o echar un vistazo a los stands de artistas.'],
                texto3: ['Reserva tus', 'ENTRADAS'],
            },
            dias: ['Viernes','Sábado','Domingo'],
            navegacion: ['Quienes somos','Programa','Invitades','Info','Entradas'],
>>>>>>> Stashed changes
            cuentaAtras: ['Días','Horas','Minutos','Segundos'],
            home_texto1: ['Tu festival ','gratuito ','de música y cultura en Valencia donde ','rompemos la norma'],
            home_texto2: ['Aquí va el texto'],
            
            //?FAQ - INFO
            faq_apartados: ['Entradas','Adaptaciones','Servicios'],
            preguntas:['¿Cuánto cuesta la entrada al festival?','¿Cuándo podré adquirir mis entradas?','He recibido el email de confirmación pero no encuentro mi entrada',
                '¿Pueden entrar menores de edad?','¿Está el festival adaptado para personas con movilidad reducida?','¿Hay algún lugar o plataforma para que las personas con movilidad reducida puedan ver los conciertos?',
                '¿Habrá comida en el festival?','¿Pregunta 2?','¿Pregunta 3?'],
<<<<<<< Updated upstream
            respuestas:['Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta'],
            
            //?ENTRADAS
            entradas_seleccion: ['HAZ TU SELECCIÓN', 'CONCIERTOS', 'TALLERES'],
            entradas_dias:['Viernes','Sábado','Domingo'],
            entradas_aviso: ['Te recordamos que la entrada al evento es','GRATUITA',
                'Rellenar este formulario nos permite llevar un control del aforo para garantiar una experiencia óptima y segura para todes les asistentes del festival.'],
            entradas_datos: ['RELLENA TUS DATOS','Nombre y apellidos','Correo electrónico','Fecha de nacimiento'],
            entradas_menores: ['Menores de 16 años',
=======
                respuestas:['Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta'],
            },

            entradas: {
                seleccion: ['HAZ TU SELECCIÓN','CONCIERTOS','TALLERES'],
                aviso: ['Te recordamos que la entrada al evento es','GRATUITA',
                'Rellenar este formulario nos permite llevar un control del aforo para garantizar una experiencia óptima y segura para todes les asistentes del festival.'],
                datos: ['RELLENA TUS DATOS','Nombre y apellidos','Correo electrónico','Fecha de nacimiento'],
                menores: ['Menores de 16 años',
>>>>>>> Stashed changes
                'Los', 'menores de 14 a 16 años', 'deberán presentar a la entrada del concierto la siguiente autorización', 'firmada', 'por sus progenitores o tutores legales',
                'Los', 'menores de 14 años', 'deberán ir acompañades obligatoriamente por una', 'persona adulta responsable', '(progenitores o tutores) para poder acceder a talleres y/o conciertos',
                'Más información', 'en las secciones de', 'Normas y FAQ','en nuestra página de','información'],
            entradas_confirma: ['CONFIRMA Y ENVÍA', 'Confirmo que los CONCIERTOS y/o TALLERES seleccionados son correctos',
                'He leído y acepto las','Normas del evento',
                'He leído y acepto la', 'Política de privacidad',
                'Enviar'],
<<<<<<< Updated upstream
            //
            
        },
        VAL: {
            navegacion: ['ESCLAT','Programa','Convidats','Info','Entrades'],
=======
                talleres: ['Taller de binders',
                'Charla de Paco Roca', 'Sesión de Ojo Garabato', 'Charlas sobre literatura LGTBIQ+', 'Taller Zero Waste','Charla de Melani Llenoart',
                'Taller de grabado', 'Charla de Estudio Graffica', 'Taller los plantas', 'Charla de Elena Yuuste: "Redes sociales y Creatividad"']
            }   
        },
        VAL: {
            home: {
                texto1: ['El teu festival ','gratuït ','de música i cultura a València on ','esclatem la norma'],
                texto2: ["Durant estos tres dies us convidem de manera gratuïta a gaudir dels concerts, podreu assistir a les diferents xarrades i tallers que s'organitzaran al matí, passar-vos pel mercat de roba de segona mà i l'intercanvi de llibres, o donar una ullada als estands d'artistes. "],
                texto3: ['Reserva les', 'ENTRADES'],
            },
            
            dias: ['Divendres','Dissabte','Diumenge'],
            navegacion: ['Qui som','Programa','Convidats','Info','Entrades'],
>>>>>>> Stashed changes
            cuentaAtras: ['Dies','Hores','Minuts','Segons'],
            home_texto1: ['El teu festival ','gratuït ','de música i cultura a València on ','esclatem la norma'],
            home_texto2: ['Ací va el text'],
            
            //?FAQ - INFO
            faq_apartados: ['Entrades','Adaptacions','Servicis'],
            preguntas:["Quant costa l'entrada al festival?",'Quan podré adquirir les meues entrades?',"He rebut l'email de confirmació però no trobe la meua entrada",
                "Poden entrar menors d'edat?",'Està el festival adaptat per a persones amb mobilitat reduïda?','Hi ha algun lloc o plataforma perquè les persones amb mobilitat reduïda puguen veure els concerts?',
                'Hi haurà menjada en el festival?','Pregunta 2?','Pregunta 3?'],
            respuestas:['Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta'],
            
            //?ENTRADAS
            entradas_seleccion: ['FES LA SELECCIÓ', 'CONCERTS', 'TALLERS'],
            entradas_dias:['Divendres','Dissabte','Diumenge'],
            entradas_aviso: ["Et recordem que l'entrada a l'esdeveniment és",'GRATUÏTA',
                "Emplenar este formulari ens permet portar un control de l'aforament per a garantir una experiència òptima i segura per a tots els assistents del festival."],
            entradas_datos: ['EMPLENA LES DADES','Nom i cognoms','Correu electrònic','Data de naixement'],
            entradas_menores: ['Menors de 16 anys',
                'Els', 'menors de 14 a 16 anys', "hauran de presentar a l'entrada del concert la següent autorització firmada", 'firmada', 'pels seus progenitors o tutors legals',
                'Els', 'menors de 14 anys', "hauran d'anar acompanyats obligatòriament per", 'persona adulta responsable', '(progenitors o tutors legals) per a poder accedir a tallers i/o concerts',
                'Més informació', 'en les seccions de', 'Normes i FAQ','en la nostra pàgina de','informació'],
            entradas_confirma: ['CONFIRMA I ENVIA', 'Confirme que els CONCERTS i/o TALLERS seleccionats són correctes',
                'He llegit i accepte les',"Normes de l'esdeveniment",
                'He llegit i accepte la', 'Política de privacitat',
                'Enviar'],
        }
    }
});

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
