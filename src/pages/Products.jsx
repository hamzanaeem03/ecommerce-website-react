import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Categorychip from "../components/Categorychip";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryChosen, setCategoryChosen] = useState("All");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url =
      categoryChosen === "All"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${categoryChosen}`;

    axios
      .get(url)
      .then((res) => {
        setProducts(res?.data?.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [categoryChosen]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap gap-2 mx-auto my-auto">
        <Categorychip
        onClick={()=> setCategoryChosen('All')}
          isChosen={categoryChosen === "All"}
          category={{ slug: "All", name: "All" }}
        />

        {loading
          ? <h1>Loading</h1>
          : categories.map((category) => (
              <Categorychip
                onClick={() => setCategoryChosen(category.slug)}
                isChosen={category.slug === categoryChosen}
                category={category}
                key={category.id}
              />
            ))}
      </div>
      <div className="container px-5 py-24 mx-auto">
        {loading ? (
          "Loading"
        ) : (
          <div className="flex flex-wrap -m-4">
            {products.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}{" "}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
