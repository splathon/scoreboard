const parseCsv = _csv => {
  return {
    totalMatchCount: 3,
    matching: {
      alpha: {
        name: 'イカのつどい',
        members: ['イカ1', 'イカ2', 'イカ3', 'イカ4'],
        winCount: 1,
      },
      bravo: {
        name: '地底のタコたち',
        members: ['タコ1', 'タコ2', 'タコ3', 'タコ4'],
        winCount: 1,
      }
    },
    results: [
      {
        stage: 'ガンガゼ野外音楽堂',
        rule: 'ガチアサリ',
        winner: 'イカのつどい',
        ko: false,
      },
      {
        stage: 'アロワナモール',
        rule: 'ガチホコバトル',
        winner: '地底のタコたち',
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
