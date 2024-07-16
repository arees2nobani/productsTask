// import React, { useEffect, useState } from 'react';

// function ProductList() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch('https://dummyjson.com/products/categories')
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setCategories(data.categories);
//       });
      
//   }, []);
  
//   return (
//     <div>
//       <h1>Categories List</h1>
//       <ul>
//         {categories.map((product, product.id) => (
//           <li key={product.id}>
//             {product.slug} - ${product.name} - {product.url}
            
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

  

// export default ProductList;

import React, { useEffect, useState } from 'react';

function ProductList() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => {
        if (!res.ok) {
          throw new Error('Not Found');
        }
        return res.json();
      })
      .then(data => {
        console.log(data); 
        setCategories(data);
      })
      .catch(error => {
        console.error('Error: ', error);
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h1>Categories List</h1>
      {error && <p>Error: {error}</p>}
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category.slug} - {category.name} - {category.url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;