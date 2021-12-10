import time,pyautogui
pyautogui.FAILSAFE=False
while True:
    time.sleep(250)
    for i in range(0,100):
        pyautogui.moveTo(5,i *5)
    for i in range(0,3):
        pyautogui.press('shift')
