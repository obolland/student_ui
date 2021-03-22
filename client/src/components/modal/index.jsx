import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Slider from '../slider';

const FilterModal = ({buttonLabel}) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Filter By Year Group</ModalHeader>
        <ModalBody>
          <p className="mb-5">Drag Slider to select range of year groups</p>
           <Slider />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>GO</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default FilterModal;