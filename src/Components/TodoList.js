import React from "react";
import Add from "./Views/Add";

const TodoList = () => {
  const [addShow, setAddShow] = React.useState(false);
  const [list, setList] = React.useState(
    JSON.parse(localStorage.getItem("list0323")) || []
  );

  const [array, setArray] = React.useState([]);


  const Delete = (key) => {
    let newList = list
    newList.splice(key,1)
    setList([...newList])
    localStorage.setItem("list0323", JSON.stringify(newList))
  }


  // React.useEffect(() => {


  // },[])

  return (
    <div>
      <div className="d-flex justify-content-center mt-1">
        <button className="btn btn-primary" onClick={() => setAddShow(true)}>
          Add
        </button>
      </div>

      <Add
        show={addShow}
        setAddShow={setAddShow}
        list={list}
        setList={setList}
      />

      <div class="row row-cols-1 row-cols-md-3 g-4 mt-1">
        {list.map((item, key) => (
          <div class="col" key={key}>
            <div class="card">
              {/* <img src="..." class="card-img-top" alt="..."> */}
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Name: {item.name}
                </p>
                <div className="d-flex justify-content-between">
                  <button className="btn btn-danger"
                    onClick={() =>  Delete(key)}            
                  >
                    Delete
                  </button>
                  <button className="btn btn-info">
                    Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
