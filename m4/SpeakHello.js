(() => {
  const speakWord = "Hello";

  const helloSpeaker = (name) => {
    console.log(speakWord + " " + name);
  };

  const helloSpeakSimple = (name) => {
    return speakWord + " " + name;
  };

  window.helloSpeaker = helloSpeaker;
  window.helloSpeakSimple = helloSpeakSimple;
})();