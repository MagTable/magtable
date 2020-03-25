package com.magtable.services.userServices;

import com.magtable.services.ErrorService;

/**
 * Service to validate user data before being saved into database
 * @author Arran Woodruff
 */
public class ValidationService<E> {

    ErrorService errorService;

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
        this.errorService = new ErrorService();
    }

    public ValidationService<E> exists() {
        if (element != null) {
            return this;
        }

        throw errorService.nullUser();
    }

    public ValidationService<E> isString() {
        try {
            String test = (String) element;
            return this;
        } catch (ClassCastException e) {
            throw errorService.invalidField(fieldName);
        }
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

            throw errorService.minLength(fieldName, length);
        } catch (ClassCastException e) {
            throw errorService.invalidField(fieldName);
        }
    }

    public ValidationService<E> notExists() {
        if (element == null) return this;

        throw errorService.provideId(fieldName);
    }

//    public ValidationService<E> notZero() {
//        try {
//            Integer test = (Integer) element;
//            if (test == 0) return this;
//        } catch (ClassCastException | NullPointerException e) {
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, String.format("\"%s\" is not zero.", fieldName));
//        }
//        return null;
//    }
}
