package com.magtable.exception;

public class UserNotFoundException extends RuntimeException {

    /**
     * @author David
     * <p>
     * I ripped this from the internet.
     * https://www.callicoder.com/spring-boot-rest-api-tutorial-with-mysql-jpa-hibernate/
     */
    private final String resourceName;
    private final String fieldName;
    private final Object fieldValue;

    public UserNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        super(String.format("%s not found with %s : '%s'", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public String getResourceName() {
        return resourceName;
    }

    public String getFieldName() {
        return fieldName;
    }

    public Object getFieldValue() {
        return fieldValue;
    }
}
