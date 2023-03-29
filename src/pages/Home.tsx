import { Image } from 'react-bootstrap';
import image from '../assets/background.webp';

export function Home() {
  return <Image fluid rounded src={image} />;
}
