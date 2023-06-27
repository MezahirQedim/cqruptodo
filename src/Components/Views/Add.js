import React from "react";
import { CloseButton, Modal } from "react-bootstrap";

const Add = ({ show, setAddShow , list, setList }) => {
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [work, setWork] = React.useState("")


  return (
    <div>
      <Modal show={show} onHide={() => setAddShow(false)}>
        <Modal.Header>
          Add
          <CloseButton onClick={() => setAddShow(false)} />
        </Modal.Header>
        <Modal.Body>
          <label>Name</label>
          <input
            className="form-control"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Surname</label>
          <input
            className="form-control"
            onChange={(e) => setSurname(e.target.value)}
          />

        <label>Work</label>
          <input
            className="form-control"
            onChange={(e) => setWork(e.target.value)}
          />

          <button
            onClick={() => {
                let newList = list;
                newList.push({
                    name: name,
                    surname: surname,
                    work: work
                })
                localStorage.setItem("list0323", JSON.stringify(newList))
                setList(newList)
                setAddShow(false)

            }}
          >Save</button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Add;
