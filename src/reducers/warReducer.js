const initialState = {
	isFetching: false,
	wars : [],
	error: null,
      king: null,
      type: null,
      selectedLocation: null,
      selectedWar: null
}

const warReducer = (state = initialState, action) => {
	console.log(state);
  	switch (action.type) {

            case 'SET_LOCATION':
                  return {
                        ...state,
                        selectedLocation: action.payload
                  } ;  
            case 'SET_KING_TYPE':
                  return {
                        ...state,
                        king: action.payload.kingName,
                        type: action.payload.type
                  }
	      case 'SUCCESS_WAR_DATA':
		    return {
		    	isFetching: false,
		      	wars: action.payload.data,
		      	error: null
		    };	 
      	case 'START_WAR_DATA':
      		return {
      			...state,
      		    isFetching: true
      		};
      	case 'FAILURE_WAR_DATA':
      		return {
      			...state,
      			isFetching: false, 
      			error: action.payload
      		};	
            case 'SET_WAR':
                  return {
                        ...state,
                        selectedWar: action.payload
                  }
      	default:
      	 	return state;
	}
}

export default warReducer