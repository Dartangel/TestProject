import { StyleSheet } from 'react-native';
import { config } from '../../config/config';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: config.grey,
  },
  titleWithButton: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    color: config.red
  },
  backButton: {
    position: 'absolute',
    zIndex: 10,
    left: 0,
    paddingHorizontal: 12,
    height: '100%',
    backgroundColor: config.grey,
    justifyContent: 'center',
  },
});

export default styles;
