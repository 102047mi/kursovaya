const ctx = document.getElementById('chart').getContext('2d');

// Изначальные данные для диаграммы
let data = {
    labels: [],
    datasets: [{
        data: [],
        backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb'],
    }]
};

let expensesData = {
    food: 0,
    clothes: 0,
    entertainment: 0
};

let myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: data
});

// Функция для обновления данных и отображения диаграммы
function updateChart(category, amount) {
    expensesData[category] += parseFloat(amount);

    myPieChart.data.datasets[0].data = Object.values(expensesData);
    myPieChart.update();
}

// Обработчик события для добавления расхода
document.getElementById('add-expense-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = this['expense-name'].value;
    let category = this['expense-category'].value;
    let amount = parseFloat(this['expense-amount'].value);

    let expenseItem = document.createElement('div');
    expenseItem.textContent = name + ': ' + amount;
    document.getElementById('expenses-list').appendChild(expenseItem);

    updateChart(category, amount);
});