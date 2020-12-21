export const fetchDataSuccess = (data) => ({
  	type: 'SUCCESS_DATA',
  	payload: { data }
})

export const fetchDataError = (error) => ({
	type: 'FAILURE_DATA',
	payload: { error }
})

export const fetchDataStart = () => ({
	type: 'START_DATA'
})

export const fetchList = () => {
	return function action(dispatch) {
    //dispatch({ type: FETCH_OFFERS })
    	dispatch(fetchDataStart());
    	const apiUrl = 'https://evening-falls-71388.herokuapp.com/list';
    	 fetch(apiUrl)
      		.then((response) => response.json())
      		.then(  (data) => 
      				{	
      					console.log(data);
      					dispatch(fetchDataSuccess(data));
      				},
      				(error) => 
      				{
      					console.log(error);
      					dispatch(fetchDataError(error));
      				});
    
	    // return request.then(
	    //   response => dispatch(fetchOffersSuccess(response)),
	    //   err => dispatch(fetchOffersError(err))
	    // );
  	}
	
   
}