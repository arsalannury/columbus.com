import { Helper } from "../helper/helper";

describe("ConvertBooleanToYesNo", () => {
  it("should return Yes if result is true", () => {
    const call = Helper.ConvertBooleanToYesNo(true);
    expect(call).toContain("Yes");
  });
  it("should return No if result is false", () => {
    const call = Helper.ConvertBooleanToYesNo(false);
    expect(call).toContain("No");
  });
});

describe("SortNumbers", () => {
  it("should return 1/234", () => {
    const call = Helper.SortNumbers(1234);
    expect(call).toContain("1/234");
  });
  it("should return 12/345", () => {
    const call = Helper.SortNumbers(12345);
    expect(call).toContain("12/345");
  });
  it("should return 123/456", () => {
    const call = Helper.SortNumbers(123456);
    expect(call).toContain("123/456");
  });
  it("should return 1/234/567", () => {
    const call = Helper.SortNumbers(1234567);
    expect(call).toContain("1/234/567");
  });
  it("should return 12/345/678", () => {
    const call = Helper.SortNumbers(12345678);
    expect(call).toContain("12/345/678");
  });
  it("should return 123/456/789", () => {
    const call = Helper.SortNumbers(123456789);
    expect(call).toContain("123/456/789");
  });
  it("should return 123", () => {
    const call = Helper.SortNumbers(123);
    expect(call).toBe(123);
  });
  it("should return 12", () => {
    const call = Helper.SortNumbers(12);
    expect(call).toBe(12);
  });
  it("should return 12", () => {
    const call = Helper.SortNumbers("12");
    expect(call).toContain("12");
  });
  it("should return 123", () => {
    const call = Helper.SortNumbers("123");
    expect(call).toContain("123");
  });
  it("should return 1234", () => {
    const call = Helper.SortNumbers("1234");
    expect(call).toContain("1/234");
  });
});
