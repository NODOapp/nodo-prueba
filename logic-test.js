// No editar
const teams = [
  { id: 1, country: 'Spain', name: 'Real Madrid C.F.' },
  { id: 2, country: 'Italy', name: 'A.C. Milan' },
  { id: 3, country: 'Spain', name: 'Futbol Club Barcelona' },
  { id: 4, country: 'Germany', name: 'FC Bayern Munich' },
  { id: 5, country: 'England', name: 'Liverpool F.C.' },
  { id: 6, country: 'Netherlands', name: 'AFC Ajax' },
  { id: 7, country: 'Italy', name: 'Inter Milan' },
  { id: 8, country: 'England', name: 'Manchester United F.C.' },
  { id: 9, country: 'England', name: 'Chelsea F.C.' },
  { id: 10, country: 'Portugal', name: 'FC Porto' },
  { id: 11, country: 'Germany', name: 'Borussia Dortmund' },
  { id: 12, country: 'Italy', name: 'Juventus FC' },
  { id: 13, country: 'France', name: 'Olympique Marseille' }

]

const leagues = [
  { id: 1, country: 'England', name: 'Premier League' },
  { id: 2, country: 'Germany', name: 'Bundesliga' },
  { id: 3, country: 'Netherlands', name: 'Eredivisie' },
  { id: 4, country: 'Spain', name: 'La Liga' },
  { id: 5, country: 'Italy', name: 'Serie A' },
  { id: 6, country: 'Portugal', name: 'Liga NOS' },
  { id: 7, country: 'France', name: 'Lige 1' }
]

const teamsByLeague = [
  { teamId: 1, leagueId: 4 },
  { teamId: 2, leagueId: 5 },
  { teamId: 3, leagueId: 4 },
  { teamId: 4, leagueId: 2 },
  { teamId: 5, leagueId: 1 },
  { teamId: 6, leagueId: 3 },
  { teamId: 7, leagueId: 5 },
  { teamId: 8, leagueId: 1 },
  { teamId: 9, leagueId: 1 },
  { teamId: 10, leagueId: 6 },
  { teamId: 11, leagueId: 2 },
  { teamId: 12, leagueId: 5 },
  { teamId: 13, leagueId: 7 }
]

const winsByTeams = [
  { teamId: 1, wins: 13 },
  { teamId: 2, wins: 7 },
  { teamId: 3, wins: 5 },
  { teamId: 4, wins: 5 },
  { teamId: 5, wins: 5 },
  { teamId: 6, wins: 4 },
  { teamId: 7, wins: 3 },
  { teamId: 8, wins: 3 },
  { teamId: 9, wins: 1 },
  { teamId: 10, wins: 2 },
  { teamId: 11, wins: 1 },
  { teamId: 12, wins: 2 },
  { teamId: 13, wins: 1 }
]

/*
  SECCIÓN PROBLEMAS
    - Las siguientes son preguntas básicas de Javascript y manejo de datos. Se evaluará eficiencia, ORDEN y claridad del código entregado.
    - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
    - Debe usar nombres explicativos para sus variables.
    - Usar sintaxis ES6.
    - Puede utilizar funciones auxiliares como apoyo para tener una descomposicion de codigo mas clara al momento de lectura.
    - Su prueba debe ejecutarse sin errores con: node logic-test.js
*/

// 0 Arreglo con los ids de los equipos (funcion de ejemplo)
function listTeamsIds () {
  return teams.map((client) => client.id)
}

// 1 Arreglo con los nombres de los equipos ordenados y agrupados por su pais de origen.
function listTeamsByCountry () {
  // CODE HERE
}

// 2 Arreglo con los nombres de los equipos ordenados de mayor a menor por la cantidad de victorias en champions league.
function sortTeamsByWins () {
  // CODE HERE
}

// 3 Arreglo de objetos en donde se muestre el nombre de las ligas y la sumatoria de las victorias en champions league de los equipos que pertenecen a ellas.
function leaguesWithWins () {
  // CODE HERE
}

// 4 Objeto en que las claves sean los nombres de las ligas y los valores el nombre del equipo con la menor cantidad de victorias en champions.
function teamsByLeagueWithLestWins () {
  // CODE HERE
}

// 5 Agregar un nuevo equipo con datos ficticios a "teams", asociarlo a la liga de francia y agregar un total de 4 victorias en champions.
// Luego devolver el lugar que ocupa este equipo en el ranking de la pregunta 2.
// No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
function newTeamRanking () {
  // CODE HERE
}

// Impresión de soluciones. No modificar.
console.log('Pregunta 0')
console.log(listTeamsIds())
console.log('Pregunta 1')
console.log(listTeamsByCountry())
console.log('Pregunta 2')
console.log(sortTeamsByWins())
console.log('Pregunta 3')
console.log(leaguesWithWins())
console.log('Pregunta 4')
console.log((teamsByLeagueWithLestWins()))
console.log('Pregunta 5')
console.log((newTeamRanking()))
