import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, generateAmount } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, price, title, company, description, colors } =
    product.attributes;
  const dollarsAmount = formatPrice(price);
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(0);

  const handleAMount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-m breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCT */}

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lglg:w-full"
        />
        <div>
          <h1 className="capitalise text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>

            <div className="form-control w-full max-w-xs mt-4">
              <label className="label" htmlFor="mount">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md mt-2"
                id="amount"
                value={amount}
                onChange={handleAMount}
              >
                {generateAmount(10)}
              </select>
            </div>
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md"
                onClick={() => console.log("Add to bag")}
              >
                Add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
