import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

LED = 17
LimitSwitch = 4
GPIO.setup(LimitSwitch, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(LED, GPIO.OUT)

while True:
    if GPIO.input(LimitSwitch) == 0:
        GPIO.output(LED, GPIO.HIGH)
        print("pressed")
        break
    else :
        GPIO.output(LED, GPIO.LOW)
        print("not pressed")
        
GPIO.cleanup()