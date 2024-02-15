import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

const Todolist = () => {
  const [data, setData] = useState({
    Task: "",
    description: "",
  });

  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setData((prev) => {
      if (name === "Task") {
        return {
          ...prev,
          Task: value,
        };
      } else if (name === "Description") {
        return {
          ...prev,
          description: value,
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Task : ${data.Task}, Description : ${data.description} `);
    console.log(data)
    
   setTodo([...todo,{data}]);
   setData({
    Task:"",
    description:""
   })
    console.log(todo);
  };

  const inputTag = {
    width: "20rem",
    height: "4rem",
  };


  const handleDelete=(id)=>{


  let copytask=[...todo]
  copytask.splice(id,1)
  setTodo( copytask)
}

  let noTask=<h3 className="text-white text-center my-3 text-wrap">No Task Available...</h3> 
  let length=todo.length;

  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-12 bg-dark d-flex justify-content-center">
            <h1 className="text-white"> My TODO List </h1>
          </div>

          <div className="col-lg-6 my-3 p-3 border border-dark border-3">
            <form
              action="#"
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmit}
            >
              <input
                onChange={handleChange}
                value={data.Task}
                type="text"
                placeholder="Write Your Task..."
                name="Task"
                style={inputTag}
                className="border border-dark  border-2 rounded-pill fw-bold"
                autoComplete="off"
              />
              <input
                onChange={handleChange}
                value={data.description}
                className="border border-dark fw-bold mt-5 border-2 rounded-pill"
                type="text"
                name="Description"
                placeholder="Write a desc.."
                style={inputTag}
                autoComplete="off"
                
              />
              <button className="btn btn-dark my-3" disabled={data.Task.length===0}>Submit</button>
            </form>

            <hr />

            <div className="row bg-dark d-flex flex-column align-items-center">
           
              {
                
               length=== 0 ? noTask :todo.map((curr, id) => { 
                return (

                  <div className="col-lg-6 border border-2 border-white rounded-pill my-3 p-2 d-flex flex-column align-items-center" key={id}>
                  
                    <h3 className="text-white text-center my-3 text-wrap">{curr.data.Task}</h3> 
                    <p className="text-center my-3 text-wrap fw=bold" style={{color:"red"}}>{curr.data.description}</p> 
                    <MdOutlineDelete style={{color:"white",fontSize:"3rem"}} onClick={()=>handleDelete(id)}/> 

                 
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todolist;
