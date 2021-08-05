import { useTheme } from './theme';

const styles = {
  dark: {
    backgroundColor: 'black',
    color: 'white'
  },
  light: {
    color: 'black',
    backgroundColor: 'white'
  }
};

export function Button(props) {
  const [theme] = useTheme();
  return <button style={styles[theme]} {...props} />;
}
