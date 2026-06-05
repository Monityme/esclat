// ARRAY DE faq.preguntas Y OTRO DE faq.respuestas
//



export interface Info {
  id: number,
  value: string;
  pregunta: string;
  respuesta: string;
}

// TODO: Poner los textos del faq del archivo "main.ts"

export const faqs: Info[] = [
    //*ENTRADAS
    //*DEL 0 AL 3 
    
    {
        id:0,
        value: "item-0",
        pregunta: 'faq.preguntas[0]',
        respuesta:'faq.respuestas[0]',
    },
    {
        id:1,
        value: "item-1",
        pregunta: 'faq.preguntas[1]',
        respuesta:'faq.respuestas[1]',
    },
    {
        id:2,
        value: "item-2",
        pregunta: 'faq.preguntas[2]',
        respuesta:'faq.respuestas[2]',
    },
    {
        id:3,
        value: "item-3",
        pregunta: 'faq.preguntas[3]',
        respuesta:'faq.respuestas[3]',
    },

    // //?ADAPTACIONES
    // //?DEL 4 AL 5

    {
        id:4,
        value: "item-4",
        pregunta: 'faq.preguntas[4]',
        respuesta:'faq.respuestas[4]',
    },
    {
        id:5,
        value: "item-5",
        pregunta: 'faq.preguntas[5]',
        respuesta:'faq.respuestas[5]',
    },
    
    // //!SERVICIOS
    // //!DEL 6 AL 8
    {
        id:6,
        value: "item-6",
        pregunta: 'faq.preguntas[6]',
        respuesta:'faq.respuestas[6]',
    },
    
]