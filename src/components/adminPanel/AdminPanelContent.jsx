import React, { Fragment, useEffect, useState } from "react";
import Order from "./Order";
import Users from "./Users";
import AdminArticles from "./AdminArticles";
import AdminBodies from "./AdminBodies";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

const AdminPanelContent = () => {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [articles, setArticles] = useState([]);
  const [bodies, setBodies] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [allOrders, allUsers, allArticles, allBodies] = await Promise.all(
          [
            axiosPrivate.get("/orders/getOrders"),
            axiosPrivate.get("/users/getUsers"),
            axiosPrivate.get("/articles/getAll"),
            axiosPrivate.get("/bodyChanges/getAll"),
          ]
        );

        setOrders(allOrders.data);
        setUsers(allUsers.data);
        setArticles(allArticles.data);
        setBodies(allBodies.data);
      } catch (err) {
        console.log(err);
        navigate("/login", { state: { from: location }, replace: true });
      }
    };
    fetchData();
  }, []);
  return (
    <Fragment>
      <div className="container">
        <div
          className="nav flex-column flex-md-row nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <a
            className="nav-link text-dark active"
            id="v-pills-orders-tab"
            data-toggle="pill"
            href="#v-pills-orders"
            role="tab"
            aria-controls="v-pills-orders"
            aria-selected="true"
          >
            سفارشات ({orders.length})
          </a>
          <a
            className="nav-link text-dark"
            id="v-pills-member-tab"
            data-toggle="pill"
            href="#v-pills-member"
            role="tab"
            aria-controls="v-pills-member"
            aria-selected="false"
          >
            عضوها
          </a>
          <a
            className="nav-link text-dark"
            id="v-pills-article-tab"
            data-toggle="pill"
            href="#v-pills-article"
            role="tab"
            aria-controls="v-pills-article"
            aria-selected="false"
          >
            مقالات
          </a>
          <a
            className="nav-link text-dark"
            id="v-pills-body-tab"
            data-toggle="pill"
            href="#v-pills-body"
            role="tab"
            aria-controls="v-pills-body"
            aria-selected="false"
          >
            تغییرات بدنی
          </a>
        </div>
        <hr className="my-5" />
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-orders"
            role="tabpanel"
            aria-labelledby="v-pills-orders-tab"
          >
            {" "}
            <Order orders={orders} setOrders={setOrders} />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-member"
            role="tabpanel"
            aria-labelledby="v-pills-member-tab"
          >
            <Users users={users} setUsers={setUsers} />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-article"
            role="tabpanel"
            aria-labelledby="v-pills-article-tab"
          >
            <AdminArticles articles={articles} setArticles={setArticles} />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-body"
            role="tabpanel"
            aria-labelledby="v-pills-body-tab"
          >
            <AdminBodies bodies={bodies} setBodies={setBodies} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminPanelContent;
