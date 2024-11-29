import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default class App extends Component {
  // apiKey = "b36a3b1d74f04ceaaaebca7da4a778fb";
  // apiKey = "7a7d92e077be45eaa5badcb4941dcba7";
  apiKey = process.env.REACT_APP_API_CODE;
  pageSize = 6;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <>

        <Router>
          <div className='customContainer'>
            <Navbar />
            <LoadingBar color='#d1dfdc' progress={this.state.progress} />
            <Routes>
              <Route path="/" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} category="general" country="us" />} />
              <Route path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} category="business" country="us" />} />
              <Route path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} category="entertainment" country="us" />} />
              <Route path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} category="health" country="us" />} />
              <Route path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} category="science" country="us" />} />
              <Route path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} category="sports" country="us" />} />
              <Route path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} apiKey={this.apiKey} category="technology" country="us" />} />
            </Routes>
            {/* <News setProgress = {setProgress} pageSize={20} apiKey={"7a7d92e077be45eaa5badcb4941dcba7"} category={"general"} country={"us"}/> */}
          </div>
        </Router>
      </>
    )
  }
}

