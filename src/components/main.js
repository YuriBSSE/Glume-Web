import React from 'react';
import Header from './header';
import Dashboard from './dashboard/dashboard';
import {
  Redirect,
    Route,
  } from "react-router-dom";
import Projects from './projects/projects';
import Clients from './manageClients/clients';
import Invoices from './invoices/invoices';
import Hosting from './hosting/hosting';
import Billing from './billing/billing';
import CreateClient from './manageClients/createClient';
import ClientDetail from './manageClients/clientDetails';
import ProjectDetail from './projects/projectDetail';
import Profile from './profile/profile';
import CreateProject from "./projects/createProjects"
import UpdateProject from './projects/updateProject';
import UpdateClient from './manageClients/updateClient';
import createPackages from './hosting/createPackages';
import SubsDetail from './hosting/subDetail';
import EditSub from './hosting/editSub';
import InvoiceDetail from './invoices/invoiceDetail';
import AsSubDetail from './projects/asSubDetail';

function Main() {
    return (
        <div className="main-content">
                <Route path="/" component={Header}/>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/head/projects" component={Projects}/>
                <Route path="/head/manageClients" component={Clients}/>
                <Route path="/head/invoices" component={Invoices}/>
                <Route path="/head/profile" component={Profile}/>
                <Route path="/head/hosting" component={Hosting}/>
                <Route path="/head/billing" component={Billing}/>
                <Route path="/createClient" component={CreateClient}/>
                <Route path="/clientDetails/:id" component={ClientDetail}/>
                <Route path="/projectDetail/:id" component={ProjectDetail}/>
                <Route path="/asSubDetail/:id" component={AsSubDetail}/>
                <Route path="/creatProject" component={CreateProject}/>
                <Route path="/updateProject/:id" component={UpdateProject}/>
                <Route path="/updateClient/:id" component={UpdateClient}/>
                <Route path="/createPackage" component={createPackages}/>
                <Route path="/subsDetail/:id" component={SubsDetail}/>
                <Route path="/invoiceDetail/:id" component={InvoiceDetail}/>
                <Route path="/editSubs/:id" component={EditSub}/>
	    </div>
    );
}

export default Main;