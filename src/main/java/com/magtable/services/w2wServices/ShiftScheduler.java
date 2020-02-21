package com.magtable.services.w2wServices;


import com.magtable.model.CleanShift;
import com.magtable.model.Shift;
import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

@Component
public class ShiftScheduler {

    //SID will have to be updated once and awhile
    private String SID = "32325584041A4";
    private ArrayList<CleanShift> shiftList;
    private static ShiftScheduler shiftScheduler;
    private String lastUpdated;

    /** CONSTRUCTOR **/

    private ShiftScheduler() {
        shiftList = new ArrayList<CleanShift>();
    }

    //singleton get instance
    public static ShiftScheduler getInstance() {
        if (shiftScheduler == null)
            shiftScheduler = new ShiftScheduler();

        return shiftScheduler;
    }


    public ArrayList<CleanShift> getShiftList() {
        return shiftList;
    }

    public void setShiftList(ArrayList list){
        this.shiftList = list;
    }

    public void setSID(String SID) {
        this.SID = SID;
    }

    public String getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(String lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    /*** HELPER METHODs ***/
    //every 5 seconds
   // @Scheduled(cron = "*/5 * * * * *")
    //everyday at 2Am
    @Scheduled(cron = "0 0 2 * * *")
    public void updateShifts() throws Exception {
       ShiftScheduler shiftScheduler = getInstance();
       shiftScheduler.setShiftList(new ArrayList());


        Calendar cal = Calendar.getInstance();
        //months are 0 indexed so have to add one - January = 0
        final int MONTH = cal.get(Calendar.MONTH) + 1;
        final int DAY = cal.get(Calendar.DAY_OF_MONTH);
        final int YEAR = cal.get(Calendar.YEAR);

        shiftScheduler.setLastUpdated(String.format("%d-%s @ %d:%d", DAY,cal.getDisplayName(Calendar.MONTH, Calendar.LONG, Locale.getDefault()),cal.get(Calendar.HOUR_OF_DAY), cal.get(Calendar.MINUTE)));

        Document doc;

            //getting the html from the page
            doc = null;
            try {
                doc = Jsoup.connect("https://www6.whentowork.com/cgi-bin/w2wFF.dll/empshiftlist.htm?SID=" + SID + "&UTF8=Y&date=" + MONTH + "/" + DAY + "/" + YEAR).get();
            } catch (IOException e) {
                e.printStackTrace();
            }

            //If we can select a link then we know we are on the wrong page -> the page with the shift data has no links
            //There may be a more elegant solution to this
            try {

                Element link = doc.select("a").first();
                ///wwforgotid.htm
                System.out.println(link.attr("href"));

                throw new HttpStatusException("Session Expired", 403, "\"https://www6.whentowork.com/cgi-bin/w2wFF.dll/empshiftlist.htm?SID=\" + SID + \"&UTF8=Y&date=\" + MONTH + \"/\" + DAY + \"/\" + YEAR");
            } catch (NullPointerException e) {
                //do nothing
            }

            //selecting the elements that contain shift data from the page
            Elements shifts = doc.select("span.sftstart");

            //iterating through the shift list
            while (!shifts.isEmpty()) {

                CleanShift shift = new CleanShift(); //Creating a new shift

                String startTime = shifts.first().text();
                shift.setStartTime(startTime.replace(":", ""));

                String endTime = shifts.next().first().text();
                shift.setEndTime(endTime.replace(":", ""));

                //getting the employee name
                String name = shifts.next().next().first().text();
                shift.setName(name); //todo remove (NAV) and (GP) from names

                shift.setGreen(false);
                if (name.contains("(GP)")) {
                    shift.setGreen(true);
                }

                //todo invert this when merging with NAV changes
                shift.setHasAvop(true);
                if (name.contains("(NAV)")) {
                    shift.setHasAvop(false);
                }

                //Getting the assignment
                String[] splittedAssignment = shifts.next().next().next().first().text().split(" - ");
                shift.setDescription(splittedAssignment[1]);

                shifts.remove(0); //Always removing the top-most shift
                shiftScheduler.shiftList.add(shift);
            }
    }


}
