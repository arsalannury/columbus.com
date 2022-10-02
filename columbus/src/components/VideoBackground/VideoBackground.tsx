const VideoBackground = () => {
  return (
    <video className="video-background" muted loop autoPlay>
      <source src="planet.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoBackground;
