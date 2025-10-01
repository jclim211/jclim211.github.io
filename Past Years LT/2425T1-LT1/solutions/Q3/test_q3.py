from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import os
import time
import re

# Configure Chrome options
chrome_options = Options()
chrome_options.add_argument("--headless=new")  # for Chrome >= 109

# Set up the WebDriver
driver = webdriver.Chrome(
    options=chrome_options
)  # Ensure you have the ChromeDriver installed and in your PATH
# driver = webdriver.Chrome()

# Load the HTML file
file_path = os.path.abspath(
    "q3.html"
)  # Replace with the correct path to student's q3.html file
driver.get(f"file:///{file_path}")

# Wait for the page to load
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.ID, "colorBox"))
)


def click_button_and_wait(button_id, wait_time=3.5):
    button = driver.find_element(By.ID, button_id)
    button.click()
    time.sleep(wait_time)  # Wait for transition to complete


# List to store test results
test_results = []
marks_array = []
culmulativeMarks = 0
offFirst = False


def log_test_result(test_number, passed, marks_awarded, associatedPart):
    result = f"Test {test_number} {'passed. ' if passed else 'failed. '}"
    result += (
        "Marks awarded for " + associatedPart + " = " + str(marks_awarded)
    )
    global culmulativeMarks
    culmulativeMarks += marks_awarded
    test_results.append(result)
    marks_array.append(marks_awarded)


# Test 1: For Part A - The #bulb should have a fill of yellow after the #toggleButton is clicked
try:
    click_button_and_wait("toggleButton")
    bulb = driver.find_element(By.ID, "bulb")
    fill_color = bulb.get_attribute("style")
    assert (
        "fill: yellow" in fill_color
    ), f"Expected fill color to be yellow, but got {fill_color}"
    log_test_result(1, True, 1, "Part A: Fill color yellow ")
except Exception as e:
    # Test 1v2: For Part A - The #bulb should have a fill of yellow after the #toggleButton is clicked TWICE
    try:
        click_button_and_wait("toggleButton")
        bulb = driver.find_element(By.ID, "bulb")
        fill_color = bulb.get_attribute("style")
        assert (
            "fill: yellow" in fill_color
        ), f"Expected fill color to be yellow, but got {fill_color}"
        log_test_result(
            1, True, 0.5, "Part A: Fill color yellow after 2 clicks"
        )
        offFirst = True
    except Exception as e:
        log_test_result(1, False, 0, "Part A: Fill color NOT yellow ")

# Test 2: For Part B - The #toggleButton should not be clickable 1 second after it was clicked
try:
    toggle_button = driver.find_element(By.ID, "toggleButton")
    toggle_button.click()
    time.sleep(0.5)
    assert (
        not toggle_button.is_enabled()
    ), "Expected toggle button to be disabled after 1 second"
    log_test_result(2, True, 1, "Part B: Toggle button disabled ")
except Exception as e:
    log_test_result(2, False, 0, "Part B: Toggle button NOT disabled ")
    driver.get(driver.current_url)
    time.sleep(2)

driver.refresh()
click_button_and_wait("toggleButton")

# Wait for the button to be re-enabled
time.sleep(1)

# Test 3: For Part C - After #toggleButton was clicked two more times, the ol with #logs should contain the specified logs
try:
    click_button_and_wait("toggleButton")
    click_button_and_wait("toggleButton")
    logs = driver.find_element(By.ID, "logs")
    log_items = logs.find_elements(By.TAG_NAME, "li")
    if offFirst == False:
        expected_logs_3 = [
            "User interacts.",
            "ON.",
            "Bulb lights up.",
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
            "User interacts.",
            "ON.",
            "Bulb lights up.",
        ]
    else:
        expected_logs_3 = [
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
            "User interacts.",
            "ON.",
            "Bulb lights up.",
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
        ]
    actual_logs_3 = [item.text for item in log_items]
    assert (
        actual_logs_3 == expected_logs_3
    ), f"Expected logs: {expected_logs_3}, but got: {actual_logs_3}"
    log_test_result(
        3,
        True,
        1 if offFirst == False else 0.5,
        "Part C: Logs added correctly",
    )
except Exception as e:
    log_test_result(3, False, 0, "Part C: Logs NOT added correctly")

# Test 4: For Part D - After #toggleButton was clicked for the fourth time, the ol with #logs should contain the specified logs
# Moreover, an error message should be shown.
try:
    click_button_and_wait("toggleButton")
    logs = driver.find_element(By.ID, "logs")
    log_items = logs.find_elements(By.TAG_NAME, "li")
    if offFirst == False:
        expected_logs_4 = [
            "User interacts.",
            "ON.",
            "Bulb lights up.",
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
            "User interacts.",
            "ON.",
            "Bulb lights up.",
        ]
    else:
        expected_logs_4 = [
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
            "User interacts.",
            "ON.",
            "Bulb lights up.",
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
        ]
    actual_logs_4 = [item.text for item in log_items]
    assert (
        actual_logs_4 == expected_logs_4
    ), f"Expected logs: {expected_logs_4}, but got: {actual_logs_4}"
    error_msg = driver.find_element(By.ID, "errorMsg").text
    assert (
        error_msg == "Clear some logs before proceeding"
    ), f"Expected error message: 'Clear some logs before proceeding', but got: {error_msg}"
    log_test_result(4, True, 0.5, "Part D: Error message correctly shown")
except Exception as e:
    log_test_result(4, False, 0, "Part D: Error message NOT correctly shown")

# Test 5: Part E1 - After #halveLogButton is pressed, ol with #logs should contain the specified logs and no error message
try:
    driver.find_element(By.ID, "halveLogButton").click()
    logs = driver.find_element(By.ID, "logs")
    log_items = logs.find_elements(By.TAG_NAME, "li")
    if offFirst == False:
        expected_logs_5 = [
            "OFF.",
            "Bulb turns off.",
            "User interacts.",
            "ON.",
            "Bulb lights up.",
        ]
    else:
        expected_logs_5 = [
            "ON.",
            "Bulb lights up.",
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
        ]
    actual_logs_5 = [item.text for item in log_items]
    assert (
        actual_logs_5 == expected_logs_5
    ), f"Expected logs: {expected_logs_5}, but got: {actual_logs_5}"
    error_msg = driver.find_element(By.ID, "errorMsg").text
    assert error_msg == "", f"Expected no error message, but got: {error_msg}"
    log_test_result(
        5,
        True,
        1 if offFirst == False else 0.5,
        "Part E1: Halving logs once works",
    )
except Exception as e:
    log_test_result(5, False, 0, "Part E1: Halving logs once does not work")

# Test 6: Part E2 - After #halveLogButton is pressed five more times, ol with #logs should contain the specified logs
try:
    driver.find_element(By.ID, "halveLogButton").click()
    driver.find_element(By.ID, "halveLogButton").click()
    driver.find_element(By.ID, "halveLogButton").click()
    driver.find_element(By.ID, "halveLogButton").click()
    driver.find_element(By.ID, "halveLogButton").click()

    logs = driver.find_element(By.ID, "logs")
    log_items = logs.find_elements(By.TAG_NAME, "li")
    if offFirst == False:
        expected_logs_6 = ["Bulb lights up."]
    else:
        expected_logs_6 = ["Bulb turns off."]
    actual_logs_6 = [item.text for item in log_items]
    assert len(actual_logs_6) == len(
        expected_logs_6
    ), f"Expected number of logs: {expected_logs_6.len}, but got: {actual_logs_6.len}"
    error_msg = driver.find_element(By.ID, "errorMsg").text
    assert (
        error_msg == "Not enough logs to remove"
    ), f"Expected error message: 'Not enough logs to remove', but got: {error_msg}"
    log_test_result(
        6,
        True,
        1 if offFirst == False else 0.5,
        "Part E2: Last remaining log not removed with correct error message",
    )
except Exception as e:
    log_test_result(
        6,
        False,
        0,
        "Part E2: Attempt to remove last remaining log has wrong result",
    )

# Test 7: Part F - Lastly, when #toggleButton is pressed again, ol with #logs should contain the specified logs, and no error message should be shown.
try:
    driver.find_element(By.ID, "toggleButton").click()
    logs = driver.find_element(By.ID, "logs")
    log_items = logs.find_elements(By.TAG_NAME, "li")
    if offFirst == False:
        expected_logs_7 = [
            "Bulb lights up.",
            "User interacts.",
            "OFF.",
            "Bulb turns off.",
        ]
    else:
        expected_logs_7 = [
            "Bulb turns off.",
            "User interacts.",
            "ON.",
            "Bulb lights up.",
        ]
    actual_logs_7 = [item.text for item in log_items]
    # Compare only the last 3 elements
    assert (
        actual_logs_7[-3:] == expected_logs_7[-3:]
    ), f"Expected last 3 logs: {expected_logs_7[-3:]}, but got: {actual_logs_7[-3:]}"
    error_msg = driver.find_element(By.ID, "errorMsg").text
    assert error_msg == "", f"Expect no error message, but got: {error_msg}"
    log_test_result(
        7,
        True,
        0.5,
        "Part F: If 'Toggle Bulb' works, add logs and remove error message",
    )
except Exception as e:
    log_test_result(
        7,
        False,
        0,
        "Part F: On clicking 'Toggle Bulb' when there is an error message, wrong result",
    )

# Load the JS file content
file_path_js = os.path.abspath(
    "q3.js"
)  # Replace with the correct path to the JS file

# Read the content of the JS file
with open(file_path_js, "r") as file:
    js_source = file.read()

# Count the occurrences of "innerHTML"
innerHTML_count = js_source.count("innerHTML")

print(f"innerHTML was used {innerHTML_count} time(s) on the page.")
print()

if innerHTML_count > culmulativeMarks:
    innerHTML_count = culmulativeMarks

# Print results
for result in test_results:
    print(result)

Q3Total = culmulativeMarks - innerHTML_count

print()
print("Subtotal marks awarded = " + str(culmulativeMarks))
print(
    "Final total marks awarded (after taking into account innerHTML penalty, minimum 0)"
)
print(" = " + str(Q3Total))

print()
penalty = (
    "-" + str(innerHTML_count) if innerHTML_count > 0 else str(innerHTML_count)
)
marks_array.append(penalty)
marks_array.append(Q3Total)
print(
    "Part A, Part B, Part C, Part D, Part E1, Part E2, Part F, innerHTML penalty, Q3 Total"
)
print(",".join(map(str, marks_array)))

# Use regex to find the NAME
name_match = re.search(r"NAME:\s*(.*)", js_source)
name = name_match.group(1).strip() if name_match else "Name not found"

print(f"Submitted by: {name}")
print()

# Close the WebDriver
driver.quit()
