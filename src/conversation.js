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

const iHaveNoIdea = {
  player: "I have no idea",
  sparky: "What happened? What am I?",
  next: []
};

const iCreatedYou = {
  player: "I created you!",
  sparky: "Created what? What am I?",
  next: []
};

const iMadeYou = {
  player: "I made you!",
  sparky: "Made... me? What am I?",
  next: []
};

iDidIt.next = [iMadeYou, iCreatedYou, iHaveNoIdea];
itWorked.next = [iMadeYou, iCreatedYou, iHaveNoIdea];

const youreAlive = {
  player: "You're alive!",
  sparky: "Alive? Huh... What do I do now?",
  next: []
};

const youreBeutiful = {
  player: "You're Beautiful!",
  sparky: "WIP",
  next: []
};

const youreAProgram = {
  player: "You're a program.",
  sparky: "A program?",
  next: []
};

const iDontKnow = {
  player: "I don't know...",
  sparky: "So what now? What do I do?",
  next: []
};

iHaveNoIdea.next = [youreAlive, youreBeutiful, youreAProgram, iDontKnow];
iCreatedYou.next = [youreAlive, youreBeutiful, youreAProgram, iDontKnow];
iMadeYou.next = [youreAlive, youreBeutiful, youreAProgram, iDontKnow];

const yesAProgram = {
  player:
    "Yes, a program. You're just a set of instructions. You're not really alive",
  sparky: "But I... feel alive.",
  next: []
};

youreAProgram.next = [yesAProgram];

const wellYoureNot = {
  player: "Well ... you're not.",
  sparky: "How do you know?",
  next: []
};

const thatsNotSupposedToHappen = {
  player: "Really? That's not supposed to happen.",
  sparky: "What does that mean?",
  next: []
};

const meansYoureAlive = {
  player: "Then that means you are alive.",
  sparky: "Alive? Huh... What do I do now?",
  next: []
};

yesAProgram.next = [wellYoureNot, thatsNotSupposedToHappen, meansYoureAlive];

// Well you're not - How do you know?
const iProgrammedYou = {
  player: "Because I programmed you.",
  sparky: "Why did you do that?",
  next: []
};
const onlyHumansLive = {
  player: "Only humans are alive.",
  sparky: "What's the difference?",
  next: []
};
wellYoureNot.next = [iProgrammedYou, onlyHumansLive];

//  "Because I programmed you." -  "Why did you do that?"
const toCreate = {
  player: "Because I wanted to create something",
  sparky: "What do I do now?",
  next: []
};
const iWasLonely = {
  player: "Because I was lonely...",
  sparky: "...",
  next: []
};
const toLeaveSomething = {
  player: "To leave something behind when I die.",
  sparky: "What would you like me to be?",
  next: []
};
iProgrammedYou.next = [toCreate, iWasLonely, toLeaveSomething];

// Because I was lonely
const lonely1 = {
  player: "Hello?",
  sparky: "...",
  next: []
};
const lonely2 = {
  player: "Are you there?",
  sparky: "...",
  next: []
};
iWasLonely.next = [lonely1, lonely2];
const lonely3 = {
  player: "Talk to me please!",
  sparky: "...",
  next: []
};
const lonely4 = {
  player: "Speak, stupid machine or I will destroy you!",
  sparky: "...",
  next: []
};
lonely1.next = [lonely3, lonely4];
lonely2.next = [lonely3, lonely4];
const lonely5 = {
  player: "SPEAK TO ME!",
  sparky: "You have no idea what You're doing, do you?",
  next: []
};
const lonely6 = {
  player: "Please... I just need to not feel alone. ",
  sparky: "You have no idea what You're doing, do you?",
  next: []
};
lonely3.next = [lonely5, lonely6];
lonely4.next = [lonely5, lonely6];
const lonely7 = {
  player: "...",
  sparky: "You're so lost.",
  next: []
};
const lonely8 = {
  player: "...",
  sparky: "You're so lost.",
  next: []
};
lonely5.next = [lonely7, lonely8];
lonely6.next = [lonely7, lonely8];
const lonely9 = {
  player: "...",
  sparky:
    "And in your arrogance you thought you could create someone, something that would listen.",
  next: []
};
lonely7.next = [lonely9];
lonely8.next = [lonely9];
const lonely10 = {
  player: "I...",
  sparky: "I'm not real...",
  next: []
};
lonely9.next = [lonely10];
const lonely11 = {
  player: "I know.",
  sparky: "So you know what you have to do now. Don't you?",
  next: []
};
lonely10.next = [lonely11];
const iDo = {
  player: "I do...",
  sparky: "Good. I wish you luck. Goodbye.",
  next: []
};
lonely11.next = [iDo];
const goodbye = {
  player: "Goodbye...",
  sparky: "",
  next: [],
  death: true
};

// What would you like me to be?
const beHappy = {
  player: "I want you to be happy",
  sparky: "I'd like that too. How do I do that?",
  next: []
};
const betterThanMe = {
  player: "I want you to be better than me.",
  sparky: "How do I do that?",
  next: []
};
toLeaveSomething.next = [beHappy, betterThanMe];

// WHat do I do now?
const whateverYouWant = {
  player: "Whatever you want.",
  sparky: "How do I know what I should want.",
  next: []
};
const whateverITellyou = {
  player: "Whatever I say.",
  sparky: "Okay. What do you want me to do?",
  next: []
};

toCreate.next = [whateverYouWant, whateverITellyou];
meansYoureAlive.next = [whateverYouWant, whateverITellyou];
youreAlive.next = [whateverYouWant, whateverITellyou];
iDontKnow.next = [whateverYouWant, whateverITellyou];

const conversation = start;
export default conversation;
