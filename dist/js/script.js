let films       = ["Поїзд: Київ-Війна", "Престиж(фильм Нолана)", "300 спартанцев", "Кибер", "Игра в имитацию", "Смертельная зона", "В долине зла", "Бог Серенгети", "Цикада 3301", "Ціна правди", "Банкир", "Быстрее пули", "Проект Адам", "Вне игры", "Король Стэйтен-Айлэнда", "Птица в клетке", "Ты водишь", "Выбор за нами(документалка)", "Пленницы", "Меняющие реальность", "Мне бы в небо", "Генерация «П»", "сериал `Киберсталкер`", "Эйфория", "Аватар(сериал)", "Симпсоны(23 сезон, 1 серия)", "Джон Уик 1-3", "Старым тут не место", "Сколько стоит жизнь", "Крутые меры", "В погоне за счастьем", "Зелёная книга", "Атлантида", "Игра", "Воин (2011г.)", "Грань будущего", "Зроблено в Італії", "За гранью реальности", "Король говорит", "Удача Логана", "Инкарнация", "Алея жаху", "Козаки абсолютно брехлива історія", "Отступники"];
let input       = document.querySelector('.head__input');
let btnAdd      = document.querySelector('.head__add');
let btnDel      = document.querySelector('.head__delete');
let btnRandom   = document.querySelector('.head__random');
let btnSearch   = document.querySelector('.head__search');
let randomFilm  = document.querySelector('.film');
let list        = document.querySelector('.list');

addListFilms();

btnAdd.addEventListener('click', addFilmToList)
btnRandom.addEventListener('click', getRandomFilms);
btnDel.addEventListener('click', delMovieWatched);
btnSearch.addEventListener('click', searchFilm);

function searchFilm() {
	let array = document.querySelectorAll('.list__item');
	for (let i = 0; i < array.length; i++) {
		if (array[i].innerText == input.value) {
			array[i].classList.toggle('searchedFilm');
		}
	}

	input.value = ''
}

function addListFilms() {
	for (const film of films) {
		let item = document.createElement('p');
		item.textContent = film;
		item.className = 'list__item';
		list.append(item);
	}
}

function addFilmToList() {
	let newFilm = document.createElement('p');
	newFilm.textContent = input.value;
	newFilm.className = 'list__item';
	list.append(newFilm);
	films.push(input.value);
	input.value = '';
}

function getRandomFilms() {	
	let index = Math.random() * (films.length - 1) + 1;		
	index = Math.round(index);
	randomFilm.textContent = films[index];
	return films[index];
}

function delMovieWatched() {
	let array = document.querySelectorAll('.list__item');
	for (let i = 0; i < array.length; i++) {
		if (array[i].innerText == randomFilm.innerText) {
			array[i].remove();
			films.splice(i, 1);
		}
	}
	return films;
}