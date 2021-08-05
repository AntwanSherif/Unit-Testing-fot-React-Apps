import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from '../LoginForm';
import faker from 'faker';

const buildLoginForm = overrides => ({
  username: faker.internet.userName(),
  password: faker.internet.password(),
  ...overrides
});

it('submitting the form calls onSubmit with username and password', () => {
  const handleSubmit = jest.fn();
  render(<LoginForm onSubmit={handleSubmit} />);

  const { username, password } = buildLoginForm();
  //   const { username, password } = buildLoginForm({ username: 'failure' });
  userEvent.type(screen.getByLabelText(/username/i), username);
  userEvent.type(screen.getByLabelText(/password/i), password);

  userEvent.click(
    screen.getByRole('button', {
      name: /submit/i
    })
  );

  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password
  });
});