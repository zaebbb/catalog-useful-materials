import { classNames, type Mods } from '@lib/helpers/classNames'
import { generateKey } from '@lib/helpers/generateKey'
import { IconLib } from '@ui-kit/Icon'
import { Loader } from '@ui-kit/Loader'
import { ProgressBar } from '@ui-kit/ProgressBar'
import { HStack } from '@ui-kit/Stack'
import React, { memo } from 'react'
import { type OnProgressProps } from 'react-player/base'
import ReactPlayer from 'react-player/lazy'
import screenfull from 'screenfull'
import cls from './VideoComponent.module.scss'

interface VideoComponentProps {
  className?: string
  src: string
  width?: string
  height?: string
}

export const VideoComponent: React.FC<VideoComponentProps> = memo((props: VideoComponentProps) => {
  const {
    className,
    src,
    width = '640px',
    height = '360px',
  } = props

  const videoId = generateKey()

  const [playing, setPlaying] = React.useState<boolean>(false)
  const [progress, setProgress] = React.useState<number>(0)
  const [isChangeScrollbar, setIsChangeScrollbar] = React.useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = React.useState<boolean>(false)
  const [player, setPlayer] = React.useState<ReactPlayer>()
  const [volume, setVolume] = React.useState<number>(1)

  const mods: Mods = {
    [cls.playing]: playing,
    [cls.notPlaying]: !playing,
  }

  const playVideoHandler = React.useCallback(() => {
    setPlaying(true)
  }, [])

  const pauseVideoHandler = React.useCallback(() => {
    setPlaying(false)
  }, [])

  const volumeVideoEnable = React.useCallback(() => {
    setVolume(1)
  }, [])

  const volumeVideoDisable = React.useCallback(() => {
    setVolume(0)
  }, [])

  const onVideoOpenFullscreen = React.useCallback(() => {
    const element = document.getElementById(videoId)

    if (element) {
      void screenfull.request(element)
    }
  }, [videoId])

  const onVideoCloseFullscreen = React.useCallback(() => {
    const element = document.getElementById(videoId)

    if (element) {
      void screenfull.exit()
    }
  }, [videoId])

  const onChangeProgressbar = React.useCallback((progress: number) => {
    setProgress(progress)
    setIsChangeScrollbar(true)
  }, [])

  const refPlayer = React.useCallback((player: ReactPlayer) => {
    if (player) {
      setPlayer(player)
    }
  }, [])

  const onProgressHandler = React.useCallback((progressProps: OnProgressProps) => {
    const {
      played,
    } = progressProps

    setProgress(played)
  }, [])

  React.useEffect(() => {
    screenfull.on('change', () => {
      if (screenfull.isFullscreen) {
        setIsFullscreen(true)
      } else {
        setIsFullscreen(false)
      }
    })
  }, [])

  React.useEffect(() => {
    if (player && isChangeScrollbar) {
      player.seekTo(progress)
      setIsChangeScrollbar(false)
    }
  }, [isChangeScrollbar, player, progress])

  return (
    <div
      id={videoId}
      className={classNames(cls.VideoComponent, mods, [className])}
    >
      <ReactPlayer
        url={src}
        fallback={<Loader />}
        playing={playing}
        width={isFullscreen ? '100%' : width}
        height={isFullscreen ? '100%' : height}
        ref={refPlayer}
        onProgress={onProgressHandler}
        volume={volume}
      />

      <div className={cls.PlayerButton}>
        {!playing && (
          <IconLib
            Icon={'IconPlayFill'}
            size={'40'}
            clickable
            onClick={playVideoHandler}
            className={cls.PlayerIcon}
          />
        )}

        {playing && (
          <IconLib
            Icon={'IconPauseFill'}
            size={'40'}
            clickable
            onClick={pauseVideoHandler}
            className={cls.PlayerIcon}
          />
        )}
      </div>

      <HStack
        className={cls.ControlPanel}
        gap={16}
        align={'center'}
        isMax
      >
        <div className={cls.ControlPanelPlayerIcon}>
          {!playing && (
            <IconLib
              Icon={'IconPlayFill'}
              size={'20'}
              clickable
              onClick={playVideoHandler}
              className={cls.PlayerIcon}
            />
          )}

          {playing && (
            <IconLib
              Icon={'IconPauseFill'}
              size={'20'}
              clickable
              onClick={pauseVideoHandler}
              className={cls.PlayerIcon}
            />
          )}
        </div>

        <div className={cls.ControlPanelPlayerIcon}>
          {volume === 1 && (
            <IconLib
              Icon={'IconVolumeFill'}
              size={'20'}
              clickable
              onClick={volumeVideoDisable}
              className={cls.PlayerIcon}
            />
          )}

          {volume === 0 && (
            <IconLib
              Icon={'IconVolumeDisableFill'}
              size={'20'}
              clickable
              onClick={volumeVideoEnable}
              className={cls.PlayerIcon}
            />
          )}
        </div>

        <ProgressBar
          className={cls.Progressbar}
          value={progress}
          onChange={onChangeProgressbar}
        />

        <div className={cls.IconFullscreen}>
          {!isFullscreen && (
            <IconLib
              Icon={'IconScreenFull'}
              size={'20'}
              clickable
              onClick={onVideoOpenFullscreen}
              className={cls.PlayerIcon}
            />
          )}

          {isFullscreen && (
            <IconLib
              Icon={'IconScreenNormal'}
              size={'20'}
              clickable
              onClick={onVideoCloseFullscreen}
              className={cls.PlayerIcon}
            />
          )}
        </div>
      </HStack>
    </div>
  )
})
