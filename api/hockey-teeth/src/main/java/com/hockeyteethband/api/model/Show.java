package com.hockeyteethband.api.model;

public class Show {

    private String date;
    private String venue;
    private String link;
    private String location;

    public Show() {

    }

    public Show(String date, String venue, String link, String location) {
        this.date = date;
        this.venue = venue;
        this.link = link;
        this.location = location;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getVenue() {
        return venue;
    }

    public void setVenue(String venue) {
        this.venue = venue;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    @Override
    public String toString() {
        return "Show{" +
            "date='" + date + '\'' +
            ", venue='" + venue + '\'' +
            ", link='" + link + '\'' +
            ", location='" + location + '\'' +
            '}';
    }
}
