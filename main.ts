controller.A.onEvent(ControllerButtonEvent.Released, function () {
    deez.setVelocity(0, -100)
    pause(500)
    deez.setVelocity(0, 100)
    pause(500)
    deez.setVelocity(0, 0)
})
let deez: Sprite = null
deez = sprites.create(img`
    . . . . . . e e e e . . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . e e d d d d e e . . . . 
    . . . . d 2 1 d d 2 1 d . . . . 
    . . . . d 2 2 d d 2 2 d . . . . 
    . . . . d d d d d d d d . . . . 
    . . . . d d f f f f d d . . . . 
    . . . . d f 2 2 2 2 f d . . . . 
    . . . . d f 2 2 2 2 f d . . . . 
    . . . . e f f f f f f e . . . . 
    . . . . e e f f f f e e . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . e e e e e e . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
forever(function () {
    controller.moveSprite(deez, 100, 0)
})
