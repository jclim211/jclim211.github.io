# Must: import unittest library
import unittest

# Must: import 'webdriver' library
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.support.ui import Select
import json
import os
import re

def log(message):
    if VERBOSE:
        print(message)

# TODO Change the url
# TODO Copy bike_stations.json and api.php from test folder into main folder before running test_q4.py
# TODO change the url
site_url = f"http://localhost/mlt/submissions/{pat}/q4.html"

success_rental = 'Bike successfully rented!'
success_return = 'Bike successfully returned!'

score_a = 0
score_b = 0
score_c = 0
score_d = 0

VERBOSE = True

"""Create ChromeDriver instance with blank page, wait policy of
3 seconds and maximize the window"""
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get(site_url)

# Set default timeout for locating an element in the DOM (1 seconds)
driver.implicitly_wait(1)

# Maximize window
driver.maximize_window()

print("Part A. Load bike stations availability and information: 2 m")
WebDriverWait(driver, 30).until(ec.visibility_of_element_located((By.CSS_SELECTOR, ".station-item")))
station_list_elem = driver.find_elements(By.CSS_SELECTOR, ".station-item")
bike_avail_list = [15,5,7,10,0]
dock_avail_list = [0,10,8,5,15]

if len(station_list_elem)!=5:
    log("FAIL")
else:
    bike_avail_verified = True
    dock_avail_verified = True
    for i, station_div_elem in enumerate(station_list_elem):
        p_elements = station_div_elem.find_elements(By.CSS_SELECTOR, "p")
        
        if p_elements[0].text[:16].lower()!= "available bikes:":
            print(p_elements[0].text[:16])
            bike_avail_verified = False
            break
        if p_elements[1].text[:16].lower()!= "available docks:":
            print(p_elements[1].text[:15])
            dock_avail_verified = False
            break
        if int(p_elements[0].text[-2:]) != bike_avail_list[i]:
            bike_avail_verified = False
            break
        if int(p_elements[1].text[-2:]) != dock_avail_list[i]:
            dock_avail_verified = False
            break
    if (bike_avail_verified & dock_avail_verified):
        score_a+=2
        log("PASS")
    else:
        log("FAIL")

print("Part B. Populate station dropdown information: 1 m")
WebDriverWait(driver, 30).until(ec.visibility_of_element_located((By.CSS_SELECTOR, ".station-item")))
station_list = ["Silverline Station", "Greenfield Depot Station", "Blue Horizon Station", "Maplewood Station", "Eastgate Station"]
station_select_elem = driver.find_element(By.CSS_SELECTOR, "#station-select")
return_station_select_elem = driver.find_element(By.CSS_SELECTOR, "#return-station-select")
option_elems = station_select_elem.find_elements(By.TAG_NAME, "option")
return_option_elems = return_station_select_elem.find_elements(By.CSS_SELECTOR, "option")
if (len(option_elems)!=6) or (len(return_option_elems)!=6):
    log("FAIL")
else:
    rent_station_verified = True
    return_station_verified = True
    for i,station in enumerate(station_list):
        if station != option_elems[i+1].text:
            rent_station_verified = False
            break
    for i,station in enumerate(station_list):
        if station != return_option_elems[i+1].text:
            return_station_verified = False
            break
    if (rent_station_verified & return_station_verified):
        score_b+=1
        log("PASS")
    else:
        log("FAIL")
        
print("Part C. Bike rental: 0.75 m")
WebDriverWait(driver, 30).until(ec.visibility_of_element_located((By.CSS_SELECTOR, ".station-item")))
station_list = ["Silverline Station", "Greenfield Depot Station", "Blue Horizon Station", "Maplewood Station", "Eastgate Station"]
station_select_elem = Select(driver.find_element(By.CSS_SELECTOR, "#station-select"))
station_select_elem.select_by_visible_text(station_list[1])
rent_btn = driver.find_element(By.CSS_SELECTOR, "#rent-btn")
rent_btn.click()
WebDriverWait(driver, 30).until(ec.alert_is_present())
alert = driver.switch_to.alert
correct_alert = False
if alert.text == success_rental:
    correct_alert = True
alert.accept()
result = False
with open('bike_stations.json', 'r') as text_file:
    data = json.load(text_file)
    if (data[1]['available_bikes']==4) and (data[1]['available_docks']==11):
        result = True
    else:
        result = False
if result:
    if correct_alert:
        score_c+=0.75
    else:
        score_c+=0.5
        log("Wrong alert message: -0.25")
    log("PASS")
else:
    log("FAIL")
    
print("Part C. Bike return: 0.75 m")
WebDriverWait(driver, 30).until(ec.visibility_of_element_located((By.CSS_SELECTOR, ".station-item")))
station_list = ["Silverline Station", "Greenfield Depot Station", "Blue Horizon Station", "Maplewood Station", "Eastgate Station"]
station_select_elem = Select(driver.find_element(By.CSS_SELECTOR, "#return-station-select"))
station_select_elem.select_by_visible_text(station_list[3])
return_btn = driver.find_element(By.CSS_SELECTOR, "#return-btn")
return_btn.click()
WebDriverWait(driver, 30).until(ec.alert_is_present())
alert = driver.switch_to.alert
correct_alert = False
if alert.text == success_return:
    correct_alert = True
alert.accept()
result = False
with open('bike_stations.json', 'r') as text_file:
    data = json.load(text_file)
    if (data[3]['available_bikes']==11) and (data[3]['available_docks']==4):
        result = True
    else:
        result = False
if result:
    if correct_alert:
        score_c+=0.75
    else:
        log("Wrong alert message: -0.25")
        score_c+=0.5
    log("PASS")
else:
    log("FAIL")

print("Part D: No avail bike: 0.25 m")
WebDriverWait(driver, 30).until(ec.visibility_of_element_located((By.CSS_SELECTOR, ".station-item")))
station_list = ["Silverline Station", "Greenfield Depot Station", "Blue Horizon Station", "Maplewood Station", "Eastgate Station"]
station_select_elem = Select(driver.find_element(By.CSS_SELECTOR, "#station-select"))
station_select_elem.select_by_visible_text(station_list[4])
rent_btn = driver.find_element(By.CSS_SELECTOR, "#rent-btn")
rent_btn.click()
WebDriverWait(driver, 30).until(ec.alert_is_present())
alert = driver.switch_to.alert
correct_alert = False
if alert.text == "Error renting bike":
    correct_alert = True
alert.accept()
result = False
with open('bike_stations.json', 'r') as text_file:
    data = json.load(text_file)
    if (data[4]['available_bikes']==0) and (data[4]['available_docks']==15):
        result = True
    else:
        result = False
if (result & correct_alert):
    score_d+=0.25
    log("PASS")
else:
    log("FAIL")

    
print("Part D. No avail dock: 0.25 m")
WebDriverWait(driver, 30).until(ec.visibility_of_element_located((By.CSS_SELECTOR, ".station-item")))
station_list = ["Silverline Station", "Greenfield Depot Station", "Blue Horizon Station", "Maplewood Station", "Eastgate Station"]
station_select_elem = Select(driver.find_element(By.CSS_SELECTOR, "#return-station-select"))
station_select_elem.select_by_visible_text(station_list[0])
rent_btn = driver.find_element(By.CSS_SELECTOR, "#return-btn")
rent_btn.click()
WebDriverWait(driver, 30).until(ec.alert_is_present())
alert = driver.switch_to.alert
correct_alert = False
if alert.text == "Error returning bike":
    correct_alert = True
alert.accept()
result = False
with open('bike_stations.json', 'r') as text_file:
    data = json.load(text_file)
    if (data[0]['available_bikes']==15) and (data[0]['available_docks']==0):
        result = True
    else:
        result = False
if (result & correct_alert):
    log("PASS")
    score_d+=0.25
else:
    log("FAIL")

total = score_a+score_b+score_c+score_d

file_path_js = os.path.abspath(f"{pat}/q4.js") 
#file_path_js = os.path.abspath('q4.js')
with open(file_path_js, 'r') as file:
    js_source = file.read()

# # Use regex to find the NAME
name_match = re.search(r'NAME:\s*(.*)', js_source)
name = name_match.group(1).strip() if name_match else 'Name not found'

print(f"Submitted by: {name}")
# Count the occurrences of "innerHTML"
innerHTML_count = js_source.count('innerHTML')

print(score_a, ",", score_b, ",", score_c, ",", score_d,",", total)
print(f"innerHTML was used {innerHTML_count} time(s) on the page.")
print()
print(f"Final score: {total - innerHTML_count}")