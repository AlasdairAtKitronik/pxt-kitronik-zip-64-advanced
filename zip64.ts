/**
*:GAME ZIP64 Standard Buttons
*/
enum ZIP64Buttons {
    //% block=Up
    Up = DigitalPin.P8,
    //% block=Down
    Down = DigitalPin.P14,
    //% block=Left
    Left = DigitalPin.P12,
    //% block=Right
    Right = DigitalPin.P13,
    //% block=Fire1
    Fire1 = DigitalPin.P15,
    //% block=Fire2
    Fire2 = DigitalPin.P16
}

namespace kitronik {
//This is going to become the new :GAME ZIP64 Package!
	
    /**
     * Functions to operate the :GAME ZIP64 ZIP LEDs
     */
    //% weight=100 color=#0fbc11 icon=""

        /**
         * Convert 8x8 xy Coordinates to LED Position
         * @param x describe value here, eg: 0
         * @param y describe value here, eg: 0
         */
        //% subcategory=GAME_ZIP64
        //% blockId=8x8_matrix_position block="Set ZIP LED Position x: %x|y: %y" icon="\uf080"
        export function pixel_position(x: number, y: number): number {
            return x + (y * 8);
        }

        /**
         * Convert integer number to LED Position
         * @param xy describe value here, eg: 0
         */
        //% subcategory=GAME_ZIP64
        //% blockId=8x8_matrix_integer_position block="Set ZIP LED Position xy: %xy" icon="\uf080"
        export function integer_position(xy: number): number {
            return (xy / 10) + ((xy % 10) * 8)
        }

        /**
         * Convert integer position number to x coordinate
         * @param xy describe value here, eg: 0
         */
        //% subcategory=GAME_ZIP64
        //% blockId=x_position_from_integer block="Get x position from %xy" icon="\uf080"
        export function x_value(xy: number): number {
            return (xy / 10)
        }

        /**
         * Convert integer position number to y coordinate
         * @param xy describe value here, eg: 0
         */
        //% subcategory=GAME_ZIP64
        //% blockId=y_position_from_integer block="Get y position from %xy" icon="\uf080"
        export function y_value(xy: number): number {
            return (xy % 10)
        }

        /**
         * Run vibration motor for a particular length of time
         * @param run_time is the length of time the motor will run in ms, eg: 100
         */
        //% subcategory=GAME_ZIP64
        //% blockId="custom_run_motor" block="Run motor for %run_time|ms" icon="\uf080"
        export function run_motor(run_time: number): void {
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(run_time)
            pins.digitalWritePin(DigitalPin.P1, 0)
        }

        /**
         * Input block for :GAME ZIP64 standard buttons
         * @param button press to be checked, eg: Up
         */
        //% subcategory=GAME_ZIP64
        //% blockId="check_button_press" block="button %button|is pressed" icon="\uf080"
        export function checkButtonPress(button: ZIP64Buttons): boolean {
            if (pins.digitalReadPin(button) == 0) {
                return true;
            } else {
                return false;
            }
        }
} 