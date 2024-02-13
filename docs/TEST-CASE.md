## Test Cases for Shop Login Functionality

**Test Objective:** Verify the login functionality of the shop website.

**Test Scope:** This test suite covers successful and unsuccessful login scenarios with various input combinations.

**Test Environment:**
* **Web browser:** Google Chrome version 121.0.6167.161

**Preconditions:** Shop website is opened

*Test Cases:*

**1. Successful Login with Correct Credentials:**

* **Test ID:** TC01
* **Description:** User successfully logs in with valid username and password.
* **Test Steps:**
    1. Open the shop website login page.
    2. Enter a valid username in the username field.
    3. Enter the corresponding correct password in the password field.
    4. Click the "Login" button.
* **Expected Result:**
    1. User gets redirected to the user panel.
    2. A welcome message greets the user by name.
    3. User account details are accessible.

**2. Unsuccessful Login with Incorrect Username and Correct Password:**

* **Test ID:** TC02
* **Description:** User attempts to log in with an incorrect username and correct password.
* **Test Steps:**
    1. Open the shop website login page.
    2. Enter an invalid username in the username field.
    3. Enter the correct password in the password field.
    4. Click the "Login" button.
* **Expected Result:**
    1. User remains on the login page.
    2. An error message appears indicating an invalid username.
    3. Login attempt is not successful.

**3. Unsuccessful Login with Correct Username and Incorrect Password:**

* **Test ID:** TC03
* **Description:** User attempts to log in with a correct username and incorrect password.
* **Test Steps:**
    1. Open the shop website login page.
    2. Enter the correct username in the username field.
    3. Enter an incorrect password in the password field.
    4. Click the "Login" button.
* **Expected Result:**
    1. User remains on the login page.
    2. An error message appears indicating an incorrect password.
    3. Login attempt is not successful.

**4. Unsuccessful Login with Empty Username Field and Correct Password:**

* **Test ID:** TC04
* **Description:** User attempts to log in with an empty username field and correct password.
* **Test Steps:**
    1. Open the shop website login page.
    2. Leave the username field blank.
    3. Enter the correct password in the password field.
    4. Click the "Login" button.
* **Expected Result:**
    1. User remains on the login page.
    2. An error message appears indicating a missing username.
    3. Login attempt is not successful.

**5. Unsuccessful Login with Correct Username and Empty Password Field:**

* **Test ID:** TC05
* **Description:** User attempts to log in with a correct username and empty password field.
* **Test Steps:**
    1. Open the shop website login page.
    2. Enter the correct username in the username field.
    3. Leave the password field blank.
    4. Click the "Login" button.
* **Expected Result:**
    1. User remains on the login page.
    2. An error message appears indicating a missing password.
    3. Login attempt is not successful.

**6. Unsuccessful Login with Both Fields Empty:**

* **Test ID:** TC06
* **Description:** User attempts to log in with both username and password fields empty.
* **Test Steps:**
    1. Open the shop website login page.
    2. Leave both username and password fields blank.
    3. Click the "Login" button.
* **Expected Result:**
    1. User remains on the login page.
    2. An error message appears indicating missing username and password.
    3. Login attempt is not successful.


