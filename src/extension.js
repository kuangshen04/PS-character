import { lib, game, ui, get, ai, _status } from "noname";
import { VERSION } from "./version.js"
import { hooks } from "./utils/hooks.js";
import "./features/index.js"

lib.init.css(lib.assetURL + 'extension/PS武将/css', "extension");//调用css样式

export const type = "extension";
export default function () {
	return {
		name: "PS武将", arenaReady: function () {
			hooks.arenaReadyHooks.forEach(func => {
				func();
			});
		}, content: function (config, pack) {
			hooks.contentHooks.forEach(func => {
				func(config, pack);
			});
		}, prepare: function () {
			hooks.prepareHooks.forEach(func => {
				func();
			});
		}, precontent: function () {
			hooks.precontentHooks.forEach(func => {
				func();
			});
		}, config: {
			...hooks.configObj
		}, help: {
			...hooks.helpObj
		}, package: {
			character: {
				character: {
				},
				translate: {
				},
			},
			card: {
				card: {
				},
				translate: {
				},
				list: [],
			},
			skill: {
				skill: {
				},
				translate: {
				},
			},
			intro: "",
			author: "九个芒果",
			diskURL: "",
			forumURL: "",
			version: VERSION,
		}, files: { "character": [], "card": [], "skill": [], "audio": [] }, connect: false
	}
};

