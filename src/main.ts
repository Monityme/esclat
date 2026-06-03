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
                texto2: ['¿Y si un festival fuera algo más que música?','Conciertos, talleres, conversaciones y nuevas formas de experimentar la creatividad.\nTres días de diversidad, cultura y nuevas miradas para escuchar, pensar y crear.\nPásate por el mercadillo de ropa de segunda mano, participa en el intercambio de libros o echa un vistazo a los stands de artistas invitades.','Ven como eres.\nParticipa como quieras.','Rompe la norma.'],
                texto3: ['Reserva tus', 'ENTRADAS'],
            },
            dias: ['Viernes','Sábado','Domingo'],
            navegacion: ['Quienes somos','Programa','Invitades','Info','Entradas'],
            cuentaAtras: ['Días','Horas','Minutos','Segundos'],

            invitades: {
                tabs: ['ARTISTAS','TALLERES','CHARLAS'],
                descripcion: [
                    /*Rita Payés*/'Hija de músicos, Rita Payés es una más de los talentos emergidos de la Sant Andreu Jazz Band. Debutó en el mundo discográfico con un par de álbumes junto a Joan Chamorro, dando comienzo a su proyección internacional.\nSu versatilidad como instrumentista y cantante la ha hecho colaborar en varias formaciones de big band e infinidad de proyectos de formación jazzística, aunque su trayectoria la ha llevado a ampliar sus inquietudes estilísticas, dejando que su música actual beba de la influencia de otros géneros musicales.',
                    /*Samantha Margret*/'Samantha Margret es una cantante, compositora y productora de California, Estados Unidos.\nDesde mediados del 2016 ha estado activa en el ámbito musical, usando el género pop alternativo para dirigirse a mujeres que quieren ser dueñas de su historia y su cuerpo.\nEn junio de 2022 sacó su sencillo RAGE, una canción en contra del patriarcado que para muches se ha convertido en un grito de batalla y un símbolo del "female rage".',
                    /*Papa Topo*/'La historia de Papa Topo cuenta ya con innumerables e inabarcables capítulos, y al mismo tiempo da la sensación de haberse comenzado a escribir apenas. Y es que, a pesar de una dilatada discografía y una amplia experiencia musical, Adrià Arbona sigue siendo radicalmente joven. Lo fue cuando su primer single, Oso Panda, producido por Guille Milkyway, se convirtió en objeto de búsqueda de melómanos y seguidores. Cuando los comparaban con La Casa Azul, Talulah Gosh, Alaska Y Los Pegamoides, Helen Love o Plastic Bertrand. Cuando repiten éxito con La Chica Vampira y su espíritu punk. Pero también lo es en su etapa posterior con una formación más completa y desarrollando su amor por la serie B.',
                    /*Emil et il*/'Emil et il es el proyecto musical del cantante, compositor y actor barcelonés Edu Tudela, que debutó en 2020 como artista musical.\nEmpezó a componer a los 21 años en pleno apogeo de la crisis económica y la convulsión social, transformando su inconformismo en un grito convertido en lo que sería su primera canción "Huracán".',
                    /*Sandra Monfort*/'Diva del pop, folk y electrónica valenciana.\nDesde el Pasodoble a la ruta del bakalao, pasando por baladas ochenteras y boleros electrónicos en valenciano. Sandra Monfort recoge la cultura e imaginario tradicional del pueblo valenciano y lo fusiona con todo lo que se le antoje con una gracia y una sensibilidad exquisita.',
                    /*Abril*/'Abril es un talento fresco y vibrante que traqnsmite energía con su voz potente y letras sinceras. En su primer trabajo, "Instruccions per estimar una cirera" (primavera 2025), mezcla diversos estilos musicales que conectan con públicos de todas las edades. Sus composiciones bailan entre ritmos pegadizos y melodías emocionales, sorprendiéndonos con la versatilidad y potencia a lo largo de todo el disco. Prepárate para descubrir un nuevo sonido que te hará bailar y sentir con la misma intensidad.',
                    /*Lisasinson*/'Lisasinson es un proyecto gráfico y musical que comenzó en noviembre de 2018 en el campus de Bellas Artes de Valencia. Rápidamente encontraron su identidad: líneas de batería punk, melodías de guitarra pop, letras descaradas, o como a ellas les gusta llamarlo "punky pop". Su pegadizo sonido bubbly-punk-pop con espíritu de grupos como The Primitives, Tiger Trap, Los Romeos, Heavenly, Aerolineas Federales, Los Fresones Rebeldes, Shop Assistants, The Aislers Set, Juniper Moon, Veronica Falls, Alvvays o Helen Love junto a sus mensajes feministas, sociales (inspirados en la normalización de la violencia contra ciertos colectivos de la sociedad) y la frescura y el descaro de la juventud crean un fórmula perfecta.',
                    /*Au d'astí!*/'Au d\'astí! es una banda de punk-oi! (o rock trabucaire como les gusta decir a ellos), que nace en 2019 y cuyos componentes son oriundos de la Baixa Ribagorza y la Llitera. Sus letras denuncian temas como la despoblación o el olvido que sufren las zonas rurales en Aragón, algunas describen escenas de la vida y la cultura alto aragonesa y varias de ellas están escritas en aragonés baixo-ribagorzano y catalán de Aragón. Su primer disco “Rock Trabucaire” ha sido grabado y editado por Julen Urzaiz en los estudios Sound of Sirens, y publicado bajo el sello Ixufrina Records en mayo de 2022.', //Barra invertida para incluir el apóstrofe en el texto
                    /*Las Petunias*/'En una escena musical donde muchas bandas luchan por hacerse escuchar, Las Petunias no solo destacan, sino que rugen. Este trío madrileño compuesto por Elsa, Natalia y Cecilia ha logrado capturar algo que rara vez se encuentra: la esencia cruda y encantadora de la juventud. Su estilo, una fusión explosiva de rabia punk y melodías pop, no teme ser vulnerable ni irreverente.\nDesde sus primeros pasos, Las Petunias ya han dejado claro que no tienen miedo de desafiar expectativas ni de sacudir estructuras. Son más que una banda; son un manifiesto de lo que significa ser joven, inconformista y auténtico en un mundo que intenta encajonarte.',
                    /*IXEYA*/'IXEYA es un dúo acústico rural indie/folk gestado en Santa Engracia (Zaragoza), su música pone de protagonistas las personales melodías creadas con sus voces, cantando a la naturaleza, la diversidad del amor, el feminismo y la lengua aragonesa.\nSu último mini álbum "2Hermanas" ha sido premiado en CREAR (Jóvenes Creadores Aragoneses) y en los Premios de la Música Aragonesa como mejor EP del 2023.',
                    /*MIMOSAS*/'Entre unas ganas brutales de hacer música , la ayuda de Tinder y una pizca de sinvergüencería , se forma MIMOSAS en Valencia, compuesta por Lucía y Nora a los micros y guitarras, Lía al bajo y Emma a la batería. Con el cerebro lleno de ideas y sobre todo, de mierda, estas cuatro petardas vienen a arrasarlo todo con la esencia punk, indi y rockera que nos transmiten. Sin ningún pelo en la lengua, experimentan con el sonido y las letras contando lo que viven y sienten en su día a día.',
                    /*TRONKAS!*/'Nacidas entre marionetas rotas, creatividad desbordada y un eyeliner aplicado con el corazón antes que con el pulso, Tronkas! irrumpen con un sonido que es grito, desahogo y fiesta emocional a partes iguales. Su mezcla de guitarras afiladas, confesiones sin filtro y melodías que abrazan el caos las convierte en un torbellino generacional imposible de ignorar.\nLee, Irune, Carlota y Norah transforman cada canción en un himno compartido, capaz de convertir la suavidad en electricidad y el desorden en una verdad que late fuerte.',
                    /*Ojete Calor*/'Ojete Calor es un dúo de música tecnopop creado en 2005 por Carlos Areces y Aníbal Gómez. Sus canciones se caracterizan por poseer una base de música electrónica, con letras irónicas o de humor absurdo dentro de una estructura pop sencilla.\nEl dúo identifica su género como "subnoop", un estilo basado en la música de la movida madrileña y con letras donde tratan temas como la extrema derecha y el racismo.',
                    /*Svetlana*/'Svetlana es el dúo barcelonés que no sabíamos que necesitábamos, pero ya están aquí y han llegado para quedarse y que pase lo que pase. Nacidas en 2020, después de noches infinitas de fiesta que terminaban juntas en casa de una u otra componiendo canciones, han pasado de ser una broma interna a convertirse en uno de los nombres más frescos de la escena alternativa. Con su álbum debut MARRANA publicado en la primavera de 2023, Svetlana han salido a hacer ruido con una gira de presentación de más de 30 fechas, dejando claro que han venido para quedarse.',
                    /*Delilah Bon*/'Brat Punk. Riot Grrrl Rap. Feminist Rage.\nDelilah Bon es el alias de la cantante, compositora, rapera y productora británica Lauren Tate, anteriormente líder del grupo ya disuelto "Hands Off Gretel".\nFusionando nu-metal, el espíritu libre del movimiento feminista "riot grrrl" y el fuego lírico del hip-hop, Delilah define su música como "Brat Punk", creando temas que buscan destrozar el patriarcado, luchar contra la masculinidad tóxica y celebrar el poder del "female rage".'
                ],
                talleres: {
                    nombres: [
                        'Taller DIY: Crea tu propio binder',
                        'Jornada de Ilustración con Ojo Garabato',
                        'Zero Waste: Haz tu propio jabón natural',
                        'Taller Creativo de Grabado',
                        'Cuidados de Huerto y Plantas de Interior'
                    ],
                    descripciones: [
                        'Un taller de la mano de la marca Híbride para crear y decorar tu binder que quiere que jóvenes trans se expresen con total libertad en un sitio seguro. Mario, creadore de la marca, confecciona binders a medida altamente personalizables con licra reciclada.',
                        'Ojo Garabato es una iniciativa para crear una comunidad de artistas donde se promueven las quedadas al aire libre rompiendo con la soledad que asola a la profesión al trabajar cada uno en su casa. Aquí queremos que todes les participantes dejen llevar su imaginación y prueben a dibujar fuera de su zona de confort.',
                        'Con este taller queremos ayudar a comprender nuestro impacto en el medio ambiente y cómo podemos cambiarlo con nuestras acciones de la mano de la fundación One More Tree. Mostrarán diferentes formas de romper hábitos perjudiciales y enseñaremos como hacer un jabón ecológico y como reutilizar los desechos de nuestras casas para darles una segunda vida.',
                        'El taller de grabado nos enseña esta técnica a partir de la creación de una obra por los participantes con la guía de Cuca Balaguer, una artesana profesional. Contaremos con papel reciclado que fabrica la propia Cuca, que nos invita a reutilizar, reciclar e impulsar nuestra creatividad.',
                        'El taller, de la mano de Marta, creadora del proyecto Plantea, tratará como cuidar propiamente una planta en un ámbito de ciudad y se hablara de los efectos positivos de flora en el mundo y los efectos negativos que la intervención humana ha tenido sobre ellas. Los participantes podrán plantar y llevarse a casa sus propios geranios.'
                    ]
                },
                charlas: {
                    nombres: [
                        'La Arquitectura del Cómic',
                        'Mesa Redonda: la Comunidad LGTBIQ+ en la Lectura',
                        '',
                        '',
                        'Redes Sociales y Creatividad',
                    ],
                    descripciones: [
                        'Mikel Herrán es doctor en Arqueología y divulgador de historia en redes sociales a través de su perfil @putoMikel. Durante más de cuatro años ha trabajado en medios de radio como Carne cruda o RNE, y en YouTube cuenta con cientos de miles de suscriptores. El suyo es un canal de divulgación con un toque millennial, riguroso, provocador y atento a la inclusión de voces diversas en el discurso histórico.',
                        'Iria G. Parente, Selene M. Pascual, Myriam M. Lejardi, Clara Cortes, Esther López Vera, Virginia Petro De León y Alana S. Portero son autoras de la comunidad LGBT que nos hablaran sobre como rompieron en la industria y trajeron su punto de vista y vivencias a los libros en nuestras librerías. ',
                        'Licenciada por la Facultad de Bellas Artes de la Universidad de Barcelona, compagina el oficio de dibujante de cómics con su trabajo como profesora de un Grado Superior de Animación y 3D en y en los cursos y talleres de cómic e ilustración que imparte junto al poeta e ilustrador Josema Carrasco. Dará una charla sobre como es el trabajo de la industria del comic americano y europeo y como se puede empezar en estas.',
                        'Una charla de Víctor Palau y Ana Gea, fundadores de Gràffica, un medio dedicado en exclusiva al mundo del diseño, y en especial al ámbito del diseño gráfico, la creatividad y la cultura visual. Su vocación es crear un espacio donde los profesionales tengan un punto de información y referencia de lo que acontece en su sector. Así mismo, su interés es crear una plataforma que genere actividades complementarias, tanto en el ámbito de la información y divulgación, como en el ámbito de la formación, para ayudar a los profesionales a mejorar y reforzar su actividad.',
                        'Diseñadora gráfica y amante de desarrollar hobbies creativos cada vez que quiere cambiar su vida radicalmente. En este espacio quiere dejar su huellita sobre diseño gráfico y arte. En esta charla contara su perspectiva como profesional y como rompe las normas de la industria. ',
                    ],
                }
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
                texto2: ['I si un festival fora més que música?\nConcerts, tallers, converses i noves maneres d\'experimentar la creativitat.\n Tres dies de diversitat, cultura i noves mirades per a escoltar, pensar i crear.\nVeuen com ets.\nParticipa com vulguis.\nEsclata la norma.'],
                texto3: ['Reserva les', 'ENTRADES'],
            },
            
            dias: ['Divendres','Dissabte','Diumenge'],
            navegacion: ['Qui som','Programa','Convidats','Info','Entrades'],
            cuentaAtras: ['Dies','Hores','Minuts','Segons'],
            
            
            invitades: {
                tabs: ['ARTISTES','TALLERS','CONFERÈNCIES'],
                descripcion: [
                    /*Rita Payés*/'Filla de músics, Rita Payés és una més dels talents emergits de la Sant Andreu Jazz Band. Va debutar en el món discogràfic amb un parell d\'àlbums al costat de Joan Chamorro, con comença la seua projecció internacional.\*nLa seua versatilitat com a instrumentista i cantant ha fet que col·labore en diverses formacions de big band i infinitat de projectes de formació jazzística, encara que la seua trajectòria l\'ha fet ampliar les seues inquietuts estilístiques, deixant que la seua música actual bega de la influència d\'altres gèneres musicals.',
                    /*Samantha Margret*/'Samantha Margret és una cantant, compositora i productora de Califòrnia, als Estats Units.\nHa estat activa en l\'àmbit musical des de mitjans del 2016, usant el gènere del pop alternatiu per a dirigir-se a dones que volen ser propietàries de la seua història i el seu cos.\nA juny de 2022 va llançar el seu senzill "RAGE", una cançó en contra del patriarcat que per a moltis s\'ha convertit en un crit de batalla i un símbol del "female rage".',
                    /*Papa Topo*/'La història de Papa Topo conta ja amb innombrables i inabastables capítols, i al mateix temps dona la sensació d\'haver-se començat a escriure a penes. I és que, malgrat una dilatada discografia i una àmplia experiència musical, Adrià Arbona continua sent radicalment jove. Ho va ser quan el seu primer single, Oso Panda, produït per Guille Milkyway, es va convertir en objecte de busca de melòmans i seguidors. Quan els comparaven amb La Casa Azul, Talulah Gosh, Alaska Y Los Pegamoides, Helen Love o Plastic Bertrand. Quan repetixen èxit amb La Chica Vampira i el seu esperit punk. Però també ho és en la seua etapa posterior amb una formació més completa i desenrotllant el seu amor per la sèrie B.',
                    /*Emil et il*/'Emil et il és el projecte musical del cantant, compositor i actor barceloní Edu Tudela, qui va debutar al 2020 com artista musical.\nVa començar a compondre música als 21 anys en ple apogeu de la crisi econòmica i la convulsió social, transformant el seu inconformisme en un crit convertit en el que sería la seua primera cançò "Huracán"',
                    /*Sandra Monfort*/'Diva del pop, folk i electrònica valenciana.\nDes del Pasdoble a la ruta del bakalao, passant per balades dels huitanta i boleros electrònics en valencià. Sandra Monfort arreplega la cultura i l\'imaginari tradicional del poble valencià i els fusiona amb tot el que se li antulle amb una gràcia i una sensibilitat exquisides.',
                    /*Abril*/'Abril és un talent fresc i vibrant que transmet energia amb la seua veu potent i unes lletres sinceres. En el seu primer treball, "Instruccions per estimar una cirera" (primavera 2025), barreja diversos estils musicals que connecten amb públics de totes les edats. Les seues composicions ballen entre ritmes enganxosos i melodies emocionals, sorprenent-nos amb la versatilitat i potència al llarg de tot el disc. Prepara\'t per a descobrir un nou so que et farà ballar i sentir amb la mateixa intensitat.',
                    /*Lisasinson*/'Lisasinson és un projecte gràfic i musical que va començar al novembre de 2018 al campus de Belles Arts de València. Ràpidament van trobar la seua identitat: línies de bateria punk, melodies de guitarra pop, lletres descarades, o com a elles els agrada cridar-ho "punky pop". El seu enganxós so bubbly-punk-pop amb esperit de grups com ',
                    /*Au d'astí!*/'Au d\'astí! és una banda de punk-oi! (o rock "triburcaire" com els agrada dir a ells), que naix al 2019 i on els seus integrants són oriünds de la Baixa Ribagorça i la Llitera.\nLes seues lletres denuncien temes com la despoblació o l\'oblit que patixen les zones rurals d\'Aragó, algunes descriuen escenes de la vida i la cultura alt aragonesa i unes quantes d\'elles estan escrites en aragonés baixo-ribagorçà i català d\'Aragó.\nEl seu primer disc “Rock Trabucaire” ha sigut gravat i editat per Julen Urzaiz als estudis Sound of Sirens, i publicat amb el segell Ixufrina Rècords a maig de 2022.', //Barra invertida para incluir el apóstrofe en el texto
                    /*Las Petunias*/'En una escena musical on moltes bandes lluiten per fer-se escoltar, Las Petunias no sols destaquen, sinó que rugixen. Aquest trio madrileny compost per Elsa, Natalia i Cecilia ha aconseguit capturar una cosa que rara vegada es troba: l\'essència crua i encantadora de la joventut. El seu estil, una fusió explosiva de ràbia punk i melodies pop, no té por de ser vulnerable ni irreverent.\nDes dels primers passos, Las Petunias han deixat clar que no tenen por a desafiar expectatives ni sacsar estructures. Són més que una banda; són un manifest del que significa ser jove, inconformista i autèntic en un món que intenta encaixonar-te.',
                    /*IXEYA*/'IXEYA és un duo acústic rural indie/folk gestat a Santa Engracia (Saragossa), la seua música posa de protagonistes les melodies personals creades amb les seues veus, cantant a la naturalesa, la diversitat de l\'amor, el feminisme i la llengua aragonesa.\nEl seu últim mini àlbum "2Hermanas" ha sigut premiat a CREAR (Jóvens Creadors Aragonesos) i en els Premis de la Música Aragonesa com a millor EP del 2023.',
                    /*MIMOSAS*/'Amb unes ganes brutals de fer música , l\'ajuda de Tinder i una mica de singergonyeria, es forma MIMOSES a València, composta per Lucía i Nora als micros i guitarres, Lía al baix i Emma a la bateria.\nAmb el cervell ple d\'idees i sobretot, de merda, estes quatre petardes venen a arrasar-lo tot amb l\'essència punk, indi i rockera que ens transmeten. Sense cap pèl a la llengua, experimenten amb el so i les lletres contant el que viuen i senten en el seu dia a dia.',
                    /*TRONKAS!*/'Nascudes entre marionetes trencades, creativitat desbordada i un eyeliner aplicat amb el cor abans que amb el pols, TRONKAS! irrompen amb un so que és crit, desfogament i festa emocional a parts iguals. La seua mescla de guitarres esmolades, confessions sense filtre i melodies que abracen el caos les convertix en un remolí generacional impossible d\'ignorar.\nLee, Irune, Carlota i Norah transformen cada cançó en un himne compartit, capaç de convertir la suavitat en electricitat i el desorde en una veritat que batega fort.',
                    /*Ojete Calor*/'Ojete Calor és un duo de música tecnopop creat al 2005 per Carlos Areces i Anníbal Gómez. Les seues cançons es caracteritzen per posseir una base de música electrònica, amb lletres iròniques o d\'humor absurd dins d\'una estructura pop senzilla.\nEl duo identifica el seu gènere com a "subnoop", un estil basat en la música de la movida madrilenya i amb lletres que tracten temes com l\'extrema dreta i el racisme.',
                    /*Svetlana*/'Svetlana és el duet barceloní que no sabíem que necessitàvem, però ja són aquí i han arribat per quedar-s\'hi i peti qui peti. Nascudes el 2020, després de nits infinites de festa que remataven juntes a casa l\'una o l\'altre component cançons, han passat de ser una broma interna a convertir-se en un dels noms més frescos de l\'escena alternativa. Amb el seu àlbum debut MARRANA publicat la primavera de 2023 Svetlana han sortit a fer soroll amb una gira de presentació de més de 30 dates, deixant clar que han vingut per quedar-se.',
                    /*Delilah Bon*/'Brat Punk. Riot Grrrl Rap. Feminist Rage.\nDelilah Bon és l\'àlies de la cantant, compositora, rapera i productora britànica Lauren Tate, anteriorment líder del grup ja dissolt Hands Off Gretel.\n Fusionant nu-metal, l\'esperit lliure del moviment feminista "riot grrrl" i el foc líric del hip-hop, Delilah definix la seua música com a "Brat Punk", creant temes que busquen destrossar el patriarcat, lluitar contra la masculinitat tòxica i celebrar el poder del "female rage".'
                ],
                
                talleres: {
                    nombres: [
                        'Taller DIY: Crea tu propio binder',
                        'Jornada de Ilustración con Ojo Garabato',
                        'Zero Waste: Haz tu propio jabón natural',
                        'Taller Creativo de Grabado',
                        'Cuidados de Huerto y Plantas de Interior'
                    ],
                    descripciones: [
                        'Un taller de la mà de la marca Híbride per a crear i decorar el teu binder, que vol que jóvens trans s\'expressen amb total llibertat en un lloc segur. Mario, creador de la marca, confecciona binders a mesura altament personalitzables amb licra reciclada.',
                        'Ojo Garabato és una iniciativa per a crear una comunitat d\'artistes on es promouen les quedades a l\'aire lliure trencant amb la soledat que assola a la professió en treballar cada un a la seua casa. Ací volem que todes els participants deixen portar la seua imaginació i proven de dibuixar fora de la seua zona de confort.',
                        'Amb este taller volem ajudar a comprendre el nostre impacte en el medi ambient i com podem canviar-lo amb les nostres accions de la mà de la fundació One Habite Tree. Mostraran diferents maneres de trencar hàbits perjudicials i ensenyarem com fer un sabó ecològic i com reutilitzar les deixalles de les nostres cases per a donar-los una segona vida.',
                        'El taller de gravat ens ensenya esta tècnica a partir de la creació d\'una obra pels participants amb la guia de Bufona Balaguer, una artesana professional. Comptarem amb paper reciclat que fabrica la pròpia Bufona, que ens convida a reutilitzar, reciclar i impulsar la nostra creativitat.',
                        'El taller, de la mà de Marta, creadora del projecte Plantea, tractarà com cuidar pròpiament una planta en un àmbit de ciutat i es parlara dels efectes positius de flora en el món i els efectes negatius que la intervenció humana ha tingut sobre elles. Els participants podran plantar i emportar-se a casa els seus propis geranis.'
                    ]
                },
                charlas: {
                    nombres: [
                        'L\'Arquitectura del Còmic',
                        'Taula Redona: la Comunitat LGTBIQ+ a la Lectura',
                        '',
                        '',
                        'Xarxes Socials y Creativitat',
                    ],
                    descripciones: [
                        'Mikel Herrán és doctor en Arqueologia i divulgador d\'història en xarxes socials a través del seu perfil @putomikel. Durant més de quatre anys ha treballat en mitjans de radi com a Carn crua o RNE, i en YouTube compta amb centenars de milers de subscriptors. El seu és un canal de divulgació amb un toc millennial, rigorós, provocador i atent a la inclusió de veus diverses en el discurs històric.',
                        'Iria G. Parente, Selene M. Pascual, Myriam M. Lejardi, Clara Cortes, Esther López Vera, Virginia Petro De León y Alana S. Portero són autores de la comunitat LGBT que ens parlaren sobre com van trencar en la indústria i van portar el seu punt de vista i vivències als llibres en les nostres llibreries.',
                        'Llicenciada per la Facultat de Belles Arts de la Universitat de Barcelona, compagina l\'ofici de dibuixant de còmics amb el seu treball com a professora d\'un Grau Superior d\'Animació i 3D en i en els cursos i tallers de còmic i il·lustració que impartix al costat del poeta i il·lustrador Josema Carrasco. Donarà una xarrada sobre com és el treball de la indústria del comic americà i europeu i com es pot començar en estes. ',
                        'Una xarrada de Víctor Palau i Ana Gea, fundadors de Gràffica, un mitjà dedicat en exclusiva al món del disseny, i especialment a l\'àmbit del disseny gràfic, la creativitat i la cultura visual. La seua vocació és crear un espai on els professionals tinguen un punt d\'informació i referència del que esdevé en el seu sector. Així mateix, el seu interés és crear una plataforma que genere activitats complementàries, tant en l\'àmbit de la informació i divulgació, com en l\'àmbit de la formació, per a ajudar els professionals a millorar i reforçar la seua activitat.',
                        'Dissenyadora gràfica i amant de desenrotllar entreteniments creatius cada vegada que vol canviar la seua vida radicalment. En este espai vol deixar el seu huellita sobre dissenye gràfic i art. En esta xarrada comptara la seua perspectiva com a professional i com trenca les normes de la indústria.'
                    ]
                }
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
