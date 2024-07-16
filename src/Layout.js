import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/GetAllProducts">Get All Products</Link>
          </li>
          <li>
            <Link to="/GetProductByID">Get Product By ID</Link>
          </li>
          <li>
            <Link to="/SearchProduct">Search for Product</Link>
          </li>
          <li>
            <Link to="/LimitAndSkipProducts"> Limit And Skip Products </Link>
          </li>
          <li>
            <Link to="/SortProducts"> Sort Products </Link>
          </li>
          <li>
            <Link to="/GetAllProductsCategories"> Get All Products Categories </Link>
          </li>
          <li>
            <Link to="/GetProductsCategoriesList"> Get Products Categories List </Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;