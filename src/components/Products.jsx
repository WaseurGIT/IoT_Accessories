import { useEffect, useState } from "react";

const Products = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-3">
      {filteredProducts.map((product, index) => (
        <div
          key={index}
          className="bg-slate-200 rounded-xl p-3 flex flex-col items-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 sm:h-60 object-cover rounded-xl"
          />
          <h2 className="text-lg sm:text-xl text-black font-semibold my-3 text-center">
            {product.name}
          </h2>
          <button
            onClick={() => openModal(product)}
            className="bg-blue-500 w-full px-4 py-2 text-white font-semibold rounded-xl hover:bg-blue-600 transition"
          >
            Read Details
          </button>
        </div>
      ))}

      {selectedProduct && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-11/12 max-w-lg">
            <h2 className="text-2xl font-bold mb-3 text-black">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-48 sm:h-60 object-contain rounded-xl mb-4"
            />
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              {selectedProduct.description
                .split(".")
                .map((point, index) =>
                  point.trim() ? <li key={index}>{point.trim()}</li> : null
                )}
            </ul>
            <button
              className="mt-4 bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
