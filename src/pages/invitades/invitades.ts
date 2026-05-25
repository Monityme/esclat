export interface Invitade {
  id: number;
  nombre: string;
  //imagen: string[];
  //imgGrid: string;
  dia: number,
  diaSemana: string;
  horaI: string;
  horaF: string;
  sala: string;
  descripcion: string;
  url?: boolean;
  icono: string;
  fotos?: string[];
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
        diaSemana: "dias[0]",
        horaI: "18:00",
        horaF: "19:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[0]",
        icono: "public/fotos/artistas/iconos/01ritaPayes.jpeg",
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
        icono: "public/fotos/artistas/iconos/02samanthaMargret.JPG",
    },
    {
        id:2,
        nombre: "Papá Topo",
        dia: 23,
        diaSemana: "Viernes",
        horaI: "22:00",
        horaF: "23:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[2]",
        icono: "public/fotos/artistas/iconos/03papaTopo.jpg",
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
        icono: "public/fotos/artistas/iconos/04emiletil.jpg",
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
        icono: "public/fotos/artistas/iconos/05sandraMonfort.jpg",
    },
    {
        id:5,
        nombre: "Abril",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "19:30",
        horaF: "20:30",
        sala: "Mutant",
        descripcion: "invitades.descripcion[5]",
        icono: "public/fotos/artistas/iconos/06abril.jpg",
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
        icono: "public/fotos/artistas/iconos/07lisasinson.png",
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
        icono: "public/fotos/artistas/iconos/",
    },
    {
        id:8,
        nombre: "Petunias",
        dia: 24,
        diaSemana: "Sábado",
        horaI: "00:00",
        horaF: "1:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[8]",
        icono: "public/fotos/artistas/iconos/",
    },
    {
        id:9,
        nombre: "Ixeya",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "17:00",
        horaF: "18:00",
        sala: "Mutant",
        descripcion: "invitades.descripcion[9]",
        icono: "public/fotos/artistas/iconos/",
    },
    {
        id:10,
        nombre: "Mimosas",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "18:15",
        horaF: "19:15",
        sala: "Mutant",
        descripcion: "invitades.descripcion[10]",
        icono: "public/fotos/artistas/iconos/",
    },
    {
        id:11,
        nombre: "Tronkas",
        dia: 25,
        diaSemana: "Domingo",
        horaI: "19:30",
        horaF: "20:30",
        sala: "Mutant",
        descripcion: "invitades.descripcion[11]",
        icono: "public/fotos/artistas/iconos/",
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
        icono: "public/fotos/artistas/iconos/",
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
        icono: "public/fotos/artistas/iconos/",
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
        icono: "public/fotos/artistas/iconos/",
    },


]