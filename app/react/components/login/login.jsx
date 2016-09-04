import React, {Component, PropTypes} from 'react';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import login from './styles.scss';




export default class Login extends Component {

    getChildContext() {
        return { muiTheme: getMuiTheme(baseTheme) };
    }
    static propTypes() {
        return {
            muiTheme: React.PropTypes.object.isRequired
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            email: props.email,
            password: props.password,
        };
    }

    handleEmail(mail){
        this.setState({email: mail.target.value});
    }
    handlePassword(pass){
        this.setState({password: pass.target.value});
    }

    handleSubmit(){
        var that = this
        $.ajax({
            method: 'POST',
            data:{
                user: {
                    email: that.state.email,
                    password: that.state.password
                }
            },
            url: '/users/sign_in.json',
            success: function(res) {
                console.log(res)
                location.href = "/"
            }
        });
    }






    render() {
        return (

            <div className="login-wrapper">
                <Card className="login-form">
                    <form>
                        <div className="logo">G</div>
                        <h1>Sign in</h1>
                        <CardHeader>
                            <TextField  type="email"
                                        className="login-field"
                                        ref="email"
                                        id='email'
                                        hintText=""
                                        floatingLabelText="Email:"
                                        onChange={this.handleEmail.bind(this)}
                            /><br/>
                            <TextField  type="password"
                                        className="login-field"
                                        ref="password"
                                        id='password'
                                        hintText=""
                                        floatingLabelText="Password:"
                                        onChange={this.handlePassword.bind(this)}
                            />
                            <RaisedButton label="Login" className="login-button" onClick={this.handleSubmit.bind(this)}  />
                        </CardHeader>

                    </form>
                </Card>
                <div className="bottom-links">
                    <a href="#" className="forgot-password">Forgot Password?</a>
                    <span className="get-started">
                        <span>Don`t have an account? <a href="#">Get Started</a></span>
                    </span>
                </div>
            </div>
        )
    }
}
Login.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};