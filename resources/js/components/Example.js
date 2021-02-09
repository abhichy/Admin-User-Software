import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Addcontact from './AddContact'
// import Contact from './Contact'
import Nav from './Nav'
import AddContact from "./AddContact";
import EditContacts from "./EditContact"
import EditUser from "../EditUser"
import User from "./User/User";
import Header from "./Header"
import Dashboard from "./Dashboard"
import AllUser from "./User/AllUser"
import ManageCompany from './Company/ManageCompany'
import EditCompany from './User/EditCompany'
import ManageProject from './ManageProject'
import EditProject from './EditProject'
import Report from './Report'
import EditReport from './EditReport';
import AddTicket from './Ticket/AddTicket';
function Example() {
    return (
        <Router>
            <>
                {/* <Nav></Nav> */}

                <Header></Header>
                <Switch>
                    <Route path="/task/createTask">
                        <Dashboard />
                    </Route>
                    <Route path="/add-contact">
                        <AddContact />
                    </Route>

                    <Route path="/add-user">
                        <User />
                    </Route>

                    <Route path="/all-user">
                        <AllUser />
                    </Route>



                    <Route exact path={"/edit/:id"}
                        render={props => <EditContacts {...props} />}
                    />

                    <Route exact path={"/edit-user/:id"}
                        render={props => <EditUser {...props} />}
                    />

                    <Route path="/manage-company">
                        <ManageCompany />
                    </Route>

                    <Route exact path={"/edit-company/:id"}

                        render={props => <EditCompany {...props} />}
                    >
                    </Route>

                    <Route path="/manage-project">
                        <ManageProject />
                    </Route>

                    <Route exact path={"/edit-project/:id"}
                        render={props => <EditProject {...props} />}
                    />

                   <Route path="/report">
                       <Report />
                   </Route>

                   <Route exact path={"/edit-report/:id"}
                        render={props => <EditReport {...props} />}
                    />

                   <Route path="/add-ticket">
                       <AddTicket/>
                   </Route>
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
