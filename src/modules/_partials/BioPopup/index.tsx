import React from 'react';
import Drawer from '@mui/material/Drawer';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

const BioPopup = ({ firstName, lastName, desc, image, title }) => {
  const { pathname } = useRouter();
  const [toggle, setToggle] = React.useState(false);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggle(open);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setToggle(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className="flex items-center space-x-0.5 text-white"
      >
        <Image
          src="/assets/images/icons/certa.png"
          alt=""
          width={24}
          height={32}
        />
        <span className="text-sm">Read more</span>
      </button>
      <Drawer
        anchor="top"
        open={toggle}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiPaper-elevation': {
            maxWidth: '100%',
            minHeight: '100vh',
            marginX: 'auto',
            // top: '92px',
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <div className="min-h-screen overflow-y-auto bg-white flex py-3 px-4 md:p-8 flex-col items-center w-full">
          <div className="w-full md:max-w-6xl flex-flex-col">
            <button
              type="button"
              onKeyDown={handleKeyDown}
              onClick={toggleDrawer(false)}
              className="text-primary flex flex-col items-center ml-auto"
            >
              <CloseIcon fontSize="large" />
              <span className="text-sm text-primary">ESC</span>
            </button>

            <div className="w-full md:grid grid-cols-3 gap-x-10 flex-flex-col mt-4">
              <div className="group relative flex flex-col">
                <Image
                  src={image}
                  height="800px"
                  width={600}
                  className="h-64 object-cover"
                  alt=""
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <div className="flex flex-col pb-2 border-b border-primary">
                  <p className="text-xl md:text-2xl text-primary">
                    <span className="font-bold">{firstName}</span>{' '}
                    {lastName}
                  </p>
                  <p className="mt-1 text-primary text-sm">{title}</p>
                </div>
                <p className="mt-3 text-sm">{desc}</p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default BioPopup;
