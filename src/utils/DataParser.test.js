import { testCandleData } from "@constants/exchangeValues";
import { parseData } from "./DataParser";

const res = [
  {
    labels: [1, 2, 3],
    datasets: [
      {
        label: "Close & Open",
        data: [
          [20059, 23287.38],
          [23127, 16530],
          [28844, 29254],
        ],
        backgroundColor: ["red", "green", "red"],
        barPercentage: 0.7,
      },
      {
        label: "High & Low",
        data: [
          [25212, 19526],
          [23954, 13000],
          [29378, 27666],
        ],
        backgroundColor: ["red", "green", "red"],
        barPercentage: 0.2,
      },
    ],
  },
  {
    labels: [1, 2, 3],
    datasets: [
      {
        label: "Trade's amount",
        data: [48002.28964294, 66278.98170866, 9044.55018518],
        backgroundColor: ["red", "green", "red"],
        barPercentage: 0.7,
      },
    ],
  },
];

const res_withoutCandeData = [
  {
    labels: undefined,
    datasets: [
      {
        label: "Close & Open",
        data: [],
        backgroundColor: [],
        barPercentage: 0.7,
      },
      {
        label: "High & Low",
        data: [],
        backgroundColor: [],
        barPercentage: 0.2,
      },
    ],
  },
  {
    labels: undefined,
    datasets: [
      {
        label: "Trade's amount",
        data: [],
        backgroundColor: [],
        barPercentage: 0.7,
      },
    ],
  },
];

describe("Should check DataParser function", () => {
  test("Should return data array", () => {
    expect(parseData(testCandleData, [1, 2, 3])).toEqual(res);
  });

  test("Should return data array without candleData ", () => {
    expect(parseData()).toEqual(res_withoutCandeData);
  });
});
