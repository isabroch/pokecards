document.addEventListener("DOMContentLoaded", function(event) {
  formOptions();
});

function formOptions() {
  var formTypes = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'];

  var formBalls = ['No Ball', 'Pokeball', 'Cherish Ball', 'Dive Ball', 'Dusk Ball', 'Fast Ball', 'Friend Ball', 'Great Ball', 'Heal Ball', 'Heavy Ball', 'Level Ball', 'Love Ball', 'Lure Ball', 'Luxury Ball', 'Moon Ball', 'Nest Ball', 'Net Ball', 'Premier Ball', 'Quick Ball', 'Repeat Ball', 'Timer Ball', 'Ultra Ball'];

  var formItems = ['No Item', 'Amulet Coin', 'Assault Vest', 'Big Root', 'Bright Powder', 'Bug Gem', 'Bug Memory', 'Charcoal', 'Choice Band', 'Choice Scarf', 'Choice Specs', 'Cleanse Tag', 'Dark Gem', 'Dark Memory', 'Dragon Gem', 'Dragon Memory', 'Electric Gem', 'Electric Memory', 'Eviolite', 'Fairy Gem', 'Fairy Memory', 'Fighting Gem', 'Fighting Memory', 'Fire Gem', 'Fire Memory', 'Flying Gem', 'Flying Memory', 'Focus Band', 'Focus Sash', 'Ghost Gem', 'Ghost Memory', 'Grass Gem', 'Grass Memory', 'Ground Gem', 'Ground Memory', 'Heat Rock', 'Ice Gem', 'Ice Memory', 'Icy Rock', 'Kings Rock', 'Leftovers', 'Life Orb', 'Light Ball', 'Lucky Egg', 'Mystic Water', 'Normal Gem', 'Poison Gem', 'Poison Memory', 'Protective Pads', 'Psychic Gem', 'Psychic Memory', 'Quick Claw', 'Rock Gem', 'Rock Memory', 'Rocky Helmet', 'Rose Incense', 'Shell Bell', 'Silk Scarf', 'Smoke Ball', 'Soothe Bell', 'Steel Gem', 'Steel Memory', 'Thick Club', 'Water Gem', 'Water Memory'];

  var formGenders = ['♂', '♀', '⚲'];

  var formTypeSelect = document.getElementsByClassName('type');
  var formBallSelect = document.getElementById('ball');
  var formItemSelect = document.getElementById('item');
  var formGenderSelect = document.getElementById('gender');

  populateForm(formBalls, formBallSelect);
  populateForm(formItems, formItemSelect);
  populateForm(formGenders, formGenderSelect);

  for (var i = 0; i < formTypeSelect.length; i++) {
    populateForm(formTypes, formTypeSelect[i]);
  }
}

function populateForm(array, form) {
  for (var i = 0; i < array.length; i++) {
    form[form.length] = new Option(array[i], array[i]);
  }
}

function ifNoneType() {
  if (document.getElementById("type2").value == "None") {
    return ':' + document.getElementById("type1").value.toLowerCase() + ':';
  } else {
    return ':' + document.getElementById("type1").value.toLowerCase() + '::' + document.getElementById("type2").value.toLowerCase() + ':';
  }
}

function hideEmpty(inputValue, matchValue) {
  if (inputValue == matchValue) {
    return "hideMe";
  };
}

function submitForm() {
  var types = ifNoneType();

  var ability = document.getElementById("ability").value;
  var move1 = document.getElementById("move1").value;
  var move2 = document.getElementById("move2").value;
  var move3 = document.getElementById("move3").value;
  var move4 = document.getElementById("move4").value;
  var moveType1 = document.getElementById("moveType1").value;
  var moveType2 = document.getElementById("moveType2").value;
  var moveType3 = document.getElementById("moveType3").value;
  var moveType4 = document.getElementById("moveType4").value;

  var ball = document.getElementById("ball").value;
  var ballHidden = hideEmpty(ball, "No Ball");
  var item = document.getElementById("item").value;
  var itemHidden = hideEmpty(item, "No Item");

  var name = document.getElementById("name").value;
  var species = document.getElementById("species").value;
  var lvl = document.getElementById("level").value;
  var gender = document.getElementById("gender").value;
  var link = document.getElementById("link").value;

  var description = document.getElementById("description").value;


  var code = `<div id="izzyPokemonPC">
<pokeSlot>
<pokeSprites>
<pokeImg><img src="https://play.pokemonshowdown.com/sprites/xyani/` + species.toLowerCase() + `.gif" alt="` + species + `" title="` + species + `"></pokeImg>
<pokeBall class="`+ballHidden+`"><img src="http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Pokeballs/` + ball.toLowerCase().replace(/ /g, "") + `.png" alt="` + ball + `" title="` + ball + `"></pokeBall>
<pokeItem  class="`+ballHidden+`"><img src="http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Held_Items/` + item.toLowerCase().replace(/ /g, "_") + `.png" alt="` + item + `" title="` + item + `"></pokeItem>
</pokeSprites>

<pokeInfo>
<pokeName><span>` + name + `</span></pokeName>
<pokeSub><span>LVL. ` + lvl + ` - ` + gender + ` - ` + species + `</span></pokeSub>
<pokeLink><span>Link ` + link + `</span></pokeLink>
</pokeInfo>

<div class="hiddenInfo">
<pokeStats>
<pokeType>` + types + `</pokeType>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + ability + `_(Ability)" class="pokeAbility">` + ability + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move1 + `_(move)" class="pokeMove ` + moveType1 + `">` + move1 + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move2 + `_(move)" class="pokeMove ` + moveType2 + `">` + move2 + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move3 + `_(move)" class="pokeMove ` + moveType3 + `">` + move3 + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move4 + `_(move)" class="pokeMove ` + moveType4 + `">` + move4 + `</a>
</pokeStats>

<pokeDescription>` + description + `</pokeDescription>
</div>
</pokeSlot>
</div>`;


  console.log('Creating card for ' + name + ' the ' + species + '!');

  var preview = document.getElementById("insertStuff");
  var output = document.getElementById("outputty");

  preview.innerHTML = code;

  output.innerHTML = preview.innerHTML;
}
