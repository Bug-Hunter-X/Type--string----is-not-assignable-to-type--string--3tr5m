function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
let userName = user.join(" ");
console.log(greeter(userName)); //Fixed: Join the array elements into a single string