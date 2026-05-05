import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomproducts?page=" + page,
      );
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="text-xl font-bold text-green-400">🛒 Product Store</div>
      </div>

      <div className="max-w-7xl mx-auto p-4">
        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 flex-wrap mb-6">
          {
            <button
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-40 cursor-pointer"
              disabled={!products?.previousPage || loading}
              onClick={() => setPage((prev) => prev - 1)}
            >
              Prev
            </button>
          }

          <span className="text-lg font-semibold">{page}</span>

          {
            <button
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-40 cursor-pointer"
              disabled={!products?.nextPage || loading}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Next
            </button>
          }
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products?.data?.map((product) => {
            //  Discount calculation
            const discountedPrice = (
              product.price -
              (product.price * product.discountPercentage) / 100
            ).toFixed(0);

            return (
              <div
                key={product.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />

                  {/* Discount Badge */}
                  <span className="absolute top-2 left-2 bg-red-500 text-xs px-2 py-1 rounded">
                    {product.discountPercentage}% OFF
                  </span>
                </div>

                {/* Info */}
                <div className="p-4">
                  {/* Title */}
                  <h2 className="text-sm font-semibold line-clamp-2">
                    {product.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Brand */}
                  <p className="text-xs text-gray-500 mt-2">{product.brand}</p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-green-400 font-bold">
                      ₹ {discountedPrice}
                    </span>

                    <span className="text-xs text-gray-500 line-through">
                      ₹ {product.price}
                    </span>
                  </div>

                  {/* Rating + Stock */}
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>⭐ {product.rating}</span>
                    <span>{product.stock} left</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Loader */}
        {loading && (
          <p className="text-center mt-6 text-gray-400">Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default App;
