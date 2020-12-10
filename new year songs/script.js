let name = document.getElementById('songName');
let text = document.getElementById('lyrics');

let prev = document.getElementById('button_prev');
let next = document.getElementById('button_next');
let lyrics = document.getElementById('button_lyrics');
let random = document.getElementById('button_random');
let play = document.getElementById('button_play');
let stop = document.getElementById('button_stop');

let songs = ['в лесу родилась елочка', 'ПЕСЕНКА ПРО ПЯТЬ МИНУТ (ИЗ К/Ф «КАРНАВАЛЬНАЯ НОЧЬ»)', 'ОЙ, МОРОЗ, МОРОЗ', 'JINGLE BELLS'];
let texts = ['В лесу родилась елочка, В лесу она росла, Зимой и летом стройная, зеленая была. Зимой и летом стройная, зеленая была. Метель ей пела песенку: «Спи, елочка, бай-бай!» Мороз снежком укутывал: «Смотри, не замерзай!» Мороз снежком укутывал: «Смотри, не замерзай!» Трусишка — зайка серенький Под елочкой скакал. Порою волк, сердитый волк, рысцою пробегал. Порою волк, сердитый волк, рысцою пробегал. Чу! Снег по лесу частому Под полозом скрипит; Лошадка мохноногая торопится, бежит. Лошадка мохноногая торопится, бежит. Везет лошадка дровеньки, А в дровнях мужичок, Срубил он нашу елочку под самый корешок. Срубил он нашу елочку под самый корешок. И вот она, нарядная, На праздник к нам пришла, И много, много радости детишкам принесла. И много, много радости детишкам принесла..', 'Я вам песенку спою про пять минут, Эту песенку мою пускай поют, Пусть летит она по свету, Я дарю вам песню эту, Эту песенку про пять минут. Пять минут, пять минут, Бой часов раздастся вскоре! Пять минут, пять минут, Помиритесь все, кто в ссоре! Пять минут, пять минут — Разобраться если строго, Даже в эти пять минут Можно сделать очень много! Пять минут, пять минут, Бой часов раздастся вскоре, Помиритесь те, кто в ссоре. На часах у нас двенадцать без пяти Новый год уже, наверное, в пути. К нам он мчится полным ходом, Скоро скажем: «С новым годом!» На часах двенадцать без пяти. Новый год — он не ждет, Он у самого порога. Пять минут пробегут — Их осталось так немного. Милый друг, поспеши, Зря терять минут не надо, Что не сказано — скажи, Не откладывая на год. Милый друг, поспеши, Что не сказано — скажи, Не откладывая на год. В пять минут решают люди иногда Не жениться ни за что и никогда, Но бывает, что минута Все меняет очень круто, Все меняет раз и навсегда. Новый год недалек, Пожелать хочу вам счастья. Вот сидит паренек Без пяти минут он мастер. Без пяти? Без пяти. Но, ведь, пять минут немного, Он на правильном пути, Хороша его дорога. Пять минут — так немного, Он на правильном пути, Хороша его дорога. Пусть подхватят в этот вечер там и тут Эту песенку мою про пять минут, Но, пока я песню пела, пять минут уж пролетело. Новый год!.. Часы двенадцать бьют! Новый год настает. С Новым годом! С новым счастьем! Время мчит нас вперед — Старый год уже не властен! Пусть кругом все поет И цветут в улыбках лица, Ведь на то и Новый год, Чтобы петь и веселиться. Новый год настает! С Новым годом! С Новым счастьем! С Новым годом! С Новым счастьем! .', 'Ой, мороз, мороз, не морозь меня, Не морозь меня, моего коня, Моего коня белогривого. У меня жена, ох, ревнивая. У меня жена, ох, красавица, Ждет меня домой, ждет-печалится. Я вернусь домой на закате дня, Обниму жену, напою коня. Напою коня водой ключевой, Одарю жену словом ласковым. Ой , мороз, мороз, не морозь меня, Не морозь меня, моего коня .', '1 Dashing through the snow On a one-horse open sleigh, Over the fields we go, Laughing all the way; Bells on bob-tail ring, making spirits bright, What fun it is to ride and sing A sleighing song tonight, O Jingle bells, jingle bells, jingle all the way! O what fun it is to ride In a one-horse open sleigh (repeat) 2 A day or two ago, I thought I’d take a ride, And soon Miss Fanny Bright Was seated by my side; The horse was lean and lank; Misfortune seemed his lot; He got into a drifted bank, And we, we got upsot. O Jingle bells, jingle bells, jingle all the way! O what fun it is to ride In a one-horse open sleigh (repeat) 3 A day or two ago, the story I must tell I went out on the snow And on my back I fell; A gent was riding by In a one-horse open sleigh, He laughed as there I sprawling lie, But quickly drove away, O Jingle bells, jingle bells, jingle all the way! O what fun it is to ride In a one-horse open sleigh (repeat) 4 Now the ground is white Go it while you’re young, Take the girls tonight And sing this sleighing song; Just get a bob-tailed bay two-forty as his speed Hitch him to an open sleigh And crack! you’ll take the lead, O Jingle bells, jingle bells, jingle all the way! O what fun it is to ride In a one-horse open sleigh (repeat)'];
let audios = ['elochka.mp3', '5minut.mp3', 'moroz.mp3', 'jingle-bells.mp3'];
let currentIndex = 0;

name.innerText = songs[currentIndex];

function nextSong() {
	currentIndex++;
	if (currentIndex > songs.length-1) {
		currentIndex = songs.length-1;
	}
	name.innerText = songs[currentIndex];
	text.innerText = '';
}

function prevSong() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = 0;
	}
	name.innerText = songs[currentIndex];
	text.innerText = '';
}

function showLyrics() {
	text.innerText = texts[currentIndex];
}

function randomSong() {
	currentIndex = Math.floor(Math.random()*4);
	name.innerText = songs[currentIndex];
	text.innerText = '';
}

let audio = new Audio();
audio.preload = 'auto';
audio.src = '';


function playSong() {
	audio.play();
}

function stopSong() {
	audio.pause();
	audio.currentTime = 0;
}