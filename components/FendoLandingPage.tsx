
"use client";
import React from "react";
import { motion } from "framer-motion";
const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`py-20 ${className}`}><div className="max-w-6xl mx-auto px-6">{children}</div></section>
);
const Title = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-10"><h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0b3a2a]">{children}</h2>{subtitle && <p className="mt-3 text-lg text-neutral-600 max-w-3xl">{subtitle}</p>}</div>
);
const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-[#d4af37]/40 bg-white/60 px-3 py-1 text-sm text-[#0b3a2a] mr-2 mb-2">{children}</span>
);
const FendoLogo = ({ className = "", stroke = "#d4af37" }: { className?: string; stroke?: string }) => (
  <svg viewBox="0 0 800 200" className={className} role="img" aria-label="Fendo"><rect width="800" height="200" fill="#0b3a2a" rx="24" />
  <g fill="none" stroke={stroke} strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
    <path d="M80 150 V50 H160 M80 100 H140" /><path d="M200 50 V150 H300 M200 50 H300 M200 100 H280" /><path d="M340 150 V50 L440 150 V50" /><path d="M500 50 V150 H560 Q640 150 640 100 Q640 50 560 50 Z" /><circle cx="720" cy="100" r="50" />
  </g></svg>
);
export default function FendoLandingPage() {
  return (<div className="bg-[#f7f7f5] text-neutral-900">
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-neutral-200">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="group inline-flex items-center gap-3">
          <div className="h-8 w-36 overflow-hidden rounded-xl shadow-sm"><FendoLogo className="h-8 w-full" /></div>
          <span className="sr-only">Fendo — Inicio</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#filosofia" className="hover:text-[#0b3a2a]">Filosofía</a>
          <a href="#carta" className="hover:text-[#0b3a2a]">Carta</a>
          <a href="#mesa" className="hover:text-[#0b3a2a]">Mesa de creación</a>
          <a href="#equipo" className="hover:text-[#0b3a2a]">Equipo</a>
          <a href="#reserva" className="hover:text-[#0b3a2a]">Reservas</a>
          <a href="#contacto" className="hover:text-[#0b3a2a]">Contacto</a>
        </div>
        <a href="#reserva" className="rounded-xl bg-[#0b3a2a] text-white px-4 py-2 text-sm font-medium hover:opacity-90">Reservar</a>
      </nav>
    </header>
{/* Hero limpio con logo centrado */}
<Section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0b3a2a]">
  <img
    src="/logo-fendo.jpeg"
    alt="Fendo logotipo"
    className="max-w-[400px] w-3/4 h-auto"
  />
</Section>

    <Section id="filosofia" className="bg-white">
      <Title subtitle="Nuestra forma de entender la cocina en dos espacios complementarios: la taberna —cercana, viva— y la mesa —precisa, creativa—.">Filosofía Fendo</Title>
      <div className="grid md:grid-cols-3 gap-6">
        {[{t:"Materia en transformación",d:"Producto aragonés, estacionalidad y técnica contemporánea."},{t:"Naturaleza a plato",d:"Huerta, monte y trucha. Sabores nítidos y texturas limpias."},{t:"Cultura local",d:"Relato de Huesca y el Somontano: artesanía, madera, piedra, verde botella y dorado."}].map((card,i)=>(
          <motion.div key={i} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.08}} className="rounded-2xl border border-neutral-200 bg-[#f7f7f5] p-6">
            <h3 className="text-xl font-semibold text-[#0b3a2a]">{card.t}</h3><p className="mt-2 text-neutral-700">{card.d}</p>
          </motion.div>))}
      </div>
    </Section>
    <Section id="carta"><Title subtitle="Tapas y raciones con buen producto y precio honesto.">Taberna — Carta</Title>
      <div className="grid md:grid-cols-3 gap-6">
        {[{n:"Croqueta cremosa de jamón",p:"2,50 €"},{n:"Ensaladilla Fendo",p:"6,50 €"},{n:"Torreznos glaseados",p:"8,00 €"},{n:"Guiso de cuchara del día",p:"9,50 €"},{n:"Tosta de trucha ahumada",p:"7,50 €"},{n:"Postre casero",p:"5,00 €"}].map((it,i)=>(
          <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-5"><div className="flex items-baseline justify-between">
            <h4 className="font-medium text-[#0b3a2a]">{it.n}</h4><span className="text-[#d4af37] font-semibold">{it.p}</span></div></div>))}
      </div>
      <p className="mt-4 text-sm text-neutral-500">*Precios orientativos para el borrador. Ajustaremos con tu carta real.</p>
    </Section>
    <Section id="mesa" className="bg-white"><Title subtitle="Un menú degustación de temporada en pocas plazas, con servicio cercano y ritmo preciso.">Mesa de creación</Title>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-neutral-200 bg-[#f7f7f5] p-6"><h4 className="text-xl font-semibold text-[#0b3a2a]">Menú Fendo</h4>
          <ul className="mt-4 space-y-2 text-neutral-700 list-disc list-inside"><li>Snacks del territorio</li><li>3 pases vegetales</li><li>Pescado de río / mar cercano</li><li>Carnes de entorno</li><li>Prepostre y dulce</li></ul>
          <div className="mt-4"><Pill>Duración 2h aprox.</Pill><Pill>Opcional maridaje</Pill></div></div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6"><p className="text-neutral-700">Aquí contaremos el relato: técnica, recuerdos de Huesca, artesanía familiar, madera y piedra. Puedes añadir fotos del pase y actualizar composición y precio del menú.</p>
          <div className="mt-6 flex gap-3"><a href="#reserva" className="rounded-xl bg-[#0b3a2a] text-white px-5 py-3 text-sm font-medium hover:opacity-90">Reservar</a>
          <a href="#contacto" className="rounded-xl border border-[#0b3a2a]/30 px-5 py-3 text-sm font-medium text-[#0b3a2a] hover:border-[#0b3a2a]">Consultar alergias</a></div></div>
      </div>
    </Section>
    <Section id="equipo"><Title subtitle="Proyecto de Christian Mor Raso y Eneko Silva Gallo.">Equipo</Title>
      <div className="grid md:grid-cols-2 gap-6">
        {[{n:"Christian Mor Raso",r:"Cocinero — experiencia Michelin; premios nacionales e internacionales."},{n:"Eneko Silva Gallo",r:"Cocinero — dirección de cocina; visión de territorio y producto."}].map((p,i)=>(
          <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6"><h4 className="text-xl font-semibold text-[#0b3a2a]">{p.n}</h4><p className="mt-2 text-neutral-700">{p.r}</p></div>))}
      </div>
    </Section>
    <Section id="reserva" className="bg-white"><Title subtitle="Reserva para taberna o mesa de creación. Si tienes alergias o requerimientos, indícalo en el mensaje.">Reservas</Title>
      <div className="grid lg:grid-cols-2 gap-8">
        <form className="rounded-2xl border border-neutral-200 bg-[#f7f7f5] p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4"><input className="w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="Nombre" /><input className="w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="Teléfono" /></div>
          <div className="grid md:grid-cols-2 gap-4"><input className="w-full rounded-xl border border-neutral-300 px-4 py-3" placeholder="Email" /><select className="w-full rounded-xl border border-neutral-300 px-4 py-3"><option>Taberna</option><option>Mesa de creación</option></select></div>
          <div className="grid md:grid-cols-2 gap-4"><input type="date" className="w-full rounded-xl border border-neutral-300 px-4 py-3" /><input type="time" className="w-full rounded-xl border border-neutral-300 px-4 py-3" /></div>
          <textarea className="w-full rounded-xl border border-neutral-300 px-4 py-3" rows={4} placeholder="Mensaje (alergias, nº de comensales, etc.)" />
          <button type="button" className="rounded-xl bg-[#0b3a2a] text-white px-5 py-3 text-sm font-medium hover:opacity-90">Enviar solicitud</button>
          <p className="text-xs text-neutral-500">*Borrador sin backend. Podemos conectarlo a email, Google Forms o una plataforma de reservas.</p>
        </form>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6">
          <h4 className="text-xl font-semibold text-[#0b3a2a]">Horarios</h4>
          <ul className="mt-3 text-neutral-700 space-y-1">
            <li>Lunes · 13:00–18:00</li><li>Martes · 13:00–18:00</li><li>Miércoles · Cerrado</li><li>Jueves · 13:00–18:00</li><li>Viernes · 13:00–18:00 · 19:30–00:00</li><li>Sábado · 13:00–18:00 · 19:30–00:00</li><li>Domingo · 13:00–18:00</li>
          </ul>
          <h4 className="text-xl font-semibold text-[#0b3a2a] mt-6">Ubicación</h4>
          <p className="text-neutral-700 mt-2">Calle Heredia, 14 · 22001 Huesca</p>
          <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl border"><iframe title="Mapa Fendo" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=Calle%20Heredia%2014%20Huesca&output=embed"></iframe></div>
        </div>
      </div>
    </Section>
    <Section id="contacto"><Title subtitle="Para colaboraciones, eventos privados o prensa.">Contacto</Title>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6"><h4 className="font-semibold text-[#0b3a2a]">Email</h4><a href="mailto:rest.fendo@gmail.com" className="text-neutral-700 hover:text-[#0b3a2a]">rest.fendo@gmail.com</a></div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6"><h4 className="font-semibold text-[#0b3a2a]">Teléfono</h4><p className="text-neutral-700">+34 600 000 000</p></div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-6"><h4 className="font-semibold text-[#0b3a2a]">Redes</h4><div className="flex gap-3 mt-2 text-neutral-700"><a href="#" className="hover:text-[#0b3a2a]">Instagram</a><a href="#" className="hover:text-[#0b3a2a]">TikTok</a><a href="#" className="hover:text-[#0b3a2a]">Maps</a></div></div>
      </div>
    </Section>
    <footer className="border-t border-neutral-200 bg-white"><div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4"><p className="text-sm text-neutral-600">© {new Date().getFullYear()} Fendo. Todos los derechos reservados.</p><div className="flex gap-4 text-sm"><a href="#" className="hover:text-[#0b3a2a]">Aviso legal</a><a href="#" className="hover:text-[#0b3a2a]">Privacidad</a><a href="#" className="hover:text-[#0b3a2a]">Cookies</a></div></div></footer>
  </div>);
}
