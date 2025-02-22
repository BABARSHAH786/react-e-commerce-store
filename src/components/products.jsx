
// import React, { useEffect, useState } from "react";
// import { getUser } from "../api/productsapi";
// import { Link } from "react-router-dom";
// // import { addItem } from "../redux/CartSlice";

// const Products = () => {
//   const [products, setProducts] = useState([]);




//   // Fetch products from API
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getUser();
//         console.log("📦 Products Fetched:", data);
//         setProducts(data);
//       } catch (error) {
//         console.error("❌ Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);



//   return (
//     <>
//       <div className="txt ml-10 font-bold text-xl">Our Product</div>

//       <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
//         {products.map((product, index) => (
//           <li key={product.id || index}>
//             <div className="flex flex-col md:flex-row items-start md:items-center border rounded-lg p-4">
//               <Link to={`/Details/${product.id}`} className="block mb-2 md:mb-0 md:mr-4">
//                 <img
//                   className="w-[250px] max-w-[200px] h-auto object-cover rounded-md"
//                   src={product.image}
//                   alt={product.title}
//                 />
//               </Link>
//               <div className="flex flex-col">
//                 <p className="font-bold">{product.category}</p>
//                 <p className="text-gray-600">${product.price}</p>
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
//                   onClick={() => handleAddToCart(product)}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default Products;
