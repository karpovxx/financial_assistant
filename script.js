// let money = +prompt('Ваш бюджет на месяц? (руб.)', '0')
// let time = prompt('Введите дату в формате YYYY-MM-DD:', '')

let money, time
let start = () => {
	money = +prompt('Ваш бюджет на месяц? (руб.)', '0')
	time = prompt('Введите дату в формате YYYY-MM-DD:', '')

	while (isNaN(money) || money == '' || money == null) {
		alert('Не корректный ввод данных бюджета! Попробуйте снова.')
		console.log('Некорректный ввод данных бюджета! Попробуйте снова.')
		money = +prompt('Ваш бюджет на месяц? (руб.)', '0')
	}
}
start()
let appData = {
	moneyData: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
	chooseExpenses: function () {
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
				alert('Не корректный ввод данных статей расходов! Попробуйте снова.')
				console.log(
					'Некорректный ввод данных статей расходов! Попробуйте снова.'
				)

				i--
				count -= 2
			}
		}
	},
	detectDayBudget: function () {
		appData.moneyOneDay = (appData.moneyData / 30).toFixed()
		// alert('Бюджет на 1 день:' + ' ' + appData.moneyData / 30 + ' ' + 'руб.')
		alert('Бюджет на 1 день:' + ' ' + appData.moneyOneDay + ' ' + 'руб.')
	},
	detectLevel: function () {
		if (appData.moneyOneDay < 100) {
			console.log('Минимальный уровень достатка.')
		} else if (appData.moneyOneDay > 100 && appData.moneyOneDay < 2000) {
			console.log('Средний уровень достатка.')
		} else if (appData.moneyOneDay > 2000) {
			console.log('Высокий уровень достатка.')
		} else {
			console.log('Произошла неизвестная ошибка!')
		}
	},
	checkSavings: function () {
		if (appData.savings == true) {
			let save = +prompt('Какова сумма накоплений?')
			let percent = +prompt('Под какой процент?')
			if (isNaN(save) || isNaN(percent) || save <= 0 || percent <= 0) {
				alert('Пожалуйста, введите корректные значения для суммы и процента.')
			} else {
				appData.monthIncome = (save / 100 / 12) * percent
				alert(
					'Доход в месяц с вашего депозита: ' + appData.monthIncome.toFixed(2)
				)
			}
		}
	},
	chooseOptExpenses: function () {
		let countOpt = 1
		for (let i = 0; i < 3; i++) {
			let questionOptionalExpenses = prompt(
				`Статья необязательных расходов №${countOpt}?`
			)
			appData.optionalExpenses[countOpt] = questionOptionalExpenses
			countOpt++
		}
	},
	chooseIncome: function () {
		let items

		do {
			items = prompt(
				'Что принесет дополнительный доход? (Перечислите через запятую)',
				''
			)
			if (
				typeof items !== 'string' ||
				items.trim() === '' ||
				items === null ||
				!isNaN(items)
			) {
				alert('Вы ввели некорректные данные или не ввели их вовсе')
			}
		} while (
			typeof items !== 'string' ||
			items.trim() === '' ||
			items === null ||
			!isNaN(items)
		)

		appData.income = items.split(', ')
		appData.income.push(prompt('Может что-то еще?'))
		appData.income.sort()
	},
}
console.log(appData)
