import { useTheme } from '@chakra-ui/react';
import { useMedia } from './Media/useMedia';

export const App = () => {
  const media = useMedia();
  console.log(media);
  const theme = useTheme();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
