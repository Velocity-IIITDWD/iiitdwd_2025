import BarGraph from '@/app/placements/bar-chart';

export default function PlacementStats() {
  const barGraphData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Average CTC',
        data: [6, 7, 7.3, 8, 11.52, 9.54],
        backgroundColor: [
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA'
        ],
        borderColor: [
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA',
          '#50A5CA'
        ],
        borderWidth: 1
      },
      {
        label: 'Highest CTC',
        data: [10, 11, 25, 25, 35, 46],
        backgroundColor: [
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)'
        ],
        borderColor: [
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)',
          'rgba(1, 51, 101, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className=" bar">
      <BarGraph labels={barGraphData.labels} datasets={barGraphData.datasets} />
    </div>
  );
}
