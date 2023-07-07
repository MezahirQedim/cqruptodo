import React from "react";
import Add from "./Views/Add";
import user from "../Img/user.png";
import user_smile from "../Img/user_smile.png";
import Edit from "./Views/Edit";

const TodoList = () => {
  const [addShow, setAddShow] = React.useState(false);
  const [list, setList] = React.useState(
    JSON.parse(localStorage.getItem("list0323")) || []
  );
  const [image, setImage] = React.useState(user);
  const [hover, setHover] = React.useState();


  // İnfo
  const [infOpen, setInfOpen] = React.useState(false);
  const [info, setInfo] = React.useState({})

  const Delete = (key) => {
    let newList = list;
    newList.splice(key, 1);
    setList([...newList]);
    localStorage.setItem("list0323", JSON.stringify(newList));
  };


  console.log(list)

  return (
    <div>
      <Add
        show={addShow}
        setAddShow={setAddShow}
        list={list}
        setList={setList}
      />

      <Edit 

        infOpen={infOpen} 
        setInfOpen={setInfOpen}
        info={info}

        
      />

      <div className="d-flex justify-content-center mt-1">
        <button className="btn btn-primary" onClick={() => setAddShow(true)}>
          Add
        </button>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 mt-1 mx-2">
        {list.map((item, key) => (
          <div class="col" key={key}>
            <div
              class="card"
              onMouseEnter={() => {
                setImage(user_smile);
                setHover(key);
              }}
              onMouseLeave={() => setImage(user)}
            >
              <img src={hover === key ? image : user} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Name: {item.name}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => Delete(key)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-info"
                    onClick={() => 
                      {
                        setInfOpen(true)
                        setInfo(item)
                      }
                    }
                  >
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
