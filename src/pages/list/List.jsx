import React from "react";
import Sidebar from "./../../Compneonts/sidebar/Sidebar";
import Navbar from "./../../Compneonts/navbar/Navbar";
import "./list.scss";
import DataTable from "./../../dataTable/DataTable";
const List = () => {
  return (
    <div>
      <div className="list">
        {/* <Sidebar /> */}
        <div className="listContainer">
          {/* <Navbar /> */}
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default List;
