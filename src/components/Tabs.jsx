import "../styles/Tabs.css";
import { ProductCard } from "./ProductCard";
import { allProducts } from "../helpers/GetData";

export default function Tabs({ handleBtns }) {
  return (
    <div className="wrapper">
      <h3 className="Title">Seleccion de Productos:</h3>
      <div className="TabBar">
        <div className="TabBar-Container">
          <input
            type="radio"
            name="slider"
            id="home"
            value="All"
            onClick={handleBtns}
          />
          <input
            type="radio"
            name="slider"
            id="blog"
            value="Drinks"
            onClick={handleBtns}
          />
          <input
            type="radio"
            name="slider"
            id="help"
            value="Guajolota"
            onClick={handleBtns}
          />
          <input
            type="radio"
            name="slider"
            id="about"
            value="Tamal"
            onClick={handleBtns}
          />
          <nav>
            <label htmlFor="home" className="home">
              Todos
            </label>
            <label htmlFor="blog" className="blog">
              Bebidas
            </label>
            <label htmlFor="help" className="help">
              Guajolotas
            </label>
            <label htmlFor="about" className="about">
              Tamales
            </label>
            <div className="slider"></div>
          </nav>
        </div>
      </div>
      <ProductCard>
        {allProducts.map((item) => (
          <div className="Product" key={item.id}>
            <img src={item.img} width="100" alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </ProductCard>
    </div>
  );
}
