const CheckoutFinal = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen py-8 md:pt-18 pt-40">
        <div className="container mx-auto px-4">
          <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center sm:text-left">Shopping Cart</h1>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="w-full lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left font-semibold">Product</th>
                      <th className="text-left font-semibold">Price</th>
                      <th className="text-left font-semibold">Quantity</th>
                      <th className="text-left font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-12 w-12 sm:h-16 sm:w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                          />
                          <span className="font-semibold text-sm sm:text-base">Product name</span>
                        </div>
                      </td>
                      <td className="py-4 text-sm sm:text-base">$19.99</td>
                      <td className="py-4">
                        <span className="text-center w-8 text-sm sm:text-base">1</span>
                      </td>
                      <td className="py-4 text-sm sm:text-base">$19.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Summary</h2>
                <div className="flex justify-between mb-2 text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className="flex justify-between mb-2 text-sm sm:text-base">
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className="flex justify-between mb-2 text-sm sm:text-base">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2 text-sm sm:text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">$21.98</span>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutFinal;
