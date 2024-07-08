import { describe, it, vi, expect } from "vitest";
import * as getGreetingMessageLib from "../getGreetingMessage";
describe("main", () => {
    it.concurrent("SHOULD run", async (context) => {
        const spy = vi.spyOn(console, 'log');
        await import("../main");
        expect(spy).toHaveBeenCalledTimes(2);
        spy.mockReset();
    });
    it.concurrent("should mock getGreetingMessage return value", async (context) => {
        const consoleLogSpy = vi.spyOn(console, 'log');
        const getGreetingMessageSpy = vi
            .spyOn(getGreetingMessageLib, 'getGreetingMessage')
            .mockReturnValueOnce("Hello, Mars!");
        await import("../main");
        expect(getGreetingMessageSpy).toHaveBeenCalled();
        expect(consoleLogSpy).toHaveBeenCalledWith("Hello, Mars!");
        getGreetingMessageSpy.mockRestore();
        consoleLogSpy.mockReset();
    });
});
