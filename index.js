// Code your solutions in this file
function writeCards(names, eventName) {
    const thankYouCards = [];
    for (let i = 0; i < names.length; i++) {
      thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouCards;
  }
  
  function countDown(positiveInteger) {
    while (positiveInteger >= 0) {
      console.log(positiveInteger);
      positiveInteger--;
    }
  }
  
  const names = ["Charlie", "Samip", "Ali"];
  const eventName = "birthday";
  const thankYouCards = writeCards(names, eventName);
  
  console.log(thankYouCards);
  
  const countdownValue = 10;
  countDown(countdownValue);
  
