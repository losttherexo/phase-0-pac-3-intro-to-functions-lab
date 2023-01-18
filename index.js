function shout(string) {
    return string.toUpperCase("Hello!");
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase("hello"))
  }

  function logWhisper(string) {
    console.log(string.toLowerCase("hello"));
  }

  function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case "hello":
            return "I can\'t hear you!";
        case "HELLO":
            return "YES INDEED!";
        case "Let's have dinner together!":
            return "I would love to!"
    } 
  }
