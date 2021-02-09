import React from 'react';
import axios from "axios";
import Swal from 'sweetalert2'

class EditUser extends React.Component{
    state = {
       name: "",
       email: "",
       company: ""
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    updateUser = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/api/update-user/${id}`, this.state);
        if (res.data.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Updated Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push("/all-user");
        }

    }

       async componentDidMount() {
           const id = this.props.match.params.id;
           const res = await axios.get(`/api/edit-user/${id}`);
           let allData = res.data.editUser
           this.setState({
               name: allData.name,
               email: allData.email,
               company: allData.company
           });
       }

       render() {
           return(
            <div>

            <h2>CONTACT EDIT FORM : </h2>
             <form onSubmit={this.updateUser}>
                 <div className="form-group">
                     <input type="text" name="name" className="form-control"
                         value={this.state.name} onChange={this.handleInput}
                         placeholder="Enter Full Name" required />
                 </div>

                 <div className="form-group">
                     <input type="email" name="email" className="form-control"
                         value={this.state.email} onChange={this.handleInput}
                         placeholder="Enter Email" required />

                 </div>
                 <div className="form-group">
                     <input type="text" name="company" className="form-control"
                         value={this.state.company} onChange={this.handleInput}
                         placeholder="Enter Company" required />

                 </div>
                 <div className="form-group">
                     <input type="submit" className="btn btn-primary" value="Edit User" />

                 </div>
             </form>
         </div>
     )
 }
}

export default EditUser;





           
              


       






