import { useLoaderData, Link } from "react-router-dom";
import { customFetch, formatPrice } from "../utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`);
  return { product: request.data.data };
};

function SingleProduct() {
  const { product } = useLoaderData();

  const { image, price, description, title, colors, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0])

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 mb-10 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="title-xl text-netural-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-2">
            {colors.map((color) => {
              return (
                <button
                 key={color}
                  className={`badge w-6 h-6 mr-2 ${color == productColor && "border-2 border-secondary"}`}
                  style={{ background: color }}
                  onClick={()=> setProductColor(color)}
                ></button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
