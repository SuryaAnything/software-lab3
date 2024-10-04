// chart.js
function loadCSV(file) {
    Papa.parse(file, {
        header: true,
        download: true,
        complete: function(results) {
            createCharts(results.data);
        }
    });
}

function createCharts(data) {
    createAgeChart(data);
    createGenderChart(data);
    createTransportChart(data);
    createFoodChart(data);
    createSatisfactionChart(data);
    createEatingOutChart(data);
}

// Chart for Age Group
function createAgeChart(data) {
    const ageGroups = {};
    
    data.forEach(response => {
        const ageGroup = response['What is your age group?'];
        ageGroups[ageGroup] = (ageGroups[ageGroup] || 0) + 1;
    });

    const labels = Object.keys(ageGroups);
    const values = Object.values(ageGroups);

    const ageCtx = document.getElementById('ageChart').getContext('2d');
    new Chart(ageCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Age Group Responses',
                data: values,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Chart for Gender
function createGenderChart(data) {
    const genders = {};
    
    data.forEach(response => {
        const gender = response['What is your gender?'];
        genders[gender] = (genders[gender] || 0) + 1;
    });

    const labels = Object.keys(genders);
    const values = Object.values(genders);

    const genderCtx = document.getElementById('genderChart').getContext('2d');
    new Chart(genderCtx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Gender Distribution',
                data: values,
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1
            }]
        }
    });
}

// Chart for Preferred Mode of Transport
function createTransportChart(data) {
    const transports = {};
    
    data.forEach(response => {
        const transport = response['What is your preferred mode of transport?'];
        transports[transport] = (transports[transport] || 0) + 1;
    });

    const labels = Object.keys(transports);
    const values = Object.values(transports);

    const transportCtx = document.getElementById('transportChart').getContext('2d');
    new Chart(transportCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Preferred Mode of Transport',
                data: values,
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Chart for Food Preference
function createFoodChart(data) {
    const foods = {};
    
    data.forEach(response => {
        const food = response['Which type of food do you enjoy the most?'];
        const foodItems = food.split(", "); // Split multiple preferences
        foodItems.forEach(item => {
            foods[item] = (foods[item] || 0) + 1;
        });
    });

    const labels = Object.keys(foods);
    const values = Object.values(foods);

    const foodCtx = document.getElementById('foodChart').getContext('2d');
    new Chart(foodCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Food Preferences',
                data: values,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Chart for Satisfaction Level
function createSatisfactionChart(data) {
    const satisfactionLevels = {};
    
    data.forEach(response => {
        const satisfaction = response['How satisfied are you with your current internet service provider?'];
        satisfactionLevels[satisfaction] = (satisfactionLevels[satisfaction] || 0) + 1;
    });

    const labels = Object.keys(satisfactionLevels);
    const values = Object.values(satisfactionLevels);

    const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
    new Chart(satisfactionCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Satisfaction Levels',
                data: values,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Chart for Eating Out Frequency
function createEatingOutChart(data) {
    const eatingOutFrequency = {};
    
    data.forEach(response => {
        const frequency = response['How often do you eat out in a week?'];
        eatingOutFrequency[frequency] = (eatingOutFrequency[frequency] || 0) + 1;
    });

    const labels = Object.keys(eatingOutFrequency);
    const values = Object.values(eatingOutFrequency);

    const eatingOutCtx = document.getElementById('eatingOutChart').getContext('2d');
    new Chart(eatingOutCtx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Eating Out Frequency',
                data: values,
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Load the CSV file on window load
window.onload = function() {
    loadCSV('data.csv'); // Ensure data.csv is in the same folder
};
