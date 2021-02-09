import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import Swal from 'sweetalert2';

const Report = (props) => {
    const [AllReport, setAllreport] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const data = {
        date: '',
        name: '',
        title: '',
        description: '',
    };
    const SearchData = {
       name:"",
       start_date:"",
       end_date:"",
    };

    const [SearchFormData, setSearchFormData] = useState(SearchData);


    const [formData, setFormData] = useState(data);

    const handleInput = event => {
        const { name, files, value } = event.target;
        console.log(name, value);
        setFormData(oldState => ({
            ...oldState,
            [name]: value
        }));
    };


    const allReport = async (event) => {
        let res = await axios.get('api/all-report');
        setAllreport(res.data.report);
        // console.log('test',res.data.project);

    }


    const searchData = async (event)=>{
        event.preventDefault();
        const res = await axios.post(
            'api/search-report', SearchFormData);
        setAllreport(res.data.reports)
        // console.log(res.data.reports);
    }

    const saveReport = async (event) => {
        event.preventDefault();
        const res = await axios.post("api/save-report",
            formData
        );

        if (res.data.status === 200) {

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Report Added Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
            allReport();
        }

        props.history.push('/report');
    }

    const refresh = (event)=>{
        window.location.reload(false);
    }

    const handleSearchData = (event)=>{
        const { name, files, value } = event.target;
        console.log(name, value);
        setSearchFormData(oldState => ({
            ...oldState,
            [name]: value
        }));
    }

    useEffect(() => {
        allReport();
    }, []);



    return (
        <div className="container">
            <div className="row">
                <div className='col-md-12' style={{ marginTop: 15 }}>
                    <Button variant="btn btn-primary" onClick={handleShow}>
                        Add New Report
            </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Create New Report</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div>
                                <form onSubmit={saveReport}>

                                    <div class="form-group" >
                                        <label for="exampleInputPassword1"> Name</label>
                                        <input type="text" name='name' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Name"></input>
                                    </div>


                                    <div class="form-group" >
                                        <label for="exampleInputPassword1"> Title</label>
                                        <input type="text" name='title' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Title"></input>
                                    </div>


                                    <div class="form-group" >
                                        <label for="exampleInputPassword1">Report Description</label>
                                        <input type="text" name='description' onChange={handleInput} class="form-control" id="exampleInputPassword1" placeholder="Description"></input>
                                    </div>

                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div>
                                    <button type="submit" class="btn btn-primary" onClick={handleClose}>ADD Report</button>
                                </form>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                    </Button>
                        </Modal.Footer>
                    </Modal>


                    <div className="row mt-3">
                        <div className='col-md-12'>
                            <form class="form-inline" onSubmit={searchData}>
                                <div class="form-group mb-2">
                                    <label for="staticEmail2" class="sr-only">Name</label>
                                    <input type="text" required name="name" onChange={handleSearchData}  class="form-control" placeholder="Name"></input>
                                </div>
                                <div class="form-group mx-sm-3 mb-2">
                                    <label for="inputPassword2" class="sr-only">From</label>
                                    <input type="date" required name="start_date" onChange={handleSearchData} class="form-control" id="inputPassword2" placeholder="Password"></input>
                                </div>
                                <div class="form-group mx-sm-3 mb-2">
                                    <label for="inputPassword2" class="sr-only">TO</label>
                                    <input type="date" required name='end_date' onChange={handleSearchData} class="form-control" id="inputPassword2" placeholder="Password"></input>
                                </div>
                                <button type="submit" class="btn btn-primary mb-2">Search</button>

                                <button type="button" onClick={refresh} class="btn btn-danger mb-2 ml-1">Refresh</button>
                            </form>
                        </div>
                    </div>


                    <table class="table table-striped" style={{ marginTop: 10 }}>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Date</th>
                                <th scope="col">Name</th>
                                <th scope="col">Title</th>
                                <th scope="col">Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                AllReport.map((item, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            <td>{item.date}</td>
                                            <td>{item.name}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>

                                            <td>
                                                <Link
                                                    to={`/edit-report/${item.id}`}
                                                    className="btn btn-info"
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

export default Report;
