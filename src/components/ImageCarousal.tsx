import { useEffect, useRef, useState } from "react";
import { useGetProductsQuery } from "../redux/queries/ProductApi";
import { Link } from "react-router-dom";

const ImageCarousal = () => {
  const {
    data: products,
  } = useGetProductsQuery("productApi");

  const DATA_LENGTH = products.length;
//   console.log(DATA_LENGTH);
//   console.log(products);

  const [index, setIndex] = useState(0);
  //   let ref = useRef();
  
  const ref = useRef(Number);
  

  const handleNext = () => {
    setIndex((index) => {
      if (index === DATA_LENGTH - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };
  const handlePrev = () => {
    setIndex((index) => {
      if (index === 0) {
        return DATA_LENGTH - 1;
      } else {
        return index - 1;
      }
    });
  };

  useEffect(() => {
     ref.current = setInterval(handleNext, 3000);
    console.log(ref.current)
    return () => {clearInterval( ref.current )};
  }, []);

  return (
    <>
      <div 
      onMouseEnter={()=>clearInterval(ref.current)}
      onMouseLeave={() => {ref.current = setInterval(handleNext, 3000)}}
      
      className="w-full ">
        <Link to={`/product/${products[index].id}`}><img
          className="md:pt-20 pt-32 cursor-pointer mx-auto relative h-[400px] w-1/2"
          src={products[index]?.image}
          alt=""
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
