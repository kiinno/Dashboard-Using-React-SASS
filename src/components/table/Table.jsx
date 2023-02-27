import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

function createData(
  status = "pending",
  product = "Acer Nitro 16 Laptop",
  customer = "Daived",
  date = "dd/mm/yy hh:mm",
  amount = "554",
  method = "cash on delivery"
) {
  const id = Math.floor(Math.random() * 473827432);
  return {
    id,
    product,
    img: "https://images.acer.com/is/image/acer/Aspire-7-KSP-1?$responsive$",
    customer,
    date,
    amount,
    method,
    status,
  };
}

const rows = [
  createData("rejected"),
  createData(),
  createData(),
  createData("rejected"),
  createData(),
  createData("approved"),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData(),
  createData("rejected"),
  createData("approved"),
  createData(),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Tracking ID</TableCell>
            <TableCell className="table-cell">Product</TableCell>
            <TableCell className="table-cell">Customer</TableCell>
            <TableCell className="table-cell">Date</TableCell>
            <TableCell className="table-cell">Amount</TableCell>
            <TableCell className="table-cell">Payment Method</TableCell>
            <TableCell className="table-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>
                <div className="cell-wrapper">
                  <img src={row.img} alt={row.product} className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell>{row.customer}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>${row.amount}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell>
                <span className={`status ${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
