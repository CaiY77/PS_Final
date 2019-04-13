class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
} // Node Class
// testing

class LinkedList {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    // creates a new node
    var node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } // if first node, make it the head
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    } // move to end of list, assign it to the last element's next.

    this.size++; // increment list length.
  }

  findPic(index) {
    let current = this.head;
    let counter;

    for (counter = 1; counter <= this.size; counter++) {
      if (counter == index) {
        return current.element;
      } else {
        current = current.next;
      }

    }
  } // find(index)

}

/*LINKEDLIST AND NODE CLASS ABOVE-----------------------------------------*/
let mygif = document.getElementById('landing');
let cover = document.getElementById('opening2');

let sound = new Audio();
sound.src = '../images/riot.mp3';


window.addEventListener('load', () => {


  mygif.style.display = 'block';

  setTimeout(() => {
    sound.play();
  }, 500); // play an audio that corresponds with the 'gif/webp'

  setTimeout(() => {
    cover.style.display = 'block';
    sound.pause();
  }, 8500);
  // set a 8.5s delay that covers gif with picture, ES6 way.

}); // addEventListener that triggers on load, ES6 way.

/*Landing Page Above--------------------------------------------------------*/
/*Top page START-------------------------*/
$(document).ready(function() {
  let darSkins = new LinkedList();
  darSkins.add('../images/darius/god-king.jpg');
  darSkins.add('../images/darius/AcademySkin.jpg');
  darSkins.add('../images/darius/BioforgeSkin.jpg');
  darSkins.add('../images/darius/DreadnovaSkin.jpg');
  darSkins.add('../images/darius/DunkMasterSkin.jpg');
  darSkins.add('../images/darius/LordSkin.jpg');
  darSkins.add('../images/darius/WoadKingSkin.jpg');

  let img = 1;
  let length = 7;



  setInterval(() => {
    img++;

    if (img > length) {
      img = 1;
    }


    $('#dar').attr('src', darSkins.findPic(img));


  }, 3000); // every 4 seconds, switch the picture and increment index

});
/*Top page END----------------------------*/
/*Mid page START--------------------------*/
$(document).ready(function() {
  let oriSkins = new LinkedList();
  oriSkins.add('../images/orianna/DarkStarSkin.jpg');
  oriSkins.add('../images/orianna/BladecraftSkin.jpg');
  oriSkins.add('../images/orianna/HeartseekerSkin.jpg');
  oriSkins.add('../images/orianna/VictoriousSkin.jpg');
  oriSkins.add('../images/orianna/WinterWonderSkin.jpg');


  let imgO = 1;
  let lengthO = 5;



  setInterval(() => {
    imgO++;

    if (imgO > lengthO) {
      imgO = 1;
    }


    $('#ori').attr('src', oriSkins.findPic(imgO));



  }, 3000); // every 4 seconds, switch the picture and increment index

});

/*Mid page END--------------------------*/
/*Jungle page START--------------------------------*/

$(document).ready(function() {
  let leeSkins = new LinkedList();
  leeSkins.add('../images/leesin/GodFistSkin.jpg');
  leeSkins.add('../images/leesin/AcolyteSkin.jpg');
  leeSkins.add('../images/leesin/DragonFistSkin.jpg');
  leeSkins.add('../images/leesin/MuayThaiSkin.jpg');
  leeSkins.add('../images/leesin/TraditionalSkin.jpg');


  let imgL = 1;
  let lengthL = 5;



  setInterval(() => {
    imgL++;

    if (imgL > lengthL) {
      imgL = 1;
    }


    $('#lee').attr('src', leeSkins.findPic(imgL));



  }, 3000); // every 4 seconds, switch the picture and increment index

});

/*Jungle page END---------------------------------------*/
/*Bottom page START------------------------------------------------*/
$(document).ready(function() {
  let teeSkins = new LinkedList();
  teeSkins.add('../images/teemo/OmegaSquadSkin.jpg');
  teeSkins.add('../images/teemo/BeemoSkin.jpg');
  teeSkins.add('../images/teemo/little-devil.jpg');
  teeSkins.add('../images/teemo/PandaSkin.jpg');
  teeSkins.add('../images/teemo/SuperSkin.jpg');

  let imgT = 1;
  let lengthT = 5;



  setInterval(() => {
    imgT++;

    if (imgT > lengthT) {
      imgT = 1;
    }


    $('#tee').attr('src', teeSkins.findPic(imgT));



  }, 3000); // every 4 seconds, switch the picture and increment index
});

/*Bottom page END------------------------------------------------*/
/*Support Page START---------------------------------------------------*/
$(document).ready(function() {
  let braSkins = new LinkedList();
  braSkins.add('../images/brand/ZombieSkin.jpg');
  braSkins.add('../images/brand/ArclightSkin.jpg');
  braSkins.add('../images/brand/BattleBossSkin.jpg');
  braSkins.add('../images/brand/CryocoreSkin.jpg');
  braSkins.add('../images/brand/SpiritFireSkin.jpg');

  let imgB = 1;
  let lengthB = 5;



  setInterval(() => {
    imgB++;

    if (imgB > lengthB) {
      imgB = 1;
    }


    $('#bra').attr('src', braSkins.findPic(imgB));

  }, 3000); // every 4 seconds, switch the picture and increment index

});
/*Support Page END---------------------------------------------------*/


/*Universal Modal Below--------------------------*/
let bio = document.getElementById('bio');
let myModal = document.getElementById('bioModal');
let close = document.getElementById('close');

bio.addEventListener('click', () => {
  myModal.style.display = 'block';
}); //show Modal

close.addEventListener('click', () => {
  myModal.style.display = 'none';
}); // close Modal
