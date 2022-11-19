import React from "react";
import "./home.scss";
import Sidebar from "./../../Compneonts/sidebar/Sidebar";
import Navbar from "./../../Compneonts/navbar/Navbar";
import Widget from "./../../Compneonts/widget/Widget";
import Featured from "./../../Compneonts/featured/Featured";
import Chart from "./../../Compneonts/chart/Chart";
import Tables from "../../Compneonts/table/Table.jsx";

const Home = () => {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="listContainer">
            <div className="listTitle">
              Latest Transactions
              <Tables />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
