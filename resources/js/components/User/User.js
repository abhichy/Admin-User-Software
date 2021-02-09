import React, { Component } from 'react'
import { Route, Link, Redirect, Switch,history, withRouter,useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'
export class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            company:""
        };
    }
    saveContact = async (event)=>{
        event.preventDefault();
        const res = await axios.post("api/save-user",
            this.state
        );
        // this.state = {
        //     name: "",
        //     email: "",
        //     company:""
        // };
        this.setState({ 
            name: "",
            email: "",
            company:""
         }); 
       

        if (res.data.status === 200) {
            
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Added Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
        }

        this.props.history.push('/all-user');

    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

     
    render() {
        return (
            <div>
                 <h3>USER CONTACT FORM :</h3>
                 <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <form onSubmit={this.saveContact}>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">User Name</label>
                                    <input type="text" value={this.state.name} onChange={this.handleInput}  name="name"  class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter Name"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" value={this.state.email} onChange={this.handleInput} name="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Company</label>
                                    <input type="text" value={this.state.company} onChange={this.handleInput} name="company"  class="form-control" id="exampleInputPassword1" placeholder="Enter company"></input>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        
        )
    }

}


export default withRouter(User);

