import React from 'react';

import '../../scss/note.scss';

export default class Note extends React.Component {
  constructor() {
    super();

    this.state = {
      //responsible for normal & edit mode in note
      editing: false
    }
  }

  //styling and displaying components before rendering
  componentWillMount() {
    this.style = {
      right: this.randomDisplay(0, window.innerWidth - 300, 'px'),
      top: this.randomDisplay(0, window.innerHeight - 300, 'px')
    }
  }

  randomDisplay(x, window, px) {
    //note distance from the edges
    return (x + Math.ceil(Math.random() * (window - x)) + px)
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


  renderTextForm() {
    return (
      <div className='note' style = {this.style}>
        <textarea
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
      <div className='note' style = {this.style}>
        <div>{this.props.children}</div>
          <button onClick = {() => this.editText()}> EDIT </button>
          <button onClick = {() => this.remove()}> DELETE </button>
      </div>
    );
  }



  render() {
    return (this.state.editing)
    ? this.renderTextForm()
    : this.renderNote()
  }
}
