// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`0b001c000000000909090909000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000405050505050300000000040101010101030000000004010101010103000000000401010101010300000000040101010101030000000004010101010103000000000401010101010300000000040101010101030000000007010101010108000000000701010201010800000000070101010101080000000007010101010108000000000401010101010800000000040101010101030000000004010101010103000000000401010101010300000000040101010101030000000004010101010103000000000401010101010300000000040606060606030000`, img`
...........
...........
...........
...........
...........
...........
...........
...........
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
22.......22
22.......22
22.......22
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
`, [myTiles.transparency16,sprites.vehicle.roadVertical,myTiles.tile1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,myTiles.tile5,myTiles.tile6,myTiles.tile2,myTiles.tile3,sprites.castle.tileGrass1], TileScale.Sixteen);
            case "nivel0":
            case "nivel3":return tiles.createTilemap(hex`0b001c000000000909090909000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000405050505050300000000040101010101030000000004010101010103000000000401010101010300000000040101010101030000000004010101010103000000000401010101010300000000040101010101030000000007010101010108000000000701010201010800000000070101010101080000000007010101010108000000000401010101010800000000040101010101030000000004060606060606000000000401010101010300000000040101010101030000000004010101010103000000000401010101010300000000040606060606030000`, img`
...........
...........
...........
...........
...........
...........
...........
...........
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
22.......22
22.......22
22.......22
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
222.....222
`, [myTiles.transparency16,sprites.vehicle.roadVertical,myTiles.tile1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,myTiles.tile5,myTiles.tile6,myTiles.tile2,myTiles.tile3,sprites.castle.tileGrass1], TileScale.Sixteen);
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`1000100000000000030101010101020000000000000000000301010101010200000000000000000003010101010102000000000000000000030101010101020000000000000000000301010101010200000000000000000003010601010102000000000000000000030101010101020000000000000000000301010501010200000000000000000003010101010102000000000000000000030101040101020000000000000000000301010101010200000000000000000003010101010102000000000000000000030101010101020000000000000000000301010101010200000000000000000003010101010102000000000000000000030101010101020000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadVertical,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,myTiles.tile1,myTiles.tile4,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "Aparicion_Flores":
            case "tile5":return tile5;
            case "Regreador_Flores":
            case "tile6":return tile6;
            case "Pared_Izquierda0":
            case "tile2":return tile2;
            case "Pared_Derecha":
            case "tile3":return tile3;
            case "miMosaico":
            case "tile4":return tile4;
            case "Aparecer_Jugador":
            case "tile1":return tile1;
            case "miMosaico0":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
