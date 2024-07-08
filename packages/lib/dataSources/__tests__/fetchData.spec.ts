import { describe, it } from "node:test";
import * as assert from "node:assert";
import { fetchData } from "../fetchData";

describe("fetchData", () => {
  it('should return expected data ', async () => {
    const actual = await fetchData({ foo: "bar" });
    assert.deepStrictEqual(actual, { foo: "bar" });
  });
});
