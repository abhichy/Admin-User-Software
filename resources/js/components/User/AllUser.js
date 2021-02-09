import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2'

function AllUser(props) {

    const [AllUser, setAlluser] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = {
        name: '',
        email: '',
        company: ''
    };

    const Values = {
        name: "",
        email: "",
        company: ""
    }


    const [formData, setFormData] = useState(data);

    const [inputData, setinputData] = useState(Values);

    const handleInput = event => {
        const { name, files, value } = event.target;
        console.log(name, value);
        setFormData(oldState => ({
            ...oldState,
            [name]: value
        }));
    };

    const handledataInput = event => {
        const { name, files, value } = event.target;
        console.log(name, value);
        setinputData(oldState => ({
            ...oldState,
            [name]: value
        }));
    };

    const searchData = async event => {
        // alert("hellow oe")
        event.preventDefault();
        const res = await axios.post(
            'api/all-user', formData);
        setAlluser(res.data.productReport)
        const data = {
            name: '',
            email: '',
            company: ''
        };
        setFormData(data);

    };

    const saveContact = async (event) => {
        event.preventDefault();
        const res = await axios.post("api/save-user",
            inputData
        );

        if (res.data.status === 200) {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Added Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
        }

        props.history.push('/all-user');

    }

    // const alluser = async () => {
    //     const res = await axios.get("api/all-user"
    //     );
    //     console.log(res.data.user);
    //     setAlluser(res.data.user);
    // };

    useEffect(() => {
        // alluser();
    }, []);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD USER</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <h3>USER CONTACT FORM :</h3>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <form onSubmit={saveContact}>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">User Name</label>
                                            <input type="text" value={inputData.name} onChange={handledataInput} name="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Name"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input type="email" value={inputData.email} onChange={handledataInput} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Company</label>
                                            <input type="text" value={inputData.company} onChange={handledataInput} name="company" class="form-control" id="exampleInputPassword1" placeholder="Enter company"></input>
                                        </div>
                                        <button type="submit" onClick={handleClose} class="btn btn-primary">Submit</button>
                                        
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>

            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{ marginTop: 100 }}>
                        {/* <Link to="/add-user" className="btn btn-primary" style={{ marginTop: 20 }}>Add User</Link> */}
                        <br></br>
                        <Button variant="primary" onClick={handleShow}>
                            Add User
                         </Button>
                        {/* <div className='row'> */}
                        <form onSubmit={searchData}>
                            <div className='col-md-4'>
                                <label>Name</label>
                                <input type="text" onChange={handleInput} name="name" value={formData.name} className="form-control"></input>
                            </div>
                            <div className='col-md-4'>
                                <label>Email</label>
                                <input type="text" name='email' onChange={handleInput} value={formData.email} className="form-control"></input>
                            </div>
                            <div className='col-md-4'>
                                <label>Company</label>
                                <input type="text" name='company' onChange={handleInput} value={formData.company} className="form-control"></input>
                            </div>

                            <button className="btn btn-info" style={{ marginTop: 10, marginLeft: 10, }}>Search</button>
                        </form>
                        {/* </div> */}

                        <table class="table table-striped" style={{ marginTop: 10 }}>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    AllUser.map((item, index) => {
                                        return (
                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.company}</td>
                                                <td>
                                                    <Link
                                                        to={`/edit-user/${item.id}`}
                                                        className="btn btn-primary"
                                                        type="button"
                                                    >
                                                        Edit
                     </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    );
}

export default AllUser;
