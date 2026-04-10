# Finky - Tienda de Universidades PRD

## Fecha: Enero 2026

## Problema Original
El usuario quería revisar finky.la y crear 3 propuestas de diseño diferentes para una "tienda de universidades". El concepto core es: **buscar una carrera y ver las universidades aliadas que la ofrecen** (no es e-commerce de productos).

## Preferencias del Usuario
- Mantener identidad visual Finky: **naranja (#FF6B35) y blanco**
- Incluir todo el contenido del landing actual: simulador, beneficios, stats, testimonios, FAQs
- Datos de ejemplo basados en universidades reales de Finky
- Funcionalidad: Búsqueda de carreras → Universidades → Info general

## Arquitectura Implementada

### Frontend (React)
- **App.js**: Componente principal con 3 propuestas de diseño
- **App.css**: Estilos personalizados con paleta Finky
- Navegación entre propuestas vía React Router

### Propuestas de Diseño

#### 1. Propuesta 1: Marketplace Search-First
- Hero con buscador prominente
- Tags populares de carreras
- Grid de resultados de búsqueda
- Lista de universidades por carrera seleccionada
- Modal con simulador de crédito

#### 2. Propuesta 2: Explorador por Áreas
- Hero naranja impactante con CTAs
- Grid de áreas de conocimiento con iconos
- Drill-down: Área → Carreras → Universidades
- Simulador standalone al final

#### 3. Propuesta 3: Comparador Lado a Lado
- Buscador con autocompletado
- Selección múltiple de universidades (hasta 3)
- Tabla comparativa: Ciudad, Modalidad, Duración, Precio
- Botones de simular crédito por universidad

### Componentes Compartidos
- Header con navegación
- Simulador de crédito (cálculo real de cuotas)
- Beneficios (4 cards)
- Stats (10k+ estudiantes, 25+ universidades, etc.)
- Testimonios
- FAQs expandibles
- Footer con contacto

## Datos de Ejemplo
- 15 universidades aliadas (logos reales de finky.la)
- 15 carreras en 6 áreas de conocimiento
- 3 testimonios de estudiantes
- 4 preguntas frecuentes

## Lo Implementado ✅
- 3 propuestas de diseño completas y navegables
- Búsqueda de carreras funcional
- Filtrado por área de conocimiento
- Comparador de universidades
- Simulador de crédito con cálculos reales
- Todo el contenido del landing original
- Paleta de colores naranja/blanco de Finky
- Diseño responsive

## Backlog / Próximos Pasos
- P0: Conectar con API real de carreras/universidades de Finky
- P1: Integrar simulador con backend de Finky para guardar leads
- P1: Añadir filtros avanzados (ciudad, modalidad, rango de precio)
- P2: Integrar chat con Laura (asistente virtual)
- P2: Añadir sección de blog
- P3: Analytics y tracking de conversiones

## Stack Técnico
- React 19
- React Router
- Tailwind CSS
- Lucide React (iconos)
