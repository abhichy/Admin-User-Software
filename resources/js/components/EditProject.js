import React from "react";
import axios from "axios";
import Swal from "sweetalert2"

class EditProject extends React.Component {
    state = {
        name: "",
        description: "",
        manager: "",
        status: 0,
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    updateProject = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/api/update-project/${id}`, this.state);
        if (res.data.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Project Updated Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
             this.props.history.push("/manage-project");
        }

    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/edit-project/${id}`);
        let allData = res.data.editProject
        this.setState({
            name: allData.name,
            description: allData.description,
            manager: allData.manager,
            status: allData.status
        });
    }

    render() {
        return (
            <div>

                <h2>PROJECT UPDATED FORM : </h2>
                <form onSubmit={this.updateProject}>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control"
                            value={this.state.name} onChange={this.handleInput}
                            placeholder="Enter Project Name" required />
                    </div>


                    <div className="form-group">
                        <input type="text" name="description" className="form-control"
                            value={this.state.description} onChange={this.handleInput}
                            placeholder="Enter Description" required />

                    </div>

                    <div className="form-group">
                        <input type="text" name="manager" className="form-control"
                            value={this.state.manager} onChange={this.handleInput}
                            placeholder="Enter Manager Name" required />

                    </div>

                    <div
                        class="form-check form-check-inline">
                        <input class="form-check-input" checked={this.state.status ==1} onChange={this.handleInput} type="radio" name="status" id="inlineRadio1" value="1"></input>
                        <label class="form-check-label" for="inlineRadio1">Active</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" checked={this.state.status ==2} onChange={this.handleInput} type="radio" name="status" id="inlineRadio2" value="2"></input>
                        <label class="form-check-label" for="inlineRadio2">Inactive</label>
                    </div>


                    <div className="form-group">
                        <input type="submit" className="btn btn-success" value="Update Project" />

                    </div>
                </form>
            </div>
        )
    }


}

export default EditProject;

