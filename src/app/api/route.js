import { NextResponse } from 'next/server';

// Respuesta del bot
export async function POST(request) {
    const { message } = await request.json(); //Obtenemos el objeto mensaje
    const text = message.text.toLowerCase().replace('á', 'a').replace('é', 'e').replace('í', 'i').replace('ó', 'o').replace('ú', 'u'); //Obtenemos la propiedad texto del mensaje y se sanitiza (en minuscula y sin tildes)

    // Inicializa una variable de respuesta con un mensaje predeterminado
    let reply = [];

    //Saludos basicos
    if(text.includes('hola') || text.includes('buenos dias') || text.includes('buenas noches') || text.includes('buenas tades') || text.includes('buenas')){
        reply.push('Hola. ¿En que puedo ayudarte hoy?');
    }

    // Información académica y administrativa
    if (text.includes('calendario academico')) {
        reply.push('El calendario académico para este semestre está disponible en el portal del estudiante.');
    }
    if (text.includes('horario de clases')) {
        reply.push('Puedes encontrar tu horario de clases en el portal del estudiante, bajo la sección de "Horario".');
    }
    if (text.includes('periodos de inscripcion')) {
        reply.push('Los períodos de inscripción para cursos están publicados en el calendario académico y en el portal del estudiante.');
    }

    // Recursos y servicios del campus
    if (text.includes('biblioteca')) {
        reply.push('La biblioteca está ubicada en el edificio principal y sus horarios son de 8 AM a 8 PM de lunes a viernes.');
    }
    if (text.includes('servicios estudiantiles')) {
        reply.push('Puedes contactar al departamento de servicios estudiantiles a través del correo servicios@universidad.edu o visitando su oficina en el edificio de administración.');
    }
    if (text.includes('evento importante')) {
        reply.push('Esta semana tenemos una feria de empleo el jueves en el auditorio principal. ¡No te lo pierdas!');
    }

    // Apoyo y bienestar estudiantil
    if (text.includes('estres') || text.includes('problemas emocionales')) {
        reply.push('Si estás experimentando estrés o problemas emocionales, puedes obtener ayuda en el centro de bienestar estudiantil, ubicado en el edificio B. También puedes llamar al 123-456-7890 para asistencia inmediata.');
    }
    if (text.includes('recursos para estudiantes con discapacidades')) {
        reply.push('Los recursos disponibles para estudiantes con discapacidades incluyen acceso a material en formato accesible, tutores especializados y apoyo del departamento de servicios estudiantiles.');
    }
    if (text.includes('asesoramiento') || text.includes('tutoria')) {
        reply.push('Los servicios de asesoramiento y tutoría están disponibles a través del centro de apoyo académico. Puedes hacer una cita en el portal del estudiante o visitando el centro en el edificio C.');
    }

    // Orientación sobre carrera y desarrollo profesional
    if (text.includes('pasantias') || text.includes('practicas profesionales')) {
        reply.push('Puedes encontrar pasantías o prácticas profesionales relevantes para tu carrera en la bolsa de trabajo del portal del estudiante o contactando al departamento de desarrollo profesional.');
    }
    if (text.includes('curriculum vitae')) {
        reply.push('La universidad ofrece talleres y recursos en línea para ayudarte a escribir tu currículum vitae. Puedes inscribirte a través del portal del estudiante.');
    }
    if (text.includes('talleres para entrevistas')) {
        reply.push('Hay talleres disponibles para prepararte para entrevistas de trabajo. Consulta el calendario de eventos en el portal del estudiante para ver las fechas y horarios.');
    }

    // Vida estudiantil y eventos sociales
    if (text.includes('clubes') || text.includes('actividades extracurriculares')) {
        reply.push('La universidad ofrece una variedad de clubes y actividades extracurriculares. Puedes ver una lista completa en el portal del estudiante bajo la sección de "Vida Estudiantil".');
    }
    if (text.includes('actividad interesante para el fin de semana')) {
        reply.push('Este fin de semana hay una excursión al parque natural organizada por el club de senderismo. También hay una noche de cine en el campus el sábado.');
    }
    if (text.includes('alimentacion')) {
        reply.push('Las opciones de alimentación en el campus incluyen la cafetería principal, varios quioscos de comida rápida y el comedor vegetariano en el edificio D.');

    }
    
    //Despedidas basicas
    if (text.includes('gracias') || text.includes('adios')) {
        reply.push('Si necesitas más ayuda en el futuro o si tienes alguna otra pregunta o proyecto en el que estés trabajando, no dudes en pedírmelo. ¡Buena suerte y que tengas un excelente día!.');
    }

    //Respuesta default
    if(reply.length == 0){
        reply.push('No entiendo tu pregunta, trata de comunicarte de otra manera o habla con soporte técnico.');
    }

    // Devuelve la respuesta como un objeto JSON
    return NextResponse.json({ reply });
}