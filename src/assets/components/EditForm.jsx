import React from "react";

function EditForm({ editForm, onInputChange, onSaveClick }) {
  return (
    <div className="edit-form">
      <input
        type="text"
        name="name"
        value={editForm.name}
        onChange={onInputChange}
        placeholder="Name"
      />
      <textarea
        name="description"
        value={editForm.description}
        onChange={onInputChange}
        placeholder="Description"
      />
      <input
        type="text"
        name="image"
        value={editForm.image}
        onChange={onInputChange}
        placeholder="Image URL"
      />
      <button onClick={onSaveClick}>Save Changes</button>
    </div>
  );
}

export default EditForm;
