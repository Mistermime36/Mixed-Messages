
const store = {
    quote: [
        'Tu primer Pokemon es ', 'Tu nuevo Pokemon es ', 'Has atrapado a un ', 'Un Pokemon salvaje ha aparecido... ', 'Un pokemon te ha elegido... '
    ],

    Pokemon: [
        "Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod",
        "Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok",
        "Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix",
        "Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth",
        "Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp",
        "Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponytail","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo",
        "Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone",
        "Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther",
        "Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax",
        "Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"
    ],

    pueblos: [
        ', tu aventura empieza en pueblo Paleta', ' En el labarotorio de Dr. Oak', ' en las afueras de el gimnasio de ciudad Verde', ' antes de llegar a ciudad Celeste', ' cerca de la tienda de Bicis', ' en ciudad Carmin', ' Pescando en Puerto Carmin',
        ' en el club de fans de pokemon de Ciudad Carmin', ' en Pueblo Lavanda', ' en la Torre Pokemon', ' en Ciudad Azulona', ' en el casino', ' en Mansion Azulona', ' en la guarida del Team Rocket', ' en ciudad azafran', 
        ' en Ciudad Fucsia', ' en la zona zafari', ' En isla Canela', ' en Mansion Pokemon' 
    ]

}

const randomPicker = (array) => {
    const arrayLength = array.length;
    const randomIndexNumber = Math.floor(Math.random() * arrayLength);
    return array[randomIndexNumber];
  };

  const pokemonSelector = `${randomPicker(store.quote)}${randomPicker(
    store.Pokemon
  )}${randomPicker(store.pueblos)}`;

  console.log(pokemonSelector);



