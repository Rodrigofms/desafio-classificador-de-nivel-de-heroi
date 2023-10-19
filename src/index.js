let nome;
var nivel;
var xp = 5999;

if (xp < 1000) {
  nome = "Kay";
  nivel = "Ferro";
}
else if (xp >= 1001 && xp <= 2000) {
  nome = "Astra";
  nivel = "Bronze";
}
else if (xp >= 2001 && xp <= 5000) {
  nome = "Yoru";
  nivel = "Prata";
}
else if (xp >= 5001 && xp <= 7000) {
  nome = "Skye";
  nivel = "Ouro";
}
else if (xp >= 7001 && xp <= 8000) {
  nome = "Breach";
  nivel = "Platina";
}
else if (xp >= 8001 && xp <= 9000) {
  nome = "Raze";
  nivel = "Ascendente";
}
else if (xp >= 9001 && xp <= 10000) {
  nome = "Reyna";
  nivel = "Imortal";
}
else {
  nome = "Jett";
  nivel = "Radiante";
}

console.log("O heroi de nome", nome, "esta no nivel", nivel);
