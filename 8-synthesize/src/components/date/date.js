export const dateData = {
    computed: {
        current_stop_date() {
            var nowDate = new Date()
            let date = {
                year: nowDate.getFullYear(),
                month: nowDate.getMonth() + 1,
                date: nowDate.getDate(),
                hour: nowDate.getHours(),
                minutes: nowDate.getMinutes(),
                seconds: nowDate.getSeconds(),
            }
            // console.log(date);
            let systemDate =
                date.year +
                '年' +
                date.month +
                '月' +
                date.date +
                '日' +
                date.hour +
                '时' +
                date.minutes +
                '分' +
                date.seconds +
                '秒'
            return systemDate
        },
        current_start_date() {
            var nowDate = new Date()
            let date = {
                year: nowDate.getFullYear(),
                month: nowDate.getMonth(),
                date: nowDate.getDate(),
                hour: nowDate.getHours(),
                minutes: nowDate.getMinutes(),
                seconds: nowDate.getSeconds(),
            }
            // console.log(date);
            let systemDate =
                date.year +
                '年' +
                date.month +
                '月' +
                date.date +
                '日' +
                date.hour +
                '时' +
                date.minutes +
                '分' +
                date.seconds +
                '秒'
            return systemDate
        },
    },
}