let partidas = [
  {
      data: '28/03/2015',
      timeA: {
          nome: 'INTZ',
          kills: 10,
          gold: 70200,
          vitoria: true,
          jogadores: [
              { nome: 'Yang',     kills: 1, death: 3, assist: 2 },
              { nome: 'Revolta',  kills: 2, death: 4, assist: 3 },
              { nome: 'tockers',  kills: 3, death: 2, assist: 4 },
              { nome: 'micaO',    kills: 3, death: 1, assist: 4 },
              { nome: 'Jockster', kills: 1, death: 3, assist: 8 },
          ]
      },
      timeB: {
          nome: 'PAIN',
          kills: 12,
          gold: 74500,
          vitoria: false,
          jogadores: [
              { nome: 'Leko',    kills: 1, death: 3, assist: 9  },
              { nome: 'SIRT',    kills: 1, death: 1, assist: 10 },
              { nome: 'KamiKat', kills: 5, death: 2, assist: 1  },
              { nome: 'brTT RX', kills: 5, death: 3, assist: 5  },
              { nome: 'Dioud',   kills: 0, death: 1, assist: 9  }
          ]
      }
  },
  {
      data: '28/03/2015',
      timeA: {
          nome: 'INTZ',
          kills: 3,
          gold: 60200,
          vitoria: false,
          jogadores: [
              { nome: 'Yang',     kills: 1, death: 1, assist: 0 },
              { nome: 'Revolta',  kills: 0, death: 2, assist: 2 },
              { nome: 'tockers',  kills: 0, death: 1, assist: 1 },
              { nome: 'micaO',    kills: 0, death: 2, assist: 2 },
              { nome: 'Jockster', kills: 2, death: 4, assist: 0 },
          ]
      },
      timeB: {
          nome: 'PAIN',
          kills: 10,
          gold: 69100,
          vitoria: true,
          jogadores: [
              { nome: 'Leko',    kills: 0, death: 1, assist: 5 },
              { nome: 'SIRT',    kills: 3, death: 0, assist: 4 },
              { nome: 'KamiKat', kills: 4, death: 0, assist: 2 },
              { nome: 'brTT RX', kills: 2, death: 1, assist: 2 },
              { nome: 'Dioud',   kills: 1, death: 1, assist: 3 }
          ]
      }
  },
  {
      data: '28/03/2015',
      timeA: {
          nome: 'INTZ',
          kills: 21,
          gold: 80200,
          vitoria: true,
          jogadores: [
              { nome: 'Yang',     kills: 6, death: 1, assist: 4  },
              { nome: 'Revolta',  kills: 0, death: 0, assist: 9  },
              { nome: 'tockers',  kills: 3, death: 2, assist: 7  },
              { nome: 'micaO',    kills: 8, death: 1, assist: 2  },
              { nome: 'Jockster', kills: 2, death: 6, assist: 11 },
          ]
      },
      timeB: {
          nome: 'PAIN',
          kills: 15,
          gold: 2500,
          vitoria: false,
          jogadores: [
              { nome: 'Leko',    kills: 2, death: 5, assist: 3 },
              { nome: 'SIRT',    kills: 3, death: 3, assist: 5 },
              { nome: 'KamiKat', kills: 7, death: 4, assist: 2 },
              { nome: 'brTT RX', kills: 3, death: 2, assist: 4 },
              { nome: 'Dioud',   kills: 0, death: 7, assist: 8 }
          ]
      }
  }]

/*
    TODO: Tendo em mente o objeto 'partidas' escrito acima resolva o seguinte problemas.

    ? Para facilitar o campeonato CBLOL queremos saber quem foi o melhor jogador no geral das 3 partidas.
    ? Some as kill, death e assist das 3 partidas de cada jogador e gere seu KDA.

    * Dessa vez não considere o time que venceu a partida.

    ? A Saída da série deve ser conforme o exemplo a seguir.
    ! MVP da série MD3 foi Fulano 10/0/1 KDA: 11

    ? Caso o MVP da série MD3 não ser do time que venceu, a saida deve também indicar o MVP do time vencedor.
    ? Escrevendo uma segunda linha conforme o exemplo a seguir.
    ! MVP do time vencedor na série MD3 foi Ciclano 4/2/10 KDA: 7
*/

//Para pegar os KDA gerais e soma-los para ver quem foi o maior da série
 let jogadores = [];
  let jogadoresTimeA = [];
  let jogadoresTimeB = [];
  let mortes = [];
  let kills = [];
  let assistencia = [];
  
  //Para pegar o jogador com maior KDA do time A
  let timeAjogadores = [];
  let timeAmortes = [];
  let timeAkills = [];
  let timeAassistencia = [];

  //for para pegar todas assist, kills, deaths e também os nomes do jogadores, usando push, map, shift e reduce.
  for (let i = 0; i < 5; i++) {
    assistencia.push(partidas.map((a) => a.timeA.jogadores[i].assist).reduce((a, b) => a + b));
    jogadores.push(partidas.map((a) => a.timeA.jogadores[i].nome).shift());
    jogadoresTimeA.push(partidas.map((a) => a.timeA.jogadores[i].nome).shift());
    kills.push(partidas.map((a) => a.timeA.jogadores[i].kills).reduce((a, b) => a + b));
    mortes.push(partidas.map((a) => a.timeA.jogadores[i].death).reduce((a, b) => a + b));
      
      
    assistencia.push(partidas.map((a) => a.timeB.jogadores[i].assist).reduce((a, b) => a + b));
    jogadores.push(partidas.map((a) => a.timeB.jogadores[i].nome).shift());
    jogadoresTimeB.push(partidas.map((a) => a.timeB.jogadores[i].nome).shift());
    kills.push(partidas.map((a) => a.timeB.jogadores[i].kills).reduce((a, b) => a + b));
    mortes.push(partidas.map((a) => a.timeB.jogadores[i].death).reduce((a, b) => a + b));
          
  }
//for para já ter o resultado do KDA de cada jogador, no for acima estava sendo somando as kills, assist e deaths, abaixo fizemos o calculo delas
  let KDAgeral = []
  let time = ''
  for (let i = 0; i < 10; i++) {
      KDAgeral.push(((kills[i] + assistencia[i]) / mortes[i]).toFixed(2))
  }
//Aqui fiz um for para somente o time A em especifico, acredito que poderia ter uma maneira de usar o primeiro for, mas estava acusando erro no código.
 for (let i = 0; i < 5; i++) {
    timeAassistencia.push(partidas.map((a) => a.timeA.jogadores[i].assist).reduce((a, b) => a + b));
    timeAjogadores.push(partidas.map((a) => a.timeA.jogadores[i].nome).shift());
    timeAkills.push(partidas.map((a) => a.timeA.jogadores[i].kills).reduce((a, b) => a + b));
    timeAmortes.push(partidas.map((a) => a.timeA.jogadores[i].death).reduce((a, b) => a + b));
  }
  //Aqui tenho o for para o maior KDA do time A, e abaxio dele um Math.max para pegar o maior KDA.
  let KDATIMEA = []
  let TEAM = ''
  for (let i = 0; i < 5; i++) {
    KDATIMEA.push(((timeAkills[i] + timeAassistencia[i]) / timeAmortes[i]).toFixed(2))
  }
let maiorDoA = Math.max(...KDATIMEA)

//Aqui tenho um for, para pegar o maior KDA da série MD3
  let maiorKDA = Math.max(...KDAgeral)
  let posicao = ''
  for (let i = 0; i < 10; i++) {
    if (KDAgeral[i] == maiorKDA) {      
      posicao = i
    }
  }
  
  //Coloquei os resultados finais em váriaveis diferentes para imprimir o resultado final.
  let player = jogadores[posicao]
  let matou = kills[posicao]
  let morreu = mortes[posicao]
  let assiste = assistencia[posicao]
  
  //For para ver de qual time é o jogador com mair KDA
  for (let i = 0; i < 5; i++) {
      if (player == jogadoresTimeA[i]) {
          time = 'INTZ'
      } else if (player == jogadoresTimeB[i]) {
          time = 'PAIN'
      }
  }
  // E por fim, o resultado, como o jogador com maior KDA da série MD3, não foi da equipe que venceu a série, o console.log abaixo
  // está tranzendo o jogador da equipe que venceu com o maior KDA
  console.log(`O MVP da série MD3 foi ${player} ${matou}/${morreu}/${assiste} KDA: ${maiorKDA}, do time da ${time}!`)
  console.log(`Porém o MVP da equipe vencedora foi o ${jogadoresTimeA[3]} com KDA de ${maiorDoA}!`)

                    //Essa é a resolução da minha questão numero 4, tentei fazer o ela mais compacta, melhor forma que consegui achar foi essa. :D