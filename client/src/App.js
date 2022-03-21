import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/header/Navbar";
import Login from "./pages/auth/login/Login";
import Products from "./pages/products/Products";
import Register from "./pages/auth/register/Register";
import { useEffect } from "react";
import store from "./store";
import { loadUser } from "./actions/userActions";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NewProduct from "./pages/admin/newProduct/NewProduct";
import ProductsList from "./pages/admin/products/ProductsList";

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <div className="app">
            <Router>
                <Navbar />
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} exact />
                <Route path="/register" component={Register} exact />
                <Route path="/products" component={Products} exact />
                <Route path="/admin" component={Dashboard} exact />
                <Route path="/admin/product/new" component={NewProduct} exact />
                <Route path="/admin/products" component={ProductsList} exact />
            </Router>
        </div>
    );
}

export default App;
