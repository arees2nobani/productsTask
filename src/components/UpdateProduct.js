import React, { useState } from 'react';

function UpdateProduct() {
  const [productId, setProductId] = useState('');
  const [fieldToUpdate, setFieldToUpdate] = useState('title');
  const [newValue, setNewValue] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    if (!productId || !newValue) {
      setError('Enter both product ID and new value to update.');
      return;
    }

    fetch(`https://dummyjson.com/products/${productId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        [fieldToUpdate]: newValue
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResponse(data);
        setError(null);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to update product.');
      });
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={handleUpdateProduct}>
        <div>
          <label>Product ID:</label>
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product ID"
            required
          />
        </div>
        <div>
          <label>Field to Update:</label>
          <select
            value={fieldToUpdate}
            onChange={(e) => setFieldToUpdate(e.target.value)}
          >
            <option value="title">Title</option>
            <option value="description">Description</option>
            <option value="price">Price</option>
            <option value="stock">Stock</option>
            <option value="brand">Brand</option>

            <option value="discountPercentage">Discount Percentage</option>
            <option value="rating">Rating</option>
            <option value="sku">sku</option>
            <option value="weight">Weight</option>
            <option value="width">Width</option>
            <option value="height">Height</option>
            <option value="warrantyInformation">Warranty Information</option>
            <option value="shippingInformation">Shipping Information</option>
            <option value="availabilityStatus">Availability Status</option>
            <option value="returnPolicy">ReturnPolicy</option>
            <option value="minimumOrderQuantity">Minimum Order Quantity</option>
            <option value="thumbnail">Thumbnail</option>
            <option value="images">Image</option>

          </select>
        </div>
        <div>
          <label>New Value:</label>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder="Enter New Value"
            required
          />
        </div>
        <button type="submit">Update Product</button>
      </form>
      {response && (
        <div>
          <h2>Product Updated Successfully!</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
}

export default UpdateProduct;
