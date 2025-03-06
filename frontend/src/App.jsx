import AppLayout from './components/layout/AppLayout';
import { CreateContextProvider } from './context/crypto-context';

export default function App() {
  return (
    <CreateContextProvider>
      <AppLayout />
    </CreateContextProvider>

  );
}
