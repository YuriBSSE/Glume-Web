import React, { useEffect } from 'react';
import { Link,useHistory } from 'react-router-dom';
import * as actions from '../store/actions';
import {connect} from "react-redux"
import {api} from "../config/config..json"

function Header({logOut,getProfile,id,profile}) {

    const history=useHistory();

    useEffect(()=>{
        getProfile(id)
    },[])

    function onLogOut(){
        logOut()
        history.push('/')
    }
    return (
        <div>
            <header className="centering">
                <div className="searchwrapper">
                    {/* <span className="search-icon">
                        <i className="fas fa-search fa-fw"></i>
                    </span>
                    <input type="Search" name="Search" placeholder="Search"/> */}
                </div>
                <div className="social-icons">

                    <div className="dropdown notification">
                        {/* <a className="dropdown" className="btn-drop dropdown-toggle" type="button" id="notify" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <p>
                                <i className="far fa-bell fa-fw"><span></span></i>
                            </p>
                        </a>
                            <div className="dropdown-menu text-center" aria-labelledby="notify">
                            <a className="dropdown-item" href="#">Kahani</a>
                            <a className="dropdown-item" href="#">Ghar Ghar</a>
                            <a className="dropdown-item" href="#">Ki</a>
                    </div> */}
                    </div>
                    <img
                    style={{
                        width:50,
                        height:50,
                        borderRadius:25,
                        marginRight:15
                    }}
                    src={api+profile.image}/>
                    <div className="dropdown">
                    <button className="btn-drop dropdown-toggle" type="button" id="settings" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <p style={{textTransform: 'capitalize'}} >{profile.first_name+" "+profile.last_name}<i className="fa fa-chevron-down fa-fw"></i><br/><span className="member"> {profile.role_id==1?"Admin":"Client"} </span></p>
                    </button>
                    <div className="dropdown-menu text-center" aria-labelledby="settings">
                        {/* <a className="dropdown-item" href="#">Profile</a> */}
                        <Link to="/head/profile" className="dropdown-item" href="#">Settings</Link>
                        <a 
                        onClick={onLogOut}
                        style={{cursor:'pointer'}} className="dropdown-item">Logout</a>
                    </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
function mapStateToProps({user,profile}){
    return {id:user._id,profile}
}
export default connect(mapStateToProps,actions)(Header);