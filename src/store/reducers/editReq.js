const initState = {
    data: null,
    isReady: false,
    error: false,
    newReqComment: '',
    statusIsOpen: false,
    executorIsOpen: false,

};

const editReq = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_REQ_START':
            return {
                ...state,
                isReady: false,
                error: false
            };
        case 'FETCH_REQ_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isReady: true,
                error: false
            };
        case 'FETCH_REQ_FAILED':
            console.log(action.payload.message);
            return {
                ...state,
                isReady: false,
                error: true
            };
        case 'UPDATE_NEW_REQ_COMMENT':
            return {
                ...state,
                newReqComment: action.payload,
            }
        case 'CLEAR_NEW_REQ':
            return {
                ...state,
                newReqComment: '',
            }
        case 'OPEN_STATUS':
            return {
                ...state,
                statusIsOpen: true,
            }
        case 'CLOSE_STATUS':
            return {
                ...state,
                statusIsOpen: false,
            }
        case 'OPEN_EXECUTOR':
            return {
                ...state,
                executorIsOpen: true,
            }
        case 'CLOSE_EXECUTOR':
            return {
                ...state,
                executorIsOpen: false,
            }
        default:
            return state;
    };
};

export const fetchReqSuccess = data => ({ type: 'FETCH_REQ_SUCCESS', payload: data });
export const fetchReqFailed = e => ({ type: 'FETCH_REQ_FAILED', payload: e });
export const fetchReqStart = () => ({ type: 'FETCH_REQ_START' });
export const fetchReq = id => ({ type: 'FETCH_REQ', payload: id });

export const updateNewReqComment = text => ({ type: 'UPDATE_NEW_REQ_COMMENT', payload: text });
export const saveNewReqComment = text => ({ type: 'SAVE_NEW_REQ_COMMENT', payload: text });
export const clearNewReqComment = () => ({ type: 'CLEAR_NEW_REQ' });

export const openStatus = () => ({ type: 'OPEN_STATUS' });
export const closeStatus = () => ({ type: 'CLOSE_STATUS' });
export const openExecutor = () => ({ type: 'OPEN_EXECUTOR' });
export const closeExecutor = () => ({ type: 'CLOSE_EXECUTOR' });


export default editReq;