

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: '',
    input: '',
    image: '',
    mortgage: '',
    drent: '',
    input: ''
}

const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
const UPDATE_INPUT = 'UPDATE_INPUT';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_DRENT = 'UPDATE_DRENT';

export default function(state = initialState, action ) {
    switch( action.type ) {
        case UPDATE_NAME:
          return Object.assign({}, state, { name: action.payload });

        case UPDATE_ADDRESS:
            return Object.assign({}, state, { address: action.payload});

        case UPDATE_CITY:
            return Object.assign({}, state, { city: action.payload});  
        
        case UPDATE_STATE:
            return Object.assign({}, state, { state: action.payload});

        case UPDATE_ZIPCODE:
            return Object.assign({}, state, { zipcode: action.payload});
        
        case UPDATE_INPUT:
            return Object.assign({}, state, { input: action.payload});

        case UPDATE_IMAGE:
            return Object.assign({}, state, { image: action.payload});

        case UPDATE_MORTGAGE:
            return Object.assign({}, state, { mortgage: action.payload});

        case UPDATE_DRENT:
            return Object.assign({}, state, { drent: action.payload});
}
}


export function updateName( name ){
    return {
      type: UPDATE_NAME,
      payload: name
    };
  }
  export function updateAddress( address ){
    return {
      type: UPDATE_ADDRESS,
      payload: address
    };
  }
  export function updateCity( city ){
    return {
      type: UPDATE_CITY,
      payload: city
    };
  }
  export function updateState( state ){
    return {
      type: UPDATE_STATE,
      payload: state
    };
  }
  export function updateZipcode( zipcode ) {
      return{
          type: UPDATE_ZIPCODE,
          payload: zipcode
      }
  }
  export function updateInput( input ){
    return {
      type: UPDATE_IMAGE,
      payload: input
    };
  }
  export function updateImage( image ){
    return {
      type: UPDATE_NAME,
      payload: image
    };
  }
  export function updateMortgage( mortgage ){
    return {
      type: UPDATE_MORTGAGE,
      payload: mortgage
    };
  }
  export function updateDrent( drent ){
    return {
      type: UPDATE_DRENT,
      payload: drent
    };
  }