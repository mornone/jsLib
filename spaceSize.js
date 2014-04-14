/**
 * 格式化文件空间为G、M、Kb、B
 * @param spaceSize
 * @returns {str}
 */
function formatSpaceSize(spaceSize){
	if(spaceSize < 1024)
		return (Math.round(spaceSize * 100) / 100) + "B";
	else if(spaceSize < 1024 * 1024)
		return (Math.round(spaceSize/1024 * 100) / 100) + "KB";
	else if (spaceSize < 1024 * 1024 * 1024)
		return (Math.round(spaceSize/(1024 * 1024) * 100) / 100) + "M";
	else
		return (Math.round(spaceSize/(1024 * 1024 * 1024) * 100) / 100) + "G"; 
} 
