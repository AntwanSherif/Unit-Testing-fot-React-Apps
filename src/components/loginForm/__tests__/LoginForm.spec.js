import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../LoginForm';

const username = 'antwan';
const password = 'byebye';

it('submitting the form calls onSubmit with username and password', () => {
  let submittedData;
  const handleSubmit = data => (submittedData = data);

  render(<LoginForm onSubmit={handleSubmit} />);

  userEvent.type(screen.getByLabelText(/username/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);

  userEvent.click(
    screen.getByRole('button', {
      name: /submit/i
    })
  );

  expect(submittedData).toEqual({
    username,
    password
  });
});
