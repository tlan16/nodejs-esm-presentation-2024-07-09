import {describe, it} from "node:test";
import {getGreetingMessage} from "../getGreetingMessage";
import assert from "node:assert";

describe("getGreetingMessage", () => {
  describe("GIVEN a name", () => {
    const name = "Earth";
    it("SHOULD return a greeting message", () => {
      const result = getGreetingMessage(name);
      assert.strictEqual(result, `Hello, ${name}!`)
    })
  })
})
