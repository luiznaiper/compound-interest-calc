import { Form, Formik } from 'formik';
import { useState } from 'react';
import Balance from './components/Balance';
import Button from './components/Button';
import Container from './components/Container';
import Input from './components/Input';
import Section from './components/Section';

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }
  return Math.round(total);
};

const formatter = new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function App() {
  const [balance, setBalance] = useState('');

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    setBalance(formatter.format(val));
  };
  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input name="deposit" label="Initial Deposit" />
            <Input name="contribution" label="Anual Contribution" />
            <Input name="years" label="Years" />
            <Input name="rate" label="Estimate Interest" />
            <Button type="submit">Calculate</Button>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>Final Balance: {balance}</Balance> : null}
      </Section>
    </Container>
  );
}

export default App;
