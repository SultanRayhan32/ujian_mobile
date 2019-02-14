import {ADDPHOTOSUCCESS} from '../src/actions/types';

const INITIAL_STATE = {
    caption : '',
    image : ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADDPHOTOSUCCESS :
            return { ...INITIAL_STATE , caption : action.payload , image : action.payload };
        default :
            return state;
    }
};
