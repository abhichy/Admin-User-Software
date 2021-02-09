import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
function Contact(props) {
    const [contactList, setcontactList] = useState([]);
    
    const fetchalldata = async () => {
        const response = await axios.get("api/all-contact");
        if (response.data.status === 200) {
            setcontactList(response.data.allContact);
        }
    };


    useEffect(() => {
        fetchalldata();
    }, []);


    return (
       <div>
           {
               contactList.map((item,index)=>{
                   return(
                   <h2>{item.first_name}</h2>
                   );
               
               })
           }
           
       </div>
    );
}

export default Contact;
