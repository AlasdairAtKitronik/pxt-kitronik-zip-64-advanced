/**
 * Well known colors for a ZIP strip
 */
enum ZipLedColors {
    //% block=red
    Red = 0xFF0000,
    //% block=orange
    Orange = 0xFFA500,
    //% block=yellow
    Yellow = 0xFFFF00,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}
/**
 * Kitronik blocks have the same colour settings
 */
//% weight=100 color=#00A654 icon="\uf11b"
namespace GAME_ZIP64 {
//This is the :GAME ZIP64 Package

	/**
	 * Different modes for RGB or RGB+W ZIP strips
	 */
	export enum ZipLedMode {
	    //% block="RGB (GRB format)"
	    RGB = 0,
	    //% block="RGB+W"
	    RGBW = 1,
	    //% block="RGB (RGB format)"
	    RGB_RGB = 2
	}

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
    *:GAME ZIP64 Button Pins
    */
    export enum ZIP64ButtonPins {
        //% block="Joypad Up (P8)"
        Up = <number>DAL.MICROBIT_ID_IO_P8,
        //% block="Joypad Down (P14)"
        Down = DAL.MICROBIT_ID_IO_P14,
        //% block="Joypad Left (P12)"
        Left = DAL.MICROBIT_ID_IO_P12,
        //% block="Joypad Right (P13)"
        Right = DAL.MICROBIT_ID_IO_P13,
        //% block="Fire 1 (P15)"
        Fire1 = DAL.MICROBIT_ID_IO_P15,
        //% block="Fire 2 (P16)"
        Fire2 = DAL.MICROBIT_ID_IO_P16
    }

    /**
    *:GAME ZIP64 Button Events
    */
    export enum ZIP64ButtonEvents {
        //% block="down"
        Down = DAL.MICROBIT_BUTTON_EVT_DOWN,
        //% block="up"
        Up = DAL.MICROBIT_BUTTON_EVT_UP,
        //% block="click"
        Click = DAL.MICROBIT_BUTTON_EVT_CLICK
    }

    /**
     *
     */
    //% shim=GAME_ZIP64::init
    function init(): void {
        return;
    }

    /**
     * Convert 8x8 xy Coordinates to LED Position
     * @param x describe value here, eg: 0
     * @param y describe value here, eg: 0
     */
    //% subcategory=Advanced_Display
    //% blockId=8x8_matrix_position block="Set ZIP LED Position x: %x|y: %y" icon="\uf080"
    //% weight=91 blockGap=8
    export function pixel_position(x: number, y: number): number {
        return x + (y * 8);
    }

    /**
     * Convert integer number to LED Position
     * @param xy describe value here, eg: 0
     */
    //% subcategory=Advanced_Display
    //% blockId=8x8_matrix_integer_position block="Set ZIP LED Position xy: %xy" icon="\uf080"
    //% weight=88 blockGap=8
    export function integer_position(xy: number): number {
        return (xy / 10) + ((xy % 10) * 8)
    }

    /**
     * Convert integer position number to x coordinate
     * @param xy describe value here, eg: 0
     */
    //% subcategory=Advanced_Display
    //% blockId=x_position_from_integer block="Get x position from %xy" icon="\uf080"
    //% weight=90 blockGap=8
    export function x_value(xy: number): number {
        return (xy / 10)
    }

    /**
     * Convert integer position number to y coordinate
     * @param xy describe value here, eg: 0
     */
    //% subcategory=Advanced_Display
    //% blockId=y_position_from_integer block="Get y position from %xy" icon="\uf080"
    //% weight=89 blockGap=8
    export function y_value(xy: number): number {
        return (xy % 10)
    }

    /**
     * Run vibration motor for a particular length of time
     * @param run_time is the length of time the motor will run in ms, eg: 100
     */
    //% subcategory=Feedback
    //% blockId="run_motor" block="Run motor for %run_time|ms" icon="\uf080"
    //% weight=92 blockGap=8
    export function runMotor(run_time: number): void {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(run_time)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }

    /**
     * Setup micro:bit to play music through buzzer
     */
    //% subcategory=Feedback
    //% blockId="buzzer_setup" block="set music to buzzer" icon="\uf080"
    //% weight=91 blockGap=8
    export function setBuzzerPin(): void {
        pins.analogSetPitchPin(AnalogPin.P2)
    }

    /**
     * Determines if a :GAME ZIP64 button is pressed
     * @param button press to be checked
     */
    //% subcategory=Inputs
    //% blockId="zip64_ispressed" block="button %button|is pressed"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=95 blockGap=8
    export function buttonIsPressed(button: ZIP64ButtonPins): boolean {
        const pin = <DigitalPin><number>button;
        pins.setPull(pin, PinPullMode.PullUp);
        return pins.digitalReadPin(pin) == 0;
    }

    /**
     * Input block for :GAME ZIP64 standard buttons
     * @param button press to be checked, eg: Up
     */
    //% subcategory=DO_NOT_USE
    //% blockId="check_button_press" block="button %button|is pressed" icon="\uf080"
    //% weight=94 blockGap=8
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

    /**
     * Do something when one of the :GAME ZIP64 Buttons is pressed
     * @param button press to be checked
     * @param event happening on the button, eg: click
     */
    //% subcategory=Inputs
    //% blockId="button_press_on_event" block="on button %button|press %event"
    //% button.fieldEditor="gridpicker" button.fieldOptions.columns=3
    //% weight=93 blockGap=8
    export function onButtonPress(button: ZIP64ButtonPins, event: ZIP64ButtonEvents, handler: Action) {
        init();
        control.onEvent(<number>button, <number>event, handler);
    }

    export class ZIP64Display {
    	buf: Buffer;
    	pin: DigitalPin;
    	brightness: number;
    	start: number;
    	_length: number;
    	_mode: ZipLedMode;
    	_matrixWidth: number;

    	/**
         * Shows whole ZIP64 display as a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% subcategory=Display
        //% blockId="zip64_display_set_strip_color" block="%display|show color %rgb=zip_colors" 
        //% weight=98 blockGap=8
        
        showColor(rgb: number) {
            this.setAllRGB(rgb);
            this.show();
        }

    	/**
         * Set LED to a given color (range 0-255 for r, g, b) in the 8 x 8 matrix 
         * You need to call ``show`` to make the changes visible.
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        //% subcategory=Display
        //% blockId="zip64_display_set_matrix_color" block="%string|set matrix color at x %x|y %y|to %rgb=zip_colors" 
        //% weight=99
        
        setMatrixColor(x: number, y: number, rgb: number) {
            const cols = this._length / this._matrixWidth;
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }

        /**
         * Send all the changes to the ZIP64 display.
         */
        //% subcategory=Display
        //% blockId="zip64_display_show" block="%display|show" blockGap=8
        //% weight=97
        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs on the ZIP64 display.
         * You need to call ``show`` to make the changes visible.
         */
        //% subcategory=Display
        //% blockId="zip64_display_clear" block="%display|clear"
        //% weight=96
        
        clear(): void {
            const stride = this._mode === ZipLedMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Set the brightness of the ZIP64 display. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% subcategory=Display
        //% blockId="zip64_display_set_brightness" block="%display|set brightness %brightness" blockGap=8
        //% weight=95
        
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Set the pin where the ZIP LED is connected, defaults to P0.
         */
        //% weight=10
        
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
    	}

        /**
         * Draw an image on the ZIP64 LED display.
         * @param image
         * @param rgb RGB color of the LED
         */
        //% subcategory=Display
        //% blockId="zip64_draw_gridCPP" block="%string|show ZIP LED image %image|with %rgb=zip_colors" blockgap=8
        //% weight=65

        showZIPLEDs(image: Array<string>, rgb: number) {
            for (let i = 0; i <= 7; i++) {
                for (let j = 0; j <= 7; j++) {
                    //let led_state = image[i][j];
                    let led_state = image[i].substr(j, 1);
                    if (led_state == '#') {
                        this.setMatrixColor(j, i, rgb);
                    }
                }
            }
            this.show();
        }

    	private setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset, rgb);
        }

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === ZipLedMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === ZipLedMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== ZipLedMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === ZipLedMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== ZipLedMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new ZIP LED driver for :GAME ZIP64 Display.
     */
    //% subcategory=Display
    //% blockId="zip64_display_create" block="ZIP64 LED display"
    //% weight=100 blockGap=8
    
    //% trackArgs=0,2
    export function createZIP64Display(): ZIP64Display {
        let display = new ZIP64Display();
        let stride = 0 === ZipLedMode.RGBW ? 4 : 3;
        display.buf = pins.createBuffer(64 * stride);
        display.start = 0;
        display._length = 64;
        display._mode = 0;
        display._matrixWidth = 8;
        display.setBrightness(255)
        display.setPin(DigitalPin.P0)
        return display;
    }

    export class Strip {
    	buf: Buffer;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: ZipLedMode;
        _matrixWidth: number; // number of leds in a matrix - if any

    	/**
         * Shows all LEDs to a given color (range 0-255 for r, g, b). 
         * @param rgb RGB color of the LED
         */
        //% subcategory=Advanced_Display
        //% blockId="zip_set_strip_color" block="%strip|show color %rgb=zip_colors" 
        //% weight=85 blockGap=8
        
        showColor(rgb: number) {
            this.setAllRGB(rgb);
            this.show();
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b). 
         * You need to call ``show`` to make the changes visible.
         * @param pixeloffset position of the ZIP LED in the strip
         * @param rgb RGB color of the LED
         */
        //% subcategory=Advanced_Display
        //% blockId="zip_set_pixel_color" block="%strip|set pixel color at %pixeloffset|to %rgb=zip_colors" 
        //% blockGap=8
        //% weight=86
        
        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB(pixeloffset, rgb);
        }

        /**
         * Sets the number of pixels in a matrix shaped strip
         * @param width number of pixels in a row
         */
        //% subcategory=Advanced_Display
        //% blockId=zip_set_matrix_width block="%strip|set matrix width %width"
        //% blockGap=8
        //% weight=84
        
        setMatrixWidth(width: number) {
            this._matrixWidth = Math.min(this._length, width);
        }

        /**
         * Set LED to a given color (range 0-255 for r, g, b) in a matrix shaped strip 
         * You need to call ``show`` to make the changes visible.
         * @param x horizontal position
         * @param y horizontal position
         * @param rgb RGB color of the LED
         */
        //% subcategory=Advanced_Display
        //% blockId="zip_set_matrix_color" block="%string|set matrix color at x %x|y %y|to %rgb=zip_colors" 
        //% weight=83
        
        setMatrixColor(x: number, y: number, rgb: number) {
            if (this._matrixWidth <= 0) return; // not a matrix, ignore
            const cols = this._length / this._matrixWidth;
            if (x < 0 || x >= this._matrixWidth || y < 0 || y >= cols) return;
            let i = x + y * this._matrixWidth;
            this.setPixelColor(i, rgb);
        }

        /**
         * Draw an image on the ZIP64 LED display.
         * @param image
         * @param rgb RGB color of the LED
         */
        //% subcategory=Advanced_Display
        //% blockId="zip64_draw_grid" block="%string|show ZIP LED image %image|with %rgb=zip_colors"
        //% weight=65

        showZIPLEDs(image: Array<number>, rgb: number) {

        	for (let i = 0; i <= 63; i++) {
        		let led_state = image[i];
        		if (led_state == 1) {
        			this.setPixelColor(i, rgb);
        		}
        	}
        	this.show();
        }

        /**
         * Send all the changes to the strip.
         */
        //% subcategory=Advanced_Display
        //% blockId="zip_show" block="%strip|show" blockGap=8
        //% weight=82
        show() {
            ws2812b.sendBuffer(this.buf, this.pin);
        }

        /**
         * Turn off all LEDs.
         * You need to call ``show`` to make the changes visible.
         */
        //% subcategory=Advanced_Display
        //% blockId="zip_clear" block="%strip|clear"
        //% weight=81
        
        clear(): void {
            const stride = this._mode === ZipLedMode.RGBW ? 4 : 3;
            this.buf.fill(0, this.start * stride, this._length * stride);
        }

        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% subcategory=Advanced_Display
        //% blockId="zip_set_brightness" block="%strip|set brightness %brightness" blockGap=8
        //% weight=80
        
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
        }

        /**
         * Set the pin where the ZIP LED is connected, defaults to P0.
         */
        //% weight=10
        
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
    	}

        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === ZipLedMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            const end = this.start + this._length;
            const stride = this._mode === ZipLedMode.RGBW ? 4 : 3;
            for (let i = this.start; i < end; ++i) {
                this.setBufferRGB(i * stride, red, green, blue)
            }
        }
        private setAllW(white: number) {
            if (this._mode !== ZipLedMode.RGBW)
                return;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            let end = this.start + this._length;
            for (let i = this.start; i < end; ++i) {
                let ledoffset = i * 4;
                buf[ledoffset + 3] = white;
            }
        }
        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            let stride = this._mode === ZipLedMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride;

            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            let br = this.brightness;
            if (br < 255) {
                red = (red * br) >> 8;
                green = (green * br) >> 8;
                blue = (blue * br) >> 8;
            }
            this.setBufferRGB(pixeloffset, red, green, blue)
        }
        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== ZipLedMode.RGBW)
                return;

            if (pixeloffset < 0
                || pixeloffset >= this._length)
                return;

            pixeloffset = (pixeloffset + this.start) * 4;

            let br = this.brightness;
            if (br < 255) {
                white = (white * br) >> 8;
            }
            let buf = this.buf;
            buf[pixeloffset + 3] = white;
        }
    }

    /**
     * Create a new ZIP LED driver for `numleds` LEDs.
     * @param numleds number of leds in the strip, eg: 64
     */
    //% subcategory=Advanced_Display
    //% blockId="zip_create" block="ZIP LED display with %numleds|leds"
    //% weight=87 blockGap=8
    
    //% trackArgs=0,2
    export function create(numleds: number): Strip {
        let strip = new Strip();
        let stride = 0 === ZipLedMode.RGBW ? 4 : 3;
        strip.buf = pins.createBuffer(numleds * stride);
        strip.start = 0;
        strip._length = numleds;
        strip._mode = 0;
        strip._matrixWidth = 0;
        strip.setBrightness(255)
        strip.setPin(DigitalPin.P0)
        return strip;
    }

    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% subcategory=Display
    //% weight=1
    //% blockId="zip_rgb" block="red %red|green %green|blue %blue"
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% subcategory=Display
    //% weight=2 blockGap=8
    //% blockId="zip_colors" block="%color"
    export function colors(color: ZipLedColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }
    function unpackR(rgb: number): number {
        let r = (rgb >> 16) & 0xFF;
        return r;
    }
    function unpackG(rgb: number): number {
        let g = (rgb >> 8) & 0xFF;
        return g;
    }
    function unpackB(rgb: number): number {
        let b = (rgb) & 0xFF;
        return b;
    }
} 