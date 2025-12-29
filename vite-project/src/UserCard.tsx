interface User {
  name: string;
  age: number;
  city: string;
  active: boolean;
  img: string;
}

const UserCard = ({ user }: { user: User }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px', margin: '10px', width: '200px' }}>
      <img src={user.img} alt={user.name} style={{ width: '100%', borderRadius: '4px' }} />
      <h3>{user.name}</h3>
      <p>Возраст: {user.age}</p>
      <p>Город: {user.city}</p>
      <p style={{ color: user.active ? 'green' : 'red' }}>
        {user.active ? 'Активен' : 'Неактивен'}
      </p>
    </div>
  );
};

export default UserCard;