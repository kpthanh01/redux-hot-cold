import {gameReducer} from './reducer';
import {restartGame, makeGuess, generateAuralUpdate} from './action';

describe('gameReducer', () => {
	it('Should set the initial state if nothing is passed', () => {
		const state = gameReducer(undefined, {type: '__UNKNOWN'});
		expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
	});

	it('Should return the current state when an unknown action is called', () => {
		const currentState = {}
		const state = gameReducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	});
});

describe('restartGame', () => {
	it('Should start a new game', () => {
		let state = {
				guesses: [2, 5, 6],
				feedback: 'Make your guess!',
				auralStatus: '',
				correctAnswer: 5
		};
		const correctAnswer = 10;
		state = gameReducer(state, restartGame(correctAnswer));
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.correctAnswer).toEqual(correctAnswer);
		expect(state.auralStatus).toEqual('');
	});
});

describe('makeGuess', () => {
	it('Should make a guess', () => {
        let state = {
            guesses: [],
            feedback: '',
            correctAnswer: 100 // Negative so different to new game
        };

        state = gameReducer(state, makeGuess(25));
        expect(state.guesses).toEqual([25]);
        expect(state.feedback).toEqual("You're Ice Cold...");

        state = gameReducer(state, makeGuess(60));
        expect(state.guesses).toEqual([25, 60]);
        expect(state.feedback).toEqual("You're Cold...");

        state = gameReducer(state, makeGuess(80));
        expect(state.guesses).toEqual([25, 60, 80]);
        expect(state.feedback).toEqual("You're Warm.");

        state = gameReducer(state, makeGuess(95));
        expect(state.guesses).toEqual([25, 60, 80, 95]);
        expect(state.feedback).toEqual("You're Hot!");

        state = gameReducer(state, makeGuess(100));
        expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
        expect(state.feedback).toEqual('You got it!');
    });
});

describe('generateAuralUpdate', () => {
	it('Can generate aural updates', () => {
        let state = {
            guesses: [25, 3, 90],
            feedback: "You're Warm.",
            auralStatus: ''
        };

        state = gameReducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(
            "Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25"
        );
    });
});