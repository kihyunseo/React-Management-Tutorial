import './App.css';
import Customer from './components/Customer.js';

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: '901212',
    gender: '남자',
    job: '도적',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '서기현',
    birthday: '950113',
    gender: '남자',
    job: '대학생',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '박은비',
    birthday: '911121',
    gender: '여자',
    job: '퍼블리셔',
  },
];

function App() {
  return (
    <>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </>
  );
}

export default App;
