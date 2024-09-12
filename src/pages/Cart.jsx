/* eslint-disable react/prop-types */
import ProductCard from "../components/ProductCard";

export const Cart = ({ cartItems }) => {
  return (
    <section className="text-gray-600 body-font w-[100vw]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {cartItems.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}{" "}
        </div>
      </div>
    </section>
  );
};
