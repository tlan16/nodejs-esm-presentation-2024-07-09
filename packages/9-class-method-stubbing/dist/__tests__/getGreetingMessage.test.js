import { describe, expect, it } from "vitest";
import { getGreetingMessage } from "../getGreetingMessage.js";
describe("getGreetingMessage", () => {
    describe("GIVEN a name", () => {
        const name = "Earth";
        it.concurrent("SHOULD return a greeting message", () => {
            const result = getGreetingMessage(name);
            expect(result).toEqual(`Hello, ${name}!`);
        });
    });
});
