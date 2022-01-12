package utilities;

import org.openqa.selenium.WebElement;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class JavaHelpers {


    //Time-stamps
    /**
     * Get current time-stamp in given format
     *
     * @param monthSelect
     * @return String timestamp
     *
     */
    public String getTimeStamp(WebElement monthSelect)
    {
        /*
         * Example format are :
         *
         * "yyyy MMM dd" for "2013 Nov 28"
         *
         * "yyyyMMdd_HHmmss" for "20130131000000"
         *
         * "yyyy MMM dd HH:mm:ss" for "2013 Jan 31 00:00:00"
         *
         * "dd MMM yyyy" for "28 Nov 2017"
         */
        DateFormat dateFormat = new SimpleDateFormat();
        Date date = new Date();
        return dateFormat.format(date);
    }

}
