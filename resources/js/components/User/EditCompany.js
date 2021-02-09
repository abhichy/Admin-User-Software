import React from "react";
import axios from "axios";
import Swal from "sweetalert2"

class EditCompany extends React.Component {

    state = {
        name: "",
        email: "",
        project_id: 0,
        detail: "",
        type: 0,
        all_project: []
    }
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }



    updateCompany = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const res = await axios.patch(`/api/update-company/${id}`, this.state);
        if (res.data.status === 200) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Company Updated Successfully!!',
                showConfirmButton: false,
                timer: 1500
            })
            this.props.history.push("/manage-company");
        }

    }

    async componentDidMount() {
        const id = this.props.match.params.id;
        const res = await axios.get(`/api/edit-company/${id}`);
        let allData = res.data.editCompany
        this.setState({
            name: allData.name,
            email: allData.email,
            project_id: allData.project_id,
            detail: allData.detail,
            type: allData.type,
            all_project: res.data.allproject
        });
        console.log(res.data.allproject);
    }



    render() {
        let AllProjects = this.state.all_project.map((item) => {
            return <option  selected={this.state.project_id == item.id} value={item.id}> {item.name}</option>
        })

        return (
            <div>

                <h2>COMPANY EDIT FORM : </h2>
                <form onSubmit={this.updateCompany}>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control"
                            value={this.state.name} onChange={this.handleInput}
                            placeholder="Enter Company Name" required />
                    </div>

                    <div className="form-group">
                        <input type="email" name="email" className="form-control"
                            value={this.state.email} onChange={this.handleInput}
                            placeholder="Enter Email" required />

                    </div>
                    <div className="form-group">
                        <select name="project_id" className="form-control"
                            onChange={this.handleInput}>
                            {AllProjects}
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="text" name="detail" className="form-control"
                            value={this.state.detail} onChange={this.handleInput}
                            placeholder="Enter Detail" required />

                    </div>

                    <div
                        class="form-check form-check-inline">
                        <input class="form-check-input" checked={this.state.type == 1} onChange={this.handleInput} type="radio" name="type" id="inlineRadio1" value="1"></input>
                        <label class="form-check-label" for="inlineRadio1">Client</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" checked={this.state.type == 2} onChange={this.handleInput} type="radio" name="type" id="inlineRadio2" value="2"></input>
                        <label class="form-check-label" for="inlineRadio2">Developer</label>
                    </div>


                    <div className="form-group">
                        <input type="submit" className="btn btn-primary" value="Update Company" />

                    </div>
                </form>
            </div>
        )
    }


}

export default EditCompany;