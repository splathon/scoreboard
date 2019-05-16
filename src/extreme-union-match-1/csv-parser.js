export default ({ base, team }) => {
  const baseCells = base;
  const teamCells= team;

  console.log(base);
  console.log(team);

  const [,, alphaName, alphaLife, ,,, minIdx] = baseCells[1];
  const [,, blavoName, blavoLife, ,,, maxIdx] = baseCells[2];

  const alpha = { team: alphaName, members: [], life: alphaLife|0 };
  const blavo = { team: blavoName, members: [], life: blavoLife|0 };

  const results = [];
  const resultsRange = { min: minIdx|0, max: maxIdx|0 };
  const resultCells = baseCells.slice(
    6 + resultsRange.min,
    6 + resultsRange.max + 1
  );
  for (const result of resultCells) {
    const [, rule, stage, winner, ko] = result;
    results.push({
      rule, stage, winner, ko
    });
  }

  for (const team of teamCells) {
    if (team[0] === alpha.team) {
      alpha.members = team.slice(1, 5);
    }
    if (team[0] === blavo.team) {
      blavo.members = team.slice(1, 5);
    }
  }

  console.log({ alpha, blavo });
  console.log(results);

  return {
    totalWinCount: 3,
    matching: { alpha, blavo },
    results
  };
};
