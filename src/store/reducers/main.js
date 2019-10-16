const initState = {
    createReqIsOpen: false,
    editReqIsOpen: false,
};

const main = (state = initState, action) => {
    switch (action.type) {
        case 'OPEN_CREATE_REQ':
            return {
                ...state,
                createReqIsOpen: true,
                editReqIsOpen: false,
            }
        case 'CLOSE_CREATE_REQ':
            return {
                ...state,
                createReqIsOpen: false,
            }
        case 'OPEN_EDIT_REQ':
            return {
                ...state,
                createReqIsOpen: false,
                editReqIsOpen: true,
            }
        case 'CLOSE_EDIT_REQ':
            return {
                ...state,
                editReqIsOpen: false,
            }

        default:
            return state;
    };
};

export const openCreateReq = () => ({ type: 'OPEN_CREATE_REQ' });
export const closeCreateReq = () => ({ type: 'CLOSE_CREATE_REQ' });
export const openEditReq = () => ({ type: 'OPEN_EDIT_REQ' });
export const closeEditReq = () => ({ type: 'CLOSE_EDIT_REQ' });

export default main;