import { useState } from 'react';
import { render, screen, act } from '@testing-library/react';
import { UserLocation } from '../UserLocation';
import { useCurrentPosition } from 'react-use-geolocation';

jest.mock('react-use-geolocation');

it('displays the user current location', async () => {
  const fakePosition = {
    coords: {
      latitude: 35,
      longitude: 139
    }
  };

  let setReturnValue;
  function useMockCurrentPosition() {
    const state = useState([]);
    setReturnValue = state[1];
    return state[0];
  }
  useCurrentPosition.mockImplementation(useMockCurrentPosition);

  render(<UserLocation />);

  expect(screen.getByLabelText(/loading/i)).toBeInTheDocument();

  act(() => {
    setReturnValue([fakePosition]);
  });

  expect(screen.queryByLabelText(/loading/i)).not.toBeInTheDocument();
  expect(screen.getByText(/latitude/i)).toHaveTextContent(`Latitude: ${fakePosition.coords.latitude}`);
  expect(screen.getByText(/longitude/i)).toHaveTextContent(`Longitude: ${fakePosition.coords.longitude}`);
});
