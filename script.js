let money = +prompt('Ваш бюджет на месяц? (руб.)', '0')
let time = prompt('Введите дату в формате YYYY-MM-DD:', '')
let appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
}
console.log(appData)
let count = 1
for (let i = 0; i < 2; i++) {
	let a = prompt(
		`Вопрос №${count}: Введите обязательную статью расходов в этом месяце`,
		''
	)
	count++
	let b = prompt(`Вопрос №${count}: Во сколько обойдется? (руб.)`, '')
	count++
	if (
		typeof a === 'string' &&
		typeof a != null &&
		typeof b != null &&
		a != '' &&
		b != '' &&
		a.length < 50 &&
		b.length < 50
	) {
		console.log('Проверка успешно пройдена!')
		appData.expenses[a] = b
	} else {
		console.log('Некорректный ввод данных! Попробуйте снова.')
		i--
		count -= 2
	}
}
//Тот же цикл, но с do-while
// let i = 0
// let count = 1
// do {
// 	let a = prompt(
// 		`Вопрос №${count}: Введите обязательную статью расходов в этом месяце`,
// 		''
// 	)
// 	count++
// 	let b = prompt(`Вопрос №${count}: Во сколько обойдется? (руб.)`, '')
// 	count++
// 	if (
// 		typeof a === 'string' &&
// 		typeof a != null &&
// 		typeof b != null &&
// 		a != '' &&
// 		b != '' &&
// 		a.length < 50 &&
// 		b.length < 50
// 	) {
// 		console.log('Проверка успешно пройдена!')
// 		appData.expenses[a] = b
// 		i++
// 	} else {
// 		console.log('Некорректный ввод данных! Попробуйте снова.')
// 		i--
// 		count--
// 	}
// } while (i < 2)
appData.moneyOneDay = appData.moneyData / 30
// alert('Бюджет на 1 день:' + ' ' + appData.moneyData / 30 + ' ' + 'руб.')
alert('Бюджет на 1 день:' + ' ' + appData.moneyOneDay + ' ' + 'руб.')
if (appData.moneyOneDay < 100) {
	console.log('Минимальный уровень достатка.')
} else if (appData.moneyOneDay > 100 && appData.moneyOneData < 2000) {
	console.log('Средний уровень достатка.')
} else if (appData.moneyOneDay > 2000) {
	console.log('Высокий уровень достатка.')
} else {
	console.log('Произошла неизвестная ошибка!')
}
