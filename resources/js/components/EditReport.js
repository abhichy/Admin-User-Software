import React from "react";
import axios from "axios";
import Swal from "sweetalert2"

class EditReport extends React.Component {
    state = {
        name: "",
        title: "",
        description: "",
       
        
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    updateReport = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/api/update-report/${id}`, this.state);
        if (res.data.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Report Updated Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
             this.props.history.push("/report");
        }

    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/edit-report/${id}`);
        let allData = res.data.editReport
        this.setState({
            name: allData.name,
            title: allData.title,
            description: allData.description
           
        });
    }

    render() {
        return (
            <div>

                <h2>REPORT UPDATED FORM : </h2>
                <form onSubmit={this.updateReport}>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control"
                            value={this.state.name} onChange={this.handleInput}
                            placeholder="Enter Name" required />
                    </div>
                    
                    <div className="form-group">
                        <input type="text" name="title" className="form-control"
                            value={this.state.title} onChange={this.handleInput}
                            placeholder="Enter Title" required />

                    </div>
                    
                    <div className="form-group">
                        <input type="text" name="description" className="form-control"
                            value={this.state.description} onChange={this.handleInput}
                            placeholder="Enter Description" required />

                    </div>


                    <div className="form-group">
                        <input type="submit" className="btn btn-success" value="Update Report" />

                    </div>
                </form>
            </div>
        )
    }


}

export default EditReport;
