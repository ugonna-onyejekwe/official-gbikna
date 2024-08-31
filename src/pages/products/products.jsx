import { Product1 } from "../../components/product1";
import { Product2 } from "../../components/product2";
import { Product3 } from "../../components/product3";
import { Product4 } from "../../components/product4";
import { Product5 } from "../../components/product5";
import "./products.scss";

export const Products = () => {
  return (
    <div className="products_page">
      {/* header */}
      <div className="header">
        <div className="wrapper">
          <div className="container">
            <h2>our products</h2>
            <p>
              Unleash your business potential. Discover our game-changing
              solutions.
            </p>
          </div>
        </div>
      </div>

      {/* main */}

      <div className="main_wrapper">
        <div className="container">
          <Product2 />
          <Product1 />
          <Product5 />
          <Product4 />
          <Product3 />
        </div>
      </div>
    </div>
  );
};
