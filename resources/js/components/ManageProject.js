import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Swal from 'sweetalert2';

const ManageProject = (props) => {
    const [AllProject, setAllproject] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = {
        name: '',
        description: '',
        manager: '',
        status: 0,
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


    const allProject = async (event) => {
        let res = await axios.get('api/all-project');
        setAllproject(res.data.project);
        // console.log('test',res.data.project);

    }

    const saveProject = async (event) => {
        event.preventDefault();
        const res = await axios.post("api/save-project",
            formData
        );

        if (res.data.status === 200) {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Project Added Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
            allProject();
        }

        props.history.push('/manage-project');
    }

    useEffect(() => {
        allProject();
    }, []);



    return (
        <div className="container">
            <div className="row">
                <div className='col-md-12' style={{marginTop:15}}>
                    <Button variant="btn btn-warning" onClick={handleShow}>
                        Add New Project
            </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add Project</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div>
                                <form onSubmit={saveProject}>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" onChange={handleInput} type="radio" name="status" id="inlineRadio1" value="1"></input>
                                        <label class="form-check-label" for="inlineRadio1">Active</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" onChange={handleInput} type="radio" name="status" id="inlineRadio2" value="2"></input>
                                        <label class="form-check-label" for="inlineRadio2">Inactive</label>
                                    </div>

                                    <div class="form-group" >
                                        <label for="exampleInputPassword1">Project Name</label>
                                        <input type="text" name='name' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Enter Project Name"></input>
                                    </div>


                                    <div class="form-group" >
                                        <label for="exampleInputPassword1">Project Description</label>
                                        <input type="text" name='description' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Project Description"></input>
                                    </div>


                                    <div class="form-group" >
                                        <label for="exampleInputPassword1">Project Manager</label>
                                        <input type="text" name='manager' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Project Manager"></input>
                                    </div>

                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={handleClose}>ADD</button>
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
                                <th scope="col">Project Name</th>
                                <th scope="col">Description</th>
                                <th scope="col">Manager</th>
                                <th scope="col">Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllProject.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.description}</td>
                                            <td>{item.manager}</td>
                                            <td>
                                                {
                                                    item.status == 1 ? (
                                                        <p>Active</p>
                                                    ) : (
                                                            <p>Inactive</p>
                                                        )
                                                }
                                            </td>
                                            <td>
                                                <Link
                                                    to={`/edit-project/${item.id}`}
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

export default ManageProject;
