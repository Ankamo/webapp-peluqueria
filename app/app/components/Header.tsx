import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Peluquería Elegante
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Inicio</Link>
          <Link href="/servicios" className="text-gray-600 hover:text-gray-800">Servicios</Link>
          <Link href="/galeria" className="text-gray-600 hover:text-gray-800">Galería</Link>
          <Link href="/reservar" className="text-gray-600 hover:text-gray-800">Reservar</Link>
          <Link href="/contacto" className="text-gray-600 hover:text-gray-800">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}