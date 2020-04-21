export default ({ base, team }) => {
  const baseCells = base;
  const teamCells = team;

  // parse raw data
  // [現在の対戦チーム,,チーム名,取得ゲーム数,マッチポイント,画面に表示する試合id,id]
  const [,, alfaName, alfaLife, alfaLifeMax,, minIdx] = baseCells[1];
  const [,, bravoName, bravoLife, bravoLifeMax,, maxIdx] = baseCells[2];
  const resultsRange = { min: minIdx|0, max: maxIdx|0 };
  const resultCells = baseCells.slice(
    5 + resultsRange.min,
    5 + resultsRange.max + 1
  );

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
    if (team[0] === alfa.name) {
      alfa.members = team.slice(1, 5);
    }
    if (team[0] === bravo.name) {
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

  return {
    matching: { alfa, bravo },
    results
  };
};
