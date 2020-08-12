import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/Player";
import haikyuu from "./haikyuu.json"

class App extends React.Component {
  state = {
    score: 0,
    highscore: 0,
    randHaikyuu:[]
  }
  handleClick = () => {
    var rand;
    var x;
    var i;
    for (i = haikyuu.length - 1; i > 0; i--) {
        rand = Math.floor(Math.random() * (i + 1));
        x = haikyuu[i];
        haikyuu[i] = haikyuu[rand];
        haikyuu[rand] = x;
    }
    alert("clicked")
    this.setState({randHaikyuu:haikyuu});
  }
  
  render()
  {
    return (
    <Wrapper>
      <Title score = {this.score} highscore = {this.highscore}>Clicky Game!</Title>
      <div onClick = {this.handleClick}> 
      {haikyuu.map(function(player){
       return <FriendCard
        id = {player.id}
        name={player.name}
        image={player.image}
      />
      })
      }
      </div>
      
    </Wrapper>
  );
}
  
}

export default App;
