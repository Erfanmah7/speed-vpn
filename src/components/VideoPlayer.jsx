import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [duration, setDuration] = useState(0);
  const [played, setPlayed] = useState(0);
  const [loop, setLoop] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false); // وضعیت نمایان بودن اسلایدر

  let timeoutId = useRef(null); // ایجاد یک ریف برای ذخیره تایمر

  const togglePlay = () => {
    setPlaying(!playing);
  };

  const handleProgress = (progress) => {
    setPlayed(progress.played);
  };

  const handleDuration = (duration) => {
    setDuration(duration);
  };

  const handleSeek = (e) => {
    const newTime = duration * (e.target.value / 100);
    playerRef.current.seekTo(newTime);
  };

  //ده ثانیه به عقب
  // const rewind = () => {
  //     playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10);
  // };
  //ده ثانیه به جلو
  // const forward = () => {
  //     playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
  // };

  const toggleFullscreen = () => {
    if (playerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        playerRef.current.wrapper.requestFullscreen();
      }
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleEnded = () => {
    if (loop) {
      playerRef.current.seekTo(0);
      setPlaying(true);
    }
  };

  const handleReplay = () => {
    playerRef.current.seekTo(0);
    setPlaying(true);
  };

  const toggleVolumeSlider = () => {
    setShowVolumeSlider((prev) => !prev); // تغییر وضعیت با کلیک

    // اگر قبلاً تایمر وجود داشت، آن را پاک کنیم
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    // تنظیم تایمر برای مخفی کردن اسلایدر پس از 3 ثانیه
    timeoutId.current = setTimeout(() => {
      setShowVolumeSlider(false);
    }, 3000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* صفحه ویدئو */}
      <div className="rounded-2xl overflow-hidden flex justify-center items-center bg-white shadow-lg">
        <ReactPlayer
          ref={playerRef}
          url="../fewf.mp4"
          playing={playing}
          onProgress={handleProgress}
          onDuration={handleDuration}
          onEnded={handleEnded}
          volume={volume}
          playbackRate={playbackRate}
          width="100%"
          height="auto"
        />
      </div>

      {/* بک کنترلرها*/}
      <div className="absolute rounded-bl-2xl rounded-br-2xl -bottom-6 py-2 left-0 right-0 bg-stone-600 bg-opacity-50 px-5 backdrop-blur-md backdrop-brightness-150">
        <div className="flex justify-between items-center w-full px-5">
          {/* عقب جلو ویدئو */}
          {/* <button 
                    onClick={rewind} 
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-200 mx-2">
                    Rewind 10 Sec
                </button>
                <button 
                    onClick={forward} 
                    className="bg-green-500 text-white p-2 rounded hover:bg-green-700 transition duration-200">
                    Forward 10 Sec
                </button> */}

          {/* تایم ویدئو */}
          <div className="mx-2 text-white">
            {formatTime(
              playerRef.current ? playerRef.current.getCurrentTime() : 0
            )}
            / {formatTime(duration)}
          </div>

          {/* ولوم صدا */}
          <div className="relative mx-2 flex items-center">
            <div className="bg-gray-400 p-1 rounded-full">
              <svg
                className=" text-white h-9 w-9 p-1 rounded hover:text-white/45 transition duration-200"
                onClick={toggleVolumeSlider}
              >
                <use href="#sound"></use>
              </svg>
            </div>

            {showVolumeSlider && (
              <input
                type="range"
                className="absolute left-[37px] duration-200 transition-all bottom-[170px] transform rotate-90" // چرخش اسلایدر به صورت عمودی
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                style={{ transformOrigin: "left center" }} // تغییر محل چرخش
              />
            )}
          </div>

          {/* پلی و پاوز ویدئو */}
          <button
            onClick={togglePlay}
            className="bg-white text-black p-6 w-24 h-24  flex justify-center items-center hover:bg-gray-300 transition duration-200 rounded-full"
          >
            {playing ? (
              <svg className=" text-black h-80 w-80 rounded hover:text-black/45 transition duration-200">
                <use href="#pause"></use>
              </svg>
            ) : (
              <svg className=" text-black h-80 w-80 rounded hover:text-black/45 transition duration-200">
                <use href="#play"></use>
              </svg>
            )}
          </button>

          {/* ریپلی ویدئو */}
          <div className="bg-gray-400 p-1 rounded-full">
            <svg
              className=" text-white h-9 w-9 p-1 hover:text-white/45 transition duration-200 rotate-180"
              onClick={handleReplay}
            >
              <use href="#replay"></use>
            </svg>
          </div>
          {/* نوار پیشرفت */}
          {/* <input
          type="range"
          className="flex-grow mx-2"
          min="0"
          max="100"
          value={played * 100}
          onChange={handleSeek}
        /> */}

          {/* کنترل سرعت */}
          {/* <select
          className="mx-2"
          value={playbackRate}
          onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
        >
          <option value={0.5}>0.5x</option>
          <option value={1}>1x</option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
        </select> */}

          {/* لوپ */}
          {/* <button
          onClick={() => setLoop(!loop)}
          className={`bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700 transition duration-200 ${
            loop ? "bg-yellow-700" : ""
          }`}
        >
          {loop ? "Loop On" : "Loop Off"}
        </button> */}

          {/* فول اسکرین */}
          <svg
            className="text-white w-9 h-9 rounded hover:text-white/45 transition duration-200"
            onClick={toggleFullscreen}
          >
            <use href="#full-screen"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
