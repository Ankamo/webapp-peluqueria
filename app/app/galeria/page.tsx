export default function Galeria() {
  const images = [
    'https://via.placeholder.com/300x400?text=Peinado+1',
    'https://via.placeholder.com/300x400?text=Corte+2',
    'https://via.placeholder.com/300x400?text=Estilo+3',
    'https://via.placeholder.com/300x400?text=Tinte+4',
    'https://via.placeholder.com/300x400?text=Peinado+5',
    'https://via.placeholder.com/300x400?text=Corte+6',
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Galería</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((src, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={src} alt={`Estilo ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}