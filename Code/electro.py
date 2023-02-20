import time
import RPi.GPIO as GPIO #Importe la bibliothèque pour contrôler les GPIOs


def electro_aimant(a):
     
     GPIO.setmode(GPIO.BOARD) #Définit le mode de numérotation (Board)
     GPIO.setwarnings(False) #On désactive les messages d'alerte

     # a = input('donner etat')

     LED = 12 #Définit le numéro du port GPIO qui alimente la led

     GPIO.setup(LED, GPIO.OUT) #Active le contrôle du GPIO


     GPIO.input(LED) #Lit l'état actuel du GPIO, vrai si allumé, faux si éteint

     if int(a) == 0 :

          GPIO.output(LED, GPIO.LOW) #On l’éteint
          print('rrrrr')
     
     else : 
          GPIO.output(LED, GPIO.HIGH) #On l'allume
          print('hhhhh')
          
     
          
