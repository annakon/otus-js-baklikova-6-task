import {sorter, sortSemver} from "./sortSemver";

describe("sortSemver", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("проверка sortSemver", () => {
        expect(sortSemver([ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"])).toStrictEqual( [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]);
    });

    it("проверка sorter", () => {
        expect(sorter( "1.0.5", "2.5.0")).toStrictEqual( -1);
        expect(sorter( "2.5.5", "2.5.0")).toStrictEqual( 1);
        expect(sorter( "2.5.0", "2.5.0")).toStrictEqual( 0);
    });

    it("проверка sorter коротких", () => {
        expect(sorter( "1", "1.0.5")).toStrictEqual( -1);
        expect(sorter( "1.1", "1.1.5")).toStrictEqual( -1);
    });
});
