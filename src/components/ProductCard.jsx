import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCard = ({ item }) => {
  const { thumbnail, category, title, price , id } = item;
  return (
    <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full rounded-md shadow">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full block"
          src={thumbnail}
        />
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">${price}</p>
      </div>
    </Link>
    
  );
};

export default ProductCard;
