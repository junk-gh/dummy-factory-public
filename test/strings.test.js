import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify, capitalize, truncate } from "../src/strings.js";

test("slugify", () => {
  assert.equal(slugify("  Hello, World!  "), "hello-world");
});

test("capitalize", () => {
  assert.equal(capitalize("tessl"), "Tessl");
  assert.equal(capitalize(""), "");
});

test("truncate", () => {
  assert.equal(truncate("short", 10), "short");
  assert.equal(truncate("a longer sentence", 8), "a longe…");
});
