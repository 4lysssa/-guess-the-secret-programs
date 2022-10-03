input.onButtonPressed(Button.A, function () {
    playernum += 1
    basic.showNumber(playernum)
})
input.onGesture(Gesture.TiltLeft, function () {
    if (playernum < num) {
        basic.showString("lower")
    } else if (playernum > num) {
        basic.showString("higher ")
    } else {
        basic.showString("true")
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    playernum += -1
    basic.showNumber(playernum)
})
let playernum = 0
let num = 0
num = randint(0, 20)
playernum = randint(0, 20)
basic.showNumber(num)
basic.forever(function () {
	
})
