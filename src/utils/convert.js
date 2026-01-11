export function convertDataToOptions(pack, data) {
	const options = {
		character: {},
		characterFilter: {},
		characterIntro: {},
		characterReplace: {},
		characterTitle: {},
		characterSubstitute: {},
		translate: {},
		dynamicTranslate: {},
		skill: {},
		rank: {},
		characterSort: {
			[pack.name]: {}
		},
	}
	for (const [name, value] of Object.entries(data)) {
		const {
			info,
			sort,
			skills,
			filter,
			intro,
			title,
			replace,
			substitute,
			translate,
			rank,
			dynamicTranslate,
		} = value;

		info && (options.character[name] = info, options.character[name].img = `extension/PS武将/image/character/${name}.jpg`);
		filter && (options.characterFilter[name] = filter);
		intro && (options.characterIntro[name] = intro);
		replace && (options.characterReplace[name] = replace);
		title && (options.characterTitle[name] = title);
		substitute && (options.characterSubstitute[name] = substitute);
		options.rank[rank[0]] = options.rank[rank[0]] || [];
		options.rank[rank[0]].push(name);
		options.characterSort[pack.name][sort[0]] = options.characterSort[pack.name][sort[0]] || [];
		options.characterSort[pack.name][sort[0]].push(name);
		name.includes("PS") && (options.translate[name + "_prefix"] = name.includes("PSshen_") ? "PS神" : "PS");
		options.translate[sort[0]] || (options.translate[sort[0]] = sort[1]);
		options.translate[pack.name] = pack.translate;
		translate && (Object.assign(options.translate, translate));
		dynamicTranslate && (Object.assign(options.dynamicTranslate, dynamicTranslate));
		skills && (Object.assign(options.skill, skills));
	}
	return options;
}

/* <-------------------------花色符号染色-------------------------> */
/**
 * 获取牌的花色数
 * @param { string|string[] } suit 诸如'spade'、'heart'的字符串
 * @returns { string } 返回包含HTML标签的字符串
 */
export function convertSuitToHTML(data) {
	if (Array.isArray(suit)) {
		return suit.map(function (s) {
			return convertSuitToHTML(s);
		}).join('、');
	}
	else if (typeof suit !== 'string') {
		return void 0;
	}
	const obj = {
		'spade': '<font color="black">♠︎</font>',
		'heart': '<font color="red">♥︎</font>',
		'club': '<font color="black">♣︎</font>',
		'diamond': '<font color="red">♦︎</font>',
	}
	return obj[suit];
}
