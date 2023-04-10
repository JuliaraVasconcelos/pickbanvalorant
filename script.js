const firstTeam = prompt('Digite o nome do primeiro time');
const secondTeam = prompt('Digite o nome do segundo time');

const team1 = firstTeam ? document.querySelector('#team1').innerHTML = firstTeam : 'Time 1'
const team2 = secondTeam ? document.querySelector('#team2').innerHTML = secondTeam : 'Time 2'

let turn = team1;
let remainingMaps = ['Lotus', 'Pearl', 'Fracture', 'Breeze', 'Icebox', 'Bind', 'Haven', 'Split', 'Ascent']

const mapsCard = document.querySelectorAll('.card');
const turnText = document.querySelector('#turnText');
const side = document.querySelector('.side')
const atk = document.querySelector('.atk')
const def = document.querySelector('.def')

const changeTeamInnerText = (t = 0) => {
    t === 0 
    ? turnText.innerText = `É a vez do time ${turn} escolher um mapa` 
    : turnText.innerHTML = `O mapa do jogo será ${t}`
}
changeTeamInnerText();

const banMap = (e) => {
    e.currentTarget.addEventListener('click', banMap)

    e.currentTarget.classList.add('selected')
    e.currentTarget.querySelector('.accept').innerText = 'Vetado'

    const bannedMap = e.currentTarget.querySelector('.map-name').innerText
    remainingMaps = remainingMaps.filter(map => map != bannedMap)

    if (remainingMaps.length === 1){
        const choosenMap = document.querySelector('.card:not(.selected)')
        choosenMap.removeEventListener('click', banMap)
        choosenMap.classList.add('picked', 'disable-hover')

        changeTeamInnerText(remainingMaps[0])

        return
    }

    turn === team1 ? turn = team2 : turn = team1

    changeTeamInnerText()
}
mapsCard.forEach(map => map.addEventListener('click', banMap))

//----------><----------
