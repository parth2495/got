const initialState = {
	isFetching: false,
	locations : [],
	error: null
      
}

const locationReducer = (state = initialState, action) => {
	console.log(state);
  	switch (action.type) {
	    case 'SUCCESS_DATA':
		    return {
		    	isFetching: false,
		      	locations: action.payload.data,
		      	error: null
		    };	 
      	case 'START_DATA':
      		return {
      			...state,
      		    isFetching: true
      		};
      	case 'FAILURE_DATA':
      		return {
      			...state,
      			isFetching: false, 
      			error: action.payload
      		};     	
      	default:
      	 	return state;
	}
}

export default locationReducer