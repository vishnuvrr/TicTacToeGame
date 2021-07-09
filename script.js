var changeText=(id,player)=>
{
  id.innerText=player;
}


var gameOver=()=>
{
  var gameboard=[[0,0,0],[0,0,0],[0,0,0]];
  for(let i=1;i<=3;i++)
  {
    for(let j=1;j<=3;j++)
    {
      gameboard[i-1][j-1]=document.querySelector(`.row${i} .col${j}`).innerText; 
    }
  }


  //row win
  var xgame=false;
  var ygame=false;
  for(let i=0;i<3;i++)
  {
    var xwon=0;
    var owon=0;
    for(let j=0;j<3;j++)
    {
      if(gameboard[i][j]==="X")
      {
        xwon++;
      }
      if(gameboard[i][j]==="O")
      {
        owon++;
      }
    }
    if(xwon===3)
    {
      xgame=true;
    }
    if(owon===3)
    {
      ygame=true;
    }
  }


  //col win
  for(let i=0;i<3;i++)
  {
    xwon=0;
    owon=0;
    for(let j=0;j<3;j++)
    {
      if(gameboard[j][i]==="X")
      {
        xwon++;
      }
      if(gameboard[j][i]==="O")
      {
        owon++;
      }
    }

    if(xwon===3)
    {
      xgame=true;
    }
    if(owon===3)
    {
      ygame=true;
    }
    
  }

  xwon=0;
  owon=0;

  //diagonal win
  for(let i=0;i<3;i++)
  {

    if(gameboard[i][i]==="X")
    {
      xwon++;
    }
    if(gameboard[i][i]==="O")
    {
      owon++;
    }
  }
  if(xwon===3)
  {
    xgame=true;
  }
  if(owon===3)
  {
    ygame=true;
  }

  xwon=0;
  owon=0;
  for(let i=2;i>=0;i--)
  {


    if(gameboard[i][2-i]==="X")
    {
      xwon++;
    }
    if(gameboard[i][2-i]=="O")
    {
      owon++;
    }
  }

  if(xwon===3)
  {
    xgame=true;
  }
  if(owon===3)
  {
    ygame=true;
  }


  if(xgame)
  {
    document.getElementById("player-info").innerText="Player one won the game";
  }
  else if(ygame)
  {
    document.getElementById("player-info").innerText="Player two won the game";
  }

  
}



var player="O";

var game=(id)=>
{
  var board=id.innerText;
  if(board!=="")
  {
    console.log("Invalid Move");
  }
  else{
    if(player==="X")
    {
      document.getElementById("player-info").innerText="Player one's turn";
      player="O";
    }
    else{
      document.getElementById("player-info").innerText="Player two's turn";
      player="X";
    }
    console.log(player);
    changeText(id,player);
    gameOver();
  }
}

var restartGame=()=>
{
  location.reload();
}