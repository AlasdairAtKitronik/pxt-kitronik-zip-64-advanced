#include "pxt.h"
#if 0
enum class ZIP64ButtonsCPP {
	    Up = MICROBIT_ID_IO_P8,
	    Down = MICROBIT_ID_IO_P14,
	    Left = MICROBIT_ID_IO_P12,
	    Right = MICROBIT_ID_IO_P13,
	    Fire1 = MICROBIT_ID_IO_P15,
	    Fire2 = MICROBIT_ID_IO_P16,
	};
#endif
/**
 * This is the :GAME ZIP64 Package
 */
//% color=#00A654 weight=100
namespace GAME_ZIP64 {

	#if 0
	/**
     * Draw an image on the ZIP64 LED display.
     * @param image
     * @param rgb RGB color of the LED
     */
    //% subcategory=Advanced_Display
    //% blockId="zip64_draw_gridCPP" block="%string|show ZIP LED image %image|with %rgb=zip_colors"
    //% weight=65
	
    void showZIPLEDs(ImageLiteral image, int rgb) {

    	for (let i = 0; i <= 63; i++) {
    		let led_state = image[i];
    		if (led_state == 1) {
    			this.setPixelColor(i, rgb);
    		}
    	}
    	this.show();
    }
    

    /**
     * Do something when one of the :GAME ZIP64 Buttons is pressed
     * @param button press to be checked, eg: Up
     * @param body code to run when event is raised
     */
    //% subcategory=Inputs
    //% blockId="button_press_on_eventCPP" block="on button |%NAME|press"
    //% weight=93 blockGap=8
    void onButtonPressCPP(int button, Action body) {
    	registerWithDal((int)button, MICROBIT_PIN_EVT_FALL, body);
    }
    #endif

	/**
     * Do something when one of the :GAME ZIP64 Buttons is pressed
     */
    //% subcategory=Inputs
    //% blockId="button_press_on_eventCPP" block="on button press"
    //% weight=93 blockGap=8
    int onButtonPressCPP() {
        return 5; 
    }

}