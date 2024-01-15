// DESCRIPTION:
// Functional closures can get overly attached. Set them straight!

// Why doesn't greetAbe() actually greet Abe?

let name1 = "Abe";
let name2 = "Ben";

const greetAbe = () => "Hello, " + name1 + "!";
const greetBen = () => "Hello, " + name2 + "!";
