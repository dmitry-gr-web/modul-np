// const UA = require('./ua.json');
// const RU = require('./ru.json');
import UA from './ua.json';
import RU from './ru.json';
let translator = {
	lang: 'RU',
	dic: { UA: UA, RU: RU },
	getTranslation(v1,v2) {
		return this.dic[this.lang][v1][v2];
	},
	setLang(value) {
		this.lang = value;
	},
};
export default translator;


