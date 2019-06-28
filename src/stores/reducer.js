export default (state = {
    author: 'Hins',
    status:false
}, action) => {
    switch (action.type) {
        case 'CHANGESTATUS':
            return {
                // //先继承state里面的值
                ...state,
                // //再把status的值改成acton.status
                status: action.status
            }
        // case 'SHOWBIGPIC':
        //     return {
        //         ...state,
        //         picUrl: action.picUrl,
        //         show: action.show
        //     }
        default:
            return state
    }
}