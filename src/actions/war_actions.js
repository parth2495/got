export const fetchWarSuccess = (data) => ({
  	type: 'SUCCESS_WAR_DATA',
  	payload: { data }
})

export const fetchWarError = (error) => ({
	type: 'FAILURE_WAR_DATA',
	payload: { error }
})

export const fetchWarStart = () => ({
	type: 'START_WAR_DATA'
})

export const fetchWars = (data) => {
  console.log(data);
	return function action(dispatch) {
    	dispatch(fetchWarStart());
    	const apiUrl = 'https://evening-falls-71388.herokuapp.com/search?king='+data.kingName+'&location='+data.loc+'&type='+data.item;
    	 fetch(apiUrl)
      		.then((response) => response.json())
      		.then(  (data) => 
      				{	
      					console.log(data);
      					dispatch(fetchWarSuccess(data));
      				},
      				(error) => 
      				{
      					console.log(error);
      					dispatch(fetchWarError(error));
      				});
  	}
	
   
}