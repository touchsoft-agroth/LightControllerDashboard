from phue import Bridge
from rgbxy import Converter
import os
from dotenv import load_dotenv

load_dotenv()
BRIDGE_IP = os.getenv('BRIDGE_IP')

bridge = Bridge(BRIDGE_IP)

bridge.connect()

def toggle_power(is_on: bool):
    bridge.set_light(1, 'on', is_on)

def set_color_rgb(r, g, b):
    xy = Converter().rgb_to_xy(r, g, b)
    bridge.set_light(1, 'xy', xy)