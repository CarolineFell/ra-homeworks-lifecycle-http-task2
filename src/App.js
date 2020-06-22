import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header/Header';
import LoadData from './components/LoadData/LoadData';
import AddForm from './components/AddForm/AddForm';
import NotesList from './components/NotesList/NotesList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    };

    this.notesURL = "https://ra-homeworks-lifecycle-server2.herokuapp.com/notes";
  }

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    axios
      .get(this.notesURL)
      .then(response => this.setState({ notes: response.data }));
  };

  handleAdd = note => {
    axios.post(this.notesURL, note).then(() => this.loadNotes());
  };

  handleDelete = id => {
    axios.delete(`${this.notesURL}/${id}`).then(() => this.loadNotes());
  };

  render() {
    console.log(this.state.notes);
    return (
      <div className="App">
        <Header />
        <div className="ui text container segment">
          <LoadData loadData={this.loadNotes}/>
          <NotesList notes={this.state.notes} handleDelete={this.handleDelete} />
          <AddForm handleAdd={this.handleAdd} />
        </div>
      </div>
    );
  }
}

export default App;