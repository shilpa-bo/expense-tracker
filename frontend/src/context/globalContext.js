import React, { useContext, useState } from "react"
import axios from 'axios'
import Incomes from "../Components/Incomes/Incomes";

const BASE_URL = "http://localhost:3000/api/v1/";

const GlobalContext = React.createContext()
export const GlobalProvider = ({children}) => {
    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState([])
    //calculate incomes 


    // Add a Loading State
    const addUser = async (user) => {
        console.log("Adding user");
        try {
            const response = await axios.post(`${BASE_URL}register`, user);
            // You might want to handle successful registration here
            console.log("User registered successfully", response.data);
        } catch (err) {
            setError(err.response ? err.response.data.message : "An error occurred while adding user");
        }
    };
    
    const addIncome = async (income) => {
        console.log("Adding income")
        const response = await axios.post(`${BASE_URL}add-income`, income)
        .catch( (err) => {
            setError(err.response.data.message)
        }) 
        getIncomes()
    }

    const getIncomes=async() => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
    }

    const deleteIncome = async (id) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
    }

    const totalIncome = () => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount
        })
        return totalIncome
    }

        //calculate expenses 
        const addExpense = async (income) => {
            const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch( (err) => {
                setError(err.response.data.message)
            }) 
            getExpenses()
        }
    
        const getExpenses=async() => {
            const response = await axios.get(`${BASE_URL}get-expenses`)
            setExpenses(response.data)
        }
    
        const deleteExpense = async (id) => {
            const res = await axios.delete(`${BASE_URL}delete-expense/${id}`)
            getExpenses()
        }
    
        const totalExpenses = () => {
            let totalExpenses = 0;
            expenses.forEach((expense) => {
                totalExpenses += expense.amount
            })
            return totalExpenses
        }

        const totalBalance = () => {
            return totalIncome() - totalExpenses()
        }

        const transactionHistory = () => {
            const history = [...incomes, ...expenses]
            history.sort((a,b) => {
                return new Date(b.createdAt) - new Date(a.createdAt)
            })

            return history
        }


    return (
        <GlobalContext.Provider value = {{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            expenses,
            totalBalance,
            transactionHistory,
            error,
            setError,
            addUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}