import React from "react";
import axios from "axios";
import Contact from "./Contact"
import Swal from 'sweetalert2'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class AddContact extends React.Component {
    state = {
        full_name: "",
        email: "",
        phone: "",
        list: [],
    }
    handleInput = (e) => {
        // console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

    allContact = async () => {
        let res = await axios.get('/api/all-contact');
        this.setState({
            list: res.data.allContact
        })


        // console.log(res.data.allContact)
    }

    saveContact = async (e) => {
        e.preventDefault();
        const res = await axios.post("api/save-contact", this.state);
        console.log("sss=" + res.data.all);
        this.setState({ full_name: '', email: '', phone: '', list: res.data.all });
        if (res.data.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Contact Added Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push("/");
        }



        // console.log(res);
    }

    deleteContact = async (event) => {
        // const res = await axios.get('/api/delete-contact'+id)
        const remove = event.target.getAttribute("data-id")
        const res = await axios.get('/api/delete-contact/' + remove)
        if (res.data.status == 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Contact Deleted Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
        }
        this.allContact();
        console.log(res)
        // console.log(remove)
    }

    componentDidMount() {
        this.allContact();
    }




    render() {
        let dataList = this.state.list.map((item, index) => {
            return (
                <tr>
                    <th>{index + 1}</th>
                    <th>{item.full_name}</th>
                    <th>{item.Email}</th>
                    <th>{item.Phone}</th>

                    <th>
                        <Link
                            to={`/edit/${item.id}`}
                            className="btn btn-primary"
                            type="button"
                        >
                            Edit
                     </Link>
                    </th>
                  
                    <th>
                        <button
                            className="btn btn-warning"
                            type="button"
                            onClick={this.deleteContact}
                            data-id={item.id}
                        >
                            Delete
                     </button>
                    </th>

                </tr>
            )
        });

        return (


            <>
                <h3>ADD EMPLOYEE INFORMATION :</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={this.saveContact}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Employee Name</label>
                                    <input type="text" name="full_name" value={this.state.full_name} onChange={this.handleInput} class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Employee full name"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Phone</label>
                                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleInput} class="form-control" id="exampleInputPassword1" placeholder="Enter phone"></input>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
                {/* <div class="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="60%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>SL</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>

                            </tr>
                        </thead>
                        <tbdoy>
                            {dataList}
                        </tbdoy>
                    </table>
                </div> */}
              <div >
              <table className="table" style={{marginTop:10}}>
                    <thead>
                        <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Employee Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList}
                        {/* <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr> */}

                    </tbody>
                </table>
              </div>
            </>


        )

    }
}

export default AddContact;