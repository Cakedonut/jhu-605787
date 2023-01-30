(() => {
  const speakWord = "Good Bye";

  const byeSpeaker = (name) => {
    console.log(speakWord + " " + name);
  }

  const byeSpeakSimple = (name) => {
    return speakWord + " " + name;
  };

  window.byeSpeaker = byeSpeaker;
  window.byeSpeakSimple = byeSpeakSimple;
})();