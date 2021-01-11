import { createContext, useReducer,useState,useEffect } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";

export const TodosContext = createContext({});

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return {
          ...state,
          myTodos: [...state.myTodos, action.payload],
        };
      case "SET_TODO":
        return {
          ...state,
          myTodos: action.payload,
        };
      case "DELETE_TODO":
        return {
          ...state,
          myTodos: state.myTodos.filter((todo) => todo.id !== action.payload),
        };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, {myTodos: [],});
  
  const [GPA,setGPA] = useState(0.00)
  const calc = (course) => {
    var gpa = 0
    var cred = 0
    course.forEach(c => {
      if(c.grade !== "W"){
        gpa += Number(c.val) *Number(c.cred)
        cred += Number(c.cred)
      }      
    });
    gpa = Number(gpa)/ Number(cred)
    if(gpa > 0.00){
      setGPA(gpa)
    }else{
      setGPA(0.00)
    }
  }

  function fetchTodos() {
    const localTodos = localStorage.getItem("myTodos");
    if (localTodos) {
      dispatch({
        type: "SET_TODO",
        payload: JSON.parse(localTodos),
      });
    }
  }

  useEffect(fetchTodos, []);

  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(state.myTodos));
    calc(state.myTodos)
  }, [state.myTodos]); 
  return (
    <>
      {/* TODO ADD UI */}
      <TodosContext.Provider value={{ state, dispatch }}>
        <h1>GPA CALCULATOR</h1>
        <div>
          <CourseCard  todos={state.myTodos} />
        </div>  
          <CourseForm />
        <h1>GPA : {GPA.toFixed(2)}</h1>
    </TodosContext.Provider>
    </>
  );
}

export default App;
