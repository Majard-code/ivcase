const initState = {
    data: null,
    isReady: false,
    error: false
};

const app = (state = initState, action) => {
    switch (action.type){
        case 'FETCH_ALL_START':
                return {
                    ...state,
                    isReady: false,
                    error: false
                };
        case 'FETCH_ALL_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isReady: true,
                error: false
            };
        case 'FETCH_ALL_FAILED':
            console.log(action.payload.message);
            return {
                ...state,
                isReady: false,
                error: true
            };
        default:
            return state;
    };
};

export const fetchAllSuccess = data => ({ type: 'FETCH_ALL_SUCCESS', payload: data });
export const fetchAllFailed = e => ({ type: 'FETCH_ALL_FAILED', payload: e });
export const fetchAllStart = () => ({ type: 'FETCH_ALL_START' });
export const fetchAll = () => ({ type: 'FETCH_ALL' });

export default app;