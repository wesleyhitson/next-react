import LikeButton from './like-button';
 
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}
 
export default function HomePage() {
  const names = ['Ringo Starr', 'Paul McCartney', 'John Lennon', 'George Harrison'];
 
  return (
    <div>
      <Header title="The Bottles" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}