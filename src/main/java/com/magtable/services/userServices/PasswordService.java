package com.magtable.services.userServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

/**
 * Service to generate a random password
 * @author Arran Woodruff
 */
@Service
public class PasswordService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Generates a random string with a given length. Only uses lowercase English alphabet characters.
     * @return Random password string.
     */
    public String generateResetPassword() {
        int TEMPORARY_PASSWORD_LENGTH = 8;
        char[] charArray = new char[TEMPORARY_PASSWORD_LENGTH]; // using a char array to build the random string

        Random r = new Random();

        int asciiOffset = 97; // this is where the lower-case english alphabet starts in the ascii table
        int asciiLength = 26; // this is the range of ascii characters we want, starting from the offset

        for (int i = 0; i < charArray.length; i++) {
            int randint = r.nextInt(asciiLength) + asciiOffset;
            charArray[i] = (char) randint; // cast our random int to char and add it to charArray
        }

        return new String(charArray);
    }

    /**
     * Encodes provided password string using a bCrypt hash and salt.
     * @param password String to hash.
     * @return Hashed password string.
     */
    public String encode(String password) {
        return bCryptPasswordEncoder.encode(password);
    }
}
