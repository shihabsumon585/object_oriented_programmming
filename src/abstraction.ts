

// oop --> abstraction

// আগে idea pabo pore implementation korbo

/**
 * 1. interface
 * 2. abstract class 
 */

// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// class MusicPlayer implements MediaPlayer {
//     play(){
//         console.log("music starts.....")
//     }
//     pause(){
//         console.log("music pause......")
//     }
//     stop(){
//         console.log("music stop.......")
//     }
// }

// const controlMusic = new MusicPlayer();
// controlMusic.pause();


abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
    play(): void {
        console.log('playing music');
    }
    pause(): void {
        console.log("music is pause......");
    }
    stop(): void {
        console.log("music stopped")
    }
}
const controlPlayer = new MusicPlayer();
controlPlayer.play();