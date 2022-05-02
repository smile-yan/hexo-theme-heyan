/**
 * 当月份发生改变时触发
 * @param that 
 */
 function selectChange(that) {
    updateCalendar()
}


// 下一年
function nextYear() {
    var year = document.getElementById("curr_year")
    year.innerHTML = Number(year.innerHTML)+1
    updateCalendar()
}

// 下个月
function nextMonth() {
    var month = document.getElementById("curr_month")
    month.selectedIndex = (month.selectedIndex + 1) % 12
    updateCalendar()

}

// 上一年
function preYear() {
    var year = document.getElementById("curr_year")
    year.innerHTML = Number(year.innerHTML)-1
    updateCalendar()
}

// 上个月
function preMonth() {
    var month = document.getElementById("curr_month")
    if (month.selectedIndex == 0 ) {
        month.selectedIndex = 11
    } else {
        month.selectedIndex = (month.selectedIndex - 1)
    }
    updateCalendar()
}

// 更新日历界面
function updateCalendar() {
    // 如果隐藏日历
    if (document.getElementById("calendar_detail") == null) {
        return;
    }
    // 每个月的天数
    const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    // 当前的年与月
    var year = Number(document.getElementById("curr_year").innerHTML)
    var month = document.getElementById("curr_month").selectedIndex

    // 每个月的第一天是星期几
    var start = new Date(year, month, 1)
    var week = start.getDay()

    // 
    var calendar = document.getElementById("calendar_detail")

    var result = ''
    for (var i=0; i<week; i++) {
        result += ` <button class="btn cal-btn disabled border-0" type="button" ></button>`
    }

    // 有效按钮
    for (var i=1; i<=days[month]; i++) {
        var id = year+"_"  + (month+1) + "_" + i
        result += ` <a class="btn cal-btn text-secondary border-0" type="button" id = "`+id+`" href="#">`+i+`</a>`
    }


    calendar.innerHTML = result

    mark_daily_post()
}



function calendar_day_click(that) {
    // 读取年月日
    var year = Number(document.getElementById("curr_year").innerHTML)
    var month = document.getElementById("curr_month").selectedIndex
    
}