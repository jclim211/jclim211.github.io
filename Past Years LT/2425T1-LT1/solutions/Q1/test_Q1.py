# Must: import unittest library
import unittest

# Must: import 'webdriver' library
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import os
import re

# TODO change the url
names_g9 = [
   "1-amritad.2022",
   "2-ashleychungbenghunn",
   "3-tanlishingbarry",
   "4-colin.teo.2022",
   "5-darren.yan.2023",
   "6-calmaeleazerzeusamigable",
   "7-haziqr.2023",
   "8-hx.teck.2023",
   "9-jagat.mok.2023",
   "10-jeremychenjiajun",
   "11-jerrick.ng.2023",
   "12-jewel.jobin.2023",
   "13-keithngjunhao",
   "14-kester.fun.2023/student",
   "15-SebastianWong",
   "16-kn.leung.2023",
   "17-kynansiabingxuan",
   "18-yangkangyan",
   "19-christianthaddeusbehliangker",
   "20-LengJinHaoLucas",
   "21-muhammadnabilzuhair",
   "22-mynchin.lim.2023",
   "23-FanNaiXin",
   "24-natalieyeomin",
   "25-nickus.lee.2023",
   "26-phoebe.neo.2023",
   "27-TanYewKiatRegan/student",
   "28-roycekohruicheng",
   "29-saurabhm.2022/student",
   "30-sean.leng.2023/student",
   "31-shihui.fong.2023/student",
   "32-shuting.woo.2023",
   "33-songen.chua.2023",
   "34-subodhiniv.2022",
   "35-than.liang.2023",
   "36-vanessa.yeo.2023",
   "37-Vivie_cherysia_liefandy/student",
   "38-khorxianhui",
   "39-oryanting/student",
   "40-yenqin.lim.2023",
   "41-yikai.neo.2023/student",
   "42-varabellegohzejia",
   "43-zhiyang.lim.2023",
   "44-zuwei.ng.2023/student"
]

names_g8 = [
   "1-angel.smith.2023/student",
   "2-bjorn.tin.2023",
   "3-clarisseteo.2023",
   "4-cxwong.2023/student",
   "5-david.lee.2022",
   "6-dominic.lau.2023",
   "7-eanean.chow.2023",
   "8-emma.foo.2023",
   "9-enxi.poh.2022",
   "10-eric.ng.2022",
   "11-ethan.tay.2023",
   "12-gy.liew.2023/student",
   "13-hsuhwee.kow.2023",
   "14-imrana.2023/student",
   "15-jay.lin.2023",
   "16-jeremy.heng.2023",
   "17-jianzong.ng.2023",
   "18-jiaxin.wong.2023/student",
   "19-jingkai.lim.2023",
   "20-jonathanong.2023",
   "21-karmun.yee.2023/student",
   "22-kelvin.poh.2023/student",
   "23-kenjin.nar.2023",
   "24-kwtan.2023",
   "25-leexin.tan.2023",
   "26-nora.ke.2023",
   "27-qc.jiang.2023",
   "28-risheethas.2021",
   "29-shamelt.2023",
   "30-shane.tan.2023",
   "31-sylee.2023",
   "32-tailin.piao.2023",
   "33-utkarsht.2023",
   "34-wenxuan.goh.2023",
   "35-xavier.phua.2023",
   "36-xingyinglau.2023",
   "37-xxchua.2021",
   "38-yanjie.zhao.2023/student",
   "39-yf.leong.2023",
   "40-yuanqi.yong.2023",
   "41-yuanxingtan.2023",
   "42-yzkoh.2023/student"
   ]

out_file = open("results_g9.csv", 'w')

for nm in names_g9:
   print(nm)
   pat = f"G9/{nm}/Q1"
   site_url = f"http://localhost/mlt/submissions/{pat}/q1.html"

   VERBOSE = True

   score_a = 0.0
   score_b = 0.0
   score_c = 0.0
   score_d = 0.0

   """Create ChromeDriver instance with blank page, wait policy of
   3 seconds and maximize the window"""

   # Initiate ChromeDriver instance
   options = webdriver.ChromeOptions()
   options.add_argument('--headless')
   driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
   driver.get(site_url)

   # Set default timeout for locating an element in the DOM (1 seconds)
   driver.implicitly_wait(1)

   # Maximize window
   driver.maximize_window()

   # PART A
   header_elem = driver.find_element(By.TAG_NAME, "header")
   if VERBOSE:
      print("a. header bgcolor: 0.5 m")
   if(header_elem.value_of_css_property("background-color")== "rgba(52, 152, 219, 1)"):
      score_a = score_a + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")

   if VERBOSE:
      print("a. h1 color: 0.25 m")
   h1_elem = driver.find_element(By.TAG_NAME, "h1")
   if (h1_elem.value_of_css_property("color")=="rgba(255, 255, 255, 1)"):
      score_a = score_a + 0.25
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")

   if VERBOSE:
      print("a. h1 text-align: 0.25 m")
   if(h1_elem.value_of_css_property("text-align")=="center"):
      score_a = score_a + 0.25
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")

   if VERBOSE:
      print("a. h1 font-size: 0.5 m")
   # h1_elem = driver.find_element(By.TAG_NAME, "h1")
   if(h1_elem.value_of_css_property("font-size")=="40px"):
      score_a = score_a + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")



   # PART B
   book_review_elem = driver.find_element(By.CSS_SELECTOR, ".book-review")
   if VERBOSE:
      print("b. book-review background-color: 0.5 m")
   if(book_review_elem.value_of_css_property("background-color")=="rgba(255, 255, 255, 1)"):
      score_b = score_b + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")

   # book_review_elem = driver.find_element(By.CSS_SELECTOR, ".book-review")
   if VERBOSE:
      print("b. book-review border: 0.5 m")
   border_bool = (book_review_elem.value_of_css_property("border-style")=="solid") & (book_review_elem.value_of_css_property("border-color")=="rgb(221, 221, 221)")
   if(border_bool):
      score_b = score_b + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
         
   # book_review_elem = driver.find_element(By.CSS_SELECTOR, ".book-review")
   if VERBOSE:
      print("b. book-review border-radius: 0.5 m")
   if(book_review_elem.value_of_css_property("border-radius")=="8px"):
      score_b = score_b + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")

   # book_review_elem = driver.find_element(By.CSS_SELECTOR, ".book-review")
   if VERBOSE:
      print("b. book-review padding: 0.5 m")
   padding_bool = (book_review_elem.value_of_css_property("padding-top")=="30px") & (book_review_elem.value_of_css_property("padding-bottom")=="30px")
   if(padding_bool):
      score_b = score_b + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
         
   # book_review_elem = driver.find_element(By.CSS_SELECTOR, ".book-review")    
   if VERBOSE:
      print("b. book image centralize: 0.5 m")
   book_cover_elem = driver.find_element(By.CSS_SELECTOR, ".book-review img")
   bc_cover_elem_isblock = book_cover_elem.value_of_css_property("display") == "block"
   bc_left_right_margin_bool = (book_cover_elem.value_of_css_property("margin-left") == book_cover_elem.value_of_css_property("margin-right")) & (float(book_cover_elem.value_of_css_property("margin-left")[:-2])>0.0)
   if(bc_cover_elem_isblock & bc_left_right_margin_bool):
      score_b = score_b + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
         
   if VERBOSE:
      print("b. book-cover width: 0.5 m")
   if(book_cover_elem.value_of_css_property("width")=="200px"):
      score_b = score_b + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")


   # PART C
   if VERBOSE:
      print("c. rating ul color: 0.5 m")
   rating_ul_elem = driver.find_element(By.CSS_SELECTOR, ".rating ul")
   rating_ul_li_elem = driver.find_element(By.CSS_SELECTOR, ".rating ul li")
   bool_ul_color = rating_ul_elem.value_of_css_property("color")=="rgba(255, 215, 0, 1)"
   bool_li_color = rating_ul_li_elem.value_of_css_property("color")=="rgba(255, 215, 0, 1)"
   if(bool_ul_color) or (bool_li_color):
      score_c = score_c + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
      
   if VERBOSE:
      print("c. rating font size: 0.5 m")
   # rating_ul_elem = driver.find_element(By.CSS_SELECTOR, ".rating ul")
   bool_ul_font_size = rating_ul_elem.value_of_css_property("font-size")=="20px"
   bool_li_font_size = rating_ul_li_elem.value_of_css_property("font-size")=="20px"
   if (bool_ul_font_size) or (bool_li_font_size):
      score_c = score_c + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
      
   if VERBOSE:
      print("c. rating ul list style: 0.5 m")
   # rating_ul_elem = driver.find_element(By.CSS_SELECTOR, ".rating ul")
   rating_li_elem = driver.find_element(By.CSS_SELECTOR, ".rating ul li")
   rating_ul_lst_bool = rating_ul_elem.value_of_css_property("list-style-type")=="none"
   rating_li_lst_bool = rating_ul_li_elem.value_of_css_property("list-style-type")=="none"
   if(rating_ul_lst_bool | rating_li_lst_bool):
      score_c = score_c + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
         
   if VERBOSE:
      print("c. rating ul display: 0.5 m")
   # rating_ul_elem = driver.find_element(By.CSS_SELECTOR, ".rating ul")
   if(rating_ul_elem.value_of_css_property("display")=="inline"):
      score_c = score_c + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
      
   if VERBOSE:
      print("c. rating ul li display: 0.5 m")
   rating_li_elem = driver.find_element(By.CSS_SELECTOR, ".rating ul li")
   if(rating_li_elem.value_of_css_property("display")=="inline-block"):
      score_c = score_c + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
         
   if VERBOSE:
      print("c. rating span display: 0.5 m")
   rating_span_elem = driver.find_element(By.CSS_SELECTOR, ".rating span")
   if(rating_span_elem.value_of_css_property("display")=="inline"):
      score_c = score_c + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")


   # PART D
   if VERBOSE:
      print("d. footer bg color: 0.5 m")
   footer_elem = driver.find_element(By.TAG_NAME, "footer")
   if(footer_elem.value_of_css_property("background-color")=="rgba(44, 62, 80, 1)"):
      score_d = score_d + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
         
   if VERBOSE:
      print("d. footer color: 0.5 m")
   # footer_elem = driver.find_element(By.TAG_NAME, "footer")
   footer_p_elem = driver.find_element(By.CSS_SELECTOR, "footer p")
   footer_color_bool = (footer_elem.value_of_css_property("color")=="rgba(255, 255, 255, 1)") | (footer_p_elem.value_of_css_property("color")=="rgba(255, 255, 255, 1)")
   if (footer_color_bool):
      score_d = score_d + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")
         
   if VERBOSE:
      print("d. footer centralize: 0.5 m")
   footer_p_elem = driver.find_element(By.CSS_SELECTOR, "footer p")
   left_right_margin_bool = (footer_p_elem.value_of_css_property("margin-left") == footer_p_elem.value_of_css_property("margin-right")) & (float(footer_p_elem.value_of_css_property("margin-left")[:-2])>0.0)
   if(left_right_margin_bool):
      score_d = score_d + 0.5
      if VERBOSE:
         print("PASS")
   elif VERBOSE:
         print("FAIL")

   total = score_a+score_b+score_c+score_d

   # # Load the JS file content
   # file_path_js = os.path.abspath(f"{pat}/q1.css")  # Replace with the correct path to the JS file

   # # Read the content of the JS file
   # with open(file_path_js, 'r') as file:
   #    js_source = file.read()

   # # Use regex to find the NAME
   # name_match = re.search(r'NAME:\s*(.*)', js_source, re.I)
   # name = name_match.group(1).strip() if name_match else 'Name not found'

   print(f"Submitted by: {nm}")
   # print()
   print(score_a, ",", score_b, ",", score_c, ",", score_d,",", total)

   out_file.write(f"{nm},{score_a},{score_b},{score_c},{score_d}\n")

out_file.close()