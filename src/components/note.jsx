import React from 'react';
import Draggable from 'react-draggable';

import '../styles/note.css';

export default class Note extends React.Component {
  constructor() {
    super();

    this.state = {
      editing: false,
      statusColors: ['#E7FB00', '#74E100', '#FF4C99', '#48BEDD'],
      colorIndex : 0,
      backgroundColor: '',
    }
  }

  //styling and displaying components before rendering
  componentWillMount() {
    let colorArr = this.state.statusColors;
    let random = colorArr[Math.floor(Math.random() * colorArr.length)];

    this.style = {
      right: this.randomDisplay(window.innerWidth - 300, 'px'),
      top: this.randomDisplay(window.innerHeight - 300, 'px'),
      backgroundColor: random
    }
  }

  randomDisplay(window, px) {
    //note's distance from the edges
    return (Math.ceil(Math.random() * window) + px)
  }

  editText() {
    this.setState({editing: true});
  }

  saveText() {
    //passing new text typed in note's textarea
    this.props.update(this.refs.refTextVal.value, this.props.index);
    this.setState({editing: false})
  }

  remove() {
    this.props.remove(this.props.index)
  }

  noteStatus() {
    let color = this.state.statusColors;
    let colorIndex = this.state.colorIndex;
    this.setState({backgroundColor: color[colorIndex]});
    //incrementing to 3 and going back to 0
    this.setState({colorIndex: (colorIndex + 1) % (color.length)}) ;

    this.noteColor = {
      backgroundColor: color[colorIndex]
    }
  }

  renderNote() {
    return (
      // Object.assign({}) allows to add multiple styles from different func
      <div className='note'
        style = {Object.assign({}, this.style, this.noteColor)}>
        <div className='text'><p>{this.props.children}</p></div>
        <div className='btns'>
          <button onClick = {() => this.editText()}> EDIT </button>
          <button onClick = {() => this.noteStatus()}> STATUS
          </button>
          <button onClick = {() => this.remove()}> DELETE
          </button>
        </div>
      </div>
    );
  }


  renderTextForm() {
    return (
      <div className='note'
        style = {Object.assign({}, this.style, this.noteColor)}>
        <textarea autoFocus ref = 'refTextVal'
          defaultValue = {this.props.children}>
        </textarea>
        <div className='btns'>
          {/* no need for bind(this) when using fat arrow */}
          <button onClick = {() => this.saveText()} >SAVE</button>
        </div>
      </div>
    );
  }


  render() {
    return (
      <Draggable>
        {(this.state.editing) ? this.renderTextForm() : this.renderNote()}
      </Draggable>
    )
  }
}
