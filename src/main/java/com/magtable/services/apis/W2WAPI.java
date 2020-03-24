package com.magtable.services.apis;

import com.magtable.model.entities.W2WShift;
import com.magtable.repository.W2WShiftRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Calendar;

/**
 * API for getting shift data from W2W
 * @author David Ward
 */
@Service
public class W2WAPI {

    @Autowired
    W2WShiftRepository w2wShiftRepository;

    /**
     * Method to fetch all shift data from Aeromags shift portal.
     * Stores the updated shift information into the W2WShift table in the database.
     */
    public void APIPull(String SID) {

        //Deleting Everything in the Current repo
        w2wShiftRepository.deleteAll();

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

        //selecting the elements that contain shift data from the page
        Elements shifts = doc.select("span.sftstart");

        //iterating through the shift list
        while (!shifts.isEmpty()) {

            W2WShift shift = new W2WShift(); //Creating a new shift


            String startTime = shifts.first().text();
            shift.setStartTime(startTime.replace(":", ""));

            String endTime = shifts.next().first().text();
            shift.setEndTime(endTime.replace(":", ""));

            //getting the employee name
            String name = shifts.next().next().first().text();

            boolean isGreen = name.contains("(GP)");
            shift.setIsGreen(isGreen);

            boolean noAvop = name.contains("(NAV)");
            shift.setNoAvop(noAvop);

            shift.setName(name.replace("(GP)", "").replace("(NAV)", ""));

            //Getting the description
            //input is "800 - description"
            String[] splitDescription = shifts.next().next().next().first().text().split(" - ");

            try {
                shift.setDescription(splitDescription[1]);
            }catch (ArrayIndexOutOfBoundsException e){
                shift.setDescription("On Call"); //On Call shifts have no '-' for us to split for
            }

            shifts.remove(0); //Always removing the top-most shift

            if (!name.equals("(Unassigned)")) {
                w2wShiftRepository.save(shift);
            }
        }
    }
}
