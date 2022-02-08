import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../store/actions";
import ClipLoader from "react-spinners/ClipLoader";

function Login({login,user}) {
    const [fields,setFields]=useState({
        email:"",
        password:"",
		remember:false
    })
    const [submit,setSubmit]=useState(false)
	let [loading, setLoading] = useState(false);

    const getValue=(k,v)=>setFields({...fields,[k]:v})

    function onLogin(e){
		e.preventDefault()
        setSubmit(true)
        if(fields.email && fields.password){
			setLoading(true)
            login(fields).then(()=>setLoading(false))
        }
    }

    return (
        <section className="login-page">
	<div className="row">
		<div className="col-lg-7 col-md-6 px-0 column-left">
			<span className="orange-shade"></span>
			<div className="login-left-inner-part">
			<div className="login-left">
					<div className="login-left-inner-text">
						<h3>Best Managment System</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
						<a href="#">
							<button>Get Started <i className="fas fa-long-arrow-alt-right ml-3"></i></button>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className="col-lg-5 col-md-6 px-0 my-auto column-right">
			<div className="row">
				<form onSubmit={onLogin}>
				<div className="centeringcontent-login">
					<div className="login-right">
						<h3>Welcome Back to <br/> <span>Glume!</span> Login to Get Started</h3>
					</div>
					<div className="input-1">
						<label>Enter your email</label><br/>
						<input 
						maxLength={50}
                        className={submit && !fields.email?"inputError":null}
                        onChange={e=>getValue("email",e.target.value)}
                        placeholder="Ahmed Allouch"/>
					</div>
					<div className="input-1">
						<label>Enter Your Password</label><br/>
						<input
						maxLength={25}
                        type="password"
                        className={submit && !fields.password?"inputError":null}
                        onChange={e=>getValue("password",e.target.value)}
                        placeholder="******"/>
					</div>
					{
						user.error?(
							<p style={{color:'red',textAlign:'center'}}>{user.error}</p>
						):null
					}
					<div className="checkbox">
						<input 
						onChange={(e)=>{
							if(e.target.checked){
								getValue("remember",e.target.checked)
							}
						}}
						className="styled-checkbox" 
						id="styled-checkbox-1" 
						type="checkbox"/>
	    			<label htmlFor="styled-checkbox-1">Remember Me</label>
    			</div>
    			<div className="btn-login">
    				<button
                    onSubmit={onLogin}
					style={{display:'flex',justifyContent:'center',alignItems:'center'}}
                    className="btn-all">
						{loading?(
							<ClipLoader size={25} color="white"/>
						):"Login"}
					</button>
    			</div>
				</div>
				</form>
			</div>
		</div>
	</div>
</section>
    );
}

function mapStateToProps({user}){
    return {user}
}

export default connect(mapStateToProps,actions)(Login);