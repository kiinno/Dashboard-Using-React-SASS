import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../store/reducers/lists";
import { useEffect } from "react";
import Loader from "../loader/Loader";

const DataTable = ({ columns, type }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(type));
  }, [type, dispatch]);
  return (
    <>
      {state.lists.isLoading ? (
        <Loader />
      ) : (
        <div className="data-table">
          <DataGrid
            rows={state.lists[type]}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      )}
    </>
  );
};
export default DataTable;
