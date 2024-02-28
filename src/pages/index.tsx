import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import LandingHeader from 'modules/_partials/LandingHeader';
import LandingFooter from 'modules/_partials/LandingFooter';
import HomeSlides from 'modules/_partials/HomeSlides';
import { LinearProgress } from '@mui/material';

const Home: NextPage = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
      <Head>
        <title>CERTA LAW</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen items-start flex flex-col w-full">
        <div className="flex flex-col w-full relative">
          <LandingHeader />
          <div
            className={`flex flex-col w-full px-4 md:px-8 text-brand-yellow bottom-0 z-20 absolute`}
          >
            <LinearProgress
              variant="determinate"
              color="inherit"
              sx={{ backgroundColor: 'transparent', zIndex: '20' }}
              value={progress}
            />
          </div>
        </div>
        <HomeSlides />
      </div>
      <LandingFooter />
    </>
  );
};

export default Home;
