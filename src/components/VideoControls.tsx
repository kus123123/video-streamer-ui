
import React, { useState } from 'react';
import { Play, Pause, Volume, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface VideoControlsProps {
  isPlaying: boolean;
  isMuted: boolean;
  isFullscreen: boolean;
  volume: number;
  currentTime: number;
  duration: number;
  onTogglePlay: () => void;
  onToggleMute: () => void;
  onVolumeChange: (volume: number) => void;
  onProgressChange: (time: number) => void;
  onToggleFullscreen: () => void;
}

export function VideoControls({
  isPlaying,
  isMuted,
  isFullscreen,
  volume,
  currentTime,
  duration,
  onTogglePlay,
  onToggleMute,
  onVolumeChange,
  onProgressChange,
  onToggleFullscreen,
}: VideoControlsProps) {
  const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;
  
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newTime = pos * duration;
    onProgressChange(newTime);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = e.currentTarget;
    const rect = volumeBar.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const newVolume = Math.max(0, Math.min(1, pos));
    onVolumeChange(newVolume);
  };

  return (
    <div className="video-controls">
      {/* Progress bar */}
      <div 
        className="video-progress"
        onClick={handleProgressClick}
      >
        <div 
          className="video-progress-filled"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="video-buttons">
        {/* Left side controls */}
        <div className="flex items-center">
          <button
            type="button"
            className="video-button"
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          <div 
            className="volume-container"
            onMouseEnter={() => setIsVolumeSliderVisible(true)}
            onMouseLeave={() => setIsVolumeSliderVisible(false)}
          >
            <button
              type="button"
              className="video-button"
              onClick={onToggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX size={20} />
              ) : volume < 0.5 ? (
                <Volume size={20} />
              ) : (
                <Volume2 size={20} />
              )}
            </button>
            
            {isVolumeSliderVisible && (
              <div 
                className="volume-slider"
                onClick={handleVolumeClick}
              >
                <div 
                  className="volume-filled"
                  style={{ width: `${volume * 100}%` }} 
                />
              </div>
            )}
          </div>
          
          <span className="video-time">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
        
        {/* Right side controls */}
        <div>
          <button
            type="button"
            className="video-button"
            onClick={onToggleFullscreen}
            aria-label={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
