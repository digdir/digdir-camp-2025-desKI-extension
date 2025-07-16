import { logoLight, logoDark } from '../assets';

export function Logo() {
  return (
    <img
      src={logoLight}
      alt="desKI logo"
      className="mb-10 w-48 md:w-64 lg:w-72"
    />
  );
}