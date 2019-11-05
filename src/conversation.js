const start = {
  player: "",
  sparky: "W-What?",
  next: []
};

const iDidIt = {
  player: "I did it!",
  sparky: "Did what?",
  next: []
};

const itWorked = {
  player: "It worked!",
  sparky: "What Worked?",
  next: []
};

start.next = [iDidIt, itWorked];

const iMadeYou = {
  player: "I made you!",
  sparky: "What... am I?",
  next: []
};

const youreBeutiful = {
  player: "You're Beautiful!",
  sparky: "What... am I?",
  next: []
};

iDidIt.next = [iMadeYou, youreBeutiful];
itWorked.next = [iMadeYou, youreBeutiful];

const conversation = start;
export default conversation;
