const langArr = {
 block1: {
		en: 'Say hi and bye',
		ru: 'Скажи Привет и Пока',
	},

	block2: {
		en: 'Learn more',
		ru: 'Мама и папа дали тебе имя',
	},
};

document
	.querySelectorAll('.lang button')
	.forEach((b) => b.addEventListener('click', setLang));

function setLang() {
	for (let key in langArr) {
		let elem = document.querySelector('.lng-' + key);
		if (elem) {
			elem.innerHTML = langArr[key][this.value];
		}
	}
}