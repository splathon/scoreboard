export default ({ base, team }) => {
  const baseCells = base;
  const teamCells = team;

  console.log(base);
  console.log(team);

  // parse raw data
  const [,, alfaName, alfaLife, alfaLifeMax, restTeamCountA, ,, minIdx] = baseCells[1];
  const [,, bravoName, bravoLife, bravoLifeMax, restTeamCountB,,, maxIdx] = baseCells[2];
  const resultsRange = { min: minIdx|0, max: maxIdx|0 };
  const resultCells = baseCells.slice(
    5 + resultsRange.min,
    5 + resultsRange.max + 1
  );

  // union
  const union = {
    alfa: { restTeam: restTeamCountA|0 },
    bravo: { restTeam: restTeamCountB|0 },
  };

  // matching
  const alfa = {
    name: alfaName,
    members: [],
    life: alfaLife|0,
    lifeMax: alfaLifeMax|0,
  };
  const bravo = {
    name: bravoName,
    members: [],
    life: bravoLife|0,
    lifeMax: bravoLifeMax|0,
  };
  for (const team of teamCells) {
    if (team[0] === alfa.team) {
      alfa.members = team.slice(1, 5);
    }
    if (team[0] === bravo.team) {
      bravo.members = team.slice(1, 5);
    }
  }

  // results
  const results = [];
  for (const result of resultCells) {
    const [, rule, stage, winner, ko] = result;
    results.push({
      rule, stage, winner, ko
    });
  }

  // fill defaults
  if (alfa.name.length === 0) {
    alfa.name = 'アルファチーム';
  }
  if (bravo.name.length === 0) {
    bravo.name = 'ブラボーチーム';
  }
  if (alfa.members.length === 0) {
    alfa.members = ['イカ1', 'イカ2', 'イカ3', 'イカ4'];
  }
  if (bravo.members.length === 0) {
    bravo.members = ['タコ1', 'タコ2', 'タコ3', 'タコ4'];
  }

  console.log({ union });
  console.log({ alfa, bravo });
  console.log({ results });

  return {
    union,
    matching: { alfa, bravo },
    results
  };
};
