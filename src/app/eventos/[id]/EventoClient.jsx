'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function EventoClient({ evento }) {
    if (!evento) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Evento no encontrado</h1>
                    <Link href="/home" className="text-blue-600 hover:underline">
                        Volver a la página principal
                    </Link>
                </div>
            </div>
        )
    }

    const handleRegistro = () => {
        alert(`¡Registro exitoso para ${evento.nombre}!`)
    }


    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="container mx-auto px-4">
                    <Link href="/home" className="text-blue-600 hover:underline mb-4 inline-block">
                        &larr; Volver a eventos
                    </Link>

                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Imagen principal */}
                        <div className="relative h-64 w-full">
                            <Image
                                src={evento.imagen}
                                alt={evento.nombre}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Detalles del evento */}
                        <div className="p-6 md:p-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">{evento.nombre}</h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Información del Evento</h2>
                                    <div className="space-y-3">
                                        <p><span className="font-medium">Fecha:</span> {new Date(evento.fechaInicio).toLocaleString('es-ES', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}</p>
                                        <p><span className="font-medium">Duración:</span> {evento.duracion}</p>
                                        <p><span className="font-medium">Lugar:</span> {evento.lugar}</p>
                                        <p><span className="font-medium">Asistentes máx:</span> {evento.maxAsistentes}</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold mb-4">Invitados</h2>
                                    <ul className="list-disc pl-5 space-y-1">
                                        {evento.invitados.map((invitado, i) => (
                                            <li key={i}>{invitado}</li>
                                        ))}
                                    </ul>
                                    <div>
                                        <h2 className="text-xl font-semibold mb-4">Descripcion</h2>
                                        <p><span className="font-medium"></span> {evento.descripcion}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Galería */}
                            <h2 className="text-xl font-semibold mb-4">Galería</h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {evento.galeria.map((img, index) => (
                                    <div key={index} className="aspect-square overflow-hidden rounded-lg">
                                        <Image
                                            src={img}
                                            alt={`Imagen ${index + 1} del evento`}
                                            width={200}
                                            height={200}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Botón de registro */}
                            <div className="text-center">
                                <button
                                    onClick={handleRegistro}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors shadow-md"
                                >
                                    Registrarse en este evento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}