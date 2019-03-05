import axios from 'axios';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';


// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

// export const apiGet = () => dispatch => {
//     axios.get('https://swapi.co/api/people/')
//       .then(({data}) => {
//         dispatch({type: FETCH_SUCCESS, payload: data.things});
//       })
//       .catch(err => {
//         dispatch({type: FETCH_ERROR, error: err});
//       });
// };

export const apiGet = (data) => dispatch => {
  axios.get('https://swapi.co/api/people/')
    .then(result => dispatch({
      type: FETCH_SUCCESS,
      payload: result.data.results
    }))
}

// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
