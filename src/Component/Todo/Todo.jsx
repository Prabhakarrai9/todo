import "./Todo.css";
import React, { useState } from "react";
const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    // setlistData([...listData,activity])
    // console.log(listData);
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity("");
      return updatedList;
    });
  }
  function removeActivity() {
    const updatedList = [...listData, activity];
    console.log(updatedList);
    setActivity("");
    return updatedList;
  }
  return (
    <div className="container">
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="Add activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button className="btn" onClick={addActivity}>
        Add
      </button>
      <div className="container2">
        <h4>Here is your list:{")"}</h4>
      </div>
      {listData != [] &&
        listData.map((data, i) => {
          return (
            <div className="i" key={i}>
              <h4 className="listdata">
                <div>{data}</div>
              </h4>
              <button className="btn" onclick={() => removeActivity(i)}>
                remove{"-"}
              </button>
            </div>
          );
        })}
      {/* <div className="container3">
        <input type="text" placeholder="Practical Coading" />
        <button className="btn">remove</button>
      </div> */}
    </div>
  );
};
export default Todo;
