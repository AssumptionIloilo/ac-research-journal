import { FC, useState } from 'react';
import Image from 'next/image';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';

import { Icons } from '@/components/Icons';
import { container } from '@/styles/variants';

type HeroProps = {};

/**
 * This is the old Hero.tsx
 */
export const Hero: FC<HeroProps> = (props) => {
  const [typedWord, setTypedWord] = useState<'Mariale' | 'Transformateur'>(
    'Mariale',
  );

  const [typewriter, { isDelay, isDelete }] = useTypewriter({
    words: ['Mariale', 'Transformateur'],
    delaySpeed: 5000,
    loop: true,
    onDelay() {
      setTypedWord(typewriter as typeof typedWord);
    },
  });

  return (
    <div className="relative h-screen flex flex-col gap-y-6 item-center justify-center bg-[#E6E6FA] pt-12">
      <div className={container({ class: 'flex flex-col gap-y-2' })}>
        <p className="text-primary-500 text-center text-sm text-opacity-40">
          Home to <b>Mariale</b> and <b>Transformateur</b>
        </p>
        <p className="text-dark-800 text-center leading-[42px] text-[28px] font-[300] z-10 px-5 md:text-[48px] md:leading-[64px] overflow-hidden">
          Welcome to{' '}
          <span className="font-bold text-primary-600">{typewriter}!</span>
        </p>
        <p className="text-center">
          <span>The official </span>

          <span className="text-secondary-500 font-medium">
            {typedWord === 'Mariale' ? (
              <Typewriter
                words={['student publication', '']}
                cursor
                delaySpeed={3500} // Arbitrary
                typeSpeed={50} // Arbitrary
                deleteSpeed={30} // Arbitrary
              />
            ) : null}
            {typedWord === 'Transformateur' ? (
              <Typewriter
                words={['research journal', '']}
                cursor
                delaySpeed={4000} // Arbitrary
                typeSpeed={50} // Arbitrary
                deleteSpeed={50} // Arbitrary
              />
            ) : null}
          </span>
          <span>of Assumption Iloilo</span>

          <br />
        </p>

        <Image
          src="/logo.png"
          alt="Logo"
          height={100}
          width={100}
          className="mx-auto mb-14"
        />
      </div>

      <Icons.star1 className="absolute z-0 top-20 right-10 w-[75px] md:top-36 md:right-28 md:w-[120px]" />
      <Icons.star2 className="absolute z-0 w-[75px] bottom-44 right-44 hidden md:block" />
      <Icons.star3 className="absolute bottom-20 left-8 z-0 w-[56px] md:w-[100px] md:bottom-40 md:left-40" />
      <div className="absolute top-32 right-10 w-[95px] h-[95px] rounded-full bg-[#040593] opacity-75 blur-3xl z-0 md:w-[460px] md:h-[460px] md:blur-[150px] md:top-6 md:opacity-50" />
      <div className="absolute bottom-32 left-4 w-[155px] h-[155px] rounded-full bg-[#B99608] opacity-75 blur-3xl z-0 md:w-[360px] md:h-[360px] md:blur-[120px] md:bottom-10 md:opacity-50" />
    </div>
  );
};
