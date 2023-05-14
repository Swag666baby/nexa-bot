
const patentes = [
  { xp: 0, patente: "🥉I" },
  { xp: 25000, patente: "🥉II" },
  { xp: 50000, patente: "🥉III" },
  { xp: 75000, patente: "🥉IV" },
  { xp: 100000, patente: "🥈I" },
  { xp: 125000, patente: "🥈II" },
  { xp: 150000, patente: "🥈III" },
  { xp: 175000, patente: "🥈IV" },
  { xp: 200000, patente: "🥇I" },
  { xp: 225000, patente: "🥇II" },
  { xp: 250000, patente: "🥇III" },
  { xp: 275000, patente: "🥇IV" },
  { xp: 300000, patente: "🎖️I" },
  { xp: 325000, patente: "🎖️II" },
  { xp: 350000, patente: "🎖️III" },
  { xp: 375000, patente: "🎖️IV" },
  { xp: 400000, patente: "🏆I" },
  { xp: 425000, patente: "🏆II" },
  { xp: 450000, patente: "🏆III" },
  { xp: 475000, patente: "🏆IV" },
  { xp: 500000, patente: "⚖️I" },
  { xp: 525000, patente: "⚖️II" },
  { xp: 550000, patente: "⚖️III" },
  { xp: 575000, patente: "⚖️IV" },
  { xp: 600000, patente: "⚜️I" },
  { xp: 625000, patente: "⚜️II" },
  { xp: 650000, patente: "⚜️III" },
  { xp: 675000, patente: "⚜️IV" },
  { xp: 700000, patente: "💎I" },
  { xp: 725000, patente: "💎II" },
  { xp: 750000, patente: "💎III" },
  { xp: 775000, patente: "💎IV" },
  { xp: 800000, patente: "👑I" },
  { xp: 825000, patente: "👑II" },
  { xp: 850000, patente: "👑III" },
  { xp: 875000, patente: "👑IV" },
  { xp: 900000, patente: "🏵️I" },
  { xp: 925000, patente: "🏵️II" },
  { xp: 950000, patente: "🏵️III" },
  { xp: 975000, patente: "🏵️IV" },
  { xp: 1000000, patente: "🪅∞" },
];

async function setPatente(dadosUsuario, fs, numeroUsuario){
    let patente = "🥉I";
    for (let i = 0; i < patentes.length; i++) {
        if (dadosUsuario.xp >= patentes[i].xp) {
            patente = patentes[i].patente;
        } else {
            break;
        }
    }
    dadosUsuario.patente = patente;
    fs.writeFileSync(`./data-base/users/${numeroUsuario}.json`, JSON.stringify(dadosUsuario, null, 2));
}

module.exports = setPatente;
