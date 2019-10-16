const initState = {
    newReqName: '',
    newReqDesc: '',
};

const createReq = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_NEW_REQ_NAME':
            return {
                ...state,
                newReqName: action.payload,
            }
        case 'UPDATE_NEW_REQ_DESC':
            return {
                ...state,
                newReqDesc: action.payload,
            }
        case 'CLEAR_NEW_REQ':
            return {
                ...state,
                newReqName: '',
                newReqDesc: '',
            }
        default:
            return state;
    };
};

export const updateNewReqName = text => ({ type: 'UPDATE_NEW_REQ_NAME', payload: text });
export const updateNewReqDesc = text => ({ type: 'UPDATE_NEW_REQ_DESC', payload: text });
export const clearNewReq = () => ({ type: 'CLEAR_NEW_REQ' });
export const saveNewReq = (reqName, reqDesc) => ({ type: 'SAVE_NEW_REQ', reqName, reqDesc })

export default createReq;