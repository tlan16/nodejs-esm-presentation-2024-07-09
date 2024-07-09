import {describe, expect, it, vi} from "vitest";
import {greeter} from "../Greeter";

describe("main", () => {
  it.concurrent("SHOULD run", async (context) => {
    const spy = vi.spyOn(console, 'log');
    await import("../main");
    expect(spy).toHaveBeenCalledTimes(2);
    spy.mockReset();
  })
  it.concurrent("should mock getGreetingMessage method return value", async (context) => {
    const consoleLogSpy = vi.spyOn(console, 'log');
    const getGreetingMessageSpy = vi
      .spyOn(greeter, 'getGreetingMessage')
      .mockReturnValueOnce("Hello, Mars!");

    await import("../main");

    expect(getGreetingMessageSpy).toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith("Hello, Mars!");
    getGreetingMessageSpy.mockRestore();
    consoleLogSpy.mockReset();
  })
});
