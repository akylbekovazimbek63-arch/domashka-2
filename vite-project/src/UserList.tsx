import UserCard from './UserCard';

const UserList = () => {
  const users = [
    { id: 1, name: "Алексей", age: 28, city: "Москва", active: true, img: "https://via.placeholder.com/150" },
    { id: 2, name: "Мария", age: 24, city: "Санкт-Петербург", active: false, img: "https://via.placeholder.com/150" },
    { id: 3, name: "Иван", age: 30, city: "Новосибирск", active: true, img: "https://via.placeholder.com/150" },
    { id: 4, name: "Елена", age: 22, city: "Екатеринбург", active: false, img: "https://via.placeholder.com/150" },
    { id: 5, name: "Анна", age: 26, city: "Красноярск", active: true, img: "https://via.placeholder.com/150" },
    { id: 6, name: "Дмитрий", age: 35, city: "Самара", active: false, img: "https://via.placeholder.com/150" },
  ];

  const isDisabled = false;

  if (isDisabled) {
    return <h2>Список пользователей временно недоступен</h2>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;