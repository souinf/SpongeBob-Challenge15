import React from 'react'
import SpongeBobBox from './SpongeBobBox';

const SpongebobList = ({
    list,
    editingId,
    handleSaveClick,
    handleEditClick,
    handleDeleteClick,
  }) => {
    return (
      <ul>
        {list.map((character) => (
          <SpongeBobBox
            key={character.id}
            character={character}
            editing={editingId === character.id}
            onEditClick={() => handleEditClick(character)}
            onDeleteClick={() => handleDeleteClick(character.id)}
            onSaveClick={handleSaveClick}
          />
        ))}
      </ul>
    );
  };
export default SpongebobList