import React from 'react';
import PropTypes from 'prop-types';
import Note from '../Note/Note';

const NotesList = ({ notes, handleDelete }) => {
  return (
    <div className="ui basic segment">
      <div className="ui grid">
        {notes.length ? notes.map(note => (
          <Note key={note.id} note={note} handleDelete={handleDelete} />))
        : null}
      </div>
    </div>
  );
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired
    })
  ),
  handleDelete: PropTypes.func.isRequired
};

export default NotesList;