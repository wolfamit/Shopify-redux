import { useEffect, useState } from "react";
import ImageCarousal from "../components/ImageCarousal";

import { useGetProductsQuery } from "../redux/queries/ProductApi";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductCart = ({
  title,
  image,
  price,
  category,
  id,
}: {
  title: string;
  image: string;
  category: string;
  price: number;
  id: number;
}) => {
  return (
    <Link to={`/product/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-contain object-center w-full h-full block"
          src={image}
        />
      </a>
      <div>
        <h3 className="mt-4 text-xs uppercase text-grey-500">{category}</h3>
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <div className="mt-4 flex justify-between items-center">
          <p className="mt-1 text-xl text-black">
            &#x20B9;{Math.floor(price * 83)}
          </p>
          <div className="">
            <button className="px-5 py-2 bg-indigo-500 rounded-lg text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Home = () => {
  
  const [cartId, setCartId] = useState<string | null>(null);
  useEffect(() => {
    // Fetch the cart_id from the backend when the component mounts
    const fetchCartId = async () => {
        try {
            const response = await axios.get('https://cloudcart.vercel.app/cart');
            console.log(response);
            setCartId(response.data.cart_id);
        } catch (error) {
            console.error('Error fetching cart ID:', error);
        }
    };
  
    console.log('cartId:', cartId);
  
    fetchCartId();
  }, []);
  
  const {
    data: products,
    error,
    isLoading,
  } = useGetProductsQuery("productApi");

  if (isLoading) return <div>Loading</div>
  if (error) return <div>Something went wrong</div>;

  return (
    <div>
      
      <ImageCarousal />
      {/* <div>{cartId}</div> */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.length > 1 &&
              products.map((product: any) => (
                <ProductCart
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  category={product.category}
                />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
