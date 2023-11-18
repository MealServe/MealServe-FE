import React, { memo } from 'react';

type BannerProps = {
  text: string;
  isAlert: boolean;
};

const Banner: React.FC<BannerProps> = memo(({ text, isAlert }) => (
  <>
    {text && (
      <p className={`banner ${isAlert ? 'banner-red' : 'banner-green'}`}>
        {text}
      </p>
    )}
  </>
));
export default Banner;
