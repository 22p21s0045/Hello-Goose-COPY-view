import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import NavItems from './NavItems';

type NavbarProps = {
  isLogoVisible?: boolean;
} & HTMLAttributes<HTMLElement>;

const NavBar = ({ isLogoVisible = false, ...props }: NavbarProps) => {
  return (
    <nav
      className={twMerge(
        props.className,
        isLogoVisible ? 'py-12' : 'py-0',
        'fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-between px-8 sm:h-12 md:h-16',
        'transition-all duration-300 ease-in-out',
      )}
      {...props}
    >
      <div className='flex h-full items-center justify-start space-x-[70px]'>
        <a href='/'>
          {!isLogoVisible && (
            <button
              className='left-10 h-[4.5rem] w-56 origin-top-left rounded-b-3xl bg-white opacity-100 shadow-md hover:-translate-y-1 sm:rounded-b-xl md:left-5 md:h-16 md:w-44 md:rounded-b-2xl 2xl:scale-125'
              style={{
                backgroundImage: "url('/images/sit-kmutt-logo.webp')",
                backgroundSize: 'contain',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
          {isLogoVisible && (
            <button
              className='left-10 h-20 w-72 origin-top-left opacity-100 hover:-translate-y-1 sm:h-12 sm:w-44 md:left-5 md:h-16 md:w-56 2xl:scale-125'
              style={{
                backgroundImage: "url('/images/logo.webp')",
                backgroundSize: '60%',
                backgroundPosition: 'left center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          )}
        </a>
      </div>

      <NavItems />
    </nav>
  );
};

export default NavBar;
