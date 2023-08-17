import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/actions/userAction';

export default function Table(props) {
  const buttonContainerStyle = {
    display: 'flex',     // Display buttons in a row
    gap: '5%',         // Add spacing between buttons
  };
const dispatch = useDispatch()
  const handleDelete=(id)=>{
    console.log(id);
   // dispatch(deleteUser(id))
  }
  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Custumer ID#</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Email</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{<img src={props.avatar} width='100px' height='100px'/>}</th>
      <td>{props.id}</td>
      <td>{props.first_name && props.last_name?`${props.first_name} ${props.last_name}`:`${props.first_name}`}</td>
      <td>{props.email}</td>
      <td>
        <div style={buttonContainerStyle}>
        <button type="button" className="btn btn-success">Edit</button>
        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={()=>{handleDelete(props.id)}}>
  Delete
</button>
        </div>
        </td>
    </tr>
  </tbody>
</table>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Customer Detail</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h1>Are you Sure you want to delete</h1>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
        <button type="button" class="btn btn-primary" onClick={()=>{handleDelete(props.id)}}>Yes</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
