export interface Programa {
    id: number;
    titulo: string;
    personas?: string[];
    tipo: string;
    dia: number;
    horaI: string;
    horaF: string;
}

export const programacion: Programa[] = [
    {
        id: 0,
        titulo: "invitades.talleres.nombres[0]",
        tipo: "TALLER",
        dia: 23,
        horaI: "16:45",
        horaF: "17:45",
    },
    {
        id: 1,
        titulo: "Rita Payés",
        tipo: "CONCIERTO",
        dia: 23,
        horaI: "18:00",
        horaF: "19:00",
    },
    {
        id: 2,
        titulo: "Samantha Margret",
        tipo: "CONCIERTO",
        dia: 23,
        horaI: "19:15",
        horaF: "20:15",
    },
    {
        id: 3,
        titulo: "Papa Topo",
        tipo: "CONCIERTO",
        dia: 23,
        horaI: "22:00",
        horaF: "23:00",
    },
    {
        id: 4,
        titulo: "invitades.charlas.nombres[0]",
        personas: ["Mikel Herrán (putoMikel)"],
        tipo: "CHARLA",
        dia: 24,
        horaI: "10:00",
        horaF: "11:00",
    },
    {
        id: 5,
        titulo: "invitades.talleres.nombres[1]",
        tipo: "TALLER",
        dia: 24,
        horaI: "11:15",
        horaF: "12:15",
    },
    {
        id: 6,
        titulo: "invitades.charlas.nombres[1]",
        personas: ["Iria G. Parente y Selene M. Pascual", "Myriam M. Lejardi", "Clara Cortés","Esther López Vera","Virginia Petro de León","Alana S. Portero"],
        tipo: "CHARLA",
        dia: 24,
        horaI: "12:15",
        horaF: "13:15",
    },
    {
        id: 7,
        titulo: "invitades.talleres.nombres[2]",
        tipo: "TALLER",
        dia: 24,
        horaI: "13:30",
        horaF: "14:30",
    },
    {
        id: 8,
        titulo: "invitades.charlas.nombres[2]",
        personas: ["Marta Martínez"],
        tipo: "CHARLA",
        dia: 24,
        horaI: "14:30",
        horaF: "15:30",
    },
    {
        id: 9,
        titulo: "Emil et il",
        tipo: "CONCIERTO",
        dia: 24,
        horaI: "17:00",
        horaF: "18:00",
    },
    {
        id: 10,
        titulo: "Sandra Monfort",
        tipo: "CONCIERTO",
        dia: 24,
        horaI: "18:15",
        horaF: "19:15",
    },
    {
        id: 11,
        titulo: "Abril.",
        tipo: "CONCIERTO",
        dia: 24,
        horaI: "19:30",
        horaF: "20:30",
    },
    {
        id: 12,
        titulo: "Lisasinson",
        tipo: "CONCIERTO",
        dia: 24,
        horaI: "20:45",
        horaF: "21:45",
    },
    {
        id: 13,
        titulo: "Au d'astí!",
        tipo: "CONCIERTO",
        dia: 24,
        horaI: "22:45",
        horaF: "23:45",
    },
    {
        id: 14,
        titulo: "Las Petunias",
        tipo: "CONCIERTO",
        dia: 24,
        horaI: "00:00",
        horaF: "01:00",
    },
    {
        id: 15,
        titulo: "invitades.talleres.nombres[3]",
        tipo: "TALLER",
        dia: 25,
        horaI: "11:00",
        horaF: "12:00",
    },
    {
        id: 16,
        titulo: "invitades.charlas.nombres[3]",
        personas: ["Víctor Palau","Ana Gea"],
        tipo: "CHARLA",
        dia: 25,
        horaI: "12:00",
        horaF: "13:00",
    },
    {
        id: 17,
        titulo: "invitades.talleres.nombres[4]",
        tipo: "TALLER",
        dia: 25,
        horaI: "13:15",
        horaF: "14:15",
    },
    {
        id: 18,
        titulo: "invitades.charlas.nombres[4]",
        personas: ["Elena Yuste"],
        tipo: "CHARLA",
        dia: 25,
        horaI: "14:30",
        horaF: "15:30",
    },
    {
        id: 19,
        titulo: "IXEYA",
        tipo: "CONCIERTO",
        dia: 25,
        horaI: "17:00",
        horaF: "18:00",
    },
    {
        id: 20,
        titulo: "MIMOSAS",
        tipo: "CONCIERTO",
        dia: 25,
        horaI: "18:15",
        horaF: "19:15",
    },
    {
        id: 21,
        titulo: "TRONKAS!",
        tipo: "CONCIERTO",
        dia: 25,
        horaI: "19:30",
        horaF: "20:30",
    },
    {
        id: 22,
        titulo: "Ojete Calor",
        tipo: "CONCIERTO",
        dia: 25,
        horaI: "20:45",
        horaF: "21:45",
    },
    {
        id: 23,
        titulo: "Svetlana",
        tipo: "CONCIERTO",
        dia: 25,
        horaI: "22:45",
        horaF: "23:45",
    },
    {
        id: 24,
        titulo: "Delilah Bon",
        tipo: "CONCIERTO",
        dia: 25,
        horaI: "00:00",
        horaF: "01:00",
    },
]

const Pcharlas = programacion.filter(programa => programa.tipo === 'CHARLA');
const Ptalleres = programacion.filter(programa => programa.tipo === 'TALLER');
const Pconciertos = programacion.filter(programa => programa.tipo === 'CONCIERTO');

export const Pcharlas20 = programacion.filter(programa => programa.tipo === 'CHARLA' && programa.dia === 23);
export const Pcharlas23 = Pcharlas.filter(programa => programa.dia === 23);
export const Pcharlas24 = Pcharlas.filter(programa => programa.dia === 24);
export const Pcharlas25 = Pcharlas.filter(programa => programa.dia === 25);

export const Ptalleres23 = Ptalleres.filter(programa => programa.dia === 23);
export const Ptalleres24 = Ptalleres.filter(programa => programa.dia === 24);
export const Ptalleres25 = Ptalleres.filter(programa => programa.dia === 25);

export const Pconciertos23 = Pconciertos.filter(programa => programa.dia === 23);
export const Pconciertos24 = Pconciertos.filter(programa => programa.dia === 24);
export const Pconciertos25 = Pconciertos.filter(programa => programa.dia === 25);
