export interface Concis {
    id: number;
    artista: string;
    hora: string;
}

export const conciertos: Concis[] = [
    {
        id:0,
        artista: "Rita Payés",
        hora: "18:00",
    },
    {
        id:1,
        artista: "Samantha Margret",
        hora: "19:15",
    },
    {
        id:2,
        artista: "Papá Topo",
        hora: "22:00",
    },

    //sábado
    {
        id:3,
        artista: "Emil et il",
        hora: "17:00",
    },
    {
        id:4,
        artista: "Sandra Monfort",
        hora: "18:15",
    },
    {
        id:5,
        artista: "Abril.",
        hora: "19:30",
    },
    {
        id:6,
        artista: "Lisasinson",
        hora: "20:45",
    },
    {
        id:7,
        artista: "Au d'astí",
        hora: "22:45",
    },
    {
        id:8,
        artista: "Petunias",
        hora: "00:00",
    },

    //domingo
    {
        id:9,
        artista: "Ixeya",
        hora: "17:00",
    },
    {
        id:10,
        artista: "Mimosas",
        hora: "18:15",
    },
    {
        id:11,
        artista: "Tronkas",
        hora: "19:30",
    },
    {
        id:12,
        artista: "Ojete Calor",
        hora: "20:45",
    },
    {
        id:13,
        artista: "Svetlana",
        hora: "22:45",
    },
    {
        id:14,
        artista: "Delilah Bon",
        hora: "00:00",
    },
]

export interface Actividades {
    id: number;
    nombre: string;
    hora: string;
}

export const activs: Actividades[] = [
    {
        id: 0,
        nombre: 'entradas.talleres[0]',
        hora: '16:45',
    },

    //sabado
    {
        id: 1,
        nombre: 'entradas.talleres[1]',
        hora: '10:00',
    },
    {
        id: 2,
        nombre: 'entradas.talleres[2]',
        hora: '11:15',
    },
    {
        id: 3,
        nombre: 'entradas.talleres[3]',
        hora: '12:15',
    },
    {
        id: 4,
        nombre: 'entradas.talleres[4]',
        hora: '13:30',
    },
    {
        id: 5,
        nombre: 'entradas.talleres[5]',
        hora: '14:30',
    },

    //domingo
    {
        id: 6,
        nombre: 'entradas.talleres[6]',
        hora: '11:00',
    },
    {
        id: 7,
        nombre: 'entradas.talleres[7]',
        hora: '12:00',
    },
    {
        id: 8,
        nombre: 'entradas.talleres[8]',
        hora: '13:15',
    },
    {
        id: 9,
        nombre: 'entradas.talleres[9]',
        hora: '14:30',
    },
]