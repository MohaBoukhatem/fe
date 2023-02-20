from time import sleep
import RPi.GPIO as GPIO


STEP = 20  # Step GPIO Pin

def engine_rotation():

    # SPR=200.0  
    DEG= input("donnez le degres ")
    SPR=int(DEG)/1.8
    step_count = int(SPR)
    delay = .01
    
    for x in range(step_count):
        GPIO.output(STEP, GPIO.HIGH)
        sleep(delay)
        GPIO.output(STEP, GPIO.LOW)
        sleep(delay)

def moteur_func1() : 

    DIR = 21   # Direction GPIO Pin
    CW = 1     # Clockwise Rotation
    CCW = 0    # Counterclockwise Rotation

    # Steps per Revolution (360 / 7.5)

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(DIR, GPIO.OUT)
    GPIO.setup(STEP, GPIO.OUT)
    GPIO.output(DIR, CW)


    engine_rotation()

    # sleep(30)
    # # GPIO.output(DIR, CCW)

    # # engine_rotation()


    GPIO.cleanup()
    print('hello')