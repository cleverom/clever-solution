const server = (array) => {
  let numberOfDaysUpdated = 0;
  let totalUpdatedServer = 0;

  let nonUpdatedServer = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0) totalUpdatedServer++;

      if (array[i][j] === 1) nonUpdatedServer.push([i, j]);
    }
  }

  const dir = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];

  while (totalUpdatedServer && nonUpdatedServer.length) {
    let latestUpdate = [];

    while (nonUpdatedServer.length) {
      let [x, y] = nonUpdatedServer.pop();
      for (let i = 0; i < dir.length; i++) {
        let nextx = x + dir[i][0];
        let nexty = y + dir[i][1];

        if (array[nextx] && array[nextx][nexty] === 0) {
          array[nextx][nexty] = 1;
          totalUpdatedServer--;
          latestUpdate.push([nextx, nexty]);
        }
      }
    }

    nonUpdatedServer = latestUpdate;

    numberOfDaysUpdated++;
  }
  return totalUpdatedServer
    ? "cannot be updated!"
    : numberOfDaysUpdated > 1
    ? `${numberOfDaysUpdated} days`
    : `${numberOfDaysUpdated} day`;
};
