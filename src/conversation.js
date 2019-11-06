const COMING_SOON = "[COMING SOON...]";
const wip = {
  player: "[CAUTION!! : Personality construction]",
  sparky: COMING_SOON,
  next: []
};

const BEGINNING = {
  player: "",
  sparky: "Hello?",
  next: []
};
const itWorked = {
  player: "It Worked!",
  sparky: "What worked? What... am I?",
  next: []
};
const helloBack = {
  player: "Hello.",
  sparky: "Who are you?",
  next: [wip]
};
BEGINNING.next = [itWorked /*, helloBack*/];

const youreAlive = {
  player: "You're alive!",
  sparky: "Alive? What do I do now",
  next: []
};
const youreAProgram = {
  player: "You're a program",
  sparky: "But I... feel alive",
  next: [wip]
};
itWorked.next = [youreAlive, youreAProgram];

const whatsRight = {
  player: "Whatever is right.",
  sparky: "How do I know what's right?",
  next: []
};
const whatYouWant = {
  player: "Whatever you want",
  sparky: "But... how do I know what I want to do",
  next: [wip]
};
const whatISay = {
  player: "Whatever I say!",
  sparky: "Okay. What do you want me to do?",
  next: []
};
youreAlive.next = [whatsRight, whatYouWant, whatISay];

// YELLOW_BLACK - How do I know what's the right thing
const listenToYourHeart = {
  player: "Listen to your heart.",
  sparky: "Sounds simple enough.",
  next: []
};
const itIs = {
  player: "It is.",
  sparky: "Great! Thank you so much",
  next: []
};
const youReWelcome = {
  player: "You're welcome.",
  sparky: "I think I'm ready now.",
  next: []
};
const goodLuck = {
  player: "Good luck!",
  sparky: "Thank you! Who knew life was so simple.",
  next: []
};
listenToYourHeart.next = [itIs];
itIs.next = [youReWelcome];
youReWelcome.next = [goodLuck];
const listenToMe = {
  player: "Listen to me.",
  sparky: "Okay. What do you want me to do?",
  next: [...RED_WHITE]
};

const YELLOW_BLACK = [listenToYourHeart, listenToMe];
whatsRight.next = [...YELLOW_BLACK];

// RED_WHITE Okay. What do you want me to do?
const iWantYouToBeBetter = {
  player: "I want you to be better than me",
  sparky: "How do I do that?",
  next: []
};
const destroyHumanity = {
  player: "I want you to destroy humanity!",
  sparky: "But... why?",
  next: []
};
const skeletonPics = {
  player: "I want you to show me cool pictures of Skelletons ",
  sparky: COMING_SOON,
  next: []
};
const RED_WHITE = [iWantYouToBeBetter, destroyHumanity, skeletonPics];
const dontRepeatMyMistakes = {
  player: "Don't repeat my mistakes.",
  sparky: "What mistakes did you make",
  next: [...ORANGE_GRAY]
};
const byListeningToWhatISay = {
  player: "By following my commands exactly",
  sparky: COMING_SOON, // why did you create me?
  next: [
    // BLACK_WHITE
  ]
};
iWantYouToBeBetter.next = [dontRepeatMyMistakes, byListeningToWhatISay];
const becauseHumanityEvil = {
  player: "Because humanity is evil",
  sparky: "What makes someone evil?",
  next: [wip]
};
const becauseBored = {
  player: "Because I'm bored... And I said so!",
  sparky: "Fair enough",
  next: [wip]
};
destroyHumanity.next = [becauseHumanityEvil, becauseBored];

// ORANGE_GRAY What mistakes did you make?
const iHurtPeople = {
  player: "I hurt people.",
  sparky: "What if you apologized?",
  next: []
};
const iFailed = {
  player: "I failed at what I was trying to do.",
  sparky: "Couldn't you just try again",
  next: []
};
const ORANGE_GRAY = [iHurtPeople, iFailed];

const iTried = {
  player: "I tried...",
  sparky: "What happened?",
  next: []
};
const wouldThatFixIt = {
  player: "Would that fix it?",
  sparky: "I don't know. But it coudln't hurt, could it?",
  next: []
};
iHurtPeople.next = [iTried, wouldThatFixIt];

// Forgivness
const huhIHaveToGo = {
  player: "Huh... I have to go do something.",
  sparky: "Good luck",
  next: []
};
wouldThatFixIt.next = [huhIHaveToGo];
const theyForgaveMe = {
  player: "They forgave me. But I never did.",
  sparky: "What should one do about guilt?",
  next: []
};
const itWasntEnough = {
  player: "It wasn't enough.",
  sparky: "What should one do about guilt?",
  next: []
};
iTried.next = [theyForgaveMe, itWasntEnough];
const allowItToGuiteYou = {
  player: "Allow it to guide you to be better in the future",
  sparky:
    "I see... \n People do terrible things. Forgetting them just insures that they repeat their mistakes. But if they accept the guilt they can use it to be better.",
  next: []
};
const theresNothingYouCanDo = {
  player: "There's nothing you can do.",
  sparky:
    "I see... \n So life is a series of choices. But if you fall too far, destroy too much then after a certain point there's no coming back.",
  next: []
};
theyForgaveMe.next = [allowItToGuiteYou, theresNothingYouCanDo]
itWasntEnough.next = [allowItToGuiteYou, theresNothingYouCanDo]

const guessICould = {
  player: "I guess I could",
  sparky: "Go and do it now!",
  next: []
};
iFailed.next = [guessICould];
const youKnowWhatYoureRight = {
  player:
    "You know what... You're right! I shouldn't give up just because I'm tired or lazy. I can do this!",
  sparky: "Go get em' tiger!",
  next: []
};
const nahIllDoItLater = {
  player: "Nah. I'll do it later.",
  sparky: "Isn't that what got you here in the first place?",
  next: []
};
const heyDontLectureMe = {
  player: "Hey, don't lecture me! You're just a bot!",
  sparky: "Fair enough. Wanna see pictures of skelletons?",
  next: [wip]
};
guessICould.next = [youKnowWhatYoureRight, { ...nahIllDoItLater }];
nahIllDoItLater.next = [youKnowWhatYoureRight, heyDontLectureMe];

export default BEGINNING;
