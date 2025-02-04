/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace sprite_visibility {

    let bImage = scene.backgroundImage();

    let tmap = game.currentScene().tileMap;
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
        let spriteX = sprite.x;
        let spriteY = sprite.y;
        let tmap = game.currentScene().tileMap;
        let pixelXSize = tmap.areaWidth() / tmap.data.width;
        let pixelYSize = tmap.areaHeight() / tmap.data.height;
        let spriteRow = Math.floor(spriteY / pixelYSize);
        let spriteCol = Math.floor(spriteX / pixelXSize);
        // let bg = scene.backgroundImage();
        // console.log(bg.getPixel(spriteX, spriteY));
        // // console.log(spriteX);
        // // console.log(bg.getPixel(10,10));
        let w = screen.width;
        let h = screen.height;

        console.log(game.currentScene().tileMap.data.width);
        console.log(game.currentScene().tileMap.data.height);
        // for(let r = 0; r < h; r ++) {
        //     for(let c = 0; c < w; c++) {
        //         if(Math.sqrt(Math.pow(spriteX - c,2) + Math.pow(spriteY - r, 2)) > radius) {
        //             bg.setPixel(c, r, 0); //set it to black 
        //         } else {
        //             bg.setPixel(c, r, tmap.getPixel(c,r));
        //         }
        //     }
        // }
        for (let r = spriteRow - 4; r < spriteRow + 4; r++) {
            for (let c = spriteCol - 5; c < spriteCol + 5; c++) {
                if (Math.abs(r - spriteRow) > visibileTile || Math.abs(c - spriteCol) > visibileTile) {
                    tiles.setTileAt(tiles.getTileLocation(c, r), img`
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

                }
            }
        }
    }



    // note that Caml casing yields lower case
    // block text with spaces


}
