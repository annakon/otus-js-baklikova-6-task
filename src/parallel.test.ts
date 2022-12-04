import {Parallel} from "./parallel";

describe("parallel", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("проверка parallel 2", async () => {
        const runner = new Parallel(2);
        const result = await runner
            .jobs(
                async () => await new Promise((resolve) => setTimeout(resolve, 10, 1)),
                async () => await new Promise((resolve) => setTimeout(resolve, 50, 2)),
                async () => await new Promise((resolve) => setTimeout(resolve, 20, 3)),
                async () => await new Promise((resolve) => setTimeout(resolve, 90, 4)),
                async () => await new Promise((resolve) => setTimeout(resolve, 30, 5)),
            );
        expect(result).toStrictEqual([1, 3, 2, 5, 4]);
    });

    it("проверка parallel 1", async () => {
        const runner = new Parallel(1);
        const result = await runner
            .jobs(
                async () => await new Promise((resolve) => setTimeout(resolve, 10, 1)),
                async () => await new Promise((resolve) => setTimeout(resolve, 50, 2)),
                async () => await new Promise((resolve) => setTimeout(resolve, 20, 3)),
                async () => await new Promise((resolve) => setTimeout(resolve, 90, 4)),
                async () => await new Promise((resolve) => setTimeout(resolve, 30, 5)),
            );
        expect(result).toStrictEqual([1, 2, 3, 4, 5]);
    });
});
