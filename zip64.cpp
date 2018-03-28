#include "pxt.h"
using namespace pxt;

/**
 * This is the :GAME ZIP64 Package
 */
//% color=#00A654 weight=100
namespace GAME_ZIP64 {

    bool initialized = false;
    int i, j;
    int led_state;

    //%
    void init() {
        if (initialized) return;
        //This function sets all the buttons on the :GAME ZIP64 to actually appear as buttons on the micro:bit
        #define ALLOC_PIN_BUTTON(id) new MicroBitButton(getPin(id)->name, id, MICROBIT_BUTTON_ALL_EVENTS, PullUp);
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P8)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P12)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P13)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P14)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P15)
            ALLOC_PIN_BUTTON(MICROBIT_ID_IO_P16)
        #undef ALLOC_PIN_BUTTON

        initialized = true;
    }

    /**
     * Test CPP defined block
     */
    //% subcategory=DO_NOT_USE
    //% blockId="CPP_est_block" block="this is a test CPP block"
    //% weight=93 blockGap=8
    int CPPDefineTest() {
        return 0; 
    }
    #if 0
    //%
    void showZIPLEDImage(ImageLiteral image, int rgb) {

        for (let i = 0; i <= 7; i++) {
            for (let j = 0; j <= 7; j++) {
                let led_state = image[i][j];
                if (led_state == 1) {
                    this.setMatrixColor(j, i, rgb);
                }
            }
        }
        this.show();
    }
    #endif
}