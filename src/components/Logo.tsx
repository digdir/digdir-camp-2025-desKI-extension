import {logoLight} from '../assets';

export function Logo() {
  return (
    <img
      src={logoLight}
      alt="desKI logo"
      className=" w-48 md:w-64 lg:w-72"
    />
  );
}