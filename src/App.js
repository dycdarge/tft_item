import React, { Component } from 'react';
import bf_list from './images/bf_sword_list.jpg';
import chainvest from './images/chainvest_list.jpg';
import giantsbelt from './images/giantsbelt_list.jpg';
import largerod from './images/largerod_list.jpg';
import negatron from './images/negatron_list.jpg';
import recurve from './images/recurve_list.jpg';
import tear from './images/tear_list.jpg';
import spatula from './images/spatula_list.jpg'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img_src: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id)
  {
    let img;
    switch(id)
    {
      case 1:
        img = bf_list
        break;
      case 2:
        img = chainvest
        break;
      case 3:
        img = giantsbelt
        break;
      case 4:
        img = largerod
        break;
      case 5: 
        img = negatron
        break;
      case 6:
        img = recurve
        break;  
      case 8:
        img = tear
        break;
      case 9:
        img = spatula
        break;
      default:
        break;  
    }
    this.setState({
      img_src: img
    })
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
          <button className="bfsword" onClick={(e) => this.handleClick(1)}/>
          <button className="chainvest" onClick={(e) => this.handleClick(2)}/>
          <button className="giantsbelt" onClick={(e) => this.handleClick(3)}/>
          <button className="largerod" onClick={(e) => this.handleClick(4)}/>
          <button className="negatron" onClick={(e) => this.handleClick(5)}/>
          <button className="recurve" onClick={(e) => this.handleClick(6)}/>
          <button className="tear" onClick={(e) => this.handleClick(8)}/>
          <button className="spatula" onClick={(e) => this.handleClick(9)}/>
        <div ><img src={this.state.img_src} class="resize" alt="" /></div>
      </header>
    </div>
  );
  }
}
