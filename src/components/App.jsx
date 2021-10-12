import { Modal } from './common/Modal';
import { Header } from './Header';
import { Dashboard } from './Dashboard';
import '../css/styles.css'
import { LoginPage } from './LoginPage';
import { UserPage } from './UserPage';

 export function App() {
  return (
    <div>
      <Header/>
      <Modal/>
      <Dashboard/>
      <LoginPage/>
      <UserPage/>
    </div>
  );
  };
