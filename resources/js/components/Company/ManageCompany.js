import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2'


const ManageCompany = (props) => {
    const [AllCompany, setAllcompany] = useState([]);
    const [allproject, setAllproject] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = {
        name: '',
        email: '',
        project_id: 0,
        detail: '',
        type: 0,
    };

    const [formData, setFormData] = useState(data);

    const handleInput = event => {
        const { name, files, value } = event.target;
        console.log(name, value);
        setFormData(oldState => ({
            ...oldState,
            [name]: value
        }));
    };


    const allCompany = async () => {
        let res = await axios.get('/api/all-company');
        setAllcompany(res.data.company);
        setAllproject(res.data.allproject);
        // console.log(res.data.allContact)
    }

    const AllProjects  = allproject.map((item)=>{
    return <option value={item.id} >{item.name}</option>
    })

    const saveCompany = async (event) => {
        event.preventDefault();
        const res = await axios.post("api/save-company",
            formData
        );

        if (res.data.status === 200) {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Company Added Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
            allCompany();
        }

        props.history.push('/manage-company');
    }

    useEffect(() => {
        allCompany();
    }, []);



    return (
        <div className="container">
            <div className="row">
                <div className='col-md-12' style={{marginTop:15}}>
                    <Button variant="btn btn-success" onClick={handleShow}>
                        Add New Company
            </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Company</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div>
                                <form onSubmit={saveCompany}>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" onChange={handleInput} type="radio" name="type" id="inlineRadio1" value="1"></input>
                                        <label class="form-check-label" for="inlineRadio1">Client</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" onChange={handleInput} type="radio" name="type" id="inlineRadio2" value="2"></input>
                                        <label class="form-check-label" for="inlineRadio2">Developer</label>
                                    </div>

                                    <div class="form-group" >
                                        <label for="exampleInputPassword1">Company Name</label>
                                        <input type="text" name='name' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Enter Company"></input>
                                    </div>

                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name='email' onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>


                                    <div class="form-group" >
                                        <label for="exampleInputPassword1">Project</label>
                                        {/* <input type="text" name='project' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Project Name"></input>
                                         */}
                                         <select className='form-control'  name='project_id' onChange={handleInput}>
                                             <option value='0' className='form-control'>Select Project</option>
                                             {AllProjects}
                                         </select>
                                    </div>


                                    <div class="form-group" >
                                        <label for="exampleInputPassword1">Detail</label>
                                        <input type="text" name='detail' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Project Detail"></input>
                                    </div>

                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={handleClose}>Submit</button>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                    </Button>
                        </Modal.Footer>
                    </Modal>


                    <table class="table table-striped" style={{ marginTop: 10 }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Project</th>
                                <th scope="col">Detail</th>
                                <th scope="col">Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllCompany.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.project_name}</td>
                                            <td>{item.detail}</td>
                                            <td>
                                                {
                                                    item.type == 1 ? (
                                                        <p>Client</p>
                                                    ) : (
                                                            <p>Developer</p>
                                                        )
                                                }
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/edit-company/${item.id}`}
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
        </div >
    );



}

export default ManageCompany;
