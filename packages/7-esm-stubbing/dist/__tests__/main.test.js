import { describe, it } from "node:test";
import assert from "node:assert";
import * as getGreetingMessageLib from "../getGreetingMessage.js";
import { getGreetingMessage } from "../getGreetingMessage.js";
describe("main", () => {
    it("SHOULD run", async (context) => {
        const spy = context.mock.method(console, 'log');
        await import("../main");
        assert.strictEqual(spy.mock.callCount(), 2);
        spy.mock.restore();
    });
    describe("use node test runner", () => {
        // skip because it always fails. Try it out by removing the skip.
        it.skip("use mock.method", async (context) => {
            const spy = context.mock.method(getGreetingMessageLib, 'getGreetingMessage');
            await import("../main");
            assert.strictEqual(spy.mock.callCount(), 1);
        });
        // skip because it always fails. Try it out by removing the skip.
        it.skip("use mock.fn", async (context) => {
            const spy = context.mock.fn(getGreetingMessage);
            getGreetingMessage("Earth");
            assert.strictEqual(spy.mock.callCount(), 1);
        });
    });
});
