import { useState } from "react";

export default function ProductApp() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 699 },
  ]);
  const [cart, setCart] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price) return;
    setProducts([...products, { 
      id: products.length + 1, 
      name: newProduct.name, 
      price: parseFloat(newProduct.price) 
    }]);
    setNewProduct({ name: "", price: "" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">E-Commerce Product List</h1>
      
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Product Name" 
          value={newProduct.name} 
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} 
          className="border p-2 mr-2" 
        />
        <input 
          type="number" 
          placeholder="Price" 
          value={newProduct.price} 
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} 
          className="border p-2 mr-2" 
        />
        <button onClick={addProduct} className="bg-blue-500 text-white p-2 rounded">Add Product</button>
      </div>
      
      <ul>
        {products.map((product) => (
          <li key={product.id} className="border p-2 mb-2 flex justify-between">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => addToCart(product)} className="bg-green-500 text-white p-1 rounded">Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-6">Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index} className="border p-2 mb-2">
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
