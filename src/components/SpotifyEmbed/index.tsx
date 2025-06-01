import React from "react";

interface SpotifyEmbedProps {
  embedUrl: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const SpotifyEmbed: React.FC<SpotifyEmbedProps> = ({
                                                     embedUrl,
                                                     width = "100%",
                                                     height = "352",
                                                     borderRadius = "12px",
                                                   }) => {
  return (
    <iframe
      style={{ borderRadius }}
      src={embedUrl}
      width={width}
      height={height}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
};

export default SpotifyEmbed;