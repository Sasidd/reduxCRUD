import React, { useState, useRef} from "react";
import axios from "axios";

export default function Add(props) {
    const [image, setImage] = useState();
    const [customerName, setCustomerName] = useState("");
    const [email, setEmail] = useState("");
    const [close , setCLose] = useState(false)
    const imageRef = useRef();
    const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
        let img = event.target.files[0];
        setImage(URL.createObjectURL(img));
      }
    };
    const addCustomer = async () => {
        try {
          const formData = {
            email:email,
            avatar:image,
            first_name:customerName
          }
    
          const response = await axios.post(
            "https://reqres.in/api/users",
            formData
          );
    
          console.log("Customer added:", response.data);
          props.setItems((prevCustomers) => [...prevCustomers, formData]);
          console.log(formData);
         setCLose(true)
         setCustomerName('')
         setEmail('')
         setImage(null)
        } catch (error) {
          console.error("Error adding customer:", error);
        }
      };

  return (
    <>
   <div className='App'>
    <button type="button" className="btn btn-success mt-5 mb-5" data-bs-toggle="modal" data-bs-target="#exampleModal">&#43; Add New Customer</button>
    </div> 
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Add New Customers</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <div className="mb-3">
         <input type="text" className="form-control mb-2" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
         <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
         <input
           type="file"
           ref={imageRef}   // Assign the ref here
           style={{ display: 'none' }}
           onChange={onImageChange}
           />
         <button type="button" className="btn btn-link" onClick={() => imageRef.current.click()}>Upload Photo</button>
         {image && <img src={image} alt="Image" width='70px' height='70px' />}
        </div>
          </div>
          <div className="App mb-3">
            <button type="button" className="btn btn-primary"  onClick={() => {
      addCustomer();
      if (close) {
        // Close the modal if 'close' is true
        document.getElementById("exampleModal").classList.remove("show");
        document.body.classList.remove("modal-open");
      }
    }}>Add Customer</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
