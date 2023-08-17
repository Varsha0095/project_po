import React, {useState} from "react";
import "./Footer.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { userList } from "../../config";



const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="footer">
      <Button style={{marginLeft: "80rem", width: "200px"}} variant="primary" onClick={handleShow}>
        Chats
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="bottom-right-modal">
        <Modal.Header closeButton>
          <Modal.Title>Chats</Modal.Title>
        </Modal.Header>
        {userList.map((u) => {return (
          <Modal.Body key={u.id}>{`🟣 ${u.name}`}</Modal.Body>
        )})}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Footer;
