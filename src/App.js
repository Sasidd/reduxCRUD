import logo from './logo.svg';
import './App.css';
import Table from './Components/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Add from './Components/Add';
import { useDispatch,useSelector } from 'react-redux';
import { fetchUsers } from './redux/api';
import { addUser } from './redux/actions/userAction';

function App() {
const [items,setItems] = useState([])
// const fetching=async()=>{
//   try {
//     const response = await axios.get('https://reqres.in/api/users');
//     setItems(response.data.data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// useEffect(()=>{
// fetching()
// },[])

const dispatch = useDispatch();
const userList = useSelector((state) => state.userList);

useEffect(() => {
  fetchUsers().then((data) => {
    data.forEach((user) => dispatch(addUser(user)));
  });
}, []);
console.log('user list==>', userList);
  return (
    <div>
      <Add setItems={setItems}/>
      {userList.map((element)=>{
        return(
          <div key={element.id}>
        <Table id={element.id} email={element.email} avatar={element.avatar} first_name={element.first_name} last_name={element.last_name}/>
        </div>
        )
      })}
     {/* <Table/> */}
    </div>
  );
  }
export default App;
