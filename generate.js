document.addEventListener("DOMContentLoaded", function(event) {
  formOptions();
});

function formOptions() {
  var formTypes = ['Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel', 'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'];

  var formBalls = ['No Ball', 'Pokeball', 'Cherish Ball', 'Dive Ball', 'Dusk Ball', 'Fast Ball', 'Friend Ball', 'Great Ball', 'Heal Ball', 'Heavy Ball', 'Level Ball', 'Love Ball', 'Lure Ball', 'Luxury Ball', 'Moon Ball', 'Nest Ball', 'Net Ball', 'Premier Ball', 'Quick Ball', 'Repeat Ball', 'Timer Ball', 'Ultra Ball'];

  var formItems = [['No Item', ' '], ['Amulet Coin', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/amulet_coin.png'], ['Assault Vest', 'https://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/Assault_Vest_Sprite.png'], ['Big Root', 'http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Healing_Items/energy_root.png'], ['Bright Powder', 'http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Held_Items/bright_powder.png'], ['Bug Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/bug_gem.png'], ['Bug Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/bug_memory.png'], ['Charcoal', 'http://cdn.bulbagarden.net/upload/b/b5/Bag_Charcoal_Sprite.png'], ['Choice Band', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/choice_band.png'], ['Choice Scarf', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/choice_scarf.png'], ['Choice Specs', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/choice_specs.png'], ['Cleanse Tag', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/cleanse_tag.png'], ['Dark Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/dark_gem.png'], ['Dark Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/dark_memory.png'], ['Dragon Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/dragon_gem.png'], ['Dragon Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/dragon_memory.png'], ['Electric Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/electric_gem.png'], ['Electric Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/electric_gem.png'], ['Eviolite', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/eviolite.png'], ['Fairy Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/fairy_gem.png'], ['Fairy Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/fairy_memory.png'], ['Fighting Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/fighting_gem.png'], ['Fighting Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/fighting_memory.png'], ['Fire Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/fire_gem.png'], ['Fire Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/fire_memory.png'], ['Flying Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/flying_gem.png'], ['Flying Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/flying_memory.png'], ['Focus Band', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/focus_band.png'], ['Focus Sash', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/focus_sash.png'], ['Ghost Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/ghost_gem.png'], ['Ghost Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/ghost_memory.png'], ['Grass Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/grass_gem.png'], ['Grass Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/grass_memory.png'], ['Ground Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/ground_gem.png'], ['Ground Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/ground_memory.png'], ['Heat Rock', 'http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Held_Items/heat_rock.png'], ['Ice Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/ice_gem.png'], ['Ice Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/ice_memory.png'], ['Icy Rock', 'http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Held_Items/icy_rock.png'], ['Kings Rock', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/kings_rock.png'], ['Leftovers', 'https://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/LeftoversSprite.png'], ['Life Orb', 'https://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/Life_Orb_Sprite.png'], ['Light Ball', 'https://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/Light_Ball_Sprite.png'], ['Lucky Egg', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/lucky_egg.png'], ['Mystic Water', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/mystic_water.png'], ['Normal Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/normal_gem.png'], ['Poison Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/poison_gem.png'], ['Poison Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/poison_memory.png'], ['Protective Pads', 'https://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/Protective_Pads_Sprite.png'], ['Psychic Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/psychic_gem.png'], ['Psychic Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/psychic_memory.png'], ['Quick Claw', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/quick_claw.png'], ['Rock Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/rock_gem.png'], ['Rock Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/rock_memory.png'], ['Rocky Helmet', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/rocky_helmet.png'], ['Rose Incense', 'https://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/Dream_Rose_Incense_Sprite.png'], ['Shell Bell', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/shell_bell.png'], ['Silk Scarf', 'https://cdn.bulbagarden.net/upload/2/2c/Bag_Silk_Scarf_Sprite.png'], ['Smoke Ball', 'http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Held_Items/smoke_ball.png'], ['Soothe Bell', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Unbuyables/soothe_bell.png'], ['Steel Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/steel_gem.png'], ['Steel Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/steel_memory.png'], ['Thick Club', 'https://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/Thick_Club_Sprite.png'], ['Water Gem', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/water_gem.png'], ['Water Memory', 'http://files.jcink.net/uploads/pokemonpledge/Shop_Icons/Held_Items/water_memory.png']]
  var formGenders = ['♂', '♀', '⚲'];

  var formTypeSelect = document.getElementsByClassName('type');
  var formBallSelect = document.getElementById('ball');
  var formItemSelect = document.getElementById('item');
  var formGenderSelect = document.getElementById('gender');

  populateForm(formBalls, formBallSelect, true);
  populateForm(formItems, formItemSelect, false);
  populateForm(formGenders, formGenderSelect, true);

  for (var i = 0; i < formTypeSelect.length; i++) {
    populateForm(formTypes, formTypeSelect[i], true);
  }
}

function populateForm(array, form, type) {
  for (var i = 0; i < array.length; i++) {
    if (type == true) {
    form[form.length] = new Option(array[i], array[i]); } else {
    form[form.length] = new Option(array[i][0], array[i][1]);
    }
  }
}

function ifNoneType() {
  if (document.getElementById("type2").value == "None") {
    return ':' + document.getElementById("type1").value.toLowerCase() + ':';
  } else {
    return ':' + document.getElementById("type1").value.toLowerCase() + ': :' + document.getElementById("type2").value.toLowerCase() + ':';
  }
}

function hideEmpty(inputValue, matchValue, className, newValue) {
  if (inputValue == matchValue) {
    return className;
  } else {
    return newValue;
  }
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
  var ballHidden = hideEmpty(ball, "No Ball", "hideMe");
  var item = document.querySelector('#item option:checked').text;
  var itemImg = document.getElementById("item").value;
  var itemHidden = hideEmpty(item, "No Item", "hideMe");

  var name = document.getElementById("name").value;
  var species = document.getElementById("species").value;
  var lvl = document.getElementById("level").value;
  var gender = document.getElementById("gender").value;
  var link = document.getElementById("link").value;

  var description = document.getElementById("description").value;

  var storing = document.getElementById("stored").checked;
  var storedAway = hideEmpty(storing, true, "stored", "closed open");

  var code = `<pokeSlot class="`+ storedAway +`" id="card_`+ name.toLowerCase() +`">
<pokeSprites>
<pokeImg><img src="https://play.pokemonshowdown.com/sprites/xyani/` + species.toLowerCase() + `.gif" alt="` + species + `" title="` + species + `"></pokeImg>
<pokeBall class="` + ballHidden + `"><img src="http://pokemonpledge.b1.jcink.com/uploads/pokemonpledge/Shop_Icons/Pokeballs/` + ball.toLowerCase().replace(/ /g, "") + `.png" alt="` + ball + `" title="` + ball + `"></pokeBall>
<pokeItem  class="` + itemHidden + `"><img src="` + itemImg + `" alt="` + item + `" title="` + item + `"></pokeItem>
</pokeSprites>

<pokeInfo>
<pokeName><span>` + name + `</span></pokeName>
<pokeSub><span>` + gender + ` - ` + species + `</span></pokeSub>
<pokeLink><span>LVL` + lvl + ` - Link ` + link + `%</span></pokeLink>
</pokeInfo>

<div class="hiddenInfo">
<pokeStats>
<pokeType> ` + types + `</pokeType>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + ability + `_(Ability)" class="pokeAbility">` + ability + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move1 + `_(move)" class="pokeMove ` + moveType1 + `">` + move1 + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move2 + `_(move)" class="pokeMove ` + moveType2 + `">` + move2 + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move3 + `_(move)" class="pokeMove ` + moveType3 + `">` + move3 + `</a>
<a href="https://bulbapedia.bulbagarden.net/wiki/` + move4 + `_(move)" class="pokeMove ` + moveType4 + `">` + move4 + `</a>
</pokeStats>

<pokeDescription>` + description + `</pokeDescription>
</div>
</pokeSlot>`;


  console.log('Creating card for ' + name + ' the ' + species + '!');

  var preview = document.getElementById("insertStuff");
  var output = document.getElementById("outputty");

  preview.innerHTML = "<div id='izzyPokemonPC'>"+code+"</div>";

  output.innerHTML = code;

  toggling();
}
