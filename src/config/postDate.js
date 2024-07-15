const { DateTime } = require("luxon");

module.exports = function (dateObj, lang) {
    return DateTime.fromJSDate(dateObj).setLocale(lang).toLocaleString(DateTime.DATE_MED);
};
