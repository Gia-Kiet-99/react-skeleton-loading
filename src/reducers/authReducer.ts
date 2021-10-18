import { IAuthState, IUserAction } from 'types';

const initialAuthState: IAuthState = {
  logged: false,
  user: null,
};

const authReducer = (state: IAuthState = initialAuthState, action: IUserAction) => {
  switch (action.type) {
    case 'LOGGED':
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
