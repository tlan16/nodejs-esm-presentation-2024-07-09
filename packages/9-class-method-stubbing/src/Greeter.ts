export class Greeter {
  public getGreetingMessage(name: string): string {
    return `Hello, ${name}!`;
  }
}

// This is a singleton instance of the Greeter class
export const greeter = new Greeter();
