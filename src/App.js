import React, { Component } from 'react';
import './App.css';
import {sampleText} from './sampleText'
import Marked from 'marked'
import Purify from 'dompurify';

class App extends Component {
  
  state = {contenu: sampleText}
  //oldLocalStorage = localStorage.setItem('mark', this.state.contenu)

  onChange = (event) => {
    this.setState({contenu : event.target.value})
    
  }

  componentDidMount = () => {
    if(localStorage.getItem('mark') == null) {
      localStorage.setItem('mark', this.state.contenu)
    }
    if(localStorage.getItem('mark') === ''){
      localStorage.setItem('mark', this.state.contenu)
    }
    if(localStorage.getItem('mark')){
      this.setState({contenu: localStorage.getItem('mark')})
    }
      document.getElementById('mark').innerHTML = Purify.sanitize(Marked(localStorage.getItem('mark')))
  }

  componentDidUpdate = () => {
      localStorage.setItem('mark',this.state.contenu)
      document.getElementById('mark').innerHTML = Purify.sanitize(Marked(localStorage.getItem('mark')))
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea value={this.state.contenu} onChange={this.onChange} className="form-control" rows="30">
            </textarea>
          </div>
          <div id='mark' className="col-sm-6">
          </div>
        </div>
      </div>
    )
  }
}

export default App;
