package com.magtable.services.w2wServices;


import com.magtable.model.Shift;
import org.jsoup.HttpStatusException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.TimerTask;

@Component
public class ShiftScheduler {

    //SID will have to be updated once and awhile
    private String SID = "32325584041A4";
    private ArrayList<Shift> shiftList;
    private static ShiftScheduler shiftScheduler;

    /** CONSTRUCTOR **/

    private ShiftScheduler() {
        shiftList = new ArrayList<Shift>();
    }

    //singleton get instance
    public static ShiftScheduler getInstance() {
        if (shiftScheduler == null)
            shiftScheduler = new ShiftScheduler();

        return shiftScheduler;
    }


    public ArrayList<Shift> getShiftList() {
        return shiftList;
    }

    public void setShiftList(ArrayList list){
        this.shiftList = list;
    }

    public void setSID(String SID) {
        this.SID = SID;
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

            //Start Time -> shifts.first().text()
            //End Time -> shifts.next().first().text()
            //Name -> shifts.next().next().first().text())\
            //Assignment_ID & Description -> shifts.next().next().next().first().text()

            //iterating through the shift list
            while (!shifts.isEmpty()) {

                Shift shift = new Shift(); //Creating a new shift

                String startTime = shifts.first().text();
                shift.setStartTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + DAY + " " + startTime + ":" + "00"));

                //startTime -> 04:00
                String[] splittedStartTime = startTime.split(":");
                shift.setTimeOfDay("PM");
                if (Integer.parseInt(splittedStartTime[0]) < 12) {
                    shift.setTimeOfDay("AM");
                }

                //End time
                String endTime = shifts.next().first().text();
                String[] splittedEndTime = endTime.split(":");
                shift.setEndTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + DAY + " " + endTime + ":" + "00"));

                //there is no real way to check the date when the shifts ends
                //the conditional assumes some things
                // 1. that shifts that start in the PM can end the next day, whereas AM shifts cannot
                // 2. We only have end times, so shifts that start in the PM and end in the AM are the next day
                if (Integer.parseInt(splittedEndTime[0]) < 12 && shift.getTimeOfDay().equals("PM")) {
                    int nextDay = DAY + 15;
                    int nextMonth = MONTH + 12;

                    //if the next day is greater than the last day of the month
                    if (nextDay > cal.getActualMaximum(Calendar.DAY_OF_MONTH)) {
                        //If its a new month the day is always 1
                        nextDay = 1;
                        //check to see if we need to roll over the year
                        if (nextMonth > cal.getActualMaximum(Calendar.MONTH)) {
                            //HAPPY NEW YEAR!
                            nextMonth = cal.get(Calendar.JANUARY);
                            int nextYear = YEAR + 1;
                            shift.setEndTime(Timestamp.valueOf(nextYear + "-" + nextMonth + "-" + nextDay + " " + endTime + ":" + "00"));
                        } else {
                            //don't need to roll over the year, just going to next month
                            shift.setEndTime(Timestamp.valueOf(YEAR + "-" + nextMonth + "-" + nextDay + " " + endTime + ":" + "00"));
                        }
                    } else {
                        //Just need to go to the next day
                        shift.setEndTime(Timestamp.valueOf(YEAR + "-" + MONTH + "-" + nextDay + " " + endTime + ":" + "00"));
                    }

                }

                //getting the employee name
                String name = shifts.next().next().first().text();
                shift.setEmployeeName(name); //todo remove (NAV) and (GP) from names

                shift.setIsGreen(false);
                if (name.contains("(GP)")) {
                    shift.setIsGreen(true);
                }

                shift.setHasAvop(true);
                if (name.contains("(NAV)")) {
                    shift.setHasAvop(false);
                }

                //Getting the assignment
                String[] splittedAssignment = shifts.next().next().next().first().text().split(" - ");
                shift.setAssignmentID(Integer.parseInt(splittedAssignment[0]));
                shift.setDescription(splittedAssignment[1]);

                shifts.remove(0); //Always removing the top-most shift

                shiftScheduler.shiftList.add(shift);
            }
    }


}
