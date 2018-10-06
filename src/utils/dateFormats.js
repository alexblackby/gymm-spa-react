import moment from 'moment'
import 'moment/locale/ru'

moment.updateLocale('ru', {
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/
    }
})
moment.locale('ru')

/*
  Using moment.js syntax
 */
const formatList = {
    weekdayShortMonth: "dddd, D MMM",
    weekdayFullMonth: "dddd, D MMMM",
    dayMonth: "D MMMM",
    numericDate: "D.M.Y"
}


const hasFormat = function (formatName) {
    return (typeof formatList[formatName] !== "undefined")
}

const format = function (date, formatName) {
    if (!hasFormat(formatName)) {
        return false
    }

    let dateMoment = moment(date)
    return dateMoment.format(formatList[formatName])
}

const dateFormat = function (value, formatName) {
    if (!value) return ''

    // convert sec to ms
    value *= 1000

    let d = new Date(value)
    let thisYear = (d.getFullYear() === new Date().getFullYear())

    if (!thisYear) {
        formatName = 'numericDate'
    }

    let dateStr = format(d, formatName)
    let dateStrUcfirst = dateStr.charAt(0).toUpperCase() + dateStr.slice(1)
    return dateStrUcfirst
}

export default dateFormat
