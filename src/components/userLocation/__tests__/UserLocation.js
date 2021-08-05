import { render, screen } from '@testing-library/react';
import { UserLocation } from '../UserLocation';

beforeAll(() => {
  window.navigator.geolocation = {
    getCurrentPosition: jest.fn()
  };
});

function deferred() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
}

it('displays the user current location', async () => {
  const fakePosition = {
    coords: {
      latitude: 35,
      longitude: 139
    }
  };
  const { promise, resolve } = deferred();

  //   window.navigator.geolocation.getCurrentPosition.mockImplementation(cb => cb(fakePosition));
  window.navigator.geolocation.getCurrentPosition.mockImplementation(callback => {
    promise.then(() => callback(fakePosition));
  });

  render(<UserLocation />);

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();
  resolve();
  await promise;

  //   screen.debug();

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument();
  expect(screen.getByText(/latitude/i)).toHaveTextContent(`Latitude: ${fakePosition.coords.latitude}`);
  expect(screen.getByText(/longitude/i)).toHaveTextContent(`Longitude: ${fakePosition.coords.longitude}`);
});
