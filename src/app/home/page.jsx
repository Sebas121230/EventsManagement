"use client"

import Image from "next/image"
import { styles } from "./styles_home"
import { Qr_scanner } from "@/components/qr_scanner/qr_scanner";

const eventos = [
  {
    id: 1,
    nombre: "Conferencia de TechArena",
    fechaInicio: "2025-11-15T09:00:00",
    duracion: "2 horas",
    invitados: ["Juan Pérez", "María García", "Carlos López"],
    lugar: "Casejeta Eventos Campestres",
    maxAsistentes: 150,
    imagen: "/images/evento1.jpg"
  },
  {
    id: 2,
    nombre: "Taller de React Avanzado",
    fechaInicio: "2025-11-20T14:00:00",
    duracion: "3 horas",
    invitados: ["Ana Martínez", "Pedro Sánchez"],
    lugar: "Marquissa Arte y Eventos",
    maxAsistentes: 30,
    imagen: "/images/evento2.jpg"
  },
  {
    id: 3,
    nombre: "Lanzamiento Iphone 15 Colombia",
    fechaInicio: "2025-12-05T18:30:00",
    duracion: "4 horas",
    invitados: ["CEO Apple", "Mac-Center Colombia"],
    lugar: "Hacienda San Luis",
    maxAsistentes: 200,
    imagen: "/images/evento3.jpg"
  },
  {
    id: 4,
    nombre: "Seminario de Marketing",
    fechaInicio: "2025-12-12T10:00:00",
    duracion: "5 horas",
    invitados: ["Equipo de Marketing Frisby Colombia"],
    lugar: "Hacienda Casa Morelli",
    maxAsistentes: 80,
    imagen: "/images/evento4.jpg"
  },
  {
    id: 5,
    nombre: "Hackathon Universitario",
    fechaInicio: "2025-09-08T08:00:00",
    duracion: "48 horas",
    invitados: ["Universidad de Cundinamarca"],
    lugar: "Universidad de Cundinamarca Sede Chia",
    maxAsistentes: 50,
    imagen: "/images/evento5.jpg"
  },
  {
    id: 6,
    nombre: "Exposición Panasonic",
    fechaInicio: "2025-10-20T11:00:00",
    duracion: "6 horas",
    invitados: ["Equipo de Diseño Panasonic" , "Director Panasonic Colombia"],
    lugar: "Centro de Convenciones Agora",
    maxAsistentes: 120,
    imagen: "/images/evento6.jpg"
  },
  {
    id: 7,
    nombre: "Taller Inteligencia Artificial",
    fechaInicio: "2025-10-10T19:00:00",
    duracion: "5 horas",
    invitados: ["Universidad de la Sabana" , "Universidad Nacional"],
    lugar: "Universidad de la Sabana",
    maxAsistentes: 500,
    imagen: "/images/evento7.jpg"
  }
];

const EventCard = ({ evento }) => {
  return (
    <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden mb-6 hover:shadow-xl transition-shadow duration-300">
      {evento.imagen && (
        <Image
          className="w-full h-48 object-cover"
          src={evento.imagen}
          alt={`Imagen de ${evento.nombre}`}
          width={400}
          height={200}
        />
      )}
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{evento.nombre}</h3>
        <p className="text-gray-600 mb-1"><strong>Fecha:</strong> {new Date(evento.fechaInicio).toLocaleDateString('es-ES', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
        <p className="text-gray-600 mb-1"><strong>Duración:</strong> {evento.duracion}</p>
        <p className="text-gray-600 mb-1"><strong>Invitados:</strong> {evento.invitados.join(", ")}</p>
        <p className="text-gray-600 mb-1"><strong>Lugar:</strong> {evento.lugar}</p>
        <p className="text-gray-600"><strong>Máx. asistentes:</strong> {evento.maxAsistentes}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className={styles.header}>
        <h1 className={styles.h1}>Bienvenido a EventManagement</h1>
        <div>
          <Image
            className={styles.imageLogo}
            src="/images/armadillo.png"
            alt="Logo de la empresa"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Qr_scanner/>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventos.map((evento) => (
            <EventCard key={evento.id} evento={evento} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-5 mb-8">
        <div className="card w-[18rem] bg-white shadow-lg rounded-lg overflow-hidden">
          <a href="https://forms.gle/dRmxc271r4mgnVzT6" target="_blank">
            <Image
              className="w-full h-auto"
              src="/images/images.png"
              alt="Imagen de la tarjeta"
              width={288}
              height={288}
            />
          </a>
          <div className="p-4">
            <p className="text-gray-700 text-base lg:text-xl">¡Gracias por Usarnos!</p>
          </div>
        </div>
      </div>
    </div>
  );
}