import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import GetAllProducts from './components/GetAllProducts.js'
import GetProductByID from './components/GetProductByID'
import SearchProduct from './components/SearchProduct'
import LimitAndSkipProducts from './components/LimitAndSkipProducts'
import SortProducts from './components/SortProducts'
import GetAllProductsCategories from './components/GetAllProductsCategories'
import GetProductsCategoriesList from './components/GetProductsCategoriesList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="GetAllProducts" element={<GetAllProducts />} />
              <Route path="GetProductByID" element={<GetProductByID />} />
              <Route path="SearchProduct" element={<SearchProduct />} />
              <Route path="LimitAndSkipProducts" element={<LimitAndSkipProducts />} />
              <Route path="SortProducts" element={<SortProducts />} />
              <Route path="GetAllProductsCategories" element={<GetAllProductsCategories />} />
              <Route path="GetProductsCategoriesList" element={<GetProductsCategoriesList />} />
              {/* <Route path="GetProductsByCategories" element={<GetProductsByCategories />} />
              <Route path="AddNewProduct" element={<AddNewProduct />} />
              <Route path="UpdateProduct" element={<UpdateProduct />} />
              <Route path="DeleteProduct" element={<DeleteProduct />} /> */}

            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
