//! Let's understand how JavaScript code is executed behind the scenes

// 🧠 Step 1: Memory Creation Phase
// In this phase, JavaScript allocates memory to all variables and functions
// - Variables are initialized with 'undefined'
// - Functions are stored as whole in memory

var n = 2; // Memory allocated for 'n', initialized as 'undefined', later assigned value 2

// The entire function 'square' is stored in memory during the memory phase
function square(num) {
  // When this function is invoked, a new Execution Context is created for it
  var ans = num * num; // Variable 'ans' is assigned the product of 'num * num'
  return ans; // The result is returned and Execution Context for this function is popped from the Call Stack
}

// 🧠 Step 2: Code Execution Phase
// Now JavaScript executes the code line by line

var square2 = square(n); // Function invoked with n=2
// - New Execution Context is created
// - num = 2, ans = 4 → returned and stored in 'square2'

var square4 = square(4); // Another function invocation
// - New Execution Context is created
// - num = 4, ans = 16 → returned and stored in 'square4'
