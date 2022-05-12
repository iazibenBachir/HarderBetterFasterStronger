const soundsList = [
  {
    audio: "WORK_IT.wav",
    text: "work it",
    keyword: "a",
  },
  {
    audio: "MAKE_IT.wav",
    text: "make it",
    keyword: "s",
  },
  {
    audio: "DO_IT.wav",
    text: "do it",
    keyword: "d",
  },
  {
    audio: "MAKES_US.wav",
    text: "makes us",
    keyword: "f",
  },
  {
    audio: "HARDER.wav",
    text: "harder",
    keyword: "g",
  },
  {
    audio: "BETTER.wav",
    text: "better",
    keyword: "h",
  },
  {
    audio: "FASTER.wav",
    text: "faster",
    keyword: "j",
  },
  {
    audio: "STRONGER.wav",
    text: "stronger",
    keyword: "k",
  },
  {
    audio: "MORE_THAN.wav",
    text: "more than",
    keyword: "l",
  },
  {
    audio: "HOUR.wav",
    text: "hour",
    keyword: "q",
  },
  {
    audio: "OUR.wav",
    text: "our",
    keyword: "w",
  },
  {
    audio: "NEVER.wav",
    text: "never",
    keyword: "e",
  },
  {
    audio: "EVER.wav",
    text: "ever",
    keyword: "r",
  },
  {
    audio: "AFTER.wav",
    text: "after",
    keyword: "t",
  },
  {
    audio: "WORK_IS.wav",
    text: "work is",
    keyword: "y",
  },
  {
    audio: "OVER.wav",
    text: "over",
    keyword: "u",
  },
];
const buttonsWrapper = document.querySelector(".buttons_wrapper");
const pressed_words = document.querySelector(".pressed_words");
let pressedWordsList = [];
document.addEventListener("keypress", keyPress);
function keyPress(event) {
  let key = event.key;
  const btn = document.querySelector(`[value='${key}']`);
  // Extract Sound Path
  const str = btn.getAttribute("onclick");
  const start = `'`;
  const end = `'`;
  const result = str.split(start)[1].split(end)[0];
  new Audio(result).play();
  // get pressed key coresponding text
  soundsList.forEach((item) => {
    if (item.keyword === key) {
      addWordToList(item.text);
    }
  });
  // transform: translateY(-2px);
  const front = btn.querySelector(".front");
  front.style.transform = "translateY(-2px)";
  const txt = front.querySelector(".txt");
  txt.style.color = "blue";
  const keywrd = front.querySelector(".keyword");
  keywrd.style.background = "blue";
  keywrd.style.color = "white";

  setTimeout(() => {
    front.style.transform = "translateY(-6px)";
    txt.style.color = "white";
    keywrd.style.background = "white";
    keywrd.style.color = "brown";
  }, "200");
}
function playAudio(url, text) {
  new Audio(url).play();
  addWordToList(text);
}
function addWordToList(txt) {
  // pressedWordsList = pressedWordsList.push(txt);
  let word = ` <span class="word_item">${txt + "," + "&nbsp &nbsp"}</span>`;
  pressed_words.innerHTML = pressed_words.innerHTML + word;
  console.log(pressed_words.innerHTML);
}
function displayButtons(soundsList) {
  let allSounds = "";
  soundsList.forEach((item, index) => {
    let btn = `  <button class="pushable" onclick="playAudio('./assets/audio/${item.audio}','${item.text}')" value="${item.keyword}">
      <div class="front"><span class="txt">${item.text}</span><span class="keyword">${item.keyword}</span></div>
    </button>`;
    allSounds = allSounds + btn;
  });
  buttonsWrapper.innerHTML = allSounds;
}

displayButtons(soundsList);
