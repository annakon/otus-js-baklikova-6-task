import { sum } from "./adder";

describe("sum", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("проверка sum", () => {
    expect(String(sum())).toBe("0");
    const s = sum();
    expect(String(s(1))).toBe("1");
    expect(String(s(1)(2))).toBe("3");
    expect(String(s(3)(4)(5))).toBe("12");
    const s3 = sum(3);
    expect(String(s3(5))).toBe("8");
    expect(String(s3(6))).toBe("9");
  });
});
