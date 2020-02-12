package com.magtable.services;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class ValidationService<E> {

    private E element;
    private String fieldName;

    /**
     * Utility class to validate request elements. On error, throws relevant HTTPStatus error.
     * Constructed using the Builder Pattern for cleaner use
     *
     * @param fieldName name of field to be validated
     * @param element   value of element to be validated
     */
    public ValidationService(String fieldName, E element) {
        this.element = element;
        this.fieldName = fieldName;
    }


    public ValidationService<E> exists() {
        if (element != null) {
            return this;
        }

        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" does not exist.", fieldName));
    }

    public ValidationService<E> isString() {
        try {
            String test = (String) element;
            return this;
        } catch (ClassCastException e) {
            throwStandardError();
        }
        return null;
    }

    /**
     * Functions only if class was initialized with a String as the validation subject.
     *
     * @param length minimum string length
     * @return boolean represents whether the passed in string is long enough (true) or not (false)
     */
    public ValidationService<E> isMinLengthString(int length) {
        try {
            String test = (String) element;
            if (test.length() >= length) return this;

            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    String.format("\"%s\" is too short. Required length is %d", fieldName, length));
        } catch (ClassCastException e) {
            throwStandardError();
        }
        return null;
    }

    public ValidationService<E> notExists() {
        if (element == null) return this;

        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" exists.", fieldName));
    }

    public ValidationService<E> notZero() {
        try {
            Integer test = (Integer) element;
            if (test == 0) return this;
        } catch (ClassCastException | NullPointerException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" is not zero.", fieldName));
        }
        return null;
    }


    private void throwStandardError() {
        // opted for term "invalid" as this error may be seen by the user and
        // I didn't want to assume everyone knows what a string is
        throw new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" is invalid.", fieldName));
    }
}
