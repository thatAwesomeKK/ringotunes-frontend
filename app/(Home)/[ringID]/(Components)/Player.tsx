"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoPause, IoPlay } from "react-icons/io5";

const hostname = process.env.NEXT_PUBLIC_BACKEND_URL;

interface Props {
  ringID: string;
}

const Player = ({ ringID }: Props) => {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  //Refrerences
  const audioPlayer = useRef<HTMLAudioElement>(null); //main audio tag
  const progressBar = useRef<HTMLInputElement>(null); //middle progress bar
  const animationRef = useRef<number>(NaN); //animationRef

  //getting the song Metadata
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current?.duration!);
    setDuration(seconds);
    if (progressBar.current?.max != undefined) {
      progressBar.current.max = seconds.toString();
    }
  }, [audioPlayer.current?.onloadedmetadata, audioPlayer.current?.readyState]);

  //Calculating time in right Format
  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes} : ${returnedSeconds}`;
  };

  //Function for Pausing and Playing the song
  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current?.pause();
      cancelAnimationFrame(animationRef.current!);
    }
  };

  //Slider Mover while Playing
  const whilePlaying = () => {
    if (progressBar.current?.value !== undefined) {
      progressBar.current.value = audioPlayer.current?.currentTime!?.toString();
    }
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  //Changing the Range by moving the slider
  const changeRange = () => {
    if (audioPlayer.current?.currentTime != undefined) {
      audioPlayer.current.currentTime = parseInt(progressBar.current?.value!);
    }
    changePlayerCurrentTime();
  };

  //Duplicate Function in one
  const changePlayerCurrentTime = () => {
    setCurrentTime(parseInt(progressBar.current?.value!));
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [ringID]);

  return (
    <div
      className={` flex bg-purple-400 gap-2 h-[4rem] 
    ${
      isPlaying
        ? "rounded-2xl w-fit justify-start items-center px-3"
        : "w-[4rem] rounded-full justify-center items-center"
    }`}
    >
      <audio
        ref={audioPlayer}
        src={`${hostname}/ring/stream?fileid=${ringID}`}
        preload="metadata"
      ></audio>
      <button
        onClick={togglePlayPause}
        className="text-2xl outline-none text-white"
      >
        {isPlaying ? (
          <IoPause className="h-6 w-6" />
        ) : (
          <IoPlay className="h-6 w-6" />
        )}
      </button>
      {isPlaying && (
        <div className="flex space-x-2 text-white">
          {/* current time */}
          <div>{calculateTime(currentTime)}</div>
          {/* progress bar */}
          <input
            aria-label="progress"
            type="range"
            defaultValue="0"
            className="outline-none"
            ref={progressBar}
            onChange={changeRange}
          />
          {/* duration */}
          <div>{duration && !isNaN(duration) && calculateTime(duration)}</div>
        </div>
      )}
    </div>
  );
};

export default Player;
