import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TablePagination from "@material-ui/core/TablePagination";

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  }
});

let id = 0;
function createData(name, post, skillset, exp, ctc, expctc, noticeperiod, location, status, action) {
  id += 1;
  return { id, name, post, skillset, exp, ctc, expctc, noticeperiod, location, status, action };
}

const data = [
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  createData('Anil Kumar', 'Java developer','Java developer', '10 Years', '5 LK/A', '6 LK/A', '2 Month', 'Kakkanad', 'Inprogress', ''),
  
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className="recruitment-table-outer">
      <Table className="recruitment-tabele">
        <TableHead>
        <TableRow>
            <TableCell className="width-15">Name</TableCell>
            <TableCell className="width-12">Post</TableCell>
            <TableCell className="width-15">Skill set</TableCell>
            <TableCell className="width-8">Exp</TableCell>
            <TableCell className="width-8">CTC</TableCell>
            <TableCell className="width-8">EXP CTC</TableCell>
            <TableCell className="width-10">Notice period</TableCell>
            <TableCell className="width-10">Location</TableCell>
            <TableCell className="width-8">Status</TableCell>
            <TableCell className="width-8">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
              <TableCell  className="width-15">
                {n.name}
              </TableCell>
              <TableCell numeric className="width-12">{n.post}</TableCell>
              <TableCell numeric className=" width-15">{n.skillset}</TableCell>
              <TableCell numeric className="width-8">{n.exp}</TableCell>
              <TableCell numeric className="width-8">{n.ctc}</TableCell>
              <TableCell numeric className="width-8">{n. expctc}</TableCell>
              <TableCell numeric className="width-10">{n.noticeperiod}</TableCell>
              <TableCell numeric className="width-10">{n.location}</TableCell>
              <TableCell numeric className="width-8 inprogress-td">
              <div className ="inprograss-style">{n.status}</div>
              </TableCell>
              <TableCell numeric className="width-8">
                <div className="action-outer">
             
                <div className="eye-new-icon inprogress ">
                                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.957514 3.64635L3.25493 1.55779C5.53914 -0.519262 9.25705 -0.519262 11.5413 1.55779L13.8387 3.64635C14.0538 3.84189 14.0538 4.15798 13.8387 4.35353L11.5413 6.44209C10.3992 7.48037 8.8989 8 7.39811 8C5.89731 8 4.39706 7.48037 3.25496 6.44209L0.95754 4.35353C0.742414 4.15798 0.742414 3.84189 0.957514 3.64635ZM7.39811 6.50061C8.91486 6.50061 10.1489 5.3788 10.1489 3.99993C10.1489 2.62106 8.91486 1.49925 7.39811 1.49925C5.88135 1.49925 4.64736 2.62106 4.64736 3.99993C4.64736 5.3788 5.88135 6.50061 7.39811 6.50061Z" fill="#B93E86"/>
<path d="M7.39802 2.49902C8.30795 2.49902 9.04846 3.17221 9.04846 3.99943C9.04846 4.82664 8.30795 5.49983 7.39802 5.49983C6.48808 5.49983 5.74757 4.82664 5.74757 3.99943C5.74757 3.17221 6.48805 2.49902 7.39802 2.49902Z" fill="#B93E86"/>
</svg>
                                </div>
<div className="delete-icon">
<svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.242676 0.31216H2.19897V0.261343C2.19897 0.117019 2.30763 0 2.44165 0H4.43799C4.57201 0 4.68067 0.117019 4.68067 0.261343V0.31216H6.63696C6.77098 0.31216 6.87964 0.429179 6.87964 0.573503V1.60566C6.87964 1.74998 6.77098 1.867 6.63696 1.867H0.242676C0.108661 1.867 0 1.74998 0 1.60566V0.573503C0 0.429179 0.108661 0.31216 0.242676 0.31216Z" fill="#EB140A"/>
<path d="M0.607288 2.39648H6.27234C6.40635 2.39648 6.51501 2.5135 6.51501 2.65783V9.49013C6.51501 9.63445 6.40635 9.75147 6.27234 9.75147H0.607288C0.473274 9.75147 0.364613 9.63445 0.364613 9.49013V2.65783C0.364613 2.5135 0.473274 2.39648 0.607288 2.39648ZM4.59252 8.81099C4.59252 8.95531 4.70118 9.07233 4.8352 9.07233H5.06107C5.19509 9.07233 5.30375 8.95531 5.30375 8.81099V3.33697C5.30375 3.19265 5.19509 3.07563 5.06107 3.07563H4.8352C4.70118 3.07563 4.59252 3.19265 4.59252 3.33697V8.81099ZM3.08415 8.81099C3.08415 8.95531 3.19281 9.07233 3.32683 9.07233H3.5527C3.68672 9.07233 3.79538 8.95531 3.79538 8.81099V3.33697C3.79538 3.19265 3.68672 3.07563 3.5527 3.07563H3.32683C3.19281 3.07563 3.08415 3.19265 3.08415 3.33697V8.81099ZM1.57588 8.81099C1.57588 8.95531 1.68454 9.07233 1.81855 9.07233H2.04443C2.17844 9.07233 2.2871 8.95531 2.2871 8.81099V3.33697C2.2871 3.19265 2.17844 3.07563 2.04443 3.07563H1.81855C1.68454 3.07563 1.57588 3.19265 1.57588 3.33697V8.81099Z" fill="#EB140A"/>
</svg>
</div>


                                </div>
                 
                {n.action}</TableCell>
            </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination className="pagenation-outer"
        component="nav"
        page={0}
        rowsPerPage={10}
        count={100}
        onChangePage={() => {}}
      />
       </Paper>
       
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(SimpleTable);

