export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenido a Peluquería Elegante</h1>
          <p className="text-xl mb-8">Donde tu belleza es nuestra pasión</p>
          <a href="/reservar" className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Reserva tu cita
          </a>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Cortes de Cabello</h3>
              <p className="text-gray-600">Estilos modernos y clásicos para todos los gustos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Peinados</h3>
              <p className="text-gray-600">Para ocasiones especiales o el día a día.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4">Tratamientos</h3>
              <p className="text-gray-600">Cuida tu cabello con nuestros tratamientos especializados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Sobre Nosotros</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            En Peluquería Elegante, nos dedicamos a realzar tu belleza natural con servicios de alta calidad
            y un equipo profesional apasionado por su trabajo.
          </p>
        </div>
      </section>
    </div>
  );
}
            