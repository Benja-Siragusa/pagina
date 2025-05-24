import useRevealOnScroll from "../../Hooks/useRevealOnScroll";
import "./Features.css";

const ventajas = [
  {
    icono: "🎨",
    titulo: "Personalización total",
    descripcion: "Colores, nombre, logo y funcionalidades adaptadas a cada restaurante."
  },
  {
    icono: "📲",
    titulo: "Carta digital editable",
    descripcion: "Productos, precios y alérgenos modificables en segundos."
  },
  {
    icono: "📝",
    titulo: "Comandas optimizadas",
    descripcion: "Pedidos precisos, conectados con cocina y barra en tiempo real."
  },
  {
    icono: "📦",
    titulo: "Control de stock",
    descripcion: "Gestiona el inventario de forma fácil y automatizada."
  },
  {
    icono: "📡",
    titulo: "Gestión en tiempo real",
    descripcion: "Visualiza lo que sucede en tu restaurante desde cualquier dispositivo."
  }
];

const Features = () => {
  useRevealOnScroll();

  return (
    <section className="Features espaciados" id="ventajas">
      <h2 className="Features-titulo">¿Cuáles son las ventajas de nuestro sistema?</h2>
      <div className="Features-grid">
        {ventajas.map((v, i) => (
          <div key={i} className="Features-card">
            <div className="Features-icono">{v.icono}</div>
            <h3>{v.titulo}</h3>
            <p>{v.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
