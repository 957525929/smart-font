//返回当前日期字符串
export const getCurrentDate=()=>{
	var myDate = new Date();
	var year = myDate.getFullYear();
	var month = myDate.getMonth() + 1;
	var dates = myDate.getDate();
	var currentDate = year + "-" + month + "-" + dates;
	return currentDate;
}
// 返回一周前日期字符串
export const getLastWeekDate=()=>{
	var d=new Date();
    var yesterday_milliseconds=d.getTime()-7000*60*60*24;        
    var yesterday = new Date();        
    yesterday.setTime(yesterday_milliseconds);        
        
    var strYear = yesterday.getFullYear();     
    var strDay = yesterday.getDate();     
    var strMonth = yesterday.getMonth()+1;   
      if(strDay<10)     
   {     
       strDay="0"+strDay;     
    }    
   if(strMonth<10)     
   {     
       strMonth="0"+strMonth;     
    }     
    let datastr = strYear+"-"+strMonth+"-"+strDay;   
    return datastr;   
}
