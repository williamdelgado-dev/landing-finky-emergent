import { useState } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Search, GraduationCap, Building2, MapPin, Clock, Monitor, DollarSign, ChevronRight, Users, BookOpen, Briefcase, Heart, Scale, Palette, Calculator, ArrowRight, Check, X, Phone, Mail, MessageCircle, Star, Shield, CreditCard, Zap, HelpCircle, ChevronDown } from "lucide-react";

// Datos de universidades reales de Finky
const universidades = [
  { id: 1, nombre: "Universidad Areandina", logo: "https://finky.la/wp-content/uploads/2025/11/Areandina-editado.png", ciudad: "Bogotá", modalidades: ["Presencial", "Virtual"] },
  { id: 2, nombre: "Universidad Cooperativa de Colombia", logo: "https://finky.la/wp-content/uploads/2025/11/Universidad-Cooperativa-de-Colombia-editado.png", ciudad: "Bogotá", modalidades: ["Presencial", "Virtual"] },
  { id: 3, nombre: "Corporación Universitaria Iberoamericana", logo: "https://finky.la/wp-content/uploads/2025/11/Ibero-editado.png", ciudad: "Bogotá", modalidades: ["Presencial", "Virtual"] },
  { id: 4, nombre: "Universidad San Buenaventura", logo: "https://finky.la/wp-content/uploads/2025/11/San-Buenaventura-editado.png", ciudad: "Medellín", modalidades: ["Presencial"] },
  { id: 5, nombre: "Fundación Universitaria Juan N. Corpas", logo: "https://finky.la/wp-content/uploads/2025/11/Juan-N-Corpas-editado.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 6, nombre: "Universidad Piloto de Colombia", logo: "https://finky.la/wp-content/uploads/2025/11/Unipiloto-editado.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 7, nombre: "Universidad EAN", logo: "https://finky.la/wp-content/uploads/2025/11/Ean-editado.png", ciudad: "Bogotá", modalidades: ["Presencial", "Virtual"] },
  { id: 8, nombre: "Fundación Universitaria San Mateo", logo: "https://finky.la/wp-content/uploads/2025/11/San-Mateo-editado.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 9, nombre: "UDCA", logo: "https://finky.la/wp-content/uploads/2025/11/UDCA-editado.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 10, nombre: "Unitec", logo: "https://finky.la/wp-content/uploads/2025/11/Unitec-editado.png", ciudad: "Bogotá", modalidades: ["Presencial", "Virtual"] },
  { id: 11, nombre: "Universidad de América", logo: "https://finky.la/wp-content/uploads/2026/02/Universidad-de-America-editado-Photoroom-1-e1771873378299.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 12, nombre: "Unilatina", logo: "https://finky.la/wp-content/uploads/2025/11/Unilatina-editado.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 13, nombre: "Universidad Salesiana", logo: "https://finky.la/wp-content/uploads/2025/11/Uni-Salesiana-editado.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 14, nombre: "Uninpahu", logo: "https://finky.la/wp-content/uploads/2025/11/Uninpahu-editado.png", ciudad: "Bogotá", modalidades: ["Presencial"] },
  { id: 15, nombre: "Unimeta", logo: "https://finky.la/wp-content/uploads/2025/11/Unimeta-editado.png", ciudad: "Villavicencio", modalidades: ["Presencial"] },
];

const carreras = [
  { id: 1, nombre: "Ingeniería de Sistemas", area: "Ingenierías", duracion: "10 semestres", precio: "4.500.000", universidades: [1, 2, 6, 7, 10] },
  { id: 2, nombre: "Administración de Empresas", area: "Economía y Negocios", duracion: "8 semestres", precio: "4.200.000", universidades: [1, 2, 3, 7, 8, 12] },
  { id: 3, nombre: "Psicología", area: "Ciencias Sociales", duracion: "10 semestres", precio: "4.800.000", universidades: [2, 3, 4] },
  { id: 4, nombre: "Derecho", area: "Derecho", duracion: "10 semestres", precio: "5.200.000", universidades: [2, 4, 11] },
  { id: 5, nombre: "Medicina", area: "Ciencias de la Salud", duracion: "12 semestres", precio: "12.000.000", universidades: [5] },
  { id: 6, nombre: "Enfermería", area: "Ciencias de la Salud", duracion: "8 semestres", precio: "4.000.000", universidades: [3, 5, 9] },
  { id: 7, nombre: "Contaduría Pública", area: "Economía y Negocios", duracion: "10 semestres", precio: "3.800.000", universidades: [1, 2, 7, 8, 12, 13] },
  { id: 8, nombre: "Ingeniería Civil", area: "Ingenierías", duracion: "10 semestres", precio: "5.500.000", universidades: [6, 11] },
  { id: 9, nombre: "Diseño Gráfico", area: "Artes y Humanidades", duracion: "8 semestres", precio: "4.100.000", universidades: [3, 8, 10, 14] },
  { id: 10, nombre: "Comunicación Social", area: "Ciencias Sociales", duracion: "8 semestres", precio: "4.300.000", universidades: [2, 4, 12] },
  { id: 11, nombre: "Ingeniería Industrial", area: "Ingenierías", duracion: "10 semestres", precio: "5.000.000", universidades: [1, 6, 7, 11] },
  { id: 12, nombre: "Medicina Veterinaria", area: "Ciencias de la Salud", duracion: "10 semestres", precio: "6.500.000", universidades: [9] },
  { id: 13, nombre: "Arquitectura", area: "Artes y Humanidades", duracion: "10 semestres", precio: "5.800.000", universidades: [6, 11] },
  { id: 14, nombre: "Marketing", area: "Economía y Negocios", duracion: "8 semestres", precio: "4.000.000", universidades: [3, 7, 10, 14] },
  { id: 15, nombre: "Trabajo Social", area: "Ciencias Sociales", duracion: "8 semestres", precio: "3.500.000", universidades: [2, 4, 15] },
];

const areas = [
  { nombre: "Ingenierías", icono: Calculator, color: "#FF6B35" },
  { nombre: "Ciencias de la Salud", icono: Heart, color: "#10B981" },
  { nombre: "Ciencias Sociales", icono: Users, color: "#3B82F6" },
  { nombre: "Economía y Negocios", icono: Briefcase, color: "#F59E0B" },
  { nombre: "Artes y Humanidades", icono: Palette, color: "#8B5CF6" },
  { nombre: "Derecho", icono: Scale, color: "#EF4444" },
];

const testimonios = [
  { nombre: "Karol Mendivelso", texto: "Finky me ayudó a empezar mi carrera sin tener que buscar un codeudor. Fue todo súper fácil y rápido", imagen: "https://finky.la/wp-content/uploads/2025/12/Diseno-sin-titulo-2.png" },
  { nombre: "Jairo José Perez", texto: "Me sorprendió lo rápido que fue. En menos de una semana ya estaba matriculado con el crédito aprobado.", imagen: "https://finky.la/wp-content/uploads/2023/09/testi_3_1-1.jpg" },
  { nombre: "Lina Marcela Hernández", texto: "Lo mejor es que no me pidieron codeudor. Con Finky pude empezar mi carrera sin depender de nadie más", imagen: "https://finky.la/wp-content/uploads/2023/09/testi_3_3-1.jpg" },
];

const faqs = [
  { pregunta: "¿Cómo funciona Finky?", respuesta: "Finky te permite financiar tu semestre universitario sin necesidad de codeudor ni historial crediticio. Simulas tu crédito, te registras, y en 5 minutos tienes respuesta." },
  { pregunta: "¿Cuánto cobra Finky?", respuesta: "El cobro de Finky varía según la institución educativa y el programa académico. Este valor está incluido en tus cuotas mensuales y cubre el proceso operativo del crédito." },
  { pregunta: "¿En cuántas cuotas debo pagar?", respuesta: "Puedes pagar tu semestre en hasta 6 cuotas mensuales. La cantidad debe ser máximo el número de meses que dura tu periodo académico." },
  { pregunta: "¿Necesito codeudor?", respuesta: "¡No! En Finky no necesitas codeudor. Tú respondes por tu crédito, sin cargar a nadie más con tu decisión de estudiar." },
];

// Header común
const Header = () => {
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://finky.la/wp-content/uploads/2025/11/Diseno_sin_titulo__18_-removebg-preview-2.png" alt="Finky" className="h-10" />
        </div>
        <nav className="flex gap-1 sm:gap-2">
          <Link 
            to="/propuesta-1" 
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/propuesta-1' || location.pathname === '/' ? 'bg-[#FF6B35] text-white' : 'text-gray-600 hover:bg-orange-50'}`}
            data-testid="nav-propuesta-1"
          >
            Diseño 1
          </Link>
          <Link 
            to="/propuesta-2" 
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/propuesta-2' ? 'bg-[#FF6B35] text-white' : 'text-gray-600 hover:bg-orange-50'}`}
            data-testid="nav-propuesta-2"
          >
            Diseño 2
          </Link>
          <Link 
            to="/propuesta-3" 
            className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${location.pathname === '/propuesta-3' ? 'bg-[#FF6B35] text-white' : 'text-gray-600 hover:bg-orange-50'}`}
            data-testid="nav-propuesta-3"
          >
            Diseño 3
          </Link>
        </nav>
      </div>
    </header>
  );
};

// Componente de Simulador compartido
const Simulador = ({ universidad, carrera }) => {
  const [monto, setMonto] = useState(5000000);
  const [cuotas, setCuotas] = useState(6);
  
  const fianza = Math.round(monto * 0.0264);
  const seguro = 17000;
  const tarifaFinky = Math.round(monto * 0.1152);
  const total = monto + fianza + seguro + tarifaFinky;
  const cuotaMensual = Math.round(total / cuotas);

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-orange-100">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <CreditCard className="w-6 h-6 text-[#FF6B35]" />
        Simula tu crédito
        {universidad && <span className="text-sm font-normal text-gray-500">en {universidad}</span>}
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Valor del semestre</label>
          <input
            type="range"
            min="1000000"
            max="15000000"
            step="100000"
            value={monto}
            onChange={(e) => setMonto(Number(e.target.value))}
            className="w-full h-2 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]"
            data-testid="simulador-monto"
          />
          <p className="text-2xl font-bold text-[#FF6B35] mt-2">${monto.toLocaleString('es-CO')} COP</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Número de cuotas</label>
          <div className="flex gap-2">
            {[3, 4, 5, 6].map(n => (
              <button
                key={n}
                onClick={() => setCuotas(n)}
                className={`flex-1 py-2 rounded-lg font-medium transition-all ${cuotas === n ? 'bg-[#FF6B35] text-white' : 'bg-gray-100 text-gray-600 hover:bg-orange-50'}`}
                data-testid={`cuotas-${n}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 rounded-2xl p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Valor solicitado</span>
            <span className="font-medium">${monto.toLocaleString('es-CO')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Fianza + IVA</span>
            <span className="font-medium">${fianza.toLocaleString('es-CO')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Seguro</span>
            <span className="font-medium">${seguro.toLocaleString('es-CO')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tarifa Finky</span>
            <span className="font-medium">${tarifaFinky.toLocaleString('es-CO')}</span>
          </div>
          <div className="border-t border-orange-200 pt-3 flex justify-between">
            <span className="font-semibold text-gray-900">Total</span>
            <span className="font-bold text-gray-900">${total.toLocaleString('es-CO')}</span>
          </div>
        </div>

        <div className="text-center bg-[#FF6B35] rounded-2xl p-6">
          <p className="text-white/80 text-sm mb-1">Tus {cuotas} cuotas mensuales son de</p>
          <p className="text-4xl font-bold text-white">${cuotaMensual.toLocaleString('es-CO')}</p>
        </div>

        <button 
          className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-full transition-colors"
          data-testid="solicitar-credito"
        >
          Solicitar mi crédito
        </button>
      </div>
    </div>
  );
};

// Componente de Beneficios
const Beneficios = () => (
  <section className="py-16 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">¿Por qué elegir Finky?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icono: Shield, titulo: "Sin codeudor", desc: "Aquí respondes tú, no alguien más. No necesitas poner a un tercero como respaldo." },
          { icono: Zap, titulo: "Aprobación en 5 min", desc: "Proceso 100% digital. Simula, regístrate y obtén respuesta inmediata." },
          { icono: CreditCard, titulo: "Sin historial crediticio", desc: "No te pedimos historial para entrar; te lo ayudamos a crear." },
          { icono: Star, titulo: "Renovación con ahorro", desc: "Si ya eres Finker y renuevas, no te cobramos la fianza porque confiamos en ti." },
        ].map((item, idx) => (
          <div key={idx} className="bg-orange-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <item.icono className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{item.titulo}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Componente de Stats
const Stats = () => (
  <section className="py-12 px-4 bg-[#FF6B35]">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div>
        <p className="text-4xl font-bold text-white">10k+</p>
        <p className="text-white/80">Estudiantes</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-white">25+</p>
        <p className="text-white/80">Universidades</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-white">20k+</p>
        <p className="text-white/80">Créditos</p>
      </div>
      <div>
        <p className="text-4xl font-bold text-white">0</p>
        <p className="text-white/80">Codeudores</p>
      </div>
    </div>
  </section>
);

// Componente de Testimonios
const Testimonios = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Lo que dicen nuestros Finkers</h2>
      <p className="text-center text-gray-600 mb-12">Miles de estudiantes ya financiaron sus estudios con nosotros</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonios.map((t, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <img src={t.imagen} alt={t.nombre} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <p className="font-semibold text-gray-900">{t.nombre}</p>
                <p className="text-sm text-gray-500">Estudiante</p>
              </div>
            </div>
            <p className="text-gray-600 italic">"{t.texto}"</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Componente de FAQs
const FAQs = () => {
  const [openIdx, setOpenIdx] = useState(null);
  
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Preguntas frecuentes</h2>
        <p className="text-center text-gray-600 mb-12">Información clave para orientarte durante tu proceso</p>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                data-testid={`faq-${idx}`}
              >
                <span className="font-medium text-gray-900">{faq.pregunta}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <div className="px-6 pb-4 text-gray-600">{faq.respuesta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente de Universidades Carousel
const UniversidadesCarousel = () => (
  <section className="py-12 px-4 bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Estudia en las mejores universidades del país</h2>
      <div className="flex gap-8 animate-scroll">
        {[...universidades, ...universidades].map((uni, idx) => (
          <img key={idx} src={uni.logo} alt={uni.nombre} className="h-12 w-auto object-contain flex-shrink-0 grayscale hover:grayscale-0 transition-all" />
        ))}
      </div>
    </div>
  </section>
);

// Componente de Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-4">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <img src="https://finky.la/wp-content/uploads/2025/11/Diseno_sin_titulo__18_-removebg-preview-2.png" alt="Finky" className="h-10 mb-4 brightness-0 invert" />
        <p className="text-gray-400 text-sm">Facilitamos el acceso a la educación superior, sin historial crediticio ni codeudor.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Enlaces</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#" className="hover:text-white">Universidades aliadas</a></li>
          <li><a href="#" className="hover:text-white">Simular crédito</a></li>
          <li><a href="#" className="hover:text-white">Preguntas frecuentes</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contacto</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> +57 320 308 0644</li>
          <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> hablemos@finky.la</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4">¿Necesitas ayuda?</h4>
        <a href="https://wa.link/xn4ncn" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm transition-colors">
          <MessageCircle className="w-4 h-4" /> Escríbenos por WhatsApp
        </a>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
      © 2024 Finky. Todos los derechos reservados.
    </div>
  </footer>
);

// ==================== PROPUESTA 1: MARKETPLACE SEARCH-FIRST ====================
const Propuesta1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const [selectedUniversidad, setSelectedUniversidad] = useState(null);

  const carrerasFiltradas = carreras.filter(c => 
    c.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getUniversidadesCarrera = (carrera) => {
    return universidades.filter(u => carrera.universidades.includes(u.id));
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero con buscador prominente */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Te aprobamos tu crédito educativo en solo <span className="text-[#FF6B35]">5 minutos</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Busca la carrera que quieres estudiar, descubre las universidades aliadas y solicita tu crédito sin codeudor
          </p>
          
          {/* Buscador */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="¿Qué quieres estudiar? Ej: Ingeniería de Sistemas, Administración..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setSelectedCarrera(null); setSelectedUniversidad(null); }}
              className="w-full pl-14 pr-6 py-5 rounded-full text-lg bg-white shadow-xl border-2 border-transparent focus:border-[#FF6B35] focus:outline-none transition-all"
              data-testid="search-input-p1"
            />
          </div>

          {/* Tags populares */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {["Administración", "Ingeniería", "Psicología", "Derecho", "Medicina", "Contaduría"].map(tag => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-4 py-2 bg-white hover:bg-[#FF6B35] hover:text-white text-gray-700 rounded-full text-sm transition-all border border-gray-200 hover:border-[#FF6B35]"
                data-testid={`tag-${tag.toLowerCase()}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados de búsqueda */}
      {searchTerm && !selectedCarrera && (
        <section className="px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {carrerasFiltradas.length} carreras encontradas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {carrerasFiltradas.map(carrera => (
                <button
                  key={carrera.id}
                  onClick={() => setSelectedCarrera(carrera)}
                  className="bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-[#FF6B35] hover:shadow-lg transition-all group"
                  data-testid={`carrera-card-${carrera.id}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs font-medium text-[#FF6B35] bg-orange-50 px-2 py-1 rounded-full">{carrera.area}</span>
                      <h3 className="text-gray-900 font-semibold text-lg mt-3 mb-2">{carrera.nombre}</h3>
                      <p className="text-gray-500 text-sm mb-3">{carrera.duracion}</p>
                      <span className="inline-flex items-center gap-1 text-[#FF6B35] text-sm font-medium">
                        <Building2 className="w-4 h-4" />
                        {carrera.universidades.length} universidades aliadas
                      </span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Vista de carrera seleccionada con universidades */}
      {selectedCarrera && !selectedUniversidad && (
        <section className="px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <button
              onClick={() => setSelectedCarrera(null)}
              className="text-gray-500 hover:text-[#FF6B35] mb-6 flex items-center gap-2 transition-colors"
              data-testid="back-button"
            >
              <ChevronRight className="w-4 h-4 rotate-180" /> Volver a resultados
            </button>
            
            <div className="bg-white rounded-3xl p-8 mb-8 shadow-sm border border-gray-100">
              <span className="text-sm font-medium text-[#FF6B35] bg-orange-50 px-3 py-1 rounded-full">{selectedCarrera.area}</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-2">{selectedCarrera.nombre}</h2>
              <p className="text-gray-500">{selectedCarrera.duracion} • Desde ${selectedCarrera.precio} COP / semestre</p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-6">Universidades que ofrecen esta carrera</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {getUniversidadesCarrera(selectedCarrera).map(uni => (
                <div
                  key={uni.id}
                  className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 shadow-sm border border-gray-100 hover:border-[#FF6B35] hover:shadow-md transition-all cursor-pointer"
                  onClick={() => setSelectedUniversidad(uni)}
                  data-testid={`uni-card-${uni.id}`}
                >
                  <img src={uni.logo} alt={uni.nombre} className="h-16 w-auto object-contain" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{uni.nombre}</h4>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {uni.ciudad}</span>
                      <span className="flex items-center gap-1"><Monitor className="w-4 h-4" /> {uni.modalidades.join(" / ")}</span>
                    </div>
                  </div>
                  <button 
                    className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
                    data-testid={`simular-btn-${uni.id}`}
                  >
                    Simular crédito
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modal de universidad con simulador */}
      {selectedUniversidad && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-4">
                <img src={selectedUniversidad.logo} alt={selectedUniversidad.nombre} className="h-12" />
                <div>
                  <h3 className="font-bold text-gray-900">{selectedUniversidad.nombre}</h3>
                  <p className="text-sm text-gray-500">{selectedCarrera?.nombre}</p>
                </div>
              </div>
              <button onClick={() => setSelectedUniversidad(null)} className="p-2 hover:bg-gray-100 rounded-full" data-testid="close-modal">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <Simulador universidad={selectedUniversidad.nombre} carrera={selectedCarrera?.nombre} />
            </div>
          </div>
        </div>
      )}

      {/* Contenido cuando no hay búsqueda */}
      {!searchTerm && (
        <>
          <UniversidadesCarousel />
          <Beneficios />
          <Stats />
          
          {/* Sección de ejemplo de simulación */}
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">¿Cómo sería estudiar un semestre con Finky?</h2>
                  <p className="text-gray-600 mb-6">
                    <strong>Juana</strong>, una de nuestros estudiantes, quería estudiar administración en la universidad. 
                    Hizo el cálculo de sus cuotas mensuales y con Finky esto fue lo que encontró:
                  </p>
                  <div className="bg-white rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between"><span className="text-gray-600">Valor del Semestre</span><span className="font-semibold">$5.000.000</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Fianza</span><span className="font-semibold">$132.000</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Seguro</span><span className="font-semibold">$17.000</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Tarifa de servicio Finky</span><span className="font-semibold">$576.000</span></div>
                    <div className="border-t pt-4 flex justify-between"><span className="font-bold">Total</span><span className="font-bold">$5.725.000</span></div>
                    <div className="bg-[#FF6B35] text-white rounded-xl p-4 text-center">
                      <p className="text-sm opacity-80">Pago en 6 cuotas mensuales de</p>
                      <p className="text-2xl font-bold">$954.166 COP</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Simulador />
                </div>
              </div>
            </div>
          </section>

          <Testimonios />
          <FAQs />
        </>
      )}

      <Footer />
    </div>
  );
};

// ==================== PROPUESTA 2: EXPLORADOR POR ÁREAS ====================
const Propuesta2 = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const [selectedUniversidad, setSelectedUniversidad] = useState(null);

  const carrerasPorArea = selectedArea ? carreras.filter(c => c.area === selectedArea.nombre) : [];
  const getUniversidadesCarrera = (carrera) => universidades.filter(u => carrera.universidades.includes(u.id));

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero */}
      <section className="bg-[#FF6B35] px-4 py-16 md:py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tu futuro empieza aquí
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
          Te aprobamos tu crédito educativo para estudiar en la universidad en solo 5 minutos. Sin codeudor.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#explorar" className="bg-white text-[#FF6B35] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            Explorar carreras
          </a>
          <a href="#simular" className="border-2 border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Simular crédito
          </a>
        </div>
      </section>

      <UniversidadesCarousel />

      {/* Explorador por áreas */}
      <section id="explorar" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Explora por área de conocimiento</h2>
          <p className="text-center text-gray-600 mb-12">Selecciona un área y encuentra las carreras disponibles en nuestras universidades aliadas</p>
          
          {!selectedArea ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {areas.map((area) => {
                const Icon = area.icono;
                const carrerasEnArea = carreras.filter(c => c.area === area.nombre).length;
                return (
                  <button
                    key={area.nombre}
                    onClick={() => setSelectedArea(area)}
                    className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-left group border border-gray-100"
                    data-testid={`area-${area.nombre.toLowerCase().replace(/ /g, '-')}`}
                  >
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${area.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: area.color }} />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{area.nombre}</h3>
                    <p className="text-gray-500 text-sm">{carrerasEnArea} carreras disponibles</p>
                  </button>
                );
              })}
            </div>
          ) : !selectedCarrera ? (
            <div>
              <button onClick={() => setSelectedArea(null)} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-[#FF6B35] transition-colors">
                <ChevronRight className="w-4 h-4 rotate-180" /> Volver a áreas
              </button>
              <div className="bg-white rounded-2xl p-6 mb-8 flex items-center gap-4 shadow-sm">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${selectedArea.color}15` }}>
                  <selectedArea.icono className="w-7 h-7" style={{ color: selectedArea.color }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedArea.nombre}</h3>
                  <p className="text-gray-500">{carrerasPorArea.length} carreras disponibles</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {carrerasPorArea.map(carrera => (
                  <button
                    key={carrera.id}
                    onClick={() => setSelectedCarrera(carrera)}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-left flex items-center justify-between group border border-gray-100 hover:border-[#FF6B35]"
                    data-testid={`carrera-p2-${carrera.id}`}
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{carrera.nombre}</h4>
                      <p className="text-gray-500 text-sm flex items-center gap-2">
                        <Building2 className="w-4 h-4" /> {carrera.universidades.length} universidades • {carrera.duracion}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#FF6B35] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <button onClick={() => setSelectedCarrera(null)} className="mb-6 flex items-center gap-2 text-gray-500 hover:text-[#FF6B35] transition-colors">
                <ChevronRight className="w-4 h-4 rotate-180" /> Volver a {selectedArea.nombre}
              </button>
              <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
                <span className="text-sm font-medium text-[#FF6B35]">{selectedCarrera.area}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{selectedCarrera.nombre}</h3>
                <p className="text-gray-500">{selectedCarrera.duracion} • Desde ${selectedCarrera.precio}/semestre</p>
              </div>
              <div className="space-y-4">
                {getUniversidadesCarrera(selectedCarrera).map(uni => (
                  <div key={uni.id} className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 shadow-sm border border-gray-100">
                    <img src={uni.logo} alt={uni.nombre} className="h-14 w-auto object-contain" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{uni.nombre}</h4>
                      <p className="text-sm text-gray-500">{uni.ciudad} • {uni.modalidades.join(", ")}</p>
                    </div>
                    <button 
                      onClick={() => setSelectedUniversidad(uni)}
                      className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                      data-testid={`simular-p2-${uni.id}`}
                    >
                      Simular crédito
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Modal simulador */}
      {selectedUniversidad && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-4">
                <img src={selectedUniversidad.logo} alt={selectedUniversidad.nombre} className="h-12" />
                <div>
                  <h3 className="font-bold text-gray-900">{selectedUniversidad.nombre}</h3>
                  <p className="text-sm text-gray-500">{selectedCarrera?.nombre}</p>
                </div>
              </div>
              <button onClick={() => setSelectedUniversidad(null)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <Simulador universidad={selectedUniversidad.nombre} />
            </div>
          </div>
        </div>
      )}

      <Beneficios />
      <Stats />
      
      {/* Simulador standalone */}
      <section id="simular" className="py-16 px-4 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Simula tu cupo de crédito</h2>
          <p className="text-center text-gray-600 mb-8">Calcula el valor de tus cuotas mensuales sin compromiso</p>
          <Simulador />
        </div>
      </section>

      <Testimonios />
      <FAQs />
      <Footer />
    </div>
  );
};

// ==================== PROPUESTA 3: COMPARADOR LADO A LADO ====================
const Propuesta3 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCarrera, setSelectedCarrera] = useState(null);
  const [selectedUnis, setSelectedUnis] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showSimulador, setShowSimulador] = useState(null);

  const suggestions = carreras.filter(c => c.nombre.toLowerCase().includes(searchTerm.toLowerCase()) && searchTerm.length > 0);
  const getUniversidadesCarrera = (carrera) => universidades.filter(u => carrera.universidades.includes(u.id));

  const toggleUniSelection = (uniId) => {
    if (selectedUnis.includes(uniId)) {
      setSelectedUnis(selectedUnis.filter(id => id !== uniId));
    } else if (selectedUnis.length < 3) {
      setSelectedUnis([...selectedUnis, uniId]);
    }
  };

  const universidadesSeleccionadas = universidades.filter(u => selectedUnis.includes(u.id));

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero minimalista */}
      <section className="px-4 py-16 md:py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Compara universidades y elige la mejor para ti
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Busca tu carrera, selecciona universidades aliadas y compáralas lado a lado antes de solicitar tu crédito
          </p>

          {/* Buscador con autocompletado */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Escribe el nombre de una carrera..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setShowSuggestions(true); }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full pl-14 pr-6 py-4 rounded-2xl text-lg bg-white border-2 border-gray-200 focus:border-[#FF6B35] focus:outline-none transition-colors shadow-sm"
              data-testid="search-input-p3"
            />
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-10">
                {suggestions.map(carrera => (
                  <button
                    key={carrera.id}
                    onClick={() => {
                      setSelectedCarrera(carrera);
                      setSearchTerm(carrera.nombre);
                      setShowSuggestions(false);
                      setSelectedUnis([]);
                    }}
                    className="w-full px-5 py-4 text-left hover:bg-orange-50 flex items-center justify-between border-b border-gray-50 last:border-0"
                    data-testid={`suggestion-${carrera.id}`}
                  >
                    <div>
                      <p className="font-medium text-gray-900">{carrera.nombre}</p>
                      <p className="text-sm text-gray-500">{carrera.area} • {carrera.duracion}</p>
                    </div>
                    <span className="text-sm text-[#FF6B35] font-medium bg-orange-50 px-3 py-1 rounded-full">
                      {carrera.universidades.length} unis
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <UniversidadesCarousel />

      {/* Comparador */}
      {selectedCarrera && (
        <section className="px-4 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <span className="text-sm font-medium text-[#FF6B35]">{selectedCarrera.area}</span>
                <h2 className="text-2xl font-bold text-gray-900">{selectedCarrera.nombre}</h2>
                <p className="text-gray-500">{selectedCarrera.duracion} • Desde ${selectedCarrera.precio}/sem</p>
              </div>
              <button
                onClick={() => { setSelectedCarrera(null); setSearchTerm(""); setSelectedUnis([]); }}
                className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
              >
                Limpiar búsqueda
              </button>
            </div>

            <div className="bg-white rounded-2xl p-4 mb-6 text-center">
              <p className="text-gray-600">
                Selecciona hasta <strong>3 universidades</strong> para comparar ({selectedUnis.length}/3)
              </p>
            </div>

            {/* Cards de universidades */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {getUniversidadesCarrera(selectedCarrera).map(uni => {
                const isSelected = selectedUnis.includes(uni.id);
                return (
                  <div
                    key={uni.id}
                    onClick={() => toggleUniSelection(uni.id)}
                    className={`bg-white rounded-2xl p-6 cursor-pointer transition-all border-2 ${
                      isSelected ? 'border-[#FF6B35] shadow-lg' : 'border-gray-100 hover:border-orange-200'
                    }`}
                    data-testid={`uni-select-${uni.id}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <img src={uni.logo} alt={uni.nombre} className="h-12 w-auto object-contain" />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isSelected ? 'bg-[#FF6B35] border-[#FF6B35]' : 'border-gray-300'
                      }`}>
                        {isSelected && <Check className="w-4 h-4 text-white" />}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{uni.nombre}</h3>
                    <div className="space-y-1 text-sm text-gray-500">
                      <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {uni.ciudad}</p>
                      <p className="flex items-center gap-2"><Monitor className="w-4 h-4" /> {uni.modalidades.join(", ")}</p>
                      <p className="flex items-center gap-2"><DollarSign className="w-4 h-4" /> ${selectedCarrera.precio}/sem</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tabla de comparación */}
            {selectedUnis.length >= 2 && (
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-orange-50">
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">Comparar</th>
                        {universidadesSeleccionadas.map(uni => (
                          <th key={uni.id} className="px-6 py-4 text-center">
                            <img src={uni.logo} alt={uni.nombre} className="h-10 mx-auto mb-2 object-contain" />
                            <p className="text-sm font-semibold text-gray-900">{uni.nombre}</p>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">Ciudad</td>
                        {universidadesSeleccionadas.map(uni => (
                          <td key={uni.id} className="px-6 py-4 text-center text-sm">{uni.ciudad}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">Modalidad</td>
                        {universidadesSeleccionadas.map(uni => (
                          <td key={uni.id} className="px-6 py-4 text-center text-sm">{uni.modalidades.join(", ")}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">Duración</td>
                        {universidadesSeleccionadas.map(uni => (
                          <td key={uni.id} className="px-6 py-4 text-center text-sm">{selectedCarrera.duracion}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">Precio semestre</td>
                        {universidadesSeleccionadas.map(uni => (
                          <td key={uni.id} className="px-6 py-4 text-center text-sm font-semibold text-[#FF6B35]">
                            ${selectedCarrera.precio}
                          </td>
                        ))}
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-600 font-medium">Acción</td>
                        {universidadesSeleccionadas.map(uni => (
                          <td key={uni.id} className="px-6 py-4 text-center">
                            <button 
                              onClick={() => setShowSimulador(uni)}
                              className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
                              data-testid={`simular-p3-${uni.id}`}
                            >
                              Simular crédito
                            </button>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Modal simulador */}
      {showSimulador && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b p-6 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-4">
                <img src={showSimulador.logo} alt={showSimulador.nombre} className="h-12" />
                <div>
                  <h3 className="font-bold text-gray-900">{showSimulador.nombre}</h3>
                  <p className="text-sm text-gray-500">{selectedCarrera?.nombre}</p>
                </div>
              </div>
              <button onClick={() => setShowSimulador(null)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <Simulador universidad={showSimulador.nombre} />
            </div>
          </div>
        </div>
      )}

      {/* Contenido adicional cuando no hay búsqueda */}
      {!selectedCarrera && (
        <>
          <Beneficios />
          <Stats />
          
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">¿Ya sabes qué estudiar?</h2>
              <p className="text-center text-gray-600 mb-8">Simula tu crédito ahora mismo y conoce el valor de tus cuotas</p>
              <Simulador />
            </div>
          </section>
        </>
      )}

      <Testimonios />
      <FAQs />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Propuesta1 />} />
          <Route path="/propuesta-1" element={<Propuesta1 />} />
          <Route path="/propuesta-2" element={<Propuesta2 />} />
          <Route path="/propuesta-3" element={<Propuesta3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
