import React, { useState } from 'react';
import EditForm from './EditForm';

function SpongeBobBox ({
    character,
    editing,
    onEditClick,
    onDeleteClick,
    onSaveClick,
  }) {
    const [editForm, setEditForm] = useState({
      name: character.name,
      description: character.description,
      image: character.image,
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditForm({ ...editForm, [name]: value });
    };
  
    return (
      <div className="character-box">
        {editing ? (
          <EditForm
            editForm={editForm}
            onInputChange={handleInputChange}
            onSaveClick={() => onSaveClick(character.id, editForm)}
          />
        ) : (
          <li>
            <img
              src={character.image}
              alt={character.name}
              className="character-portrait"
            />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
            <button onClick={onEditClick}>Edit</button>
            <button onClick={onDeleteClick}>Delete</button>
          </li>
        )}
      </div>
    );
  }
  

export default SpongeBobBox