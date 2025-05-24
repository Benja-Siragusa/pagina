import useRevealOnScroll from "../Hooks/useRevealOnScroll";

const Features = () => {
  useRevealOnScroll();
  return (
    <section className="Features espaciados">
      <div className="Features-left">
        - Gestion de reservas<br />
        - Gestion de mesas y comandas<br />
        - Gestion de usuarios y permisos<br />
        - Gestion de productos y stock<br />
        - Gestion de caja y facturacion diaria<br />
        - comunicacion entre camareros, cocina y barra de forma remota<br />
      </div>
      <div className="Features-right">Cuales son las ventajas de nuestro sistema</div>
    </section>
  );
};

export default Features;
