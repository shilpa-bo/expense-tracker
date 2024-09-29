const ExpenseSchema = require('../models/ExpenseModel')

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    // Validations
    if (!title || !category || !description || !date) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    if (typeof amount !== 'number' || amount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive number.' });
      }
      
    // Creating a new instance of ExpenseModel using our ExpenseModel
    const expense = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        await expense.save();
        res.status(200).json({ message: 'Expense Added' });
    } catch (error) {
        console.error('Error adding expense:', error); // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error' });
    }
    console.log(expense);
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})

    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id).then((expense) => {
        res.status(200).json({message: 'Expense Deleted'})
    }).catch((err) => {
        res.status(500).json({message: 'Server Error'})
    })
}