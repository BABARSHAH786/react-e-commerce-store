// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlices";

// const ProductCard = ({ product }) => {
//   const dispatch = useDispatch();

//   return (
//     <>
//     <div className="w-[420px] border p-4 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold">{product.name}</h2>
//       <p className="text-gray-600">${product.price}</p>
//       <img src={product.image} />
//       <p>{product.category} </p>
//       <p>{product.title} </p>
//       <Link to={`/Details/${product.id}`} className="block mb-2 md:mb-0 md:mr-4">
//                 <img
//                   className="w-[250px] max-w-[200px] h-auto object-cover rounded-md"
//                   src={product.image}
//                   alt={product.title}
//                 />
//               </Link>

//       <button
//         onClick={() => dispatch(addToCart(product))}
//         className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
    


//     {/* new */}
    


//     </>
//   );
// };

// export default ProductCard;



// chat
// import React from "react";
// import { Link } from "react-router-dom";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="border p-4 rounded-lg shadow-md">
//       <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
//       <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
//       <p className="text-gray-700">${product.price}</p>
//       <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default ProductCard;



//add to cart
// import React from "react";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/cartSlices";
// import { Link } from "react-router-dom"; 
// import 'react-toastify/dist/ReactToastify.css';

// const ProductCard = ({ product }) => {

//   const dispatch = useDispatch();
  

//   return (
//     <div className="w-[420px] border p-4 rounded-lg shadow-md">
//       <h2 className="text-lg font-semibold">{product.title}</h2> {/* Use product.title */}
//       <p className="text-gray-600">${product.price}</p>

//       <Link to={`/Details/${product.id}`} className="block mb-2 md:mb-0 md:mr-4">
//         <img
//           className="w-full h-auto max-h-[200px] object-contain rounded-md"
//           src={product.image}
//           alt={product.title}
//         />
//       </Link>
//       <p>{product.category}</p>
//       <p>{product.description}</p> {/* Use product.description */}
//       <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">
//         View Details
//       </Link> <br />
//       <button
//         onClick={() => dispatch(addToCart(product))}
//         className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default ProductCard;





//ui update
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlices";
import { Link } from "react-router-dom"; 
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-[350px] border p-4 rounded-lg shadow-lg bg-gradient-to-b from-blue-500 to-purple-700 text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h2 className="text-lg font-semibold text-yellow-300">{product.title}</h2> 
      <p className="text-gray-200">Price: ${product.price}</p>

      <Link to={`/Details/${product.id}`} className="block mb-2 md:mb-0 md:mr-4">
        <img
          className="w-full h-auto max-h-[150px] object-contain rounded-md bg-white p-2"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <p className="text-sm text-gray-300">{product.category}</p>
      <p className="text-sm text-gray-200 truncate max-h-[40px] overflow-hidden">{product.description}</p>
      <Link to={`/product/${product.id}`} className="mt-2 inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
        View Details
      </Link> <br />
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 rounded-lg font-bold shadow-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
