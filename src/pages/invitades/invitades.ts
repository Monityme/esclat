export interface Invitade {
    id: number;
    nombre: string;
    dia: number,
    diaSemana: string;
    horaI: string;
    horaF: string;
    sala: string;
    descripcion: string;
    icono: string;
    fotos: string[];
    cancion: string;
    titulo: string;

    spotify: string;
    youtube: string;
    web?: string;
    
    instagram: string;
    tiktok?: string;
    twitter?: string;
    facebook?: string;
    threads?: string;
}

export const artistas: Invitade[] = [

    {
        id:0,
        nombre: "Rita Payés",
        dia: 23,
        diaSemana: "dias[0]",
        horaI: "18:00",
        horaF: "19:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[0]",
        icono: "fotos/artistas/ritapayes01.jpg",
        fotos: ["fotos/artistas/ritapayes02.jpg","fotos/artistas/ritapayes03.jpg"],
        cancion: "/musica/01ritaPayes-porqueSera.mp3",
        titulo: "Por Qué Será (feat. La Tania & Yerai Cortés)",

        spotify: "https://open.spotify.com/intl-es/artist/1XSmez9xyCCPpOZp0uImwM?si=Afefl8DkRzKi0JtvExAZbA",
        youtube: "https://www.youtube.com/@RitaPayés",
        web: "https://www.ritapayes.com/es/",

        instagram: "https://www.instagram.com/ritapayesroma/",
        facebook: "https://www.facebook.com/profile.php?id=100043847183458",
        //threads: "",
        //twitter: "",
        //tiktok: "",
    },
    {
        id:1,
        nombre: "Samantha Margret",
        dia: 23,
        diaSemana: "Viernes",
        horaI: "19:15",
        horaF: "20:15",
        sala: "Mutant",
        descripcion: "invitades.descripcion[1]",
        icono: "fotos/artistas/samanthaMargret01.jpg",
        fotos: ["fotos/artistas/samanthaMargret02.jpg","fotos/artistas/samanthaMargret03.jpg"],
        cancion: "/musica/02samanthaMargret-hotEnough.mp3",
        titulo: "hot enough",
        
        spotify: "https://open.spotify.com/intl-es/artist/6tyLi4JY6t4BEyZHaKwApN?si=_3LIipSdT6GiVGQ-XPXdmg",
        youtube: "https://www.youtube.com/@SamanthaMargret",
        web: "https://www.samanthamargret.com",

        instagram: "https://www.instagram.com/samanthamargret/",
        facebook: "https://www.facebook.com/samanthamargret",
        //threads: "",
        //twitter: "",
        //tiktok: "",
    },
    {
        id:2,
        nombre: "Papa Topo",
        dia: 23,
        diaSemana: "Viernes",
        horaI: "22:00",
        horaF: "23:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[2]",
        icono: "fotos/artistas/papaTopo01.jpg",
        fotos: ["fotos/artistas/papaTopo02.jpg","fotos/artistas/papaTopo03.jpg"],
        cancion: "/musica/03papaTopo-meVoyaDesenamorarDeTi.mp3",
        titulo: "Me Voy A Desenamorar De Ti",
        
        spotify: "https://open.spotify.com/intl-es/artist/5bj2pIzyYR99GUinn9fKAN?si=kPkCkFcCTiimibhUVtdGLQ",
        youtube: "https://www.youtube.com/channel/UCjLP19-CAgYI4SCIjW9YkwA",
        web: "https://elefant.com/grupos/papa-topo",

        instagram: "https://www.instagram.com/papatopo/",
        facebook: "https://www.facebook.com/papatopobanda/?fref=ts",
        threads: "https://www.threads.com/@papatopo?xmt=AQG0aWOu6Mz0Q7cgIjUy4jjPA6uZmJisfBQVwh4FzMEptD8",
        //twitter: "",
        //tiktok: "",
    },
    {
        id:3,
        nombre: "Emil et il",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "17:00",
        horaF: "18:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[3]",
        icono: "fotos/artistas/emiletil01.jpg",
        fotos: ["fotos/artistas/emiletil02.jpg","fotos/artistas/emiletil03.jpg"],
        cancion: "/musica/04emilEtil-marques.mp3",
        titulo: "MARQUÉS",
        
        spotify: "https://open.spotify.com/intl-es/artist/3poQdkeqk19dPqWL28yj8C?si=k2NNrXw6QEWk6B-eZ_N0_Q",
        youtube: "https://www.youtube.com/@emiletil7622",
        web: "",
        
        instagram: "https://www.instagram.com/emiletil_/",
        threads: "https://www.threads.com/@emiletil_?xmt=AQG038A34JPrxDqiXTBV3UWDLj8PUKU-QcPnW-qdhGECF9U",
        //facebook: "",
        //twitter: "",
        //tiktok: "",
    },
    {
        id:4,
        nombre: "Sandra Monfort",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "18:15",
        horaF: "19:15",
        sala: "Mutant",
        descripcion: "invitades.descripcion[4]",
        icono: "fotos/artistas/sandraMonfort01.jpg",
        fotos: ["fotos/artistas/sandraMonfort02.jpg","fotos/artistas/sandraMonfort03.jpg"],
        cancion: "/musica/05sandramonfort-manifassera.mp3",
        titulo: "Manifassera (feat. FERRXN)",
        
        spotify: "https://open.spotify.com/intl-es/artist/61e36FRgKb0nR158oVJvij?si=SDhXYg2jRlewWNHq6MDG9g",
        youtube: "https://www.youtube.com/@Sandramonfortoliver",
        web: "",

        instagram: "https://www.instagram.com/sandramonfortoliver/",
        facebook: "https://www.facebook.com/profile.php?id=100065446841502",
        twitter: "https://x.com/Sandramonfort__",
        //threads: "",
        //tiktok: "",
    },
    {
        id:5,
        nombre: "Abril.",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "19:30",
        horaF: "20:30",
        sala: "Mutant",
        descripcion: "invitades.descripcion[5]",
        icono: "fotos/artistas/abril01.jpg",
        fotos: ["fotos/artistas/abril02.jpg","fotos/artistas/abril03.jpg"],
        cancion: "/musica/",
        titulo: "Afortunada",
        
        spotify: "https://open.spotify.com/intl-es/artist/3m2HlPRZtHunzw5yY7GPoZ?si=keQ4MluYR3akJZUA4cyxRQ",
        youtube: "https://www.youtube.com/channel/UCew3SlK56gq8m0C8avrLT-A",
        web: "https://abriltotlany.com",

        instagram: "https://www.instagram.com/abril.totlany/",
        //threads: "",
        //facebook: "",
        //twitter: "",
        //tiktok: "",
    },
    {
        id:6,
        nombre: "Lisasinson",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "20:45",
        horaF: "21:45",
        sala: "Mutant",
        descripcion: "invitades.descripcion[6]",
        icono: "fotos/artistas/lisasinson01.jpg",
        fotos: ["fotos/artistas/lisasinson02.jpg","fotos/artistas/lisasinson03.jpg"],
        cancion: "/musica/",
        titulo: "Me Acostumbré",

        spotify: "https://open.spotify.com/intl-es/artist/0bvq2O2MrIINNOJTVuqQ32?si=nqUQ441dQGCPa8yalux2qw",
        youtube: "https://www.youtube.com/channel/UCY-wsS84E4QyBzIEWSyM4LQ",
        web: "https://elefant.com/grupos/lisasinson",

        instagram: "https://www.instagram.com/lisasinsonm/",
        facebook: "https://www.facebook.com/lisasinsonm",
        twitter: "https://x.com/Lisasinsonm",
        //threads: "",
        //tiktok: "",
    },
    {
        id:7,
        nombre: "Au d'astí!",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "22:45",
        horaF: "23:45",
        sala: "Mutant",
        descripcion: "invitades.descripcion[7]",
        icono: "fotos/artistas/audasti01.jpg",
        fotos: ["fotos/artistas/audasti02.jpg","fotos/artistas/audasti03.jpg"],
        cancion: "/musica/",
        titulo: "Replantado",
        
        spotify: "https://open.spotify.com/intl-es/artist/1Rgm8B6lXEwvoSw2PIUYwU?si=7DsuyAk_SVyMuND3cPVniw",
        youtube: "https://www.youtube.com/@audastioficial6035",
        web: "",

        instagram: "https://www.instagram.com/audasti/",
        facebook: "https://www.facebook.com/p/Au-dastí-100063484833692/",
        //threads: "",
        //twitter: "",
        //tiktok: "",
    },
    {
        id:8,
        nombre: "Las Petunias",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "00:00",
        horaF: "1:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[8]",
        icono: "fotos/artistas/petunias01.jpg",
        fotos: ["fotos/artistas/petunias02.jpg","fotos/artistas/petunias03.jpg"],
        cancion: "/musica/",
        titulo: "Marcelo Criminal",
        
        spotify: "https://open.spotify.com/intl-es/artist/5ahvDss0AH60cd2AWqoU1r?si=41xef_PLQBS_y0fD31KURQ",
        youtube: "https://www.youtube.com/channel/UC_g_C32Snaf2q_QficzPqxg",
        web: "https://laspetunias.es",

        instagram: "https://www.instagram.com/laspetuniaslalala/?hl=es",
        twitter: "https://x.com/ThePetuniasBand",
        tiktok: "https://www.tiktok.com/@laspetuniaslalala",
        //threads: "",
        //facebook: "",
    },
    {
        id:9,
        nombre: "IXEYA",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "17:00",
        horaF: "18:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[9]",
        icono: "fotos/artistas/ixeya01.jpg",
        fotos: ["fotos/artistas/ixeya02.jpg","fotos/artistas/ixeya03.jpg"],
        cancion: "/musica/",
        titulo: "Calibo",
        
        spotify: "https://open.spotify.com/intl-es/artist/59uqJTdxNnvMdoKq7rOEDo?si=eyF3gZZ1RTOSIVz5lA73lg",
        youtube: "https://www.youtube.com/channel/UCwWsxjXpQKOeQheL6DSJvcQ?app=desktop",
        web: "",

        instagram: "https://www.instagram.com/ixeyamusica/?hl=es",
        facebook: "https://www.facebook.com/ixeya.musica/?locale=es_ES",
        //threads: "",
        //twitter: "",
        //tiktok: "",
    },
    {
        id:10,
        nombre: "MIMOSAS",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "18:15",
        horaF: "19:15",
        sala: "Mutant",
        descripcion: "invitades.descripcion[10]",
        icono: "fotos/artistas/mimosas01.jpg",
        fotos: ["fotos/artistas/mimosas02.jpg","fotos/artistas/mimosas03.jpg"],
        cancion: "/musica/",
        titulo: "Fumo",

        
        spotify: "https://open.spotify.com/intl-es/artist/3I7b9TMguOZNgLnLVUN5pK?si=VJuD1bs-RN2cK8zPCzd1SQ",
        youtube: "https://www.youtube.com/@gritamemimosas",
        web: "",

        instagram: "https://www.instagram.com/gritamemimosas/",
        tiktok: "https://www.tiktok.com/@gritamemimosas",
        //threads: "",
        //facebook: "",
        //twitter: "",
    },
    {
        id:11,
        nombre: "TRONKAS!",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "19:30",
        horaF: "20:30",
        sala: "Mutant",
        descripcion: "invitades.descripcion[11]",
        icono: "fotos/artistas/tronkas01.jpg",
        fotos: ["fotos/artistas/tronkas02.jpg","fotos/artistas/tronkas03.jpg"],
        cancion: "/musica/",
        titulo: "LA REGLA",
        
        spotify: "https://open.spotify.com/intl-es/artist/1L0Cp9n72dvWPY66JC0dmt?si=QCs4gX7SRHCYg_p3MgRw6g",
        youtube: "https://www.youtube.com/channel/UCSsJ4aOILmTwXODRmnbdcuQ",
        web: "https://www.subterfuge.com/artistas/tronkas/",

        instagram: "https://www.instagram.com/tronkasybarrankas/",
        twitter: "https://x.com/tronkastetotas",
        tiktok: "https://www.tiktok.com/@tronkasybarrankas",
        //threads: "",
        //facebook: "",
    },
    {
        id:12,
        nombre: "Ojete calor",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "20:45",
        horaF: "21:45",
        sala: "Mutant",
        descripcion: "invitades.descripcion[12]",
        icono: "fotos/artistas/ojeteCalor01.jpg",
        fotos: ["fotos/artistas/ojeteCalor02.jpg","fotos/artistas/ojeteCalor03.jpg"],
        cancion: "/musica/",
        titulo: "La Más Guapa (feat. Las Cheerlerdas)",
        
        spotify: "https://open.spotify.com/intl-es/artist/39OG2j99BjXdZbgj9mgF9x?si=i2cw8TuFSpie13MLn5VzGA",
        youtube: "https://www.youtube.com/channel/UCO3r9lEotlIzojImt-sgYQg",
        web: "https://www.ojetecalor.com",

        instagram: "https://www.instagram.com/ojetecaloroficial/",
        facebook: "https://www.facebook.com/OjeteCalorGrupo",
        twitter: "https://x.com/OjeteCalorGrupo?s=20",
        //threads: "",
        //tiktok: "",
    },
    {
        id:13,
        nombre: "Svetlana",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "22:45",
        horaF: "23:45",
        sala: "Mutant",
        descripcion: "invitades.descripcion[13]",
        icono: "fotos/artistas/svetlana01.jpg",
        fotos: ["fotos/artistas/svetlana02.jpg","fotos/artistas/svetlana03.jpg"],
        cancion: "/musica/",
        titulo: "TOI PEGAO",
        
        spotify: "https://open.spotify.com/intl-es/artist/3ax5cuCKLmHd6NEt0ZWGW6?si=-jHEOwciRnmb3Uqw045QsQ",
        youtube: "https://www.youtube.com/@SVETLANAMARRANA",
        web: "https://svetlana.cat/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGniKsGHq0XzhoR1KyLQT9yuaS_CrVq1_v-KcXlTr6csl8U4qeFCka14KOqIkU_aem_ekJaa5FcLiJl3q7E1N4yRQ",

        instagram: "https://www.instagram.com/svetlanamarrana/",
        twitter: "https://x.com/svetlanamarrana",
        tiktok: "https://www.tiktok.com/@svetlanamarrana",
        //threads: "",
        //facebook: "",
    },
    {
        id:14,
        nombre: "Delilah Bon",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "00:00",
        horaF: "1:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[14]",
        icono: "fotos/artistas/delilah01.jpg",
        fotos: ["fotos/artistas/delilah02.jpg","fotos/artistas/delilah03.jpg"],
        cancion: "/musica/",
        titulo: "TIME'S UP",
        
        spotify: "https://open.spotify.com/intl-es/artist/5JUFYlgwsbqpLcU9TMlsve?si=0SR3L9EpSW6SjPIudUHakA",
        youtube: "https://www.youtube.com/@DelilahBon",
        web: "https://www.delilahbon.co.uk",

        instagram: "https://www.instagram.com/delilahbonofficial/",
        facebook: "https://www.facebook.com/DelilahBon/",
        tiktok: "https://www.tiktok.com/@delilahbon",
        //threads: "",
        //twitter: "",
    },


]

export interface Taller {
    id: number,
    nombre: string;
    dia: number,
    diaSemana: string;
    horaI: string;
    horaF: string;
    sala: string;
    descripcion: string;
    icono: string;
    fotos: string[];
    web?: string;
    instagram?: string;
    facebook?: string;
    tiktok?: string;
    twitter?: string;
    threads?: string;
    youtube?: string;
}

export const talleres: Taller[] = [
    {
        id: 0,
        nombre: "invitades.talleres.nombres[0]",
        dia: 23,
        diaSemana: "Viernes",
        horaI: "16:45",
        horaF: "17:45",
        sala: "",
        descripcion: "invitades.talleres.descripciones[0]",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 1,
        nombre: "invitades.talleres.nombres[1]",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "11:15",
        horaF: "12:15",
        sala: "",
        descripcion: "invitades.talleres.descripciones[1]",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 2,
        nombre: "invitades.talleres.nombres[2]",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "13:30",
        horaF: "14:30",
        sala: "",
        descripcion: "invitades.talleres.descripciones[2]",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 3,
        nombre: "invitades.talleres.nombres[3]",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "11:00",
        horaF: "12:00",
        sala: "",
        descripcion: "invitades.talleres.descripciones[3]",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 4,
        nombre: "invitades.talleres.nombres[4]",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "13:15",
        horaF: "14:15",
        sala: "",
        descripcion: "invitades.talleres.descripciones[4]",
        icono: "",
        fotos: ["",""],
    },
]


export interface Charla {
    id: number,
    nombre: string;
    personas: string[];
    dia: number,
    diaSemana: string;
    horaI: string;
    horaF: string;
    sala: string;
    descripcion: string;
    icono: string;
    fotos: string[];
}

export const charlas: Charla[] = [
    {
        id: 0,
        nombre: "La Arquitectura del Cómic",
        personas: ["Paco Roca"],
        dia: 24,
        diaSemana: "Sábado",
        horaI: "10:00",
        horaF: "11:00",
        sala: "La Mutant",
        descripcion: "",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 1,
        nombre: "Mesa Redonda: la Comunidad LGTBIQ+ en la Lectura",
        personas: ["Iria G. Parente","Selene M. Pascual", "Myriam M. Lejardi", "Clara Cortés","Esther López Vera"],
        dia: 24,
        diaSemana: "Sábado",
        horaI: "12:15",
        horaF: "13:15",
        sala: "La Mutant",
        descripcion: "",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 2,
        nombre: "",
        personas: ["Marta Martínez"],
        dia: 24,
        diaSemana: "Sábado",
        horaI: "14:30",
        horaF: "15:30",
        sala: "La Mutant",
        descripcion: "",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 3,
        nombre: "Estudio Graffica",
        personas: [""],
        dia: 25,
        diaSemana: "Domingo",
        horaI: "12:00",
        horaF: "13:00",
        sala: "La Mutant",
        descripcion: "",
        icono: "",
        fotos: ["",""],
    },
    {
        id: 4,
        nombre: "Redes Sociales y Creatividad",
        personas: ["Elena Yuuste"],
        dia: 25,
        diaSemana: "Domingo",
        horaI: "14:30",
        horaF: "15:30",
        sala: "La Mutant",
        descripcion: "",
        icono: "",
        fotos: ["",""],
    },
]