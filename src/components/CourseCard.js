import { useContext, useState } from "react";
import { TodosContext } from "../App";

const CourseCard = (props) => {
  const {dispatch} = useContext(TodosContext)
  return (
    <>
      {
      
      props.todos.map((course)=>{
          return (
            <>
            <div class= "coursecard" >
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
                  }}>X</button>
                </td>
              </tr>
            </div>
              
            </>
          )
        })
        }
    </>
  );
};

export default CourseCard;
