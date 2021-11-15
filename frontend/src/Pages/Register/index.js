import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerUser, changeValue } from '../../store/actions/register.action'

import { Container, Button, Typography, TextField, Link } from "@material-ui/core";
import ImgReact from 'assets/img/react-img.png';
import Loading from '../../components/Loading/index'
import Notify from "components/Notify";
import { BASE_URL } from 'Utils/requests';

export class index extends Component {
    register = () => {
        this.props.registerUser(this.props.data)
            .then(() => {
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
                                Create an account FREE!
                            </Typography>
                        </div>
                        <div className="mt-2">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                label="Name"
                                name="name"
                                type="text"
                                values={this.props.data.name}
                                onChange={(text) => {
                                    this.props.changeValue({ name: text.target.value })
                                    if(this.props.error.name){
                                        delete this.props.error.name
                                    }
                                }}
                            />
                            {(this.props.error)
                                && <strong className="text-danger">{this.props.error}</strong>
                            }
                        </div>
                        <div className="mt-2">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                type="email"
                                values={this.props.data.email}
                                onChange={(text) => this.props.changeValue({ email: text.target.value })}
                            />
                        </div>
                        <div className="mt-2">
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                type="password"
                                values={this.props.data.password}
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
                            onClick={() => this.register()}>
                            Register
                        </Button>
                        <div className="mt-4 text-center">
                            <Link href={"/login"} className="mt-4" color="secondary" variant="body2">
                                Login
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.registerReducer.data,
    success: state.registerReducer.success,
    error: state.registerReducer.error,
})

const mapDispatchToProps = dispatch => ({
    changeValue: value => dispatch(changeValue(value)),
    registerUser: data => dispatch(registerUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
