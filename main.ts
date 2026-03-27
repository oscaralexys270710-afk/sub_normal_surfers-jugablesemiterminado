enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Flower = SpriteKind.create()
    export const Carro_rojo = SpriteKind.create()
    export const Carro_verde = SpriteKind.create()
    export const Carro_3 = SpriteKind.create()
    export const Carro_naranja = SpriteKind.create()
    export const Carro_rosa = SpriteKind.create()
    export const Muerto = SpriteKind.create()
    export const Fantasma = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Carro_rojo, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`nivel2`)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 1 1 4 4 1 1 f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e e f f e e e f . . . 
        . . e 4 f 2 f 2 2 f 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Muerto)
    Carro_Rojo = sprites.create(img`
        . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 2 9 9 9 9 9 9 9 8 2 f 
        . 2 2 2 2 2 2 2 2 2 2 . 
        `, SpriteKind.Muerto)
    Muerto = sprites.create(img`
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f f f c f f . . 
        . . f f f f f f f f f c f f f . 
        . f 6 7 7 f 4 4 e e f f c f f . 
        . f 6 7 7 e 4 4 e e e f f c f f 
        f f 6 7 7 e 4 1 1 f f f f f f f 
        f f f e e e 4 1 1 f f c f f f f 
        f f e 4 4 e e e f f f c c f f f 
        . f e 4 4 e f 4 e f f f f f f f 
        . . f e e f f e e f c f f f f . 
        . . . . . . f f f f c c f f f . 
        . . . . . . . . f f f f f . . . 
        `, SpriteKind.Muerto)
    fantasmaa = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Fantasma)
    tiles.placeOnTile(Muerto, tiles.getTileLocation(7, 9))
    tiles.placeOnTile(fantasmaa, tiles.getTileLocation(7, 8))
    tiles.placeOnRandomTile(Muerto, assets.tile`Aparecer_Jugador`)
    tiles.placeOnRandomTile(Carro_Rojo, assets.tile`miMosaico0`)
    tiles.placeOnRandomTile(Jugador, assets.tile`miMosaico`)
    animation.runMovementAnimation(
    fantasmaa,
    animation.animationPresets(animation.waveRight),
    5000,
    false
    )
    animation.setAction(fantasmaa, ActionKind.Walking)
    game.showLongText("Moriste atropellado", DialogLayout.Bottom)
    scene.cameraFollowSprite(Muerto)
    pause(3000)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Carro_rojo, assets.tile`Regreador_Flores`, function (sprite, location) {
    tiles.placeOnRandomTile(Carro_Rojo, assets.tile`Aparicion_Flores`)
    tiles.placeOnRandomTile(Carro_Rosa, assets.tile`Aparicion_Flores`)
    tiles.placeOnRandomTile(Carro_Verde, assets.tile`Aparicion_Flores`)
    tiles.placeOnRandomTile(Carro_Naranja, assets.tile`Aparicion_Flores`)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Carro_rosa, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`nivel2`)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 1 1 4 4 1 1 f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e e f f e e e f . . . 
        . . e 4 f 2 f 2 2 f 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Muerto)
    Carro_Rojo = sprites.create(img`
        . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 2 9 9 9 9 9 9 9 8 2 f 
        . 2 2 2 2 2 2 2 2 2 2 . 
        `, SpriteKind.Muerto)
    Muerto = sprites.create(img`
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f f f c f f . . 
        . . f f f f f f f f f c f f f . 
        . f 6 7 7 f 4 4 e e f f c f f . 
        . f 6 7 7 e 4 4 e e e f f c f f 
        f f 6 7 7 e 4 1 1 f f f f f f f 
        f f f e e e 4 1 1 f f c f f f f 
        f f e 4 4 e e e f f f c c f f f 
        . f e 4 4 e f 4 e f f f f f f f 
        . . f e e f f e e f c f f f f . 
        . . . . . . f f f f c c f f f . 
        . . . . . . . . f f f f f . . . 
        `, SpriteKind.Muerto)
    fantasmaa = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Fantasma)
    tiles.placeOnTile(Muerto, tiles.getTileLocation(7, 9))
    tiles.placeOnTile(fantasmaa, tiles.getTileLocation(7, 8))
    tiles.placeOnRandomTile(Muerto, assets.tile`Aparecer_Jugador`)
    tiles.placeOnRandomTile(Carro_Rojo, assets.tile`miMosaico0`)
    tiles.placeOnRandomTile(Jugador, assets.tile`miMosaico`)
    animation.runMovementAnimation(
    fantasmaa,
    animation.animationPresets(animation.waveRight),
    5000,
    false
    )
    animation.setAction(fantasmaa, ActionKind.Walking)
    game.showLongText("Moriste atropellado", DialogLayout.Bottom)
    scene.cameraFollowSprite(Muerto)
    pause(3000)
    game.gameOver(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    grid.move(Jugador, 1, 0)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    grid.move(Jugador, -1, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Carro_naranja, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`nivel2`)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 1 1 4 4 1 1 f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e e f f e e e f . . . 
        . . e 4 f 2 f 2 2 f 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Muerto)
    Carro_Rojo = sprites.create(img`
        . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 2 9 9 9 9 9 9 9 8 2 f 
        . 2 2 2 2 2 2 2 2 2 2 . 
        `, SpriteKind.Muerto)
    Muerto = sprites.create(img`
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f f f c f f . . 
        . . f f f f f f f f f c f f f . 
        . f 6 7 7 f 4 4 e e f f c f f . 
        . f 6 7 7 e 4 4 e e e f f c f f 
        f f 6 7 7 e 4 1 1 f f f f f f f 
        f f f e e e 4 1 1 f f c f f f f 
        f f e 4 4 e e e f f f c c f f f 
        . f e 4 4 e f 4 e f f f f f f f 
        . . f e e f f e e f c f f f f . 
        . . . . . . f f f f c c f f f . 
        . . . . . . . . f f f f f . . . 
        `, SpriteKind.Muerto)
    fantasmaa = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Fantasma)
    tiles.placeOnTile(Muerto, tiles.getTileLocation(7, 9))
    tiles.placeOnTile(fantasmaa, tiles.getTileLocation(7, 8))
    tiles.placeOnRandomTile(Muerto, assets.tile`Aparecer_Jugador`)
    tiles.placeOnRandomTile(Carro_Rojo, assets.tile`miMosaico0`)
    tiles.placeOnRandomTile(Jugador, assets.tile`miMosaico`)
    animation.runMovementAnimation(
    fantasmaa,
    animation.animationPresets(animation.waveRight),
    5000,
    false
    )
    animation.setAction(fantasmaa, ActionKind.Walking)
    game.showLongText("Moriste atropellado", DialogLayout.Bottom)
    scene.cameraFollowSprite(Muerto)
    pause(3000)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Pared_Derecha`, function (sprite, location) {
    grid.place(Jugador, tiles.getTileLocation(7, 17))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Pared_Izquierda0`, function (sprite, location) {
    grid.place(Jugador, tiles.getTileLocation(3, 17))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Carro_verde, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    scene.setBackgroundColor(7)
    tiles.setCurrentTilemap(tilemap`nivel2`)
    Jugador = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 1 1 4 4 1 1 f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e e f f e e e f . . . 
        . . e 4 f 2 f 2 2 f 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Muerto)
    Carro_Rojo = sprites.create(img`
        . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 . 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        f 2 2 2 2 2 2 2 2 2 2 f 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 9 9 9 9 9 9 9 9 9 8 f 
        f 2 9 9 9 9 9 9 9 8 2 f 
        . 2 2 2 2 2 2 2 2 2 2 . 
        `, SpriteKind.Muerto)
    Muerto = sprites.create(img`
        . . . . . . . . . . f f . . . . 
        . . . . . . . . . f f f . . . . 
        . . . . . . . . f f f c f f . . 
        . . f f f f f f f f f c f f f . 
        . f 6 7 7 f 4 4 e e f f c f f . 
        . f 6 7 7 e 4 4 e e e f f c f f 
        f f 6 7 7 e 4 1 1 f f f f f f f 
        f f f e e e 4 1 1 f f c f f f f 
        f f e 4 4 e e e f f f c c f f f 
        . f e 4 4 e f 4 e f f f f f f f 
        . . f e e f f e e f c f f f f . 
        . . . . . . f f f f c c f f f . 
        . . . . . . . . f f f f f . . . 
        `, SpriteKind.Muerto)
    fantasmaa = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Fantasma)
    tiles.placeOnTile(Muerto, tiles.getTileLocation(7, 9))
    tiles.placeOnTile(fantasmaa, tiles.getTileLocation(7, 8))
    tiles.placeOnRandomTile(Muerto, assets.tile`Aparecer_Jugador`)
    tiles.placeOnRandomTile(Carro_Rojo, assets.tile`miMosaico0`)
    tiles.placeOnRandomTile(Jugador, assets.tile`miMosaico`)
    animation.runMovementAnimation(
    fantasmaa,
    animation.animationPresets(animation.waveRight),
    5000,
    false
    )
    animation.setAction(fantasmaa, ActionKind.Walking)
    game.showLongText("Moriste atropellado", DialogLayout.Bottom)
    scene.cameraFollowSprite(Muerto)
    pause(3000)
    game.gameOver(false)
})
let fantasmaa: Sprite = null
let Muerto: Sprite = null
let Carro_Naranja: Sprite = null
let Carro_Rosa: Sprite = null
let Carro_Verde: Sprite = null
let Carro_Rojo: Sprite = null
let Jugador: Sprite = null
scene.setBackgroundColor(7)
Jugador = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f c c c c f f . . . 
    . f f c c c c c c f f . . 
    f f c c c c c c c c f f . 
    f f c c f c c c c c c f . 
    f f f f f c c c f c c f . 
    f f f f c c c f c c f f . 
    f f f f f f f f f f f f . 
    f f f f f f f f f f f f . 
    . f f f f f f f f f f . . 
    . f f f f f f f f f f . . 
    f e f f f f f f f f e f . 
    e 4 f 7 7 7 7 7 7 c 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Jugador)
animation.runImageAnimation(
Jugador,
[img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . f f f . . . . . 
    . . . . f c c c f . . . . 
    . . . f f c c c c f . . . 
    . . f f c f c c c c f . . 
    . . f f f f c c f c f . . 
    . . f f f c c f c f f . . 
    . . f f f f f f f f f . . 
    . . . f f f f f f f . . . 
    . . . f f f f f f f . . . 
    . . e 4 f 7 7 7 7 4 e . . 
    . . e e f 6 6 6 6 e e . . 
    . . . . . f f f f . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . f f . . . . . 
    . . . . f f c c f . . . . 
    . . f f c c c c c f . . . 
    . . f c c c c c c c . . . 
    . . . f f f c c f c . . . 
    . . . f f f f f f f . . . 
    . . . f f f f f f f . . . 
    . . . . f f f f f f . . . 
    . . . . f f f f f e . . . 
    . . . . c 7 7 7 e 4 . . . 
    . . . . f f f f f e . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    . . . . . f f f . . . . . 
    . . . . f c c c f . . . . 
    . . f f c c c c c f . . . 
    . f f f c c c c c c . . . 
    . f f c c f c c c c . . . 
    . . f f f c f f f f . . . 
    . . . f f f f f f f . . . 
    . . . f f f f f f f . . . 
    . . f e f f f f f e . . . 
    . . e 4 e 7 7 7 c 4 . . . 
    . . . e f f f f f e . . . 
    . . . . . . . . . . . . . 
    . . . . . . . . . . . . . 
    `],
200,
true
)
tiles.setCurrentTilemap(tilemap`nivel0`)
scene.cameraFollowSprite(Jugador)
tiles.placeOnRandomTile(Jugador, assets.tile`Aparecer_Jugador`)
pause(1)
game.showLongText("Sobrevive la mayor cantidad de tiempo esquivando carros", DialogLayout.Bottom)
Carro_Rojo = sprites.create(img`
    . . . . . . . . . . . . 
    . 2 2 2 2 2 2 2 2 2 2 . 
    f 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 f 
    f 2 2 2 2 2 2 2 2 2 2 f 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 2 9 9 9 9 9 9 9 8 2 f 
    . 2 2 2 2 2 2 2 2 2 2 . 
    `, SpriteKind.Carro_rojo)
Carro_Verde = sprites.create(img`
    . . . . . . . . . . . . 
    . 7 7 7 7 7 7 7 7 7 7 . 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 
    f 7 7 7 7 7 7 7 7 7 7 f 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 7 9 9 9 9 9 9 9 8 7 f 
    . 7 7 7 7 7 7 7 7 7 7 . 
    `, SpriteKind.Carro_verde)
Carro_Rosa = sprites.create(img`
    . . . . . . . . . . . . 
    . 3 3 3 3 3 3 3 3 3 3 . 
    f 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 f 
    f 3 3 3 3 3 3 3 3 3 3 f 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 3 9 9 9 9 9 9 9 8 3 f 
    . 3 3 3 3 3 3 3 3 3 3 . 
    `, SpriteKind.Carro_rosa)
Carro_Naranja = sprites.create(img`
    . . . . . . . . . . . . 
    . 4 4 4 4 4 4 4 4 4 4 . 
    f 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 f 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 9 9 9 9 9 9 9 9 9 8 f 
    f 4 9 9 9 9 9 9 9 8 4 f 
    . 4 4 4 4 4 4 4 4 4 4 . 
    `, SpriteKind.Carro_naranja)
Carro_Rojo.setVelocity(0, 65)
Carro_Rosa.setVelocity(0, 65)
Carro_Verde.setVelocity(0, 65)
Carro_Naranja.setVelocity(0, 65)
tiles.placeOnRandomTile(Carro_Rojo, assets.tile`Aparicion_Flores`)
tiles.placeOnRandomTile(Carro_Rosa, assets.tile`Aparicion_Flores`)
tiles.placeOnRandomTile(Carro_Verde, assets.tile`Aparicion_Flores`)
tiles.placeOnRandomTile(Carro_Naranja, assets.tile`Aparicion_Flores`)
info.changeScoreBy(1)
