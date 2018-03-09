//Test file for the pxt-kitronik-zip-64 package
//Sets up a :GAME ZIP64 display with 64 ZIP LEDs in an 8x8 grid at a brightness of 25
//Controls the screen lighting up with the direction buttons on the :GAME ZIP64
//Controls the buzzer and vibration motor with the Fire buttons
let screen: GAME_ZIP64.ZIP64Display = null
pins.analogSetPitchPin(AnalogPin.P2)
screen = GAME_ZIP64.createZIP64Display()
screen.setBrightness(25)
basic.forever(() => {
    if (GAME_ZIP64.checkButtonPress(GAME_ZIP64.ZIP64Buttons.Up)) {
        screen.clear()
        screen.setMatrixColor(3, 0, GAME_ZIP64.colors(ZipLedColors.White))
        screen.setMatrixColor(4, 0, GAME_ZIP64.colors(ZipLedColors.White))
        screen.show()
    } else if (GAME_ZIP64.checkButtonPress(GAME_ZIP64.ZIP64Buttons.Down)) {
        screen.clear()
        screen.setMatrixColor(3, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        screen.setMatrixColor(4, 7, GAME_ZIP64.colors(ZipLedColors.Green))
        screen.show()
    } else if (GAME_ZIP64.checkButtonPress(GAME_ZIP64.ZIP64Buttons.Left)) {
        screen.clear()
        screen.setMatrixColor(0, 3, GAME_ZIP64.colors(ZipLedColors.Blue))
        screen.setMatrixColor(0, 4, GAME_ZIP64.colors(ZipLedColors.Blue))
        screen.show()
    } else if (GAME_ZIP64.checkButtonPress(GAME_ZIP64.ZIP64Buttons.Right)) {
        screen.clear()
        screen.setMatrixColor(7, 3, GAME_ZIP64.colors(ZipLedColors.Red))
        screen.setMatrixColor(7, 4, GAME_ZIP64.colors(ZipLedColors.Red))
        screen.show()
    } else if (GAME_ZIP64.checkButtonPress(GAME_ZIP64.ZIP64Buttons.Fire1)) {
        screen.clear()
        music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else if (GAME_ZIP64.checkButtonPress(GAME_ZIP64.ZIP64Buttons.Fire2)) {
        screen.clear()
        GAME_ZIP64.runMotor(500)
    }
})
