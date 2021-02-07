import {bouncingBall} from "./006-bouncing-balls";

describe('testing various variables', () => {
    test('test should fail as bounce = 1', () => {
        expect(bouncingBall(3,1,1.5)).toBe(-1);
    });

    test('test should fail as window = height', () => {
        expect(bouncingBall(7.5,0.75,7.5)).toBe(-1);
    });

    test('3.0, 0.66, 1.5 -> 3', () => {
        expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3);
    });

    test('30.0, 0.66, 1.5 -> 15', () => {
        expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
    });

    test('30, 0.75, 1.5 -> 21', () => {
        expect(bouncingBall(30, 0.75, 1.5)).toBe(21);
    });

    test('30, 0.4, 10 -> 3', () => {
        expect(bouncingBall(30, 0.4, 10)).toBe(3);
    });
})