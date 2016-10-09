import React from 'react';

import Tasker from '../../components/Tasker'

import Paper from 'material-ui/Paper';

import ReactMarkdown from 'react-markdown';

const styles = {
  noteArea: {
    marginTop: '30px'
  },
  notePaper: {
    margin: '10px',
    padding: '10px',
    textAlign: 'left'
  }
}

export default class NotesManager extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [{
        title: 'Mahanandi Trip',
        text:'Mahanandi trip planned at 6.00 AM Tomorrow'
      }, {
        title: 'App Fabric Deployment',
        text: 'Develop App Fabric for Deployment'
      }]
    }
  }

  render() {
    const notes = this.state.notes.map((note,index) => {
      return (
        <div className="col-md-4 col-lg-3" key={index}>
          <Paper style={styles.notePaper} zDepth={2}>
            <h3>{note.title}</h3>
            <div>
              <ReactMarkdown source={note.text} />
            </div>
          </Paper>
        </div>
      );
    });

    return (
      <div className="container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6 col-lg-4">
            <Tasker createNewNote={this.handleCreateNewNote.bind(this)}/>
          </div>
        </div>
        <div style={styles.noteArea}>
          <div className="row center-xs">
            {notes}
          </div>
        </div>
      </div>
    );
  }

  handleCreateNewNote(note) {
    const notes = this.state.notes;
    notes.push(note);

    this.setState({notes});
  }
}
