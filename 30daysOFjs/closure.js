// Exercises: Level 1
// Create a closure which has one inner function
       function outerFunction() {
        let count = 0;
         function countPlus() {
            count ++
            return count;
         }
         return countPlus
       }
const plus = outerFunction()
console.log(plus())          //output 1
console.log(plus())         //output 2
console.log(plus())        //output 3
// Exercises: Level 2
// Create a closure which has three inner functions
       function outerFunctions() {
        let count = 0
           function innerFunction1() {
            count++
            return count;
           }
           function innerFunction2() {
            count--
            return count;
           }
           function innerFunction3() {
            count*2
            return count
           }
           return {
            innerFunction1:innerFunction1(),
            innerFunction2:innerFunction2(),
            innerFunction3:innerFunction3()
           }
       }
       const ineerFunc = outerFunctions()
       console.log(ineerFunc.innerFunction1)     //output 1
       console.log(ineerFunc.innerFunction2)       //output 0
       console.log(ineerFunc.innerFunction3)       //output 1

// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

function personAccount() {
    let firstname ="Nikita"
    let lastname = "Goyal"
    let incomes = []
    let expenses = []
    function totalIncome() {
        let total = 0;
        for (let i = 0; i < incomes.length; i++) {
            total += incomes[i].amount;
        }
        return total;
    }
    
    function totalExpense() {
        let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
    return total;
}
    
    function accountInfo() {
     return `
     Name : ${firstname} ${lastname}
     Total income : $${totalIncome()}
     Total expense : $${totalExpense()}
     Account Balance: ${accountBalance()}
     `
    }
    function addIncome(amount,description) {
        incomes.push({ amount, description });
    }
    function addExpense(amount,description) {
        expenses.push({ amount, description });
    }
    function accountBalance() {
    return totalIncome() - totalExpense()
    }
    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}
let inner = personAccount()
console.log(inner.totalIncome())
console.log(inner.totalExpense())
console.log(inner.accountInfo())
console.log(inner.addIncome())
console.log(inner.addExpense())
console.log(inner.accountBalance())