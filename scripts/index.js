const year = prompt(`Напиши свой год рождения`)
const city = prompt(`Город, в котором ты живешь`)
const sport = prompt(`Твой любимый вид спорта`)

const age = 2023 - year

function country (city){
switch (city) {
    case `Киев`:{
        return `Украина`
    }
    case `Берлин`:{
        return `Германия`
    }
    case `Париж`:{
        return `Франция`
    }
}
// country(city)
}

function sportsman (sport) {
    switch (sport) {
        case`Футбол`: {
            return `Марадона`
        }
        case`Баскетбол`: {
            return `Джордан`
        }
        case`Бокс`: {
            return `Кличко`
        }
    }
}


if (year && city && sport) {
if (year) {
 if (city === `Киев` || city === `Москва` || city === `Минск`) {
        alert(`${age} лет. Ты живешь в ${city}, ${country(city)}. Ты хочешь стать как ${sportsman(sport)}`)
    } else  {
        alert(`${age} лет. Ты живешь в ${city}. Ты хочешь стать как ${sport}`)
    }
        alert(`Жаль, что Вы не захотели ввести свой год рождения`)
    } else if (city) {
        alert(`Жаль, что Вы не захотели ввести свой город`)
    } else if (sport) {
        alert(`Жаль, что Вы не захотели ввести свой любимый вд спорта`)
    }
}