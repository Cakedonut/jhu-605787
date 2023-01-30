(() => {
  const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  names.forEach(name => {
    if (name.toLowerCase().startsWith('j')) {
      window.byeSpeaker(name);
    } else {
      window.helloSpeaker(name);
    }
  });

  const mapNamesWithGreetings = (name) => {
    if (name.toLowerCase().startsWith('j')) {
      return window.byeSpeakSimple(name);
    } else {
      return window.helloSpeakSimple(name);
    }
  };

  const namesWithGreetings = names.map(mapNamesWithGreetings);
  
  namesWithGreetings.forEach(nameWithGreeting => {
    console.log(nameWithGreeting);
  });

  const hello = [];
  const bye = [];

  namesWithGreetings.reduce((_, nameWithGreeting) => {
    if (nameWithGreeting.toLowerCase().startsWith("hello")) {
      hello.push(nameWithGreeting);
    } else {
      bye.push(nameWithGreeting);
    }
  }, {hello, bye});

  hello.forEach(nameWithGreeting => {
    console.log(nameWithGreeting);
  });

  bye.forEach(nameWithGreeting => {
    console.log(nameWithGreeting);
  });
})();
