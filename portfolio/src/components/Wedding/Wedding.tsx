import Image from 'next/image';
import { portrait } from '/images/portrait.png';

export const Wedding: React.FC = () => {
  return (
    <Image
      src={portrait}
      width={500}
      height={500}
      alt="Portrait of the bride and groom"
    />
  );
};
