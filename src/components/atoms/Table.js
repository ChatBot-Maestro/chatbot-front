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

export default function BasicTable({rows}) {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="right">Teacher Name</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Sheduled Date</TableCell>
            <TableCell align="right">Edition space</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row">
                {row.studentName}
              </TableCell>
              <TableCell align="right">{row.teacherName}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.sheduledDate}</TableCell>
              <TableCell align="right">
                <EditIcon className="editIcon" onClick={handleEditEvent}/>
                <DeleteIcon className="editIcon" onClick={handleDeleteEvent}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

BasicTable.propTypes = {
  rows: PropTypes.array.isRequired,
};