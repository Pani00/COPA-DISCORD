// ======================================================================
//  LA COPA DISCORD  ·  ACÁ SE EDITA TODO (solo este archivo)
// ======================================================================
//  CÓMO SE USA
//  • Nuevo participante: agregá su nombre en la lista "participantes".
//  • Nueva partida: copiá una línea de "partidas", pegala al final y
//    cambiá la fecha (AAAA-MM-DD), el juego y los puntos de cada uno.
//  • En "puntos" el nombre tiene que ser IGUAL al de "participantes".
//    Si tiene espacios va entre comillas:  "Juan Perez": 3
//  • Solo ponés en la partida a los que jugaron.
//  • Cada línea termina con coma. Si te olvidás algo, la página
//    te avisa arriba qué falló.
//  • "nota" es opcional (un comentario corto de la partida).
//  • Para sumar un juego nuevo, agregalo en la lista "juegos".
//  • La temporada sale sola del año de cada fecha.
// ======================================================================

var DATOS = {
  titulo: "La Copa Discord",
  subtitulo: "Tabla de posiciones",

  juegos: ["BAPBAP", "VALO", "CS", "LOL", "TFT", "AGE OF EMPIRES", "AJEDREZ", "QUAKE", "BRAWLHALLA", "MINECRAFT PVP", "GEOGUESSR", "TETRIS", "ROCKET LEAGUE", "OSU"],

  // ⚠️ EJEMPLO: reemplazá estos nombres por los de ustedes
  participantes: ["dozy", "mauro", "roses", "pani", "negar", "valenzapp", "coni", "char", "zowi", "nico10", "karo", "chartiti", "lucas"],

  // ⚠️ EJEMPLO: borrá estas partidas y cargá las reales
  partidas: [
    { fecha: "2026-11-01", juego: "CS",             puntos: { "Jugador 1": 3, "Jugador 2": 2, "Jugador 3": 1 } },
    { fecha: "2026-11-02", juego: "AJEDREZ",        puntos: { "Jugador 2": 3, "Jugador 4": 1 }, nota: "Final en el tiempo extra" },
    { fecha: "2026-11-03", juego: "VALO",           puntos: { "Jugador 1": 2, "Jugador 2": 2, "Jugador 3": 3, "Jugador 4": 1 } },
    { fecha: "2026-11-04", juego: "AGE OF EMPIRES", puntos: { "Jugador 3": 3, "Jugador 1": 2, "Jugador 4": 1 } },
    { fecha: "2026-11-05", juego: "TFT",            puntos: { "Jugador 4": 3, "Jugador 3": 2, "Jugador 2": 1, "Jugador 1": 1 } },
  ],
};
