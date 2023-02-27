import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

export default function DataTable({
  columns,
  api_url,
  pages = 9,
  rows_per_pages = 9,
}) {
  const [rows, setRows] = useState();
  const fetchData = async () => {
    const response = await fetch(api_url, {
      method: "GET",
    });
    const data = await response.json();
    setRows(data[Object.keys(data)[0]]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return rows ? (
    <div className="data-table">
      {!rows ? (
        <Loader />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pages}
          rowsPerPageOptions={[rows_per_pages]}
          checkboxSelection
        />
      )}
    </div>
  ) : (
    <Loader />
  );
}
