import "../css/products.css";
import { Product } from "./Product";

export const Products = () => {
  const products = [
    { id: 1, title: "json-server", author: "typicode" },
    { id: 2, title: "json-server", author: "typicode" },
    { id: 3, title: "json-server", author: "typicode" },
  ];
  return (
    <div className="products-container">
      {products.map((p) => {
        return (
          <div className="product-container" key={p.id}>
            <Product pro={p} />
          </div>
        );
      })}
    </div>
  );
};
