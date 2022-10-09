//@ts-check
export const CANVAS_WIDTH = 800;
export const CANVAS_HEIGHT = 600;

/** @type {HTMLCanvasElement} */
//@ts-ignore
const canvas = document.getElementById("game-canvas");
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

/** @type {CanvasRenderingContext2D} */
//@ts-ignore
export const ctx = canvas.getContext("2d");
if (!ctx) throw "ctx is null or undefined!";

export const EVENTS = {
	onTrail: "fc_ontrail",
	offTrail: "fc_offtrail",
	karmaChange: "fc_karma",
	staminaChange: "fc_stamina",
	gameOver: "fc_gameover",
};
