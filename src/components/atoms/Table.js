import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from 'prop-types';

function handleDeleteEvent(event) {
  console.log("TODO delete event");
}



function handleEditEvent(event) {
  console.log("TODO edit event");
}

export default function BasicTable({rows,tableHeader,iterableFields}) {

  const tableHeaderList = tableHeader.map((header) => (
    <TableCell align="center">{header}</TableCell>
  ));

  const rowsList = rows.map((row) => (
    <TableRow
      key = {row.id}
    >
      {iterableFields.map((field) => (
        <TableCell align="center">{row[field]}</TableCell>
      ))}

      <TableCell align="right">
        <EditIcon className="editIcon" onClick={handleEditEvent}/>
        <DeleteIcon className="editIcon" onClick={handleDeleteEvent}/>
      </TableCell>
    </TableRow>
  ));
  
  

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaderList}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsList}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BasicTable.propTypes = {
  rows: PropTypes.array.isRequired,
};