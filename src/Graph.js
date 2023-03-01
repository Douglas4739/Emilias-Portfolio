import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js';
import './Graph.css';

// function Graph() {
//   return (
//     <>
//       <div className="graphContainer">
//         <div className="graph">Graph</div>
//       </div>
//     </>

    
//   )
// }

// export default Graph;


function Graph() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');

    new Chart(chartCanvas, {
      type: 'line', // or 'bar', 'pie', etc.
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Sales',
            data: [12, 19, 3, 5, 2, 3, 15],
            borderColor: 'green',
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    });
  }, []);

  return (
    <div className="graphContainer">
      <canvas ref={chartRef} className="graph"></canvas>
    </div>
  );
}

export default Graph;