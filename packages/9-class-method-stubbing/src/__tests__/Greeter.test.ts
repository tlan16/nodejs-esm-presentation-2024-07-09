import {describe, expect, it} from "vitest";
import {getGreetingMessage} from "../getGreetingMessage";
import {Greeter} from "../Greeter";

describe("Greeter", () => {
  describe("getGreetingMessage", () => {
    describe("GIVEN a name", () => {
      const name = "Earth";
      it.concurrent("SHOULD return a greeting message", () => {
        const greeter = new Greeter();
        const result = greeter.getGreetingMessage(name);
        expect(result).toEqual(`Hello, ${name}!`)
      })
    })
  })
})