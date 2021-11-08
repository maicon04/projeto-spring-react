// eslint-disable-next-line import/no-anonymous-default-export
export default {
    auth: {
        token: {},
        credentials: {
            username: '',
            password: ''
        },
        isLoading: {
            action: false,
            message: null
        },
        success: false,
        error: null
    },
    loading:{
        open:false,
        message:'Loading'
    },
    notify:{
        open:false,
        class:'success',
        vertical:'top',
        horizontal:'center',
        time:3000,
        message:''
    }
}