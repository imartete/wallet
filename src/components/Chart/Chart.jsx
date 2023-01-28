import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Text } from '@chakra-ui/react';

ChartJS.register(ArcElement, Tooltip);

const Chart = () => {
  const name = [
    'Main expenses',
    'Products',
    'Car',
    'Self care',
    'Child care',
    'Household products',
    'Education',
    'Leisure',
    'Other expenses',
  ];
  const total = [300, 50, 100, 200, 100, 100, 60, 40, 10];
  const colors = [
    '#FED057',
    '#FFD8D0',
    '#FD9498',
    '#C5BAFF',
    '#6E78E8',
    '#4A56E2',
    '#81E1FF',
    '#24CCA7',
    '#00AD84',
  ];
  const options = {
    cutout: '67%',
  };

  const data = {
    labels: name,
    datasets: [
      {
        data: total,
        backgroundColor: colors,
        borderColor: ['transparent'],
      },
    ],
  };

  return (
    <Box height="288px" width="288px" position="relative" as="div">
      {<Doughnut redraw={true} options={options} data={data} />}
      <Text
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        &#8372; 10.00
      </Text>
    </Box>
  );
};

export default Chart;
