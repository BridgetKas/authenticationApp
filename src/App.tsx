import LayOut from './layOut';
import SignUp from './pages/signup'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import SignInPage from './pages/signIn';


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
  },
])


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App


