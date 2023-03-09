import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import App from '../App'
import Alunos from '../pages/Alunos';

export const Rotas = createBrowserRouter([
  {
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/alunos',
        element: <Alunos />
      }
    ]
  }
])