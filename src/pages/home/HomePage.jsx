import Header from '../../components/Header'
import './HomePage.css'
import HomePageBody from './HomePageBody';
function HomePage() {
  return (
    <div className='container'>
      <div className='sub-container'>
        <title>Home</title>
        <Header />
        <HomePageBody />
      </div>
    </div>
  );
}

export default HomePage