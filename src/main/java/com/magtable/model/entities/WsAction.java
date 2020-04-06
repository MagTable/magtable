package com.magtable.model.entities;

/**
 * Model for Websocket Actions
 * @author Arran Woodruff
 */

public class WsAction {
    public static final String MTR_PUBLISH = "MTR_PUBLISH";

    private String type;
    private Object payload;

    public WsAction(String action, Object payload) {
        this.payload = payload;
        this.type =action;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Object getPayload() {
        return payload;
    }

    public void setPayload(Object payload) {
        this.payload = payload;
    }
}
