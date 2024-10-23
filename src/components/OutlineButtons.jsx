import Button from 'react-bootstrap/Button';

export function OutlineButtons({ description, onClick }) {
  return (
    <>
      <Button variant="outline-light" onClick={onClick}>{description}</Button>{' '}
    </>
  );
}