// import React, { useState } from 'react';

// function GetProductByID() {
//   const [textInput, settextInput] = useState('');
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchProductById = () => {
//     setLoading(true);
//     setError(null);

//     fetch('https://dummyjson.com/products/search?q=phone')

//     // fetch(`https://dummyjson.com/products/${textInput}`)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('404 Not Found');
//         }
//         return res.json();
//       })
//       .then(data => {
//         setProduct(data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError(err);
//         setLoading(false);
//       });
//   };
//     const [mySelection, setSelechion] = useState("title");

//     const handleChange = (event) => {
//         setSelechion (event.target.value);
//     }



//   return (
//     <div>
//       <h1>Search Product </h1>
//             <select value={mySelection} onChange={handleChange}>
//                 <option value="title">title</option>
//                 <option value="id">id</option>
//                 <option value="price">price</option>
//             </select>
            
//         <pre></pre>
//         <input
//             type="text"
//             value={textInput}
//             onChange={(e) => settextInput(e.target.value)}
//             placeholder="Enter info here"
//         />
        
//       <button onClick={fetchProductById}>Get Product</button>

//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}

//       {/* if mySelection == id */}

//       {product && (
//         <div>
//           <h2>{product.title}</h2>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           <img src={product.thumbnail} alt={product.title} />
//           <p>rating: ${product.rating}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default GetProductByID;

import React, { useState } from 'react';

function SearchProduct() {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchProducts = () => {
    setLoading(true);
    setError(null);
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('not found');
        }
        return res.json();
      })
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Search Products</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={searchProducts}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {products.length > 0 ? (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <img src={product.thumbnail} alt={product.title} />
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p>No products found</p>
      )}
    </div>
  );
}

export default SearchProduct;
