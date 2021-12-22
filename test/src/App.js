import './App.css';
import {useEffect, useState} from 'react';
import { io } from "socket.io-client";
import List from './list';
let endpoint = 'https://mst-full-stack-dev-test.herokuapp.com/';

function App() {
  let [error, setError] = useState('');
  let [dataList, setData] = useState([]);
  let [orderedData, setOrderedData] = useState([]);
  let [order, setOrder] = useState(false);

  const ws = io(endpoint);
  const open = () => {
      ws.on('connect', () => {
        console.log('connected', ws.id)
      }) 
      ws.on('data-update', (data2) => {
        setData(prev => [...prev, data2])
      })
      ws.on("disconnect", (reason) => {
        console.log('disconnected')
        setError(reason)
      });
  }
  useEffect(() => {
    open()
  }, [])

  useEffect(() => {
    if (error === "io server disconnect") {
      open()
    } else if (error === "io client disconnect") {
      open()
    }
  }, [error])

  const handleClick = () => { 
    let value = (order === false) ? true : false;
    setOrder(value)
    sortData(value)
  }
  const sortData = (order) => {
    if (order) {
      let newData = [...dataList].sort((a,b) => {return b.Score - a.Score})
      setOrderedData([])
      newData.map(x => {
        setOrderedData(prev => [...prev, x])
      }) 
    } 
  }
  if (!order) {
    return (
      <div className="App">
        <List data={dataList} handleClick={handleClick} order={order} />
      </div>
    ) 
  } else {
    return (
      <div className="App">
        <List data={orderedData} handleClick={handleClick} order={order} />
      </div>
    ) 
  }
}

export default App;
