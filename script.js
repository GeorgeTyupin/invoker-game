class Quas {
   constructor() {
      this.name = 'q';
      this.key = 81;
      this.img = 'img/quas.jpg';
   }
}

class Wex {
   constructor() {
      this.name = 'w';
      this.key = 87;
      this.img = 'img/wex.jpeg';
   }
}

class Exort {
   constructor() {
      this.name = 'e';
      this.key = 69;
      this.img = 'img/exort.jpg';
   }
}

class game {
   constructor() {
      this.quas = new Quas();
      this.wex = new Wex();
      this.exort = new Exort();
      this.spells = {
         'qqq' : 'cold-snap.webp',
         'qqe' : 'ice-wall.webp',
         'qeq' : 'ice-wall.webp',
         'eqq' : 'ice-wall.webp',
         'qqw' : 'ghost-walk.webp',
         'qwq' : 'ghost-walk.webp',
         'wqq' : 'ghost-walk.webp',
         'www' : 'emp.webp',
         'wwe' : 'alacrity.webp',
         'wew' : 'alacrity.webp',
         'eww' : 'alacrity.webp',
         'wwq' : 'tornado.webp',
         'wqw' : 'tornado.webp',
         'qww' : 'tornado.webp',
         'eee' : 'sun-strike.webp',
         'eew' : 'chaos-meteor.webp',
         'ewe' : 'chaos-meteor.webp',
         'wee' : 'chaos-meteor.webp',
         'eeq' : 'forge-spirit.webp',
         'eqe' : 'forge-spirit.webp',
         'qee' : 'forge-spirit.webp',
         'qwe' : 'deafening-blast.webp',
         'qew' : 'deafening-blast.webp',
         'ewq' : 'deafening-blast.webp',
         'eqw' : 'deafening-blast.webp',
         'weq' : 'deafening-blast.webp',
         'wqe' : 'deafening-blast.webp'
      }
      this.spells_name_list = ['cold-snap.webp', 'ice-wall.webp', 'ghost-walk.webp', 'emp.webp', 'alacrity.webp', 'tornado.webp', 'sun-strike.webp', 'chaos-meteor.webp', 'forge-spirit.webp', 'deafening-blast.webp'];
      document.addEventListener("keydown", () => {
         this.hundler(this, event);
      });
      this.last_spell = '';
   }

   create_random_spell() {
      let random_spell = this.spells_name_list[Math.floor(Math.random() * 10)]
      if (random_spell == this.last_spell) {
         this.create_random_spell();
      } else {
         this.last_spell = random_spell;
         document.querySelector('#spell').style.background = `url(img/${random_spell})`;
         document.querySelector('#spell').setAttribute('spell', random_spell);
      }
   }
   
   new_sphere(sphere) {
      if (!document.querySelector('#sphere-1').style.background) {
         document.querySelector('#sphere-1').style.background = `url(${sphere.img})`;
         document.querySelector('#sphere-1').setAttribute('sphere', sphere.name)
      } else if(!document.querySelector('#sphere-2').style.background) {
         document.querySelector('#sphere-2').style.background =  `${document.querySelector('#sphere-1').style.background}`
         document.querySelector('#sphere-2').setAttribute('sphere', document.querySelector('#sphere-1').getAttribute('sphere'))
         document.querySelector('#sphere-1').style.background = `url(${sphere.img})`;
         document.querySelector('#sphere-1').setAttribute('sphere', sphere.name)
      } else {
         document.querySelector('#sphere-3').style.background =  `${document.querySelector('#sphere-2').style.background}`
         document.querySelector('#sphere-3').setAttribute('sphere', document.querySelector('#sphere-2').getAttribute('sphere'))
         document.querySelector('#sphere-2').style.background =  `${document.querySelector('#sphere-1').style.background}`
         document.querySelector('#sphere-2').setAttribute('sphere', document.querySelector('#sphere-1').getAttribute('sphere'))
         document.querySelector('#sphere-1').style.background = `url(${sphere.img})`;
         document.querySelector('#sphere-1').setAttribute('sphere', sphere.name)
      }
   }

   invoke(game) {
      let new_spell = document.querySelector('#sphere-1').getAttribute('sphere') + document.querySelector('#sphere-2').getAttribute('sphere') + document.querySelector('#sphere-3').getAttribute('sphere');
      Object.keys(game.spells).forEach((spell) => {
         if (new_spell == spell) {
            if (!document.querySelector('#spell-1').style.background) {
               document.querySelector('#spell-1').style.background = `url(img/${game.spells[spell]})`;
               document.querySelector('#spell-1').setAttribute('spell', game.spells[spell]);
            } else if (document.querySelector('#spell-1').style.background != `url("img/${game.spells[spell]}")`) {
               document.querySelector('#spell-2').style.background = document.querySelector('#spell-1').style.background;
               document.querySelector('#spell-2').setAttribute('spell', document.querySelector('#spell-1').getAttribute('spell'));
               document.querySelector('#spell-1').style.background = `url(img/${game.spells[spell]})`;
               document.querySelector('#spell-1').setAttribute('spell', game.spells[spell]);
            }
         }
      });
   }
   
   hundler(game, event) {
      let key = event.keyCode;
      if (key == game.quas.key) {
         game.new_sphere(game.quas);
      } else if (key == game.wex.key) {
         game.new_sphere(game.wex);
      } else if (key == game.exort.key) {
         game.new_sphere(game.exort);
      } else if (key == 82) {
         game.invoke(game)
      } else if (key == 68) {
         game.cast_spell_1(game);
      } else if (key == 70) {
         game.cast_spell_2(game);
      }

   }
}



class game_on_score extends game {
   constructor() {
      if (key == 68) {
         game.cast_spell_1(game);
      } else if (key == 70) {
         game.cast_spell_2(game);
      }
   }

   game_on_score() {
      var timer1 = setInterval(() => {
         document.querySelector('.timer').innerHTML = String(Number(document.querySelector(".timer").innerHTML)+1);
      }, 1000);
      
      setTimeout(() => {
         document.querySelector(".last-score").innerHTML = document.querySelector(".score").innerHTML;
         document.querySelector(".score").innerHTML = 0;
         document.querySelector('.timer').innerHTML = 0;
         document.querySelector('.background').classList.remove('hide');
         clearInterval(timer1);
         timer1 = 0;
         this.last_spell = '';
         document.querySelector('#spell-1').setAttribute('spell', '');
         document.querySelector('#spell-2').setAttribute('spell', '');
         document.querySelector('#spell-1').style.background = '';
         document.querySelector('#spell-2').style.background = '';
         console.log(1)
      }, 11000);
      this.create_random_spell();
   }

   cast_spell_1(game) {
      // if (document.querySelector('#spell-1').getAttribute('spell') == document.querySelector('#spell').getAttribute('spell')) {
      //    document.querySelector('.score').innerHTML = String(Number(document.querySelector(".score").innerHTML)+1);
      //    game.create_random_spell()
      // }
      console.log('d')
   }

   cast_spell_2(game) {
      // if (document.querySelector('#spell-2').getAttribute('spell') == document.querySelector('#spell').getAttribute('spell')) {
      //    document.querySelector('.score').innerHTML = String(Number(document.querySelector(".score").innerHTML)+1);
      //    game.create_random_spell()
      // }
      console.log('f')
   }
}

document.querySelector('#start-game-on-score').addEventListener('click', () => {
   document.querySelector('.background').classList.add('hide');
   game_on_score.game_on_score()
});

game = new game();
game_on_score = new game_on_score()