import React from "react";


const Categories = () => {
  return (
    <>
      <section>
        <nav>
          <img
            src="/images/logo.png"
            alt="Logo Guappjolotas"
            className="logo"
          />
          <img src="/icons/shopping-cart.svg" alt="cart" />
        </nav>
        <div className="search_txt">
          <h1>Nada como una Guajolota para empezar el día</h1>
          <div className="search_input">
            <input type="text" placeholder="Sabor de guajolota, bebida" />
            <img
              src="/icons/search.svg"
              alt="Seach Icon"
              className="search_icon"
            />
          </div>
        </div>

        <ul className="food_menu">
          <li>
            <a href="/*">Guajolotas</a>
          </li>
          <li>
            <a href="/*">Bedidas</a>
          </li>
          <li>
            <a href="/*">Tamales</a>
          </li>
        </ul>

        <div className="food_results">
          <div className="card_item">
            <div className="card_item_img">
              <img src="/images/Property 1=mole-1.png" alt="Mole" />
            </div>
            <div className="card_item_info">
              <h3>Mole</h3>
              <p>$25 MXN</p>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item_img">
              <img src="/images/Property 1=mole-1.png" alt="Mole" />
            </div>
            <div className="card_item_info">
              <h3>Mole</h3>
              <p>$25 MXN</p>
            </div>
          </div>
          <div className="card_item">
            <div className="card_item_img">
              <img src="/images/Property 1=mole-1.png" alt="Mole" />
            </div>
            <div className="card_item_info">
              <h3>Mole</h3>
              <p>$25 MXN</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
