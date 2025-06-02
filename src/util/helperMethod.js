export function dataGenerator(dataLength) {
  return Array.from({ length: dataLength }, (_, i) => {
    return {
      question: `Item ${i + 1}`,
      answer: `Item ${i + 1}`,
    };
  });
}
