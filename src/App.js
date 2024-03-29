import './App.css';
import { Button, Container, Stack } from 'react-bootstrap';
import BudgetCard from './Component/BudgetCard';
import AddBudget from './Component/AddBudget';

function App() {
  return (
  <><Container className='my-4'>
           <Stack direction="horizontal" gap="2" className="mb-4">
            <h1 className="me-auto">Budget</h1>
            <Button variant="primary">Add Budget</Button>
            <Button variant="outline-primary">Add Expense</Button>
            </Stack>
            <div style=
            {
              {
                display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px,1fr))"
                ,gap:"1rem"
                , alignItems:"flex-start"
                }
                }>
                  <BudgetCard name="Entertainment" gray amount={200} max={1000}> 
                    
                  </BudgetCard>
                </div>
          </Container>
          <AddBudget show="true"/>
          </>
          )
}

export default App;
