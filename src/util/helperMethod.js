export function dataGenerator(dataLength) {
  return Array.from({ length: dataLength }, (_, i) => {
    return {
      question: `Item ${i + 1}`,
      answer: `Item ${i + 1}`,
    };
  });
}

export function generateRandomTwoElements(inputRange) {
  return Array.from({ length: 2 }, () =>
    Math.floor(Math.random() * inputRange)
  );
}
