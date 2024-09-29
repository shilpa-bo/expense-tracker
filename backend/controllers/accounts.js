const AccountSchema = require('../models/AccountModel')
const bcrypt = require('bcrypt')

exports.addAccount = async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }
    const existingAccount = await AccountSchema.findOne({ email });
    if (existingAccount) {
        return res.status(400).json({ message: 'Email already in use' });
    }

    try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const account = new AccountSchema({
        name,
        email,
        password:hashedPassword
    });
        await account.save();
        res.status(200).json({ message: 'Account Added' });
    } catch (error) {
        console.error('Error adding expense:', error); // Log the error for debugging
        res.status(500).json({ message: 'Internal Server Error' });
    }
    console.log(account);

}

exports.login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required!' });
    }
    try {
    if (!user) {
        // Generic error message to prevent user enumeration
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        // Generic error message to prevent user enumeration
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Successful login
    res.status(200).json({ message: 'Success' });
} catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
}
};