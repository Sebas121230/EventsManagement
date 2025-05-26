import { eventos } from '@/data/eventos'
import EventoClient from './EventoClient'

export async function generateStaticParams() {
  return eventos.map(evento => ({
    id: evento.id.toString()
  }))
}

export default function EventoPage({ params }) {
  // Debug mejorado
  console.log('Params recibidos:', params)
  
  if (!params?.id) {
    console.error('Parámetro ID no recibido')
    return <EventoClient evento={null} />
  }

  const eventId = parseInt(params.id, 10)
  const evento = eventos.find(e => e.id === eventId)
  
  // Debug de búsqueda
  console.log(`Buscando evento ID: ${eventId}`, 
    'IDs disponibles:', eventos.map(e => e.id))
  
  return <EventoClient evento={evento} />
}