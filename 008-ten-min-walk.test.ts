import {isValidWalk} from "./008-ten-min-walk";

describe('testing various routes', () => {
    test("['n','s','n','s','n','s','n','s','n','s'] should return true", () => {
        expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
    });

    test("['n','s','e','w','n','s','e','w','n','s'] should return true", () => {
        expect(isValidWalk(['n','s','e','w','n','s','e','w','n','s'])).toBe(true);
    });

    test("['n','s','e','w','n','s','e','w','n','n'] should return false", () => {
        expect(isValidWalk(['n','s','e','w','n','s','e','w','n','n'])).toBe(false);
    });

    test("['w','e','w','e','w','e','w','e','w','e','w','e'] should return false", () => {
        expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
    });

    test("['w'] should return false", () => {
        expect(isValidWalk(['w'])).toBe(false);
    });

    test("['n','n','n','s','n','s','n','s','n','s'] should return false", () => {
        expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
    });
})