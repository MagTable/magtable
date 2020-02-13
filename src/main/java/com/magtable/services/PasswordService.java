package com.magtable.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class PasswordService {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private final int TEMPORARY_PASSWORD_LENGTH = 8;

    public String generateResetPassword() {
        char[] charArray = new char[TEMPORARY_PASSWORD_LENGTH]; // using a char array to build the random string

        Random r = new Random();

        int asciiOffset = 97; // this is where the lower-case english alphabet starts in the ascii table
        int asciiLength = 26; // this is the range of ascii characters we want, starting from the offset

        for (int i = 0; i < charArray.length; i++) {
            int randint = r.nextInt(asciiLength) + asciiOffset;
            charArray[i] = (char) randint; // cast our random int to char and add it to charArray
        }

        String randomPassword = new String(charArray); // convert random char array to String
        return randomPassword;
    }

    public String encodePass(String password) {
        //Password encoding
        String encodedPassword = bCryptPasswordEncoder.encode(password);

        return encodedPassword;
    }
}
