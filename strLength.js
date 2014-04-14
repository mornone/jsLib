/**
 * 计算字符串的长度,一个"汉字"长度为2,其他字符长度为1
 * @param value
 * @returns
 */
function strLength(value) {
	if (typeof value == 'undefined' || value == null) {
		return 0;
	}
	var len = 0;
	for (var i = 0; i < value.length; i++) {
		if (isChineseCharacters(value.charAt(i))) {
			len += 2;
		} else {
			len += 1;
		}
	}
	return len;
}
