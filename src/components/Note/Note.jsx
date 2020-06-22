import React from 'react';
import PropTypes from 'prop-types';
import './Note.css';

const Note = ({ note, handleDelete }) => {
  return (
    <div className="five wide column">
      <div className="ui card">
        <div className="content">
          <div className="description">{note.content}</div>
        </div>
        <button className="ui attached button" onClick={() => handleDelete(note.id)}>
          <i className="delete red icon"></i>
        </button>
      </div>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    handleDelete: PropTypes.func
  })
};

export default Note;