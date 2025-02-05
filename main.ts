namespace sprite_visibility {

    let bImage = scene.backgroundImage();

    let tmap = game.currentScene().tileMap;
    let tmapd: tiles.TileMapData;
    let currentTileSet: Image[];
    //% block
    export function setBackgroundImage(bg: any) {
        bImage = bg;
    }

    //% block
    export function coverAroundSpriteBackgroundImage(sprite: Sprite, radius: number) {
        let spriteX = sprite.x;
        let spriteY = sprite.y;
        let bg = scene.backgroundImage();
        // console.log(bg.getPixel(spriteX, spriteY));
        // // console.log(spriteX);
        // // console.log(bg.getPixel(10,10));
        let w = bg.width;
        let h = bg.height;
        for (let r = 0; r < h; r++) {
            for (let c = 0; c < w; c++) {
                if (Math.sqrt(Math.pow(spriteX - c, 2) + Math.pow(spriteY - r, 2)) > radius) {
                    bg.setPixel(c, r, 0); //set it to black 
                } else {
                    bg.setPixel(c, r, bImage.getPixel(c, r));
                }
            }
        }

    }
    // 10 tiles per row (10 cols)
    // 8 tiles per col (8 rows)
    // max y and x are 240
    // we know in 
    //% block
    export function coverAroundSpriteTileMap(sprite: Sprite, visibileTile: number) {
        let spriteX2 = sprite.x;
        let spriteY2 = sprite.y;
        let tmap2 = game.currentScene().tileMap;
        let pixelXSize = tmap2.areaWidth() / tmap2.data.width;
        let pixelYSize = tmap2.areaHeight() / tmap2.data.height;
        let spriteRow = Math.floor(spriteY2 / pixelYSize);
        let spriteCol = Math.floor(spriteX2 / pixelXSize);
        let a = screen.width;
        let i = screen.height;
        for (let s = spriteRow - 4; s < spriteRow + 5; s++) {
            for (let d = spriteCol - 5; d < spriteCol + 6; d++) {
                if (Math.abs(s - spriteRow) > visibileTile || Math.abs(d - spriteCol) > visibileTile) {
                    tiles.setTileAt(tiles.getTileLocation(d, s), img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`);
                } else {
                    tiles.setTileAt(tiles.getTileLocation(d, s), currentTileSet[tmapd.getTile(d, s)]);
                }
            }
        }
    }

    //% block
    export function setTileMap(tm: tiles.TileMapData) {
        // tmap = tm;
        // tmap = tm;
        tmapd = tm;
        currentTileSet = tm.getTileset();
    }

    // note that Caml casing yields lower case
    // block text with spaces


}
