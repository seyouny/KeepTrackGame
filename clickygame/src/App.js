import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/Player";
import haikyuu from "./haikyuu.json"

class App extends React.Component {
  render()
  {
    return (
    <Wrapper>
      <Title>Clicky Game!</Title>
      {haikyuu.map(function(player){
       return <FriendCard
        id = {player.id}
        name={player.name}
        image={player.image}
      />
      })
      }
      
    </Wrapper>
  );
}
  
}

export default App;
