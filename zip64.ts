namespace kitronik {
//This is going to become the new :GAME ZIP64 Package!

/**
*:GAME ZIP64 Standard Buttons
*/
export enum ZIP64Buttons {
    Up,
    Down,
    Left,
    Right,
    Fire1,
    Fire2
}
	
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
            switch (button) {
            	case ZIP64Buttons.Up:
	            	if (pins.digitalReadPin(DigitalPin.P8) == 0) {
	            		return true;
	            	} else {
	            		return false;
	            	}
	            	break;
            	case ZIP64Buttons.Down:
	            	if (pins.digitalReadPin(DigitalPin.P14) == 0) {
	            		return true;
	            	} else {
	            		return false;
	            	}
	            	break;
            	case ZIP64Buttons.Left:
	            	if (pins.digitalReadPin(DigitalPin.P12) == 0) {
	            		return true;
	            	} else {
	            		return false;
	            	}
	            	break;
            	case ZIP64Buttons.Right:
	            	if (pins.digitalReadPin(DigitalPin.P13) == 0) {
	            		return true;
	            	} else {
	            		return false;
	            	}
	            	break;
            	case ZIP64Buttons.Fire1:
	            	if (pins.digitalReadPin(DigitalPin.P15) == 0) {
	            		return true;
	            	} else {
	            		return false;
	            	}
	            	break;
            	case ZIP64Buttons.Fire2:
	            	if (pins.digitalReadPin(DigitalPin.P16) == 0) {
	            		return true;
	            	} else {
	            		return false;
	            	}
	            	break;
            	default:
            		return false;
            }
        }
} 