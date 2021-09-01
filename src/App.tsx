import { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './Routes/mainRoutes'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Suspense fallback="<div>loading...</div>">
      <div className="w-100 h-100">
        <Router>
            <Switch>
              {
                routes.map((item,index)=>{
                  return(
                    <Route
                    key={index} 
                    path={item.path} exact={item.exact} 
                    render={props=> <item.Component {...props} />} />
                  )
                })
              }
            </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
