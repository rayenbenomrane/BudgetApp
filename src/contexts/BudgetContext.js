import React, { useContext} from "react"
import { v4 as uuidV4 } from "uuid"
import useLocalStorage from "../hooks/useLocalStorage"
const BudgetContext=React.createContext()

export function useBudget(){
return useContext(BudgetContext)
}

/*{
    id:
    name:
    max
}
{
id:
budgetId:
amount:
description:

}*/
export const BudgetProvider=({children})=>{
    const [budget,setbudget]=useLocalStorage("budget",[])
    const [expenses,setexpenses]=useLocalStorage("expenses",[])
    function getexpenses(){

    }
    function getbudget(){}
    function addexpenses({description,amount,budgetId}){
        setexpenses(prevexpenses=>{
            
            return [...prevexpenses,{id:uuidV4(),description,amount,budgetId}]})
    }
    function addbudget({name,max}){
        setbudget(prevBudget=>{
            if(prevBudget.find(budget=>budget.name===name)){
                return prevBudget
            } 
            return [...prevBudget,{id:uuidV4(),name,max}]})
    }
    function deleteBudget({id}){
        setbudget(prevBudget=> {
            return prevBudget.filter(budget=>budget.id !==id)
        })
    }
    function deleteexpenses({id}){
        //todo deal with exepnses
            setexpenses(prevexpenses=>{
                return prevexpenses.filter(expense=>expense.id !== id)
            })
    }

    return <BudgetContext.Provider value={{budget,expenses,getbudget,getexpenses,addexpenses,addbudget,deleteBudget,deleteexpenses}}>
    {children}
    </BudgetContext.Provider>
}