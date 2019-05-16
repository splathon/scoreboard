export default ({ base, team }) => {
  const baseCells = base;
  const teamCells= team;

  console.log(base);
  console.log(team);

  const [,, alfaName, alfaLife, ,,, minIdx] = baseCells[1];
  const [,, bravoName, bravoLife, ,,, maxIdx] = baseCells[2];

  const alfa = { team: alfaName, members: [], life: alfaLife|0 };
  const bravo = { team: bravoName, members: [], life: bravoLife|0 };

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
    if (team[0] === alfa.team) {
      alfa.members = team.slice(1, 5);
    }
    if (team[0] === bravo.team) {
      bravo.members = team.slice(1, 5);
    }
  }

  console.log({ alfa, bravo });
  console.log(results);

  return {
    totalWinCount: 3,
    matching: { alfa, bravo },
    results
  };
};
