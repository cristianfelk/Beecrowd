let partidas = [
    {
      data: "28/03/2015",
      timeA: {
        nome: "INTZ",
        kills: 10,
        gold: 70200,
        vitoria: true,
        jogadores: [
          { nome: "Yang", kills: 1, death: 3, assist: 2 },
          { nome: "Revolta", kills: 2, death: 4, assist: 3 },
          { nome: "tockers", kills: 3, death: 2, assist: 4 },
          { nome: "micaO", kills: 3, death: 1, assist: 4 },
          { nome: "Jockster", kills: 1, death: 3, assist: 8 },
        ],
      },
      timeB: {
        nome: "PAIN",
        kills: 12,
        gold: 74500,
        vitoria: false,
        jogadores: [
          { nome: "Leko", kills: 1, death: 3, assist: 9 },
          { nome: "SIRT", kills: 1, death: 1, assist: 10 },
          { nome: "KamiKat", kills: 5, death: 2, assist: 1 },
          { nome: "brTT RX", kills: 5, death: 3, assist: 5 },
          { nome: "Dioud", kills: 0, death: 1, assist: 9 },
        ],
      },
    },
    {
      data: "28/03/2015",
      timeA: {
        nome: "INTZ",
        kills: 3,
        gold: 60200,
        vitoria: false,
        jogadores: [
          { nome: "Yang", kills: 1, death: 1, assist: 0 },
          { nome: "Revolta", kills: 0, death: 2, assist: 2 },
          { nome: "tockers", kills: 0, death: 1, assist: 1 },
          { nome: "micaO", kills: 0, death: 2, assist: 2 },
          { nome: "Jockster", kills: 2, death: 4, assist: 0 },
        ],
      },
      timeB: {
        nome: "PAIN",
        kills: 10,
        gold: 69100,
        vitoria: true,
        jogadores: [
          { nome: "Leko", kills: 0, death: 1, assist: 5 },
          { nome: "SIRT", kills: 3, death: 1, assist: 4 },
          { nome: "KamiKat", kills: 2, death: 3, assist: 2 },
          { nome: "brTT RX", kills: 2, death: 1, assist: 2 },
          { nome: "Dioud", kills: 1, death: 1, assist: 3 },
        ],
      },
    },
    {
      data: "28/03/2015",
      timeA: {
        nome: "INTZ",
        kills: 21,
        gold: 80200,
        vitoria: true,
        jogadores: [
          { nome: "Yang", kills: 6, death: 1, assist: 4 },
          { nome: "Revolta", kills: 2, death: 5, assist: 9 },
          { nome: "tockers", kills: 3, death: 2, assist: 7 },
          { nome: "micaO", kills: 4, death: 1, assist: 2 },
          { nome: "Jockster", kills: 2, death: 6, assist: 11 },
        ],
      },
      timeB: {
        nome: "PAIN",
        kills: 15,
        gold: 72500,
        vitoria: false,
        jogadores: [
          { nome: "Leko", kills: 2, death: 5, assist: 3 },
          { nome: "SIRT", kills: 5, death: 3, assist: 5 },
          { nome: "KamiKat", kills: 3, death: 6, assist: 2 },
          { nome: "brTT RX", kills: 3, death: 2, assist: 4 },
          { nome: "Dioud", kills: 0, death: 7, assist: 8 },
        ],
      },
    },
  ];
  
  let nomeJogador = 'Dioud'

  let jogadoresA = []
  let mortesA = []
  let killsA = []
  let assistenciaA = []

  let killsG = []
  let mortesG = []
  let assistG = []

  let assistenciaKDAA = []
  let killsKDAA = []
  let mortesKDAA = []
  let assistenciaKDAB = []
  let mortesKDAB = []
  let killsKDAB = []

  let jogadoresB = []
  let mortesB = []
  let killsB= []
  let assistenciaB = []
  
  let dataGame = partidas.map((a) => a.data)
  let timeA = 'INTZ'
  let timeB = 'PAIN'
  
  for (let i = 0; i < 5; i++) {
    jogadoresA.push(partidas.map((a) => a.timeA.jogadores[i].nome).shift());
    assistenciaA.push(partidas.map((a) => a.timeA.jogadores[i].assist))
    killsA.push(partidas.map((a) => a.timeA.jogadores[i].kills))
    mortesA.push(partidas.map((a) => a.timeA.jogadores[i].death))
    assistenciaKDAA.push(partidas.map((a) => a.timeA.jogadores[i].assist).reduce((a,b) => a+b))
    killsKDAA.push(partidas.map((a) => a.timeA.jogadores[i].kills).reduce((a,b) => a+b))
    mortesKDAA.push(partidas.map((a) => a.timeA.jogadores[i].death).reduce((a,b) => a+b))

    killsG.push(partidas.map((a) => a.timeA.jogadores[i].assist).reduce((a,b) => a+b))
    mortesG.push(partidas.map((a) => a.timeA.jogadores[i].death).reduce((a,b) => a+b))
    assistG.push(partidas.map((a) => a.timeA.jogadores[i].kills).reduce((a,b) => a+b))
    killsG.push(partidas.map((a) => a.timeB.jogadores[i].assist).reduce((a,b) => a+b))
    mortesG.push(partidas.map((a) => a.timeB.jogadores[i].death).reduce((a,b) => a+b))
    assistG.push(partidas.map((a) => a.timeB.jogadores[i].kills).reduce((a,b) => a+b))
 
    jogadoresB.push(partidas.map((a) => a.timeB.jogadores[i].nome).shift());
    mortesB.push(partidas.map((a) => a.timeB.jogadores[i].death))
    killsB.push(partidas.map((a) => a.timeB.jogadores[i].kills))
    assistenciaB.push(partidas.map((a) => a.timeB.jogadores[i].assist))
    assistenciaKDAB.push(partidas.map((a) => a.timeB.jogadores[i].assist).reduce((a,b) => a+b))
    killsKDAB.push(partidas.map((a) => a.timeB.jogadores[i].kills).reduce((a,b) => a+b))
    mortesKDAB.push(partidas.map((a) => a.timeB.jogadores[i].death).reduce((a,b) => a+b))
    }
  let serie = partidas.map(elem => elem.timeA.vitoria)  
  let nVA = serie.reduce((a,b) => a+b)
  let serie2 = partidas.map(elem => elem.timeB.vitoria)
  let nVB = serie2.reduce((a,b) => a+b)
  let INTZ = 'venceu'
  let PAIN = 'perdeu'
  // console.log(assistenciaKDAB, killsKDAB, mortesKDAB, killsKDAA, assistenciaKDAA, mortesKDAA)

  let KDAgeral = []
  let time = ''
  for (let i = 0; i < 10; i++) {
      KDAgeral.push(((killsG[i] + assistG[i]) / mortesG[i]).toFixed(2))
  }
  // console.log(KDAgeral)

  let MVPMD3 = Math.max(...KDAgeral)
  // console.log(MVPMD3.toFixed(2))

  let mortesYang = mortesA[0]
  let killsYang = killsA[0]
  let assistYang = assistenciaA[0]
  
  let mortesRevolta = mortesA[1]
  let killsRevolta = killsA[1]
  let assistRevolta = assistenciaA[1]
  
  let mortestockers = mortesA[2]
  let killstockers = killsA[2]
  let assisttockers = assistenciaA[2]
  
  let mortesmicaO = mortesA[3]
  let killsmicaO = killsA[3]
  let assistmicaO = assistenciaA[3]
  
  let mortesJockster = mortesA[4]
  let killsJockster = killsA[4]
  let assistJockster = assistenciaA[4]
  
  let mortesLeko = mortesB[0]
  let killsLeko = killsB[0]
  let assistLeko = assistenciaB[0]
  
  let mortesSIRT = mortesB[1]
  let killsSIRT = killsB[1]
  let assistSIRT = assistenciaB[1]
  
  let mortesKamiKat = mortesB[2]
  let killsKamiKat = killsB[2]
  let assistKamiKat = assistenciaB[2]
  
  let mortesbrTTRX = mortesB[3]
  let killsbrTTRX = killsB[3]
  let assistbrTTRX = assistenciaB[3]
  
  let mortesDioud = mortesB[4]
  let killsDioud = killsB[4]
  let assistDioud = assistenciaB[4]
//   console.log(killsKDA, mortesKDA, assistenciaKDA)

  let players = []
  for (let i = 0; i < partidas.length; i++) {
      if(partidas[i].timeA.vitoria){
        players.push(partidas[i].timeA.jogadores)
      } else {
        players.push(partidas[i].timeB.jogadores)
      }
  }
  for (let j = 0; j < players.length; j++) {
      for(let i = 0; i < players[j].length; i++){
        players[j][i].kda =+ ((players[j][i].kills + players[j][i].assist)/((players[j][i].death===0)?1:players[j][i].death)).toFixed(2);
      }
  }
  let kdaPartidas = [];
  for(let j = 0; j < players.length; j++){
      let kdaPartida = [];
      for(let i = 0; i < players[j].length;i++){
          kdaPartida.push(players[j][i].kda);
      }
      kdaPartidas.push(Math.max(...kdaPartida));
  }

  for (let j = 0; j < players.length; j++) {
      for(let i = 0; i < players[j].length; i++){
          if(kdaPartidas[j] === players[j][i].kda){
              // console.log('MVP da partida' , j , ' é ' , players[j][i].nome , players[j][i].kills+'/'+players[j][i].death+'/'+players[j][i].assist, 'com KDA:', players[j][i].kda);
          }
      }
  }
  // console.log(players, kdaPartidas, kda )

  switch(nomeJogador) {
    case 'Yang': 
       console.log(`! === ${jogadoresA[0]} ===`)
       console.log(`! Jogador do time : ${timeA}`)
       console.log(`! Que ${INTZ} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsYang[0]}, Death - ${mortesYang[0]}, Assist - ${assistYang[0]}, KDA = ${(killsYang[0] + assistYang[0] / mortesYang[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsYang[1]}, Death - ${mortesYang[1]}, Assist - ${assistYang[1]}, KDA = ${(killsYang[1] + assistYang[1] / mortesYang[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsYang[2]}, Death - ${mortesYang[2]}, Assist - ${assistYang[2]}, KDA = ${(killsYang[2] + assistYang[2] / mortesYang[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAA[0]}, Death - ${mortesKDAA[0]}, Assist - ${assistenciaKDAA[0]}, KDA = ${(killsKDAA[0] + assistenciaKDAA[0] / mortesKDAA[0]).toFixed(2)} `)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'Revolta':
       console.log(`! === ${jogadoresA[1]} ===`)
       console.log(`! Jogador do time : ${timeA}`)
       console.log(`! Que ${INTZ} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsRevolta[0]}, Death - ${mortesRevolta[0]}, Assist - ${assistRevolta[0]}, KDA = ${(killsRevolta[0] + assistRevolta[0] / mortesRevolta[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsRevolta[1]}, Death - ${mortesRevolta[1]}, Assist - ${assistRevolta[1]}, KDA =  ${(killsRevolta[1] + assistRevolta[1] / mortesRevolta[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsRevolta[2]}, Death - ${mortesRevolta[2]}, Assist - ${assistRevolta[2]}, KDA =  ${(killsRevolta[2] + assistRevolta[2] / mortesRevolta[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAA[1]}, Death - ${mortesKDAA[1]}, Assist - ${assistenciaKDAA[1]}, KDA = ${(killsKDAA[1] + assistenciaKDAA[1] / mortesKDAA[1]).toFixed(2)}`)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA:${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'tockers':
       console.log(`! === ${jogadoresA[2]} ===`)
       console.log(`! Jogador do time : ${timeA}`)
       console.log(`! Que ${INTZ} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killstockers[0]}, Death - ${mortestockers[0]}, Assist - ${assisttockers[0]}, KDA = ${(killstockers[0] + assisttockers[0] / mortestockers[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killstockers[1]}, Death - ${mortestockers[1]}, Assist - ${assisttockers[1]}, KDA =  ${(killstockers[1] + assisttockers[1] / mortestockers[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killstockers[2]}, Death - ${mortestockers[2]}, Assist - ${assisttockers[2]}, KDA =  ${(killstockers[2] + assisttockers[2] / mortestockers[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAA[2]}, Death - ${mortesKDAA[2]}, Assist - ${assistenciaKDAA[2]}, KDA = ${(killsKDAA[2] + assistenciaKDAA[2] / mortesKDAA[2]).toFixed(2)}`)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)

       break
   case 'micaO':
       console.log(`! === ${jogadoresA[3]} ===`)
       console.log(`! Jogador do time : ${timeA}`)
       console.log(`! Que ${INTZ} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsmicaO[0]}, Death - ${mortesmicaO[0]}, Assist - ${assistmicaO[0]}, KDA = ${(mortesmicaO[0] + assistmicaO[0] / mortesmicaO[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsmicaO[1]}, Death - ${mortesmicaO[1]}, Assist - ${assistmicaO[1]}, KDA = ${(mortesmicaO[1] + assistmicaO[1] / mortesmicaO[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsmicaO[2]}, Death - ${mortesmicaO[2]}, Assist - ${assistmicaO[2]}, KDA = ${(assistmicaO[2] + killsmicaO[2] / mortesmicaO[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAA[3]}, Death - ${mortesKDAA[3]}, Assist - ${assistenciaKDAA[3]}, KDA =  ${(killsKDAA[3] + assistenciaKDAA[3] / mortesKDAA[3]).toFixed(2)}`)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'Jockster':
       console.log(`! === ${jogadoresA[4]} ===`)
       console.log(`! Jogador do time : ${timeA}`)
       console.log(`! Que ${INTZ} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsJockster[0]}, Death - ${mortesJockster[0]}, Assist - ${assistJockster[0]}, KDA = ${(killsJockster[0] + assistJockster[0] / mortesJockster[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsJockster[1]}, Death - ${mortesJockster[1]}, Assist - ${assistJockster[1]}, KDA = ${(killsJockster[1] + assistJockster[1] / mortesJockster[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsJockster[2]}, Death - ${mortesJockster[2]}, Assist - ${assistJockster[2]}, KDA = ${(killsJockster[2] + assistJockster[2] / mortesJockster[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAA[4]}, Death - ${mortesKDAA[4]}, Assist - ${assistenciaKDAA[4]}, KDA =  ${(killsKDAA[4] + assistenciaKDAA[4] / mortesKDAA[4]).toFixed(2)}`)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'Leko':
       console.log(`! === ${jogadoresB[0]} ===`)
       console.log(`! Jogador do time : ${timeB}`)
       console.log(`! Que ${PAIN} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsLeko[0]}, Death - ${mortesLeko[0]}, Assist - ${assistLeko[0]}, KDA = ${(killsLeko[0] + assistLeko[0] / mortesLeko[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsLeko[1]}, Death - ${mortesLeko[1]}, Assist - ${assistLeko[1]}, KDA = ${(killsLeko[1] + assistLeko[1] / mortesLeko[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsLeko[2]}, Death - ${mortesLeko[2]}, Assist - ${assistLeko[2]}, KDA = ${(killsLeko[2] + assistLeko[2] / mortesLeko[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAB[0]}, Death - ${mortesKDAB[0]}, Assist - ${assistenciaKDAB[0]}, KDA = ${(killsKDAB[0] + assistenciaKDAB[0] / mortesKDAB[0]).toFixed(2)}`)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'SIRT':
       console.log(`! === ${jogadoresB[1]} ===`)
       console.log(`! Jogador do time : ${timeB}`)
       console.log(`! Que ${PAIN} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsSIRT[0]}, Death - ${mortesSIRT[0]}, Assist - ${assistSIRT[0]}, KDA = ${(killsSIRT[0] + assistSIRT[0] / mortesSIRT[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsSIRT[1]}, Death - ${mortesSIRT[1]}, Assist - ${assistSIRT[1]}, KDA = ${(killsSIRT[1] + assistSIRT[1] / mortesSIRT[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsSIRT[2]}, Death - ${mortesSIRT[2]}, Assist - ${assistSIRT[2]}, KDA = ${(killsSIRT[2] + assistSIRT[2] / mortesSIRT[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAB[1]}, Death - ${mortesKDAB[1]}, Assist - ${assistenciaKDAB[1]}, KDA = ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'KamiKat':
       console.log(`! === ${jogadoresB[2]} ===`)
       console.log(`! Jogador do time : ${timeB}`)
       console.log(`! Que ${PAIN} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsKamiKat[0]}, Death - ${mortesKamiKat[0]}, Assist - ${assistKamiKat[0]}, KDA = ${(killsKamiKat[0] + assistKamiKat[0] / mortesKamiKat[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsKamiKat[1]}, Death - ${mortesKamiKat[1]}, Assist - ${assistKamiKat[1]}, KDA = ${(killsKamiKat[1] + assistKamiKat[1] / mortesKamiKat[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsKamiKat[2]}, Death - ${mortesKamiKat[2]}, Assist - ${assistKamiKat[2]}, KDA = ${(killsKamiKat[2] + assistKamiKat[2] / mortesKamiKat[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAB[2]}, Death - ${mortesKDAB[2]}, Assist - ${assistenciaKDAB[2]}, KDA = ${(killsKDAB[2] + assistenciaKDAB[2] / mortesKDAB[2]).toFixed(2)} `)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'brTT RX':
       console.log(`! === ${jogadoresB[3]} ===`)
       console.log(`! Jogador do time : ${timeB}`)
       console.log(`! Que ${PAIN} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsbrTTRX[0]}, Death - ${mortesbrTTRX[0]}, Assist - ${assistbrTTRX[0]}, KDA = ${(killsbrTTRX[0] + assistbrTTRX[0] / mortesbrTTRX[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsbrTTRX[1]}, Death - ${mortesbrTTRX[1]}, Assist - ${assistbrTTRX[1]}, KDA = ${(killsbrTTRX[1] + assistbrTTRX[1] / mortesbrTTRX[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsbrTTRX[2]}, Death - ${mortesbrTTRX[2]}, Assist - ${assistbrTTRX[2]}, KDA = ${(killsbrTTRX[2] + assistbrTTRX[2] / mortesbrTTRX[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAB[3]}, Death - ${mortesKDAB[3]}, Assist - ${assistenciaKDAB[3]}, KDA = ${(killsKDAB[3] + assistenciaKDAB[3] / mortesKDAB[3]).toFixed(2)} `)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   case 'Dioud':
       console.log(`! === ${jogadoresB[4]} ===`)
       console.log(`! Jogador do time : ${timeB}`)
       console.log(`! Que ${PAIN} a série`)
       console.log(`! Análise da serie do dia : ${dataGame[0]}`)
       console.log(`! ====================================`)
       console.log(`! === Partida 1 ===`)
       console.log(`! Kill - ${killsDioud[0]}, Death - ${mortesDioud[0]}, Assist - ${assistDioud[0]}, KDA = ${(killsDioud[0] + assistDioud[0] / mortesDioud[0]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[3]}`)
       console.log(`! === Partida 2 ===`)
       console.log(`! Kill - ${killsDioud[1]}, Death - ${mortesDioud[1]}, Assist - ${assistDioud[1]}, KDA = ${(killsDioud[1] + assistDioud[1] / mortesDioud[1]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresB[1]}`)
       console.log(`! === Partida 3 ===`)
       console.log(`! Kill - ${killsDioud[2]}, Death - ${mortesDioud[2]}, Assist - ${assistDioud[2]}, KDA = ${(killsDioud[2] + assistDioud[2] / mortesDioud[2]).toFixed(2)}`)
       console.log(`! MVP da partida: ${jogadoresA[0]} e ${jogadoresA[3]} com mesmo KDA.`)
       console.log(`! ====================================`)
       console.log(`=== Dados da Série ===`)
       console.log(`! Kill - ${killsKDAB[4]}, Death - ${mortesKDAB[4]}, Assist - ${assistenciaKDAB[4]}, KDA = ${(killsKDAB[4] + assistenciaKDAB[4] / mortesKDAB[4]).toFixed(2)}`)
       console.log(`! MVP da série: ${jogadoresB[1]} com KDA: ${(killsKDAB[1] + assistenciaKDAB[1] / mortesKDAB[1]).toFixed(2)}`)
       break
   default: 
   console.log(`! O jogador -> ${nomeJogador} <- não jogou nessa série MD3. :D`)
   break
   }