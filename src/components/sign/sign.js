import React, {Component} from 'react';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';
import Input from './input';
import {Well, Button} from 'react-bootstrap';

"use strict";

const ROOT_URL = "https://tramii-cooky-back.herokuapp.com";//"http://localhost:3000"
//Modal window for signing up
class Sign extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            nickName: '',
            password: '',
            picture: '',
            role: '',
            nickNameIn: '',
            passwordIn: '',
            show: false
        };
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handlePasswordInput = this.handlePasswordInput.bind(this);
        this.handleUsernameInput = this.handleUsernameInput.bind(this);

        this.handlePasswordInputIn = this.handlePasswordInputIn.bind(this);
        this.handleUsernameInputIn = this.handleUsernameInputIn.bind(this);

        this.logIn = this.logIn.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    //logIn
    logIn(e) {
        console.log("entra logIn en signupmodal");
        this.props.onLog(e.target.nodeName);
    }

    //sign in
    signIn(e) {
                this.props.onLog('BUTTON');
    }

    //state setters for signing up
    handleNameInput(x) {
        this.setState({nombre: x});
    }
    handlePasswordInput(x) {
        this.setState({
            password: x
        }, () => {
            this.props.password(this.state.password);
        });
    }
    handleUsernameInput(x) {
        this.setState({
            nickName: x
        }, () => {
            this.props.username(this.state.nickName);
        });
    }

    //state setters for signing in
    handlePasswordInputIn(x) {
        this.setState({
            passwordIn: x
        }, () => {
            this.props.password(this.state.passwordIn);
        });
    }
    handleUsernameInputIn(x) {
        this.setState({
            nickNameIn: x
        }, () => {
            this.props.username(this.state.nickNameIn);
        });
    }

    //sweetalert error
    handleError() {
        this.setState({show: true});
    }

    render() {
        const wellInstanceSignIn = (
            <div className="signInModal col-md-6">
                <Well bsSize="large">
                    <form className="ModalForm">
                        <div className="row">
                            <h5>Sign In</h5>
                        </div>
                        <div className="row">
                            <label>Usuario:</label>
                            <Input name="username" type="text" placeholder="elvistek10" val={this.state.nickNameIn} onTextInput={this.handleUsernameInputIn}/>
                        </div>
                        <div className="row">
                            <label>Contraseña:</label>
                            <Input name="password" type="password" placeholder="password" val={this.state.passwordIn} onTextInput={this.handlePasswordInputIn}/>
                        </div>
                        <div className="row">
                            <Button bsStyle="primary" onClick={(e) => {
                                this.signIn(e);
                            }}>Sign in
                                <i className="fa fa-fw fa-chevron-right"></i>
                            </Button>
                        </div>
                    </form>
                </Well>
            </div>
        );

        const errorOccurred = this.state.show;
        let element = null;
        if (!errorOccurred) {
            element = ' ';
        } else {
            element = <h4>
                That username is already taken</h4>
            console.log(this.state.show);
        }

        return (
            <div className="SignUpAndIn">
                <div>
                    <img className="mainlogo" src="http://i.imgur.com/M1fTBqM.png" alt="hola"/>
                </div>
                <div className="row">
                    <h3>Bienvenido a Contrack</h3>
                    <h4>Ingrese sus credenciales, por favor.</h4>
                </div>
                <div className="row">
                    {wellInstanceSignIn}
                </div>
                <div className="row">
                    {element}
                </div>
            </div>
        );
    }

}

export default Sign;
