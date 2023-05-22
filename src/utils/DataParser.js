export function parseData(obj, labels) {
  let newData = {
    labels,
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
  };

  let tradeData = {
    labels,
    datasets: [
      {
        label: "Trade's amount",
        data: [],
        backgroundColor: [],
        barPercentage: 0.7,
      },
    ],
  };

  let open = 0;
  let close = 0;
  let arr = [];
  for (let key in obj) {
    newData.datasets[0].data.push([]);
    newData.datasets[1].data.push([]);
    open = obj[key].price_open;
    close = obj[key].price_close;
    for (let nkey in obj[key]) {
      if (nkey == "price_open" || nkey == "price_close") {
        newData.datasets[0].data[key].push(obj[key][nkey]);
      } else if (nkey == "price_low" || nkey == "price_high") {
        newData.datasets[1].data[key].push(obj[key][nkey]);
      } else if (nkey == "volume_traded") {
        tradeData.datasets[0].data.push(obj[key][nkey]);
      }
    }

    if (open >= close) {
      arr.push("red");
    } else {
      arr.push("green");
    }
  }
  arr = arr.reverse();
  newData.datasets[0].backgroundColor = [...arr];
  newData.datasets[1].backgroundColor = [...arr];
  newData.datasets[0].data = newData.datasets[0].data.reverse();
  newData.datasets[1].data = newData.datasets[1].data.reverse();
  tradeData.datasets[0].data = tradeData.datasets[0].data.reverse();
  tradeData.datasets[0].backgroundColor = [...arr];
  return [newData, tradeData];
}
