import React, { useState, useEffect } from "react"
import Swal from "sweetalert2"
const AddTicket = (props) => {
    const [Allcompany, setAllcompany] = useState([]);

    const allCompany = async () => {
        let res = await axios.get('/api/all-company');
        setAllcompany(res.data.company);
        console.log(res.data.company);
    }
    const data = {
        company_id: 0,
        subject: '',
        description: '',
        image: ''
    }

    const [formData, setFormData] = useState(data);

    const handleInput = event => {
        const { name, files, value } = event.target;
        console.log(name, value);
        setFormData(oldState => ({
            ...oldState,
            [name]: value
        }));
    };
    const saveTicket = async event => {
        event.preventDefault();
        const res = await axios.post("api/save-ticket",
            formData,
        );
        const data = {
            company_id: 0,
            subject: '',
            description: '',
            image: ''
        };

        // if (res.data.status === 200) {
        //     props.history.push(defaultRouteLink + "/m");
        // }

        try {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                onOpen: toast => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                }
            });

            Toast.fire({
                icon: "success",
                title: "Ticket  Saved  Successfully!!"
            });
        } catch (error) {
            console.error(error);
        }

    };

    const changephoto = event => {
        const file = event.target.files[0];
        if (file.size > 1048576) {
            alert("your image too long");
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                setFormData(oldState => ({
                    ...oldState,
                    image: event.target.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    useEffect(() => {
        allCompany();
    }, [])


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 mt-3'>
                    <form onSubmit={saveTicket} encType="multipart/form-data">
                        <h3>Create New Ticket</h3>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Company</label>
                            <br></br>
                            {
                                Allcompany.map((item, index) => {
                                    return (
                                        <>
                                            <label for="exampleInputEmail1">
                                                <input type="radio" onChange={handleInput} value={item.id} name='company_id' aria-describedby="emailHelp"></input>
                                                {item.name}
                                            </label>
                                            <br></br>
                                        </>
                                    );
                                })
                            }


                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Subject</label>
                            <input type="text" class="form-control" onChange={handleInput} name='subject' id="exampleInputPassword1" placeholder="Enter Subject Name"></input>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <textarea name='description' onChange={handleInput} className='form-control' placeholder="Enter Description">

                            </textarea>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Attachment</label><br></br>
                            <input type="file" onChange={changephoto} name='image' ></input>
                        </div>
                        <img
                            src={formData.image}
                            height="80px"
                            width="80px"
                        />
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTicket;
