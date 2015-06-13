var Board = React.createClass({displayName: "Board",
  render: function() {
    var className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      React.createElement("div", {className: className}, 
        this.props.index + 1
      )
    );
  }
});




var BoardSwitcher = React.createClass({displayName: "BoardSwitcher",
  
  getInitialState: function(){
    var boardArray=[];
    for(var i=0; i<this.props.numBoards;i++){
     
     i===0 ? boardArray.push({isSelected:true}) : boardArray.push({isSelected:false})

    }
    //alert(boardArray);
    return{boards: boardArray };

  },
  toggle: function(){
    var boards = this.state.boards;
   // var boardArray=this.state.boards];
   console.log('hello');
    for(var i=0; i<boards.length; i++){
      if(boards[i].isSelected===true && boards.length-1===i){
        boards[i].isSelected=false;
        boards[0].isSelected = true;
        console.log(JSON.stringify(boards));
        break;
      }

      else if(boards[i].isSelected===true ){
        boards[i].isSelected=false;
        boards[i+1].isSelected = true;
        console.log(JSON.stringify(boards));
        break;
      }
      
    }
       this.setState({boards:boards});
  },
  render: function() {
    var boards = [];
    for (var ii = 0; ii < this.state.boards.length; ii++) {
     // var isSelected = ii === 0;
     isSelected = this.state.boards[ii].isSelected;
      boards.push(
        React.createElement(Board, {index: ii, selected: isSelected, key: ii})
      );
    }
    
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "boards"}, boards), 
        React.createElement("button", {onClick: this.toggle}, "Toggle")
      )
    );
  }
});

React.render(
  React.createElement(BoardSwitcher, {numBoards: 3}),
  document.body
);
