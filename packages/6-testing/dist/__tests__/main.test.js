import { describe, it } from "node:test";
import assert from "node:assert";
import * as getGreetingMessageLib from "../getGreetingMessage";
describe("main", () => {
    it("SHOULD run", async (context) => {
        const spy = context.mock.method(console, 'log');
        await import("../main");
        assert.strictEqual(spy.mock.callCount(), 2);
    });
    it("SHOULD mock", async (context) => {
        const spy = context.mock.method(getGreetingMessageLib, 'getGreetingMessage');
        await import("../main");
        assert.strictEqual(spy.mock.callCount(), 1);
    });
});
