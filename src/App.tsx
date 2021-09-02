import { useState, createContext } from 'react'
import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './Routes/mainRoutes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IUser from './Interfaces/IUser'
export const context = createContext<{users:IUser[],setUsers:Function}>({users:[],setUsers:()=>{}})
function App() {
  const [users, setUsers] = useState<IUser[]>([{
    fullName: "آرش دامن افشان",
    phoneNumber: "۰۹۳۶۶۱۸۳۴۸۳",
    age: "32",
    email: "Arashdma@gmail.com",
    date: new Date()
  } 
  ])
  return (
    <Suspense fallback="<div>loading...</div>">
      <div className="w-100 h-100">
        <Router>
          <Switch>
            <context.Provider value={{ users, setUsers }}>
              {
                routes.map((item, index) => {
                  return (
                    <Route
                      key={index}
                      path={item.path} exact={item.exact}
                      render={props => <item.Component {...props} />} />
                  )
                })
              }
            </context.Provider>
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
