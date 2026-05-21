export interface Invitade {
  id: number;
  nombre: string;
  //imagen: string[];
  //imgGrid: string;
  dia: number,
  horaI: string;
  horaF: string;
  sala: string;
  descripcion?: string;
  url?: boolean;
}

export const invitades: Invitade[] = [
    /**
     * *ARTISTAS del 0 al 14
    **/
    /**
     * *TALLERES del 15 al ??
    **/

        //lo he dejado asi un poco porque no se en que orden ponerlos lololol
    {
        id:0,
        nombre: "Rita Payés",
        dia: 23,
        horaI: "18:00",
        horaF: "19:00",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:1,
        nombre: "Samantha Margret",
        dia: 23,
        horaI: "19:15",
        horaF: "20:15",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:2,
        nombre: "Papá Topo",
        dia: 23,
        horaI: "22:00",
        horaF: "23:00",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:3,
        nombre: "Emil et il",
        dia: 24,
        horaI: "17:00",
        horaF: "18:00",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:4,
        nombre: "Sandra Monfort",
        dia: 24,
        horaI: "18:15",
        horaF: "19:15",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:5,
        nombre: "Abril",
        dia: 24,
        horaI: "19:30",
        horaF: "20:30",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:6,
        nombre: "Lisasinson",
        dia: 24,
        horaI: "20:45",
        horaF: "21:45",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:7,
        nombre: "Au d'astí!",
        dia: 24,
        horaI: "22:45",
        horaF: "23:45",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:8,
        nombre: "Petunias",
        dia: 24,
        horaI: "00:00",
        horaF: "1:00",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:9,
        nombre: "Ixeya",
        dia: 25,
        horaI: "17:00",
        horaF: "18:00",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:10,
        nombre: "Mimosas",
        dia: 25,
        horaI: "18:15",
        horaF: "19:15",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:11,
        nombre: "Tronkas",
        dia: 25,
        horaI: "19:30",
        horaF: "20:30",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:12,
        nombre: "Ojete calor",
        dia: 25,
        horaI: "20:45",
        horaF: "21:45",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:13,
        nombre: "Svetlana",
        dia: 25,
        horaI: "22:45",
        horaF: "23:45",
        sala: "Mutant",
        descripcion: ""
    },
    {
        id:14,
        nombre: "Delilah Bon",
        dia: 25,
        horaI: "00:00",
        horaF: "1:00",
        sala: "Mutant",
        descripcion: ""
    },


]