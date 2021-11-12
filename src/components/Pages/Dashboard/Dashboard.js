import React from 'react';
import { Button } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProduct from './AddProduct/AddProduct';
import AllOrder from './AllOrder/AllOrder';
import AllProduct from './AllProduct/AllProduct';
import ManageUser from './ManageUser/ManageUser';
import MyOrder from './MyOrder/MyOrder';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import UserInfo from './UserInfo/UserInfo';

import { AiFillDashboard, AiFillFolderAdd, AiOutlineUnorderedList } from "react-icons/ai";
import { FaProductHunt, FaUserAlt } from "react-icons/fa";
import { MdLogout, MdPayment, MdReviews } from "react-icons/md";
import ClintRoute from '../Login/ClintRoute/ClintRoute';

const Dashboard = () => {
    const {logOut, admin} = useAuth();
    const { path, url } = useRouteMatch();
    return (
        <main className="section-p">
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-2">
                            <div className="left-menu">
                                <ul className="deshboard-menu">
                                    <li>
                                    <Link to={`${url}`}><span className="dash-icon" title="Dashboard"><AiFillDashboard/></span> <span className="desh-text">Dashboard</span></Link>
                                    </li>
                                    {
                                        admin && <li>
                                        <Link to={`${url}/allproduct`}><span className="dash-icon"><FaProductHunt/></span> <span className="desh-text">All Product</span></Link>
                                        </li>
                                    }
                                    {
                                        admin && <li>
                                        <Link to={`${url}/addproduct`}><span className="dash-icon"><AiFillFolderAdd/></span> <span className="desh-text">Add Product</span></Link>
                                        </li>
                                    }
                                    {
                                        admin && <li>
                                        <Link to={`${url}/allorder`}><span className="dash-icon"><AiOutlineUnorderedList/></span> <span className="desh-text">All Order</span></Link>
                                        </li>
                                    }
                                    {
                                        !admin && <li>
                                        <Link to={`${url}/myorder`}><span className="dash-icon"><AiOutlineUnorderedList/></span> <span className="desh-text">My Order</span></Link>
                                        </li>
                                    }
                                    {
                                        admin && <li>
                                        <Link to={`${url}/manageuser`}><span className="dash-icon"><FaUserAlt/></span> <span className="desh-text">Manage User</span></Link>
                                        </li>
                                    }
                                    {
                                        !admin && <li>
                                        <Link to={`${url}/pay`}><span className="dash-icon"><MdPayment/></span> <span className="desh-text">Payment</span></Link>
                                        </li>
                                    }
                                    {
                                        !admin && <li>
                                        <Link to={`${url}/review`}><span className="dash-icon"><MdReviews/></span> <span className="desh-text">Review</span></Link>
                                        </li>
                                    }
                                    <li>
                                    <Button className="logout-btn" onClick={logOut}><span className="dash-icon"><MdLogout/></span> <span className="desh-text">Logout</span></Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9 col-10">
                            <Switch>
                                <Route exact path={path}>
                                    <UserInfo></UserInfo>
                                </Route>
                                <AdminRoute path={`${path}/allproduct`}>
                                    <AllProduct></AllProduct>
                                </AdminRoute>
                                <AdminRoute path={`${path}/allorder`}>
                                    <AllOrder></AllOrder>
                                </AdminRoute>
                                <AdminRoute path={`${path}/addproduct`}>
                                    <AddProduct></AddProduct>
                                </AdminRoute>
                                <AdminRoute path={`${path}/manageuser`}>
                                    <ManageUser></ManageUser>
                                </AdminRoute>
                                <ClintRoute path={`${path}/myorder`}>
                                    <MyOrder></MyOrder>
                                </ClintRoute>
                                <ClintRoute path={`${path}/review`}>
                                    <Review></Review>
                                </ClintRoute>
                                <ClintRoute path={`${path}/pay`}>
                                    <Pay></Pay>
                                </ClintRoute>
                            </Switch>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Dashboard;