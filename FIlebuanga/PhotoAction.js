import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {ADDPHOTOSUCCESS} from '../src/actions/types';

export const AddNewPhoto = (caption , image ) =>{
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ caption, image  })
        .then(() => {
            dispatch({ type: ADDPHOTOSUCCESS });
        });
    };
}