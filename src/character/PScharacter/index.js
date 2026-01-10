import { lib, game, ui, get, ai, _status } from 'noname'
import { convertDataToOptions } from "../../utils/convert.js"
import { pack, data } from "./data.js"
import { onContent } from "../../utils/hooks.js"

const {
	character,
	characterFilter,
	characterIntro,
	characterReplace,
	characterSubstitute,
	translate,
	dynamicTranslate,
	rank: { junk, rare, epic, legend },
	skill,
	characterSort,
} = convertDataToOptions(pack, data);

await game.import("character", function () {
	return {
		name: pack.name,
		character,
		characterFilter,
		characterIntro,
		characterReplace,
		characterSubstitute,
		translate,
		dynamicTranslate,
		skill,
		characterTitle: {}, //武将称号
		perfectPair: {}, //珠联璧合
		card: {}, // 卡牌
		characterSort,
	};
});

onContent(() => {
	lib.rank.rarity.junk.addArray(junk || []);
	lib.rank.rarity.rare.addArray(rare || []);
	lib.rank.rarity.epic.addArray(epic || []);
	lib.rank.rarity.legend.addArray(legend || []);
});

