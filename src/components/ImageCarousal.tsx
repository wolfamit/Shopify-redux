import { useEffect, useRef, useState } from "react";
import { useGetProductsQuery } from "../redux/queries/ProductApi";
import { Link } from "react-router-dom";

const ImageCarousal = () => {
  const {
    data: products,
  } = useGetProductsQuery("productApi");

  const DATA_LENGTH = products?.length || 0;
//   console.log(DATA_LENGTH);
//   console.log(products);

  const [index, setIndex] = useState(0);
  //   let ref = useRef();
  
  const ref = useRef<number | null>(null);
  

  const handleNext = () => {
    setIndex((index) => (index === DATA_LENGTH - 1 ? 0 : index + 1));
  };

  const handlePrev = () => {
    setIndex((index) => (index === 0 ? DATA_LENGTH - 1 : index - 1));
  };

  useEffect(() => {
    if (DATA_LENGTH > 0) {
      ref.current = window.setInterval(handleNext, 3000);
    }
    return () => {
      if (ref.current !== null) {
        clearInterval(ref.current);
      }
    };
  }, [DATA_LENGTH]);

  if (!products || DATA_LENGTH === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div 
       onMouseEnter={() => {
        if (ref.current !== null) {
          clearInterval(ref.current);
        }
      }}
      onMouseLeave={() => {
        ref.current = window.setInterval(handleNext, 3000);
      }}
      
      className="w-full md:ml-28 md:w-4/5 shadow-2xl pb-8">
        <Link to={`/product/${products[index].id}`}><img
          className="md:pt-20 pt-48 cursor-pointer mx-auto relative h-[400px] w-1/2 "
          src={products[index]?.image}
          alt={products[index]?.description || "Product Image"}
        /></Link>
        
        <div
          onClick={handleNext}
          className=" cursor-pointer absolute top-[40%] rounded-md text-4xl right-3 right-btn  bg-slate-900 text-white"
        >
          {">"}
        </div>
        <div
          onClick={handlePrev}
          className="  cursor-pointer absolute top-[40%] rounded-md text-4xl left-3 left-btn  bg-slate-900 text-white"
        >
          {"<"}
        </div>
      </div>
    </>
  );
};

export default ImageCarousal;
