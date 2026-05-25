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
            home: {
                texto1: ['Tu festival ','gratuito ','de música y cultura en Valencia donde ','rompemos la norma'],
                texto2: ['Aquí va el texto'],
                texto3: ['Reserva tus', 'ENTRADAS'],
            },
            dias: ['Viernes','Sábado','Domingo'],
            navegacion: ['Quienes somos','Programa','Invitades','Info','Entradas'],
            cuentaAtras: ['Días','Horas','Minutos','Segundos'],

            invitades: {
                tabs: ['ARTISTAS','TALLERES','CHARLAS'],
                descripcion: [
                    'Hija de músicos, Rita Payés es una más de los talentos emergidos de la Sant Andreu Jazz Band, núcleo de donde han salido algunos de los más prometedores jóvenes músicos de la escena jazzística, como Andrea Motis, Èlia Bastida o Magalí Datzira.<br>Debutó con Joan Chamorro, su mentor, en el mundo discográfico cuando la trombonista publicó Imagina (Autoeditado, 2019). Después, con su primer trabajo en solitario, Como la piel, (Autoeditado, 2021), la artista dio comienzo a su proyección internacional. Un disco construido a partir de temas propios, con el jazz predominando, y con influencias del bolero, bossa nova, música clásica y popular.\nCanciones como “Algo contigo” van por el camino de los 52M de reproducciones en Spotify y el video “Nunca vas a comprender” cerca de los 7M de reproducciones en Youtube, que se suman a sus más de 1,3M de oyentes mensuales.',
                    'Samantha Margret es una cantante, compositora y productora de California, Estados Unidos. Lleva activa en el ámbito musical desde medidados del 2016, cuya música se dirige principalmente a mujeres que quieren ser dueñas de su historia, su cuerpo y sus sentimientos. Su música se caracteriza por un género pop-alternativo que mezcla voces superpuestas y ritmos blabla.<br>Sacó su single \'RAGE\' el 24 de junio de 2022, canción que se convirtió para muchas en su grito de guerra personal.',
                    'La historia de Papa Topo cuenta ya con innumerables e inabarcables capítulos, y al mismo tiempo da la sensación de haberse comenzado a escribir apenas. Y es que, a pesar de una dilatada discografía y una amplia experiencia musical, Adrià Arbona sigue siendo radicalmente joven. Lo fue cuando su primer single, Oso Panda, producido por Guille Milkyway, se convirtió en objeto de búsqueda de melómanos y seguidores. Cuando los comparaban con La Casa Azul, Talulah Gosh, Alaska Y Los Pegamoides, Helen Love o Plastic Bertrand. Cuando repiten éxito con La Chica Vampira y su espíritu punk. Pero también lo es en su etapa posterior con una formación más completa y desarrollando su amor por la serie B.',
                    'Descripción Emil et il',
                    'Diva del pop, folk y electrónica valenciana. Desde el Pasodoble a la ruta del bakalao, pasando por baladas ochenteras y boleros electrónicos en valenciano. Sandra Monfort recoge la cultura e imaginario tradicional del pueblo valenciano y lo fusiona con todo lo que se le antoje con una gracia y una sensibilidad exquisita.',
                    'Abril es un talento fresco y vibrante que traqnsmite energía con su voz potente y letras sinceras. En su primer trabajo, "Instruccions per estimar una cirera" (primavera 2025), mezcla diversos estilos musicales que conectan con públicos de todas las edades. Sus composiciones bailan entre ritmos pegadizos y melodías emocionales, sorprendiéndonos con la versatilidad y potencia a lo largo de todo el disco. Prepárate para descubrir un nuevo sonido que te hará bailar y sentir con la misma intensidad.',
                    'Lisasinson es un proyecto gráfico y musical que comenzó en noviembre de 2018 en el campus de Bellas Artes de Valencia. Rápidamente encontraron su identidad: líneas de batería punk, melodías de guitarra pop, letras descaradas, o como a ellas les gusta llamarlo "punky pop". Su pegadizo sonido bubbly-punk-pop con espíritu de grupos como The Primitives, Tiger Trap, Los Romeos, Heavenly, Aerolineas Federales, Los Fresones Rebeldes, Shop Assistants, The Aislers Set, Juniper Moon, Veronica Falls, Alvvays o Helen Love junto a sus mensajes feministas, sociales (inspirados en la normalización de la violencia contra ciertos colectivos de la sociedad) y la frescura y el descaro de la juventud crean un fórmula perfecta.',
                    'Au d\'astí! es una banda de punk-oi! (o rock trabucaire como les gusta decir a ellos), que nace en 2019 y cuyos componentes son oriundos de la Baixa Ribagorza y la Llitera. Sus letras denuncian temas como la despoblación o el olvido que sufren las zonas rurales en Aragón, algunas describen escenas de la vida y la cultura alto aragonesa y varias de ellas están escritas en aragonés baixo-ribagorzano y catalán de Aragón. Su primer disco “Rock Trabucaire” ha sido grabado y editado por Julen Urzaiz en los estudios Sound of Sirens, y publicado bajo el sello Ixufrina Records en mayo de 2022.', //Barra invertida para incluir el apóstrofe en el texto
                    'Descripción Petunias',
                    'IXEYA es un dúo acústico rural indie/folk gestado en Santa Engracia (Zaragoza), su música pone de protagonistas las personales melodías creadas con sus voces, cantan a la naturaleza, la diversidad del amor, el feminismo o la lengua aragonesa. Su último mini álbum "2Hermanas" ha sido premiado en CREAR (Jóvenes Creadores Aragoneses) y en los Premios de la Música Aragonesa como mejor EP del 2023.',
                    'Entre unas ganas brutales de hacer música , la ayuda de Tinder y una pizca de sinvergüencería , se forma MIMOSAS en Valencia, compuesta por Lucía y Nora a los micros y guitarras, Lía al bajo y Emma a la batería. Con el cerebro lleno de ideas y sobre todo, de mierda, estas cuatro petardas vienen a arrasarlo todo con la esencia punk, \"indi\" y rockera que nos transmiten. Sin ningún pelo en la lengua, experimentan con el sonido y las letras contando lo que viven y sienten en su día a día...',
                    'Descripción Tronkas',
                    'En 2006 nació Ojete Calor porque había muchas etiquetas musicales por todos lados, pero nadie hacía Subnopop... También porque la gente se estaba volviendo loca reivindicando cosas absurdas como el folk, pero no reconocían lo bien que estaban 2 Unlimited o Sonia y Selena. Fue entonces cuando empezaron a componer un montón de greatest hits directos, rabiosamente pegadizos, con estribillos sulfúricos para mover el esqueleto, compuestos entre Madrid y Villanueva de la Jara.',
                    'Descripción Svetlana',
                    'Delilah Bon es el alias de Lauren Tate y una cantante, compositora, rapera y productora británica. También es conocida como la cantante principal de la banda de grunge Hands Off Gretel. Ha recibido una importante cobertura de Kerrang!, el Barnsley Chronicle y el programa de televisión musical francés Taratata.'
                ]
            },

            faq: {
                apartados: ['Entradas', 'Adaptaciones', 'Servicios'],
                preguntas:['¿Cuánto cuesta la entrada al festival?','¿Cuándo podré adquirir mis entradas?','He recibido el email de confirmación pero no encuentro mi entrada',
                '¿Pueden entrar menores de edad?','¿Está el festival adaptado para personas con movilidad reducida?','¿Hay algún lugar o plataforma para que las personas con movilidad reducida puedan ver los conciertos?',
                '¿Habrá comida en el festival?','¿Pregunta 2?','¿Pregunta 3?'],
                respuestas:['Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta','Respuesta'],
            },

            entradas: {
                seleccion: ['HAZ TU SELECCIÓN','CONCIERTOS','TALLERES'],
                aviso: ['Te recordamos que la entrada al evento es','GRATUITA',
                'Rellenar este formulario nos permite llevar un control del aforo para garantiar una experiencia óptima y segura para todes les asistentes del festival.'],
                datos: ['RELLENA TUS DATOS','Nombre y apellidos','Correo electrónico','Fecha de nacimiento'],
                menores: ['Menores de 16 años',
                'Los', 'menores de 14 a 16 años', 'deberán presentar a la entrada del concierto la siguiente autorización', 'firmada', 'por sus progenitores o tutores legales',
                'Los', 'menores de 14 años', 'deberán ir acompañades obligatoriamente por una', 'persona adulta responsable', '(progenitores o tutores) para poder acceder a talleres y/o conciertos',
                'Más información', 'en las secciones de', 'Normas y FAQ','en nuestra página de','información'],
                confirma: ['CONFIRMA Y ENVÍA', 'Confirmo que los CONCIERTOS y/o TALLERES seleccionados son correctos',
                'He leído y acepto las','Normas del evento',
                'He leído y acepto la', 'Política de privacidad',
                'Enviar'],
            }   
        },
        VAL: {
            home: {
                texto1: ['El teu festival ','gratuït ','de música i cultura a València on ','esclatem la norma'],
                texto2: ['Ací va el text'],
                texto3: ['Reserva les', 'ENTRADES'],
            },
            
            dias: ['Divendres','Dissabte','Diumenge'],
            navegacion: ['Qui som','Programa','Convidats','Info','Entrades'],
            cuentaAtras: ['Dies','Hores','Minuts','Segons'],
            
            
            invitades: {
                tabs: ['ARTISTES','TALLERS','CONFERÈNCIES'],
                descripcion: [
                    'Filla de músics, Rita Payés és una més dels talents emergits de la Sant Andreu Jazz Band, nucli d\'on han eixit alguns dels més prometedors jóvens músics de l\'escena jazzística, com Andrea Motis, Èlia Bastida o Magalí Datzira.<br>Va debutar amb Joan Chamorro, el seu mentor, en el món discogràfic quan la trombonista va publicar Imagina (autoeditat, 2019). Després, amb el seu primer treball en solitari, Como la piel, (autoeditat, 2021), l\'artista va donar principi a la seua projecció internacional. Un disc construït a partir de temes propis, amb el jazz predominant, i amb influències del bolero, bossa nova, música clàssica i popular.\nCanciones com “Algo contigo” van pel camí dels 52M de reproduccions en Spotify i el vídeo “Nunca vas a comprender” prop dels 7M de reproduccions en Youtube, que se sumen a les seues més de 1,3M d\'oients mensuals.',
                    'Descripción Samantha Margret',
                    'La història de Papa Topo conta ja amb innombrables i inabastables capítols, i al mateix temps dona la sensació d\'haver-se començat a escriure a penes. I és que, malgrat una dilatada discografia i una àmplia experiència musical, Adrià Arbona continua sent radicalment jove. Ho va ser quan el seu primer single, Oso Panda, produït per Guille Milkyway, es va convertir en objecte de busca de melòmans i seguidors. Quan els comparaven amb La Casa Azul, Talulah Gosh, Alaska Y Los Pegamoides, Helen Love o Plastic Bertrand. Quan repetixen èxit amb La Chica Vampira i el seu esperit punk. Però també ho és en la seua etapa posterior amb una formació més completa i desenrotllant el seu amor per la sèrie B.',
                    'Descripción Emil et il',
                    'Descripción Sandra Monfort',
                    'Abril és un talent fresc i vibrant que transmet energia amb la seua veu potent i unes lletres sinceres. En el seu primer treball, "Instruccions per estimar una cirera" (primavera 2025), barreja diversos estils musicals que connecten amb públics de totes les edats. Les seues composicions ballen entre ritmes enganxosos i melodies emocionals, sorprenent-nos amb la versatilitat i potència al llarg de tot el disc. Prepara\'t per a descobrir un nou so que et farà ballar i sentir amb la mateixa intensitat.',
                    'Lisasinson és un projecte gràfic i musical que va començar al novembre de 2018 al campus de Belles Arts de València. Ràpidament van trobar la seua identitat: línies de bateria punk, melodies de guitarra pop, lletres descarades, o com a elles els agrada cridar-ho "punky pop". El seu enganxós so bubbly-punk-pop amb esperit de grups com ',
                    'Descripción Au d\'astí!', //Barra invertida para incluir el apóstrofe en el texto
                    'Descripción Petunias',
                    'Descripción Ixeya',
                    'Descripción Mimosas',
                    'Descripción Tronkas',
                    'Descripción Ojete Calor',
                    'Descripción Svetlana',
                    'Descripción Delilah Bon'
                ]
            },
            
            faq: {
                apartados: ['Entrades','Adaptacions','Servicis'],
                preguntas:["Quant costa l'entrada al festival?",'Quan podré adquirir les meues entrades?',"He rebut l'email de confirmació però no trobe la meua entrada",
                "Poden entrar menors d'edat?",'Està el festival adaptat per a persones amb mobilitat reduïda?','Hi ha algun lloc o plataforma perquè les persones amb mobilitat reduïda puguen veure els concerts?',
                'Hi haurà menjada en el festival?','Pregunta 2?','Pregunta 3?'],
                respuestas:['Resposta','Resposta','Resposta','Resposta','Resposta','Resposta','Resposta','Resposta','Resposta'],
            },

            entradas: {
                seleccion: ['FES LA SELECCIÓ', 'CONCERTS', 'TALLERS'],
                aviso: ["Et recordem que l'entrada a l'esdeveniment és",'GRATUÏTA',
                "Emplenar este formulari ens permet portar un control de l'aforament per a garantir una experiència òptima i segura per a tots els assistents del festival."],
                datos: ['EMPLENA LES TEUES DADES','Nom i cognoms','Correu electrònic','Data de naixement'],
                menores: ['Menors de 16 anys',
                'Els', 'menors de 14 a 16 anys', "hauran de presentar a l'entrada del concert la següent autorització firmada", 'firmada', 'pels seus progenitors o tutors legals',
                'Els', 'menors de 14 anys', "hauran d'anar acompanyats obligatòriament per", 'persona adulta responsable', '(progenitors o tutors legals) per a poder accedir a tallers i/o concerts',
                'Més informació', 'en les seccions de', 'Normes i FAQ','en la nostra pàgina de','informació'],
                confirma: ['CONFIRMA I ENVIA', 'Confirme que els CONCERTS i/o TALLERS seleccionats són correctes',
                'He llegit i accepte les',"Normes de l'esdeveniment",
                'He llegit i accepte la', 'Política de privacitat',
                'Enviar'],
            }
        }
    }
});

const app = createApp(App)

app.use(router)
app.use(i18n)
app.mount('#app')
