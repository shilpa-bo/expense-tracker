const express = require('express');
const { addExpense, getExpenses, deleteExpense } = require('../controllers/expenses');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');
const { addAccount, login } = require('../controllers/accounts');

const router = express.Router();

// Income Routes
router.post('/add-income', addIncome);
router.get('/get-incomes', getIncomes);
router.delete('/delete-income/:id', deleteIncome);

// Expense Routes
router.post('/add-expense', addExpense);
router.get('/get-expenses', getExpenses);
router.delete('/delete-expense/:id', deleteExpense);

// Account Routes
router.post('/register', addAccount);
router.post('/login', login);

module.exports = router;
