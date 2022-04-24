import React from "react";

const SelectFood = () => {
  return (
    <>
      <section>
        <nav>
          <img src="/icons/chevron-left.svg" alt="chevron-left" />
          <img src="/icons/shopping-cart.svg" alt="shopping-cart" />
        </nav>
        <div className="item_description">
          <img src="/images/tamal-verde.png" alt="food" />
          <div className="item_info">
            <h3>Guajolota de Tamal Verde</h3>
            <p>$25 MXN</p>
          </div>
          <div className="item_controls">
            <button>-</button>
            <p>2</p>
            <button>+</button>
          </div>
        </div>
        <div className="item_taste">
          <p>Sabor</p>
          <div className="item_taste_container">
            <img src="/images/Name=verde.png" alt="taste" />
            <img src="/images/Name=mole.png" alt="taste" />
            <img src="/images/Name=rajas.png" alt="taste" />
            <img src="/images/Name=piña.png" alt="taste" />
            <img src="/images/Name=pasas.png" alt="taste" />
            <img src="/images/Name=guayaba.png" alt="taste" />
          </div>
        </div>
        <div className="item_combo">
          <h3>Guajolocombo</h3>
          <p>
            Selecciona el acompañante que más te guste y disfruta de tu desayuno
          </p>
          <div className="item_combo_container">
            <div className="item">
              <div className="item_img">
                <img src="/images/Property 1=mole-1.png" alt="Mole" />
              </div>
              <div className="item_def">
                <h3>Mole</h3>
                <p>$25 MXN</p>
              </div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src="/images/Property 1=mole-1.png" alt="Mole" />
              </div>
              <div className="item_def">
                <h3>Mole</h3>
                <p>$25 MXN</p>
              </div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src="/images/Property 1=mole-1.png" alt="Mole" />
              </div>
              <div className="item_def">
                <h3>Mole</h3>
                <p>$25 MXN</p>
              </div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src="/images/Property 1=mole-1.png" alt="Mole" />
              </div>
              <div className="item_def">
                <h3>Mole</h3>
                <p>$25 MXN</p>
              </div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src="/images/Property 1=mole-1.png" alt="Mole" />
              </div>
              <div className="item_def">
                <h3>Mole</h3>
                <p>$25 MXN</p>
              </div>
            </div>
            <div className="item">
              <div className="item_img">
                <img src="/images/Property 1=mole-1.png" alt="Mole" />
              </div>
              <div className="item_def">
                <h3>Mole</h3>
                <p>$25 MXN</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectFood;
