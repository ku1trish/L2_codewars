function bingo(ticket, win) {
  let miniWins = 0; 
  for (let i = 0; i < ticket.length; i++)
 {
    let pair = ticket[i];           
    let text = pair[0];            
    let tCode = pair[1];       
    let found = false;              
    for (let j = 0; j < text.length; j++) 
{
      let cCode = text.charCodeAt(j); 
      if (cCode === tCode) 
{
        found = true;               
        break;                      
      }
    }
    if (found)
 {
      miniWins = miniWins + 1;     
    }
  }
  if (miniWins >= win)
 {
    return "Winner!";
  } else {
    return "Loser!";
  }
}
