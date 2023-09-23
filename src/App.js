import Start from "./Components/Start";
import Quiz from "./Components/Quiz";
import Result from "./Components/Result";
// import QuizHolder from "./Context/QuizHolder";
import { QuizContext } from "./Context/QuizHolder";
import { useContext } from "react";


function App() {
  const {start,exit} = useContext(QuizContext);
  return (
    <>
      {
        exit === false
          ?
          <>
            {
              start === true
                ?
                <Quiz />
                :
                <Start />
            }
          </>
          : <Result />
      }
      
      {/* <Result/> */}
      </>
  );
}

export default App;
