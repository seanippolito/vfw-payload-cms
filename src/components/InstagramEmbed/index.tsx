import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  permalink: string; // Instagram permalink URL
  width?: string; // Optional width of the embed block
  maxWidth?: string; // Optional max-width
  style?: React.CSSProperties; // for passing custom styles
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({
                                                         permalink,
                                                         width = '100%',
                                                         maxWidth = '540px',
                                                         style = {},
                                                       }) => {
  useEffect(() => {
    // Load the Instagram embed script when this component is mounted
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js'; // Instagram's embed script
    script.async = true;
    script.defer = true;
    document.body.appendChild(script); // Append script to the document body

    // Optionally clean up the script if needed when unmounting
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: '0',
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0, 0, 0, 0.5), 0 1px 10px 0 rgba(0, 0, 0, 0.15)',
        margin: '1px',
        maxWidth,
        minWidth: '326px',
        padding: '0',
        width,
        ...style, // Merge user-provided styles with default styles
      }}
    >
      <div style={{ padding: '16px' }}>
        <a
          href={permalink}
          style={{
            background: '#FFFFFF',
            lineHeight: 0,
            padding: '0 0',
            textAlign: 'center',
            textDecoration: 'none',
            width: '100%',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div
              style={{
                backgroundColor: '#F4F4F4',
                borderRadius: '50%',
                flexGrow: 0,
                height: '40px',
                marginRight: '14px',
                width: '40px',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  marginBottom: '6px',
                  width: '100px',
                }}
              />
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '4px',
                  flexGrow: 0,
                  height: '14px',
                  width: '60px',
                }}
              />
            </div>
          </div>
          <div style={{ padding: '19% 0' }} />
          <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 60 60"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="https://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                  <g>
                    <path d="...svg content truncated for clarity..." />
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ paddingTop: '8px' }}>
            <div
              style={{
                color: '#3897f0',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 550,
                lineHeight: '18px',
              }}
            >
              View this profile on Instagram
            </div>
          </div>
          <div style={{ padding: '12.5% 0' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginBottom: '14px',
              alignItems: 'center',
            }}
          >
            {/* Placeholder graphics content */}
            <div>
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  height: '12.5px',
                  width: '12.5px',
                  transform: 'translateX(0px) translateY(7px)',
                }}
              />
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  height: '12.5px',
                  transform:
                    'rotate(-45deg) translateX(3px) translateY(1px)',
                  width: '12.5px',
                  flexGrow: 0,
                  marginRight: '14px',
                  marginLeft: '2px',
                }}
              />
              <div
                style={{
                  backgroundColor: '#F4F4F4',
                  borderRadius: '50%',
                  height: '12.5px',
                  width: '12.5px',
                  transform: 'translateX(9px) translateY(-18px)',
                }}
              />
            </div>
          </div>
        </a>
        <p
          style={{
            color: '#c9c8cd',
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            marginBottom: 0,
            marginTop: '8px',
            overflow: 'hidden',
            padding: '8px 0 7px',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {/* Dynamic username */}
          <a
            href={permalink}
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial, sans-serif',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 'normal',
              lineHeight: '17px',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Profile Name
          </a>
        </p>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;