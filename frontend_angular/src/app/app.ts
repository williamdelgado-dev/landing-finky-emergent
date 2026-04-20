import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Datos de universidades
const UNIVERSIDADES = [
  { id: 1, nombre: 'Universidad Areandina', logo: 'https://finky.la/wp-content/uploads/2025/11/Areandina-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial', 'Virtual'] },
  { id: 2, nombre: 'Universidad Cooperativa de Colombia', logo: 'https://finky.la/wp-content/uploads/2025/11/Universidad-Cooperativa-de-Colombia-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial', 'Virtual'] },
  { id: 3, nombre: 'Corporación Universitaria Iberoamericana', logo: 'https://finky.la/wp-content/uploads/2025/11/Ibero-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial', 'Virtual'] },
  { id: 4, nombre: 'Universidad San Buenaventura', logo: 'https://finky.la/wp-content/uploads/2025/11/San-Buenaventura-editado.png', ciudad: 'Medellín', modalidades: ['Presencial'] },
  { id: 5, nombre: 'Fundación Universitaria Juan N. Corpas', logo: 'https://finky.la/wp-content/uploads/2025/11/Juan-N-Corpas-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial'] },
  { id: 6, nombre: 'Universidad Piloto de Colombia', logo: 'https://finky.la/wp-content/uploads/2025/11/Unipiloto-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial'] },
  { id: 7, nombre: 'Universidad EAN', logo: 'https://finky.la/wp-content/uploads/2025/11/Ean-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial', 'Virtual'] },
  { id: 8, nombre: 'Fundación Universitaria San Mateo', logo: 'https://finky.la/wp-content/uploads/2025/11/San-Mateo-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial'] },
  { id: 9, nombre: 'UDCA', logo: 'https://finky.la/wp-content/uploads/2025/11/UDCA-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial'] },
  { id: 10, nombre: 'Unitec', logo: 'https://finky.la/wp-content/uploads/2025/11/Unitec-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial', 'Virtual'] },
  { id: 11, nombre: 'Universidad de América', logo: 'https://finky.la/wp-content/uploads/2026/02/Universidad-de-America-editado-Photoroom-1-e1771873378299.png', ciudad: 'Bogotá', modalidades: ['Presencial'] },
  { id: 12, nombre: 'Unilatina', logo: 'https://finky.la/wp-content/uploads/2025/11/Unilatina-editado.png', ciudad: 'Bogotá', modalidades: ['Presencial'] },
];

// Datos de carreras
const CARRERAS = [
  { id: 1, nombre: 'Ingeniería de Sistemas', area: 'Ingenierías', duracion: '10 semestres', precio: '4.500.000', universidades: [1, 2, 6, 7, 10] },
  { id: 2, nombre: 'Administración de Empresas', area: 'Economía y Negocios', duracion: '8 semestres', precio: '4.200.000', universidades: [1, 2, 3, 7, 8, 12] },
  { id: 3, nombre: 'Psicología', area: 'Ciencias Sociales', duracion: '10 semestres', precio: '4.800.000', universidades: [2, 3, 4] },
  { id: 4, nombre: 'Derecho', area: 'Derecho', duracion: '10 semestres', precio: '5.200.000', universidades: [2, 4, 11] },
  { id: 5, nombre: 'Medicina', area: 'Ciencias de la Salud', duracion: '12 semestres', precio: '12.000.000', universidades: [5] },
  { id: 6, nombre: 'Enfermería', area: 'Ciencias de la Salud', duracion: '8 semestres', precio: '4.000.000', universidades: [3, 5, 9] },
  { id: 7, nombre: 'Contaduría Pública', area: 'Economía y Negocios', duracion: '10 semestres', precio: '3.800.000', universidades: [1, 2, 7, 8, 12] },
  { id: 8, nombre: 'Ingeniería Civil', area: 'Ingenierías', duracion: '10 semestres', precio: '5.500.000', universidades: [6, 11] },
  { id: 9, nombre: 'Diseño Gráfico', area: 'Artes y Humanidades', duracion: '8 semestres', precio: '4.100.000', universidades: [3, 8, 10] },
  { id: 10, nombre: 'Comunicación Social', area: 'Ciencias Sociales', duracion: '8 semestres', precio: '4.300.000', universidades: [2, 4, 12] },
  { id: 11, nombre: 'Ingeniería Industrial', area: 'Ingenierías', duracion: '10 semestres', precio: '5.000.000', universidades: [1, 6, 7, 11] },
  { id: 12, nombre: 'Medicina Veterinaria', area: 'Ciencias de la Salud', duracion: '10 semestres', precio: '6.500.000', universidades: [9] },
];

const TESTIMONIOS = [
  { nombre: 'Karol Mendivelso', texto: 'Finky me ayudó a empezar mi carrera sin tener que buscar un codeudor. Fue todo súper fácil y rápido', imagen: 'https://finky.la/wp-content/uploads/2025/12/Diseno-sin-titulo-2.png' },
  { nombre: 'Jairo José Perez', texto: 'Me sorprendió lo rápido que fue. En menos de una semana ya estaba matriculado con el crédito aprobado.', imagen: 'https://finky.la/wp-content/uploads/2023/09/testi_3_1-1.jpg' },
  { nombre: 'Lina Marcela Hernández', texto: 'Lo mejor es que no me pidieron codeudor. Con Finky pude empezar mi carrera sin depender de nadie más', imagen: 'https://finky.la/wp-content/uploads/2023/09/testi_3_3-1.jpg' },
];

const FAQS = [
  { pregunta: '¿Cómo funciona Finky?', respuesta: 'Finky te permite financiar tu semestre universitario sin necesidad de codeudor ni historial crediticio. Simulas tu crédito, te registras, y en 5 minutos tienes respuesta.' },
  { pregunta: '¿Cuánto cobra Finky?', respuesta: 'El cobro de Finky varía según la institución educativa y el programa académico. Este valor está incluido en tus cuotas mensuales.' },
  { pregunta: '¿En cuántas cuotas debo pagar?', respuesta: 'Puedes pagar tu semestre en hasta 6 cuotas mensuales.' },
  { pregunta: '¿Necesito codeudor?', respuesta: '¡No! En Finky no necesitas codeudor.' },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Datos
  universidades = UNIVERSIDADES;
  carreras = CARRERAS;
  testimonios = TESTIMONIOS;
  faqs = FAQS;
  tagsPopulares = ['Administración', 'Ingeniería', 'Psicología', 'Derecho', 'Medicina', 'Contaduría'];

  // Estado de búsqueda
  searchTerm = '';
  carreraSeleccionada: any = null;
  universidadSeleccionada: any = null;

  // Estado del simulador
  monto = 5000000;
  cuotas = 6;

  // Estado de FAQs
  faqAbierto: number | null = null;

  // Obtener carreras filtradas
  get carrerasFiltradas() {
    if (!this.searchTerm) return [];
    const term = this.searchTerm.toLowerCase();
    return this.carreras.filter(c => 
      c.nombre.toLowerCase().includes(term) || 
      c.area.toLowerCase().includes(term)
    );
  }

  // Obtener universidades de una carrera
  getUniversidadesCarrera(carrera: any) {
    return this.universidades.filter(u => carrera.universidades.includes(u.id));
  }

  // Cálculos del simulador
  get fianza() { return Math.round(this.monto * 0.0264); }
  get seguro() { return 17000; }
  get tarifaFinky() { return Math.round(this.monto * 0.1152); }
  get total() { return this.monto + this.fianza + this.seguro + this.tarifaFinky; }
  get cuotaMensual() { return Math.round(this.total / this.cuotas); }

  // Acciones
  buscarPorTag(tag: string) {
    this.searchTerm = tag;
    this.carreraSeleccionada = null;
    this.universidadSeleccionada = null;
  }

  seleccionarCarrera(carrera: any) {
    this.carreraSeleccionada = carrera;
    this.universidadSeleccionada = null;
  }

  volverAResultados() {
    this.carreraSeleccionada = null;
    this.universidadSeleccionada = null;
  }

  abrirSimulador(universidad: any) {
    this.universidadSeleccionada = universidad;
  }

  cerrarSimulador() {
    this.universidadSeleccionada = null;
  }

  toggleFaq(index: number) {
    this.faqAbierto = this.faqAbierto === index ? null : index;
  }

  formatNumber(num: number): string {
    return num.toLocaleString('es-CO');
  }
}
