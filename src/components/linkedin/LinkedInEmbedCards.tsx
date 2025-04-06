import React from 'react';

type LinkedInEmbedCardsProps = {
  postLink: string;
};

const LinkedInEmbedCards: React.FC<LinkedInEmbedCardsProps> = ({
  postLink
}) => {
  const embedUrl = `https://www.linkedin.com/embed/feed/update/${postLink}`;
  const externalUrl = `https://www.linkedin.com/feed/update/${postLink}`;

  return (
    <div className="embla__slide">
      <div className="slide_number_main mx-auto flex w-[504px] h-full flex-col relative">
        <a
          href={externalUrl}
          className="h-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <iframe
            src={embedUrl}
            height="100%"
            width="100%"
            frameBorder="0"
            allowFullScreen={true}
            title="Embedded LinkedIn Post"
            className="border rounded-lg"
          ></iframe>
        </a>
        {/* "Read More" button */}
      </div>
    </div>
  );
};

export default LinkedInEmbedCards;
