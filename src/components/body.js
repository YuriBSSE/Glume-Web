import React, { Component, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route,Redirect } from 'react-router-dom';
import Login from './auth/login';
import Main from './main';
import SlideBar from './SideBar';
import * as actions from "../store/actions"


function Body({user,setUser}){
    
    useEffect(()=>{
        const existUser=localStorage.getItem('id')
        if(existUser){
            const role=localStorage.getItem('role')
            setUser(existUser,role)
        }
    },[])

    if(user._id){
        return(
            <>
            <SlideBar/>
            <Main/>
            </>
        )
    }else{
        return(
            <>
            <Route exact path="/" component={Login}/>
            </>
        )
    }
}

function mapStateToProps({user}){
    return{user}
}

export default  connect(mapStateToProps,actions)(Body)
