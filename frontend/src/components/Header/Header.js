import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppBar, Link, MenuList, MenuItem, Divider, Toolbar, IconButton } from '@material-ui/core'
import { MenuIcon } from '@material-ui/icons';
import ImgReactPanel from 'assets/img/ReactPanel.png';

export class Header extends Component {
    render() {
        return (
            <div>
                {(window.innerWidth < 577) ?
                    <AppBar position="fixed">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    :
                    <div>
                        <nav className="header navbar navbar-expand-lg navbar-light bg-withe">
                            <div className="container">
                                <Link className="navbar-brand" to="/">
                                    <img src={ImgReactPanel} height="50" />
                                </Link>
                                <ul className="navbar-nav ml-md-5 mr-auto mt-4 mt-md-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">
                                            <i className="fas fa-tachometer-alt lg mr-2"></i>Dashboard
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/dashboard">
                                            <i className="fas fa-list lg mr-2"></i>Categorias
                                        </Link>
                                    </li>
                                    <li className="nav-item dropdown show">
                                        <Link className="nav-link dropdown-toggle" to="#" data-toggle="dropdown">
                                            <i className="fas fa-list lg mr-2"></i>Meu Site
                                        </Link>
                                        <MenuList className="dropdown-menu m-0">
                                            <MenuItem className="dropdown-item">Dados de Contato</MenuItem>
                                            <MenuItem className="dropdown-item">Minha Logo</MenuItem>
                                            <Divider />
                                            <MenuItem className="dropdown-item">Ver meu site</MenuItem>
                                        </MenuList>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
