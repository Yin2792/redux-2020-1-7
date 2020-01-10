import { Add_USER, Delete_User, Edit_User, Fetch_User } from '../../../components/redux/actionTypes'
const initialState = {
  userData: [


  ]
}

const IndexReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case Fetch_User: {
     return {...state,userData:action.payload}
    }
    case Add_USER: {
      return { ...state, userData: [...state.userData, action.payload] }
    }
    case Edit_User: {
      const updateduser = Object.assign({}, state.UserData, action.payload)
      console.log(action.payload.id)
      return { ...state, userData: state.userData.map((editvalue) => editvalue.id === action.payload.id ? updateduser : editvalue) }
    }
    case Delete_User: {
      return { ...state, userData: state.userData.filter(d => d.id !== action.payload) }
    }
    default: {
      return state;
    }
  }
};

export default IndexReducer