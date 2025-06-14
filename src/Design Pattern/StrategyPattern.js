/* eslint-disable no-unused-vars */
// Strategy interface
class SortStrategy {
  sort(data) {}
}

// Concrete strategies
class AscendingSort extends SortStrategy {
  sort(data) {
    return data.sort((a, b) => a - b);
  }
}
class DescendingSort extends SortStrategy {
  sort(data) {
    return data.sort((a, b) => b - a);
  }
}

// Context
class Sorter {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy(strategy) {
    this.strategy = strategy;
  }
  sort(data) {
    return this.strategy.sort(data);
  }
}

// Usage
const sorter = new Sorter(new AscendingSort());
sorter.sort([3, 1, 2]); // uses bubble sort
sorter.setStrategy(new DescendingSort());
sorter.sort([3, 1, 2]); // uses quick sort

// The Strategy pattern is a behavioral design pattern that enables selecting an algorithm’s behavior at runtime.
//  It defines a family of algorithms, encapsulates each one as a separate class,
// and makes them interchangeable within the context object that uses them.

// Key Concepts
// Context: The object that uses a strategy to perform a task.
// Strategy: An interface or abstract class representing an algorithm.
// Concrete Strategies: Classes that implement the strategy interface with different algorithms.
// Why Use the Strategy Pattern?
// To avoid hardcoding multiple algorithms inside a single class.
// To make it easy to switch, add, or modify algorithms independently.
// To follow the Open/Closed Principle (open for extension, closed for modification).
