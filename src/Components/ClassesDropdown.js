import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../css/app.css";

function ClassesDropdown( props ) {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3002/api/classes/get").then((data) => {
      console.log(data);
      setClassList(data.data);
    });
  }, []);

  const selectHandler = (e) => {
    props.onClassFetch(e.target.value);
  };

  return (
    <div>
      <select name="classesSelect" onChange={selectHandler}>
        {classList.map((val, key) => {
          return (
            <option key={key} value={val.id}>
              {val.class}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default ClassesDropdown;
