import React, { Component } from "react";
import { connect } from 'react-redux';

import { withStyles, Container, Button, Typography, TextField, Link } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { login, changeValue } from "store/actions/auth.action";
import ImgReact from 'assets/img/react-img.png';
import Loading from '../../components/Loading/index'
import Notify from "components/Notify";
import { BASE_URL } from "Utils/requests";

const CollorButton = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: green[500],
        '&.hover': {
            backgroundColor: green[700]
        }
    }
}))(Button)

export class Login extends Component {

    login = () => {
        const { credentials } = this.props;
        this.props.login(credentials).then(() => {
            if (this.props.success) {
                window.location.replace(`${BASE_URL}/home`)
            }
        })
    }
    render() {
        return (
            <div>
                <Loading />
                <Notify />
                <Container component="main" maxWidth="xs">
                    <div className="mt-3 mt-md-5">
                        <div className="text-center">
                            <img alt="logo" src={ImgReact} height="120" />
                            <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">
                                React.js integration with JAVA & Spring BOOT
                            </Typography>
                        </div>
                        <div className="mt-2">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="email"
                                name="username"
                                type="email"
                                values={this.props.credentials.username}
                                onChange={(text) => this.props.changeValue({ username: text.target.value })}
                            />
                        </div>
                        <div className="mt-2">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="password"
                                name="password"
                                type="password"
                                values={this.props.credentials.password}
                                onChange={(text) => this.props.changeValue({ password: text.target.value })}
                            />
                        </div>
                        <Button
                            type="button"
                            variant="contained"
                            fullWidth
                            color="primary"
                            size="large"
                            className="mb-3 mb-md-4 mt-2"
                            onClick={() => this.login()}>
                            Login
                        </Button>
                        <Link href="/register">
                            <CollorButton
                                type='button'
                                size="large"
                                variant="contained"
                                className="mt-md-2"
                                fullWidth
                            >
                                SignUp
                            </CollorButton>
                        </Link>
                    </div>
                </Container>
            </div>
        )

    }

}
const mapStateToProps = (state) => ({
    credentials: state.authReducer.credentials,
    success    : state.authReducer.success
})

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login(credentials)),
    changeValue: (value) => dispatch(changeValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

