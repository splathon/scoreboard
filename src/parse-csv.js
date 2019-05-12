const parseCsv = _csv => {
  return {
    totalMatchCount: 3,
    matching: {
      alpha: {
        name: 'イカ\'s',
        members: ['イカ1', 'イカ2', 'イカ3', 'イカ4'],
        winCount: 1,
      },
      bravo: {
        name: '地底のタコのつどい',
        members: ['タコ1', 'タコ2', 'タコ3', 'タコ4'],
        winCount: 1,
      }
    },
    results: [
      {
        stage: 'ガンガゼ野外音楽堂',
        rule: 'ガチアサリ',
        winner: 'イカ\'s',
        ko: false,
      },
      {
        stage: 'アロワナモール',
        rule: 'ガチホコバトル',
        winner: '地底のタコのつどい',
        ko: true,
      },
      {
        stage: 'エンガワ河川敷',
        rule: 'ガチエリア',
      },
      {},
      {},
    ],
  };
};

export default parseCsv;
