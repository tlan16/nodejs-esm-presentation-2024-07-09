import { Greeter } from "./Greeter.js";
const greeter = new Greeter();
console.log(greeter.getGreetingMessage("Earth"));
console.log(`Environment variable foo=${process.env.FOO}`);
