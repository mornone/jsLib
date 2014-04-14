/**
 * 判断是否是一个汉字
 * @param c
 * @returns
 */
function isChineseCharacters(c) {
	var reg = /^[u4e00-u9fa5]$/;
	return !reg.test(c);
}

/**
 * 处理字符串的长度,一个"汉字"长度为2,其他字符长度为1
 * @param value
 * @param length
 * @returns
 */
function cutstr(value, length) {
	if (typeof value == 'undefined' || value == null) {
		return "";
	}
	if (typeof length != 'number' || length < 1) {
		return "";
	}
	var len = 0;
	var subLen = 0;
	var needSub = false;
	for (var i = 0; i < value.length; i++) {
		if (isChineseCharacters(value.charAt(i))) {
			len += 2;
		} else {
			len += 1;
		}
		if (len == length) {
			subLen = i;
			needSub = true;
			break;
		} if (len > length) {
			subLen = i - 1;
			needSub = true;
			break;
		}
	}
	if (needSub) {
		return value.substring(0, subLen) + "...";
	}
	//return value;
	document.write(value);
}
