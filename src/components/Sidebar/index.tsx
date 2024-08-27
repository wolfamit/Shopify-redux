import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { toast } from "react-toastify";
import {
  incrementReducer,
  decrementReducer,
  deleteReducer,
} from "../../redux/slice/Cart.Slice";
import { Navigate, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const CartCard = ({ c }: any) => {
  const dispatch = useDispatch();

  const increment = (id: any) => {
    try {
      dispatch(incrementReducer(id));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const decrement = (id: any) => {
    try {
      dispatch(decrementReducer(id));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const deletehandler = (id: any) => {
    try {
      dispatch(deleteReducer(id));
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="w-full px-4 py-3 flex justify-between items-center border border-white gap-x-2">
      <img
        className="object-center rounded-full w-20"
        src={c.image}
        alt="order-item"
      />
      <div className="items ">
        <h1 className="font-semibold text-white text-1xl">{c.title}</h1>
        <div className="flex items-center mx-1 gap-x-2 cursor-pointer font-semibold text-white text-3xl">
          <CiCirclePlus onClick={() => increment(c.id)} /> {c.qty}{" "}
          <CiCircleMinus onClick={() => decrement(c.id)} />
        </div>
      </div>
      <div className="icon">
        <FaTrashAlt
          onClick={() => deletehandler(c.id)}
          className="text-2xl cursor-pointer text-white"
        />
      </div>
    </div>
  );
};

const Sidebar = ({ state: { isSidebarOpen, setIsSidebar } }: any) => {
  const state = useSelector((state: any) => state.CartSlice.cart);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);
  useEffect(() => {
    if (state && state.length > 0) {
      let totalPrice = 0;
      state.forEach((curr: any) => {
        totalPrice += Math.floor(curr.price * curr.qty * 83);
        setPrice(totalPrice);
      });
    } else {
      setPrice(0);
    }
  }, [state]);

  const handleNavigate = () => {
    navigate('/checkout');
    setIsSidebar(false)
  };

  return (
    <>
      <div
        className={`${
          isSidebarOpen ? "-translate-x-0" : "translate-x-[100%]"
        } transition-all duration-300 bg-indigo-500 fixed h-screen w-full md:w-1/3 right-0 top-0`}
      >
        <div className="mx-10 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">My Cart</h1>
          <IoIosCloseCircleOutline
            className="text-4xl text-white"
            onClick={() => setIsSidebar(false)}
          />
        </div>

        <div id="sidebar-cart" className="w-full overflow-y-auto h-[60%]">
          {state.length == 0 ? (
            <div className="flex justify-center items-center flex-col h-56">
              <div><IoCartOutline className=" text-4xl" /></div>
              <h1 className="text-3xl text-white font-bold my-2 px-3">
                Add Items to your cart
              </h1>
            </div>
          ) : (
            state.map((c: any, i: any) => {
              return <CartCard key={i} c={c} />;
            })
          )}
        </div>
        {state.length != 0 && (
          <div className="flex flex-col my-3 gap-y-5 px-3">
            <h1 className="text-3xl text-white font-semibold">
              Total Price : &#x20B9;{price}/-
            </h1>
            <button
              onClick={handleNavigate}
              title="checkout"
              className=" bg-indigo-600 text-3xl rounded-lg text-white text-pretty hover:rounded-full"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
