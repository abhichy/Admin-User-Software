import React from "react";
import axios from "axios";
import Swal from 'sweetalert2'
class EditContact extends React.Component {
    state = {
        full_name: "",
        Email: "",
        Phone: "",
        // editcontactList:[]
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    updateContact = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/api/update-contact/${id}`, this.state);
        if (res.data.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Contact Updated Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push("/add-contact");
        }

    }

    async componentDidMount() {  
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/edit-contact/${id}`);
        // console.log(res.data.editContact)
        let allData = res.data.editContact
        this.setState({
            full_name: allData.full_name,
            Email: allData.Email,
            Phone: allData.Phone
        });
    }

    render() {
        return (
            <div>

               <h2>CONTACT UPDATE FORM : </h2>
                <form onSubmit={this.updateContact}>
                    <div className="form-group">
                        <input type="text" name="full_name" className="form-control"
                            value={this.state.full_name} onChange={this.handleInput}
                            placeholder="Enter Full Name" required />
                    </div>

                    <div className="form-group">
                        <input type="email" name="Email" className="form-control"
                            value={this.state.Email} onChange={this.handleInput}
                            placeholder="Enter Email" required />

                    </div>
                    <div className="form-group">
                        <input type="text" name="Phone" className="form-control"
                            value={this.state.Phone} onChange={this.handleInput}
                            placeholder="Enter Phone" required />

                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Edit Contact" />

                    </div>
                </form>
            </div>
        )
    }
}
 
export default EditContact;