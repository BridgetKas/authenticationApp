import LayOut from './layOut';
import SignUp from './pages/signup'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import SignInPage from './pages/signIn';
import UserDashBoard from './components/useDashBoard';


const router = createBrowserRouter([
  {
    path:"/",
    element:<LayOut/>,
    errorElement:<h1>Operation failed</h1>,
    children: [
      {
        index: true,
        element:<SignUp/>,
      },
      {
        path:'logIn',
        element:<SignInPage/>
      },
    ]
  },{
    path:'/userdashboard',
    element:<UserDashBoard/>
  }
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App


