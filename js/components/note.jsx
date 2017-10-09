import React from 'react';
import Draggable from 'react-draggable';

import '../../scss/note.scss';

export default class Note extends React.Component {
  constructor() {
    super();

    this.state = {
      //responsible for normal & edit mode in note
      editing: false,
      bc: ['green', 'red', 'white'],
      colorIndex : 0
    }
  }

  //styling and displaying components before rendering
  componentWillMount() {
    this.style = {
      right: this.randomDisplay(window.innerWidth - 300, 'px'),
      top: this.randomDisplay(window.innerHeight - 300, 'px')
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

  selectText() {
    this.select(this.refs.refTextVal.value);
  }

  color() {
    let color = this.state.bc;
    console.log(color[this.state.colorIndex]);
    this.state.colorIndex = (this.state.colorIndex + 1) % (color.length);

  }


  renderTextForm() {
    return (
      <div className='note' style = {this.style}>
        <textarea
          autoFocus
          ref = 'refTextVal'
          defaultValue = {this.props.children}>
        </textarea>
        {/* no need for bind(this) when using fat arrow */}
        <button onClick = {() => this.saveText()} >SAVE</button>
      </div>
    );
  }



  renderNote() {
    return (
      <div className='note'
        style = {{backgroundColor: 'this.color()'}}
        onClick = {() => this.color()}>
        <div>{this.props.children}</div>
          <button onClick = {() => {
              this.editText();
              this.selectText.bind(this);
            }}> EDIT </button>
          <button onClick = {() => this.remove()}> DELETE </button>
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
