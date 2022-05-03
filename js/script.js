let films     = ["Поїзд: Київ-Війна", "Престиж(фильм Нолана)", "300 спартанцев", "Револьвер", "Бойцовский клуб", "Кибер", "Игра в имитацию", "Смертельная зона", "В долине зла", "Бог Серенгети", "Цикада 3301", "Ціна правди", "Банкир", "Быстрее пули", "Проект Адам", "Вне игры", "Король Стэйтен-Айлэнда", "Птица в клетке", "Ты водишь", "Выбор за нами(документалка)", "Пленницы", "Меняющие реальность", "Мне бы в небо", "Генерация «П»", "сериал `Киберсталкер`", "Эйфория", "Аватар(сериал)", "Симпсоны(23 сезон, 1 серия)", "Джон Уик 1-3", "Старым тут не место", "Сколько стоит жизнь", "Крутые меры", "В погоне за счастьем", "Зелёная книга", "Атлантида", "Игра", "Воин (2011г.)", "Грань будущего", "Зроблено в Італії", "За гранью реальности", "Король говорит", "Удача Логана", "Инкарнация", "Алея жаху", "Козаки абсолютно брехлива історія", "Отступники"];
let nameFilm  = getRandomFilms(1, films);
let list      = document.querySelector('.list');
let input     = document.querySelector('.head__input');
let btnAdd    = document.querySelector('.head__add');
let btnDel    = document.querySelector('.head__delete');
let btnRandom = document.querySelector('.head__random');

console.log(nameFilm)

for (const film of films) {
	let item = document.createElement('p');
	item.textContent = film;
	item.className = 'list__item';
	list.append(item);
}

btnRandom.addEventListener('click', getRandomFilms)


function getRandomFilms(films) {	
	let index = Math.random() * (films.length - 1) + 1;		
	index = Math.round(index);
	console.log(films[index])
	return films[index];
}

function delMovieWatched(name, array) {	
	let index = array.indexOf(name);	
	array.splice(index, 1)
	return array;
}

let index = films.indexOf(nameFilm);
delMovieWatched(nameFilm, films)
console.log(films.length)
