/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-labels */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLoading } from 'store/actions/loading.action'
import Modal from '@material-ui/core/Modal';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles ={
    progress:{
        marginRight:'15px'
    },
    modal:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    paper:{
        backgroundColor:'#fff',
        padding:'15px',
        borderRadius:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        outline:'none'
    }
}

export class index extends Component {
    handleClose = () => {
        this.props.changeLoading({
            open:false
        })
    }
    render() {
        const {classes} = this.props
        return (
            <Modal
                open={this.props.loading.open}
                onClose={this.handleClose}
                className={classes.modal}
            >
                <div className={classes.paper}>
                    <CircularProgress className={classes.progress} size={20} />
                    <Typography variant="subtitle1">
                        {this.props.loading.message}
                    </Typography>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.loadingReducer
})

const mapDispatchToProps = dispatch => ({
    // eslint-disable-next-line no-label-var
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    changeLoading: (value) => dispatch(changeLoading(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(index))
