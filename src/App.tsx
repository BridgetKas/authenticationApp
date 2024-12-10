import LayOut from './layOut';
import SignUp from './pages/signup'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import SignInPage from './pages/signIn';
import UserDashBoard from './pages/useDashBoard';


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
    element:<UserDashBoard/>,
    errorElement:<h1>Try again</h1>
  }, 
  
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App


