export default function Servicios() {
  const services = [
    { name: 'Corte de Cabello Mujer', price: '25€', description: 'Corte moderno adaptado a tu estilo.' },
    { name: 'Corte de Cabello Hombre', price: '15€', description: 'Corte clásico o moderno.' },
    { name: 'Peinado', price: '30€', description: 'Para eventos especiales.' },
    { name: 'Tinte', price: '50€', description: 'Coloreado completo.' },
    { name: 'Tratamiento Capilar', price: '20€', description: 'Hidratación y reparación.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-purple-600">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}