const reglas = {
  piedra: ['tijera', 'lagarto'],
  papel: ['piedra', 'spock'],
  tijera: ['papel', 'lagarto'],
  lagarto: ['spock', 'papel'],
  spock: ['tijera', 'piedra']
};

function jugar(eleccionUsuario) {
  const opciones = Object.keys(reglas);
  const eleccionMaquina = opciones[Math.floor(Math.random() * opciones.length)];

  let resultado = `Tú elegiste: ${eleccionUsuario.toUpperCase()} <br>`;
  resultado += `La máquina eligió: ${eleccionMaquina.toUpperCase()} <br><br>`;

  if (eleccionUsuario === eleccionMaquina) {
    resultado += "🎯 ¡Empate!";
  } else if (reglas[eleccionUsuario].includes(eleccionMaquina)) {
    resultado += "✅ ¡Ganaste!";
  } else {
    resultado += "❌ Perdiste.";
  }

  document.getElementById("resultado").innerHTML = resultado;
}
