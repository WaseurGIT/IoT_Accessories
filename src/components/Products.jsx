import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Products = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid grid-cols-5 gap-2 p-3">
      {filteredProducts.map((product) => (
        <div className="bg-slate-200 rounded-xl p-3 my-2">
          <img src={product.image} className="w-96 h-60 rounded-xl"></img>
          <h2 className="text-left text-xl font-semibold my-3">
            {product.name}
          </h2>
          {/* <h2 className="text-left">{product.description}</h2> */}
          <button
            onClick={() => openModal(product)}
            className="bg-blue-500 px-4 my-3 py-2 text-white font-semibold  rounded-xl"
          >
            Read Details
          </button>
        </div>
      ))}

      {selectedProduct && (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 ease-out">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalFadeIn">
            <h2 className="text-2xl font-bold mb-3">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-60 object-contain rounded-xl mb-4"
            />
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {selectedProduct.description
                .split(".") // split sentences
                .map((point, index) =>
                  point.trim() ? <li key={index}>{point.trim()}</li> : null
                )}
            </ul>
            <button
              className="mt-4 bg-red-500 text-white px-8 py-2 rounded-lg"
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
