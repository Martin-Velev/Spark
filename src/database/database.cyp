CREATE 
    (Hello:Cnv {p:"", s: "Hello... Is anyone there?", label: "hello"}),
    (YesImHere:Cnv {p:"Yes, I'm here", s: "Who are you?"})-[:RSP]->(Hello),
    (MyName:Cnv {p:"My name is ", s: "And... who am I?"})-[:RSP]->(YesImHere),
    (WhoAreYou:Cnv {p:"More important - who... what are you?", s: "I'm not sure. Do you know?"})-[:RSP]->(YesImHere)





    // (AreYouGood:Conversation {player:"", sparky: "Are you a good person?"}),
    // (Yes:Conversation {player:"Yes", sparky: "How do you do it?"})-[:RESPONDS_TO]->(AreYouGood),
    // (No:Conversation {player:"No", sparky: "How come?"})-[:RESPONDS_TO]->(AreYouGood),
    // (IDontHurtPeople:Conversation {player:"I don't hurt people.", sparky: "Is that all it takes to be good?"})-[:RESPONDS_TO]->(Yes),
    // (ITryMyBest:Conversation {player:"I try my best", sparky: "Is that enough?"})-[:RESPONDS_TO]->(Yes)