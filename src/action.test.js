import {RESTART_GAME, restartGame, MAKE_GUESS, makeGuess, GENERATE_AURAL_UPDATE, generateAuralUpdate} from './action';

describe('restartGame', () => {
	it('Should return an action', () => {
		const correctAnswer = 50;
		const action = restartGame(correctAnswer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(correctAnswer);
	});
});

describe('makeGuess', () => {
	it('Should return an action', () => {
		const guess = 5;
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	});
});

describe('generateAuralUpdate', () => {
	it('Should return an action', () => {
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
	});
});