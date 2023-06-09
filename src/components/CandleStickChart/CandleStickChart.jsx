import React, { useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { parseData } from "@utils/DataParser";
import { options, options_2 } from "@constants/chartData";
import { PropTypes } from "prop-types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CandleStickChart = ({ candleData }) => {
  const labels = useMemo(() => Object.keys(candleData), [candleData]);

  const [data, tradeData] = useMemo(
    () => parseData(candleData, labels),
    [candleData]
  );

  return (
    <>
      <Bar options={options} data={data} />
      <Bar options={options_2} data={tradeData} />
    </>
  );
};

CandleStickChart.propTypes = {
  candleData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default CandleStickChart;
