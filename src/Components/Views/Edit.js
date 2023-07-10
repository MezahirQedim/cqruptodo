import React from "react";
import { Modal, CloseButton } from "react-bootstrap";

const Edit = ({infOpen, setInfOpen, info, list, setList, infoIndex}) => {

  const [name, setName] = React.useState("")
  const [surname, setSurname] = React.useState("")
  const [work, setWork] = React.useState("")

  console.log(list[infoIndex])

  const Edit = () => {
    let newList = list
    newList[infoIndex] = {
      name: name,
      surname: surname,
      work: work
    }
    setList([...newList])
    localStorage.setItem("list0323", JSON.stringify(newList))
    setInfOpen(false)

  }



  React.useEffect(() => {

    setName(info.name)
    setSurname(info.surname)
    setWork(info.work)

  },[infOpen])



  return (
    <div>
      <Modal show={infOpen} onHide={() => setInfOpen(false)}>
        <Modal.Header>
          Info
          <CloseButton  onClick={() => setInfOpen(false)} />
        </Modal.Header>
        <Modal.Body>
          <label>Name</label>
          <input 
            value={name}
            className="form-control" 
            onChange={(e) => setName(e.target.value)}

          />
          <label>Surname</label>
          <input 

            value={surname}
            className="form-control" 
            onChange={(e) => setSurname(e.target.value)}
            
          />

          <label>Work</label>
          <input 
            value={work}
            className="form-control" 
            onChange={(e) => setWork(e.target.value)}

            />

          <button className="btn btn-primary w-100 mt-1"
            onClick={() => Edit()}
          >Edit</button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Edit;
