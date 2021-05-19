import './App.css';
import Customer from './components/Customer.js';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import CircularProgress from '@material-ui/core/CircularProgress';
import React, { useState, useEffect } from 'react';
//import { response } from 'express';

const useStyles = makeStyles({
  root: {
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
  progressCell: {
    textAlign: 'center',
  },
});

async function getList() {
  const response = await fetch('http://localhost:5000/api/customers');
  const body = await response.json();
  return body;
}

function App() {
  const classes = useStyles();

  const [customers, setCustomers] = useState('');
  //const [completed, setCompleted] = useState(0);

  useEffect(() => {
    getList().then((data) => setCustomers(data));
    getList().catch((err) => console.log(err));
  }, []);

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers ? (
            customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan="6" className={classes.progressCell}>
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
