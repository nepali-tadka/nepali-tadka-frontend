import PropTypes from "prop-types";
import React from "react";
import ReactModal from "react-modal";

import Button from "../button/button";
import "./delete-dialog.css";

ReactModal.setAppElement("#root");

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onDelete }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation"
      className="delete-confirmation-modal"
    >
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this recipe?</p>
      <div className="modal-actions">
        <Button
          variant="ghost"
          onClick={onRequestClose}
          className="cancel-button"
        >
          Cancel
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </ReactModal>
  );
};

DeleteConfirmationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteConfirmationModal;
