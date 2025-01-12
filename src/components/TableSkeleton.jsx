import React from "react";


import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";



const TableSkeleton = () => {
  const skeletonRows = Array.from({ length: 5 }, (_, index) => (
    <tr key={index}>
      <th scope="row">
        <div className="skeleton skeleton-text" style={{ width: "30px" }}></div>
      </th>
      <td>
        <div className="skeleton skeleton-text" style={{ width: "120px" }}></div>
      </td>
      <td>
        <div className="skeleton skeleton-text" style={{ width: "120px" }}></div>
      </td>
      <td>
        <div className="skeleton skeleton-text" style={{ width: "150px" }}></div>
      </td>
      <td>
        <div className="skeleton skeleton-text" style={{ width: "80px" }}></div>
      </td>
      <td>
        <div className="skeleton skeleton-button" style={{ width: "60px" }}></div>
        <div
          className="skeleton skeleton-button mx-3"
          style={{ width: "60px" }}
        ></div>
      </td>
    </tr>
  ));

  return (
    <table className="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Doctor</th>
          <th scope="col">Patient</th>
          <th scope="col">Date</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>{skeletonRows}</tbody>
    </table>
  );
};

export default TableSkeleton;
