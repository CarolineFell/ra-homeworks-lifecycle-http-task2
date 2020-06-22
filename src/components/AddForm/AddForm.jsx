import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import NoteModel from '../../models/NoteModel';
import './AddForm.css';

const AddForm = ({ handleAdd }) => {
  const [form, setForm] = useState({ content: "" });

  const handleChange = event => {
    const { value } = event.target;
    setForm({ content: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const note = new NoteModel(shortid.generate(), form.content);
    handleAdd(note);
    setForm({ content: "" });
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="note">New Note</label>
          <div className="ui input">
            <textarea rows="3" id="note" name="note" value={form.content} onChange={handleChange} required />
          </div>
          <button className="ui add button" type="submit">
            <i className="paper plane outline icon"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired
};

export default AddForm;