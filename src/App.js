import axios from "axios";

function App() {

  const options = {
    method: 'GET',
    url: 'https://twinword-word-association-quiz.p.rapidapi.com/type1/',
    params: {level: '3', area: 'sat'},
    headers: {
      'X-RapidAPI-Key': '5f86cbe8c9msh6be1db6177699c4p181934jsn15e3b99f4a84',
      'X-RapidAPI-Host': 'twinword-word-association-quiz.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  
  return (
    <div className="App">
        Learn React
        This is my GHW APP
    </div>
  );
}

export default App;
