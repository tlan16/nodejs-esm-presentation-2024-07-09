import { describe, it } from "node:test";
import assert from "node:assert";
describe("main", () => {
    it("SHOULD run", async (context) => {
        const spy = context.mock.method(console, 'log');
        await import("../main");
        assert.strictEqual(spy.mock.callCount(), 2);
        spy.mock.restore();
    });
});
