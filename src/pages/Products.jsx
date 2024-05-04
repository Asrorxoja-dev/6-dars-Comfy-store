import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
import { customFetch } from "../utils";
import { useState } from "react";

export const loader = async () => {
  const request = await customFetch(`/products`);
  return { products: request.data.data }; // Changed 'product' to 'products'
};

function Products() {
  const { products } = useLoaderData();
console.log(products);


if (!products) {
  return <div>Loading...</div>; // Handle the loading state
}
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300 mb-5"
          >
            <figure className="px-4 pt-4">
              <img
                className="rounded-xl h-64 md:h-48 w-full object-cover"
                src={image}
                alt={title}
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{dollarAmount}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export  {Products};
