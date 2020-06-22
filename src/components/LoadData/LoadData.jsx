import React from 'react';
import PropTypes from 'prop-types';
import './LoadData.css';

const LoadData = ({ loadData }) => {
  return (
    <div className="ui segment reload">
      <h2 className="large header">Notes</h2>
      <button className="ui reload button" type="button" onClick={loadData}>
        <i className="redo green icon"></i>
      </button>
    </div>
  )
}

LoadData.propTypes = {
  loadData: PropTypes.func.isRequired
};

export default LoadData;