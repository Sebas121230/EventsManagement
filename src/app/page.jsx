import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-amber-100">

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Gestión de Eventos Simplificada
            </h1>
            <p className="text-lg text-amber-800 mb-8">
              Optimiza cada etapa de tus eventos, desde la planificación hasta el análisis posterior,
              mejorando la experiencia tanto para organizadores como para asistentes.
            </p>
            <a href="/home"><button className="bg-[var(--secondary-background)] text-black px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-[var(--highlight)] transition-colors">
              Comenzar ahora
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button></a>
          </div>
          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              {/* Calendar Icon */}
              <svg className="w-48 h-48 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12">
            Características Principales
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-amber-50 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Gestión Integral</h3>
              <p className="text-amber-700">Planifica y administra todos los aspectos de tus eventos desde una única plataforma.</p>
            </div>

            <div className="p-6 bg-amber-50 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Colaboración</h3>
              <p className="text-amber-700">Trabaja en equipo y coordina con todos los involucrados de manera eficiente.</p>
            </div>

            <div className="p-6 bg-amber-50 rounded-lg text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                <svg className="w-12 h-12 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Análisis Detallado</h3>
              <p className="text-amber-700">Obtén insights valiosos con análisis completos post-evento.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-[var(--accent)] mb-2">100+</div>
              <div className="text-amber-700">Usuarios Activos</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[var(--accent)] mb-2">90%</div>
              <div className="text-amber-700">Satisfacción Cliente</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-[var(--accent)] mb-2">20+</div>
              <div className="text-amber-700">Eventos Exitosos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-100 text-amber-900 py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PaddleGap</h3>
              <p className="text-black">
                Revolucionando la industria de eventos a través de la innovación tecnológica.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Productos</h4>
              <ul className="space-y-2">
                <li className="hover:text-amber-900 cursor-pointer">Características</li>
                <li className="hover:text-amber-900 cursor-pointer">Precios</li>
                <li className="hover:text-amber-900 cursor-pointer">Guías</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Compañía</h4>
              <ul className="space-y-2">
                <li className="hover:text-amber-900 cursor-pointer">Sobre Nosotros</li>
                <li className="hover:text-amber-900 cursor-pointer">Carreras</li>
                <li className="hover:text-amber-900 cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li className="hover:text-amber-900 cursor-pointer">Privacidad</li>
                <li className="hover:text-amber-900 cursor-pointer">Términos</li>
                <li className="hover:text-amber-900 cursor-pointer">Seguridad</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;