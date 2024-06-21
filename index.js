const prompt = require('prompt-sync')()

// let initAmount = 20000
// let monthlyContribution = 400
// let numberOfYears = 30
// let interestRate = 10

function compoundInterest(initAmount, monthlyContribution, numberOfYears, interestRate) {
    let total = initAmount
    let annualContribution = monthlyContribution * 12

    for (let i = 0; i < numberOfYears; i++) {
        total = total + annualContribution
        total = total * ((100 + interestRate) / 100)
    }

    return total.toFixed(2)
}

function calculateRegular(initAmount, monthlyContribution, numberOfYears, interestRate) {
    return (initAmount + monthlyContribution * 12 * numberOfYears).toFixed(2)
}

function run() {
    let initAmount = parseInt(prompt('What is your initial investment? £'))
    let monthlyContribution = parseInt(prompt('What is your monthly contribution? £'))
    let numberOfYears = parseInt(prompt('For how many years would you like to compound your investment? '))
    let interestRate = parseInt(prompt('What is your expected interest rate (%) over these years? '))

    printOutput(initAmount, monthlyContribution, numberOfYears, interestRate)
}

function printOutput(initAmount, monthlyContribution, numberOfYears, interestRate) {
    let finalValue = compoundInterest(initAmount, monthlyContribution, numberOfYears, interestRate)

    let valueWithoutCompounding = calculateRegular(initAmount, monthlyContribution, numberOfYears)

    let summary = `INIT_AMOUNT: £${initAmount}\nMONTHLY_CONTRIBUTION: £${monthlyContribution}\nNUMBER_OF_YEARS: £${numberOfYears}\nINTEREST_RATE: £${interestRate}\n\nFINAL_COMPOUNDED_VALUE: £${finalValue}\nREGULAR_AMOUNT: £${valueWithoutCompounding}\nDIFFERENCE: £${finalValue - valueWithoutCompounding}`
    
    console.log(summary)
}

run()