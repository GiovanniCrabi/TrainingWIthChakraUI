import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { theme } from "../styles/theme";

import { ApexOptions } from 'apexcharts';
import { SideBar } from "../components/Sidebar";

const Charts = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.color.gray[500],
    },
    axisTicks: {
      color: theme.color.gray[500],
    },
    categories: [
      '2022-04-23T00:00:00.000z',
      '2022-04-24T00:00:00.000z',
      '2022-04-25T00:00:00.000z',
      '2022-04-26T00:00:00.000z',
      '2022-04-27T00:00:00.000z',
      '2022-04-28T00:00:00.000z',
      '2022-04-29T00:00:00.000z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.7,
    }
  }
};

const series = [
  { name: 'series1', data: [31, 25, 67, 108, 17, 20, 99] }
];

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        
        <SideBar />

        <SimpleGrid flex="1" gap="5" minChildWidth="320px" alignItems='center'>
          <Box
            p={["6","8"]}
            bg='gray.800'
            borderRadius={8}
          // pb='4'
          >
            <Text fontSize='lg' mb='4'> Taxa de abertura </Text>
            <Charts options={options} series={series} type='area' height={160} />
          </Box>

          <Box
            p={["6","8"]}
            bg='gray.800'
            borderRadius={8}
          // pb='4'
          >
            <Text fontSize='lg' mb='4'> Inscritos da Semana </Text>
            <Charts options={options} series={series} type='area' height={160} />
          </Box>

          <Box
            p={["6","8"]}
            bg='gray.800'
            borderRadius={8}
          // pb='4'
          >
            <Text fontSize='lg' mb='4'> Inscritos da Semana </Text>
            <Charts options={options} series={series} type='area' height={160} />
          </Box>

          <Box
            p={["6","8"]}
            bg='gray.800'
            borderRadius={8}
          // pb='4'
          >
            <Text fontSize='lg' mb='4'> Inscritos da Semana </Text>
            <Charts options={options} series={series} type='area' height={160} />
          </Box>

          <Box
            p={["6","8"]}
            bg='gray.800'
            borderRadius={8}
          // pb='4'
          >
            <Text fontSize='lg' mb='4'> Inscritos da Semana </Text>
            <Charts options={options} series={series} type='area' height={160} />
          </Box>

          <Box
            p={["6","8"]}
            bg='gray.800'
            borderRadius={8}
          // pb='4'
          >
            <Text fontSize='lg' mb='4'> Inscritos da Semana </Text>
            <Charts options={options} series={series} type='area' height={160} />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  );
}