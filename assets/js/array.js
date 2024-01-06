class ArrayDataStructure {
  constructor() {
    this.array = [];
  }

  // Accessing elements
  getSingleItem(index) {
    return this.array[index];
  }

  // Modifying elements
  setSingleItem(index, value) {
    this.array[index] = value;
  }

  // Array length
  get length() {
    return this.array.length;
  }

  // Adding elements to the end
  addNewItemToEnd(value) {
    this.array.push(value);
  }

  // Removing elements from the end
  removeFromLast() {
    return this.array.pop();
  }

  // Adding elements to the beginning
  addNewItemToStart(value) {
    this.array.unshift(value);
  }

  // Removing elements from the beginning
  removeFromStart() {
    return this.array.shift();
  }
}

// Creating an instance of ArrayDataStructure
const fruits = new ArrayDataStructure();

// Adding elements to end
fruits.addNewItemToEnd("apple");
fruits.addNewItemToEnd("banana");
fruits.addNewItemToEnd("cherry");
fruits.addNewItemToEnd("orange");
fruits.addNewItemToEnd("lemon");

// Removing elements from the end
fruits.removeFromLast();

// Adding elements to the beginning
fruits.addNewItemToStart("pear");

// Removing elements from the beginning
fruits.removeFromStart();

// Accessing elements
console.log(fruits.getSingleItem(3));

// Modifying elements
fruits.setSingleItem(1, "kiwi");

// Array length
console.log("The length of the fruits array is " + fruits.length);

// Log the fruits array
console.log(fruits);
