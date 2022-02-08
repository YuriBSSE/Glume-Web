import React, { Component, useState } from 'react';
import dashboardSrc from "../assets/icon/dashboard.png"
import projectSrc from "../assets/icon/projects.png"
import clientsSrc from "../assets/icon/clients.png"
import invoicesSrc from "../assets/icon/invoices.png"
import billingSrc from "../assets/icon/billing.png"
import transactionSrc from "../assets/icon/transaction.png"
import hostingSrc from "../assets/icon/hosting.png"
import { NavLink } from 'react-router-dom';

export default function SlideBar(){
	const role=localStorage.getItem('role')
    const [selected,setSelected]=useState("dashbaord")
    return(
        <>
        <input type="checkbox" id="sidebar-toggle"/>
        <div className="sidebar">
		<div className="sidebar-header">
			<NavLink to="/head">
				<h1>Glume</h1>
			</NavLink>
		</div>
		<div className="sidebar-menu">
		   <ul>
                <NavLink to="/" isActive={(res)=>res?setSelected("dashbaord"):null}>
		         <li className={selected=="dashbaord"?"active":null}>
		            <span><img src={dashboardSrc}/></span>
		            <span>Dashboard</span>
		         </li>
                 </NavLink>
                 <NavLink isActive={(res)=>res?setSelected("project"):null} to="/head/projects">
		         <li className={selected=="project"?"active":null} >
		            <span><img src={projectSrc}/></span>
		            <span>Projects</span>
		         </li>
                 </NavLink>
				 {role!=2?(
					<NavLink isActive={(res)=>res?setSelected("manageClients"):null} to="/head/manageClients">
					<li className={selected=="manageClients"?"active":null} > 
						<span><img src={clientsSrc}/></span>
					<span>Manage Clients</span>
					</li>
					</NavLink>
				 ):null}
                 <NavLink to="/head/invoices" isActive={(res)=>res?setSelected("invoices"):null}>
		         <li className={selected=="invoices"?"active":null} >
		            <span><img src={invoicesSrc}/></span>
		            <span>All Invoices</span>
		         </li>
                 </NavLink>
				 {role!=2?(
					<NavLink to="/head/billing" isActive={(res)=>res?setSelected("billing"):null}>
					<li className={selected=="billing"?"active":null} >
						<span><img src={billingSrc}/></span>
						<span>Billing</span>
					</li>
					</NavLink>
				 ):null}
                 {/* <NavLink to="/head/transactions" isActive={(res)=>res?setSelected("transactions"):null}>
		         <li className={selected=="transactions"?"active":null} >
		            <span><img src={transactionSrc}/></span>
		            <span>Transactions</span>
		         </li>
                 </NavLink> */}
                 <NavLink to="/head/hosting" isActive={(res)=>res?setSelected("hosting"):null}>
		         <li className={selected=="hosting"?"active":null} >
		            <span><img src={hostingSrc}/></span>
		            <span>Subscription Packages</span>
		         </li>
                 </NavLink>
		      <div className="close-sidebar">
		      	<label htmlFor="sidebar-toggle" className="collapse-btn">Collapse</label>
		      	<label htmlFor="sidebar-toggle" className="fas fa-chevron-left icon-close"></label>
		      </div>
		   </ul>
		</div>
	</div>
        </>
    )
}
