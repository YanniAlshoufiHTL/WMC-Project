function getStringBetween(str, startChar, endChar) {
    const regex = new RegExp(`\\${startChar}(.*?)\\${endChar}`);
    const match = regex.exec(str);
    return match ? match[1] : null;
}
function getRestOfString(str, substr) {
    const substrIndex = str.indexOf(substr);
    if (substrIndex === -1) {
        return "";
    }
    return str.substring(substrIndex + substr.length);
}
function isNumeric(str) {
    return !isNaN(parseFloat(str)) && isFinite(str);
}
