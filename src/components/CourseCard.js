import { useContext, useState } from "react";
import { TodosContext } from "../App";

const CourseCard = (props) => {
  const {dispatch} = useContext(TodosContext)
  return (
    <>
      <p>This is Course card</p>
      {
      
      props.todos.map((course)=>{
          return (
            <>
              <tr>
                <td>
                <p>วิชา : {course.name}</p>
                <p>เกรด : {course.grade}</p>
                <p>หน่วยกิต: {course.cred}</p>
                </td>
                <td>
                  <button onClick ={()=>{
                    dispatch({
                      type : "DELETE_TODO",
                      payload : course.id
                    })
                  }}>x</button>
                </td>
              </tr>
            </>
          )
        })
        }
    </>
  );
};

export default CourseCard;
