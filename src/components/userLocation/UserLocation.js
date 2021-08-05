import { useCurrentPosition } from 'react-use-geolocation';
import { Spinner } from '../spinner';

export function UserLocation() {
  const [position, error] = useCurrentPosition();
  console.log('position :>> ', position);
  console.log('error :>> ', error);
  if (!position && !error) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div role='alert' style={{ color: 'red' }}>
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <p>Latitude: {position.coords.latitude}</p>
      <p>Longitude: {position.coords.longitude}</p>
    </div>
  );
}
