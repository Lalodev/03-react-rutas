import {
  Route,
  Switch,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Topic = () => {
  let { topic } = useParams();

  return (
    <div>
      <h4>{topic}</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
        aspernatur in illum harum, laborum ea beatae inventore placeat dolorem
        minus nobis repellat et assumenda illo necessitatibus tenetur voluptate
        tempore possimus?
      </p>
    </div>
  );
};

const ReactTopics = () => {
  //let match = useRouteMatch();
  //console.log(match);
  //'path' nos permite construir rutas relativas <Route>, mientras que 'url' nos permite construir enlaces relativos <Link> o <NavLink>
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Temas de React</h2>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de React</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            voluptatem tenetur et dolores excepturi perspiciatis autem accusamus
            reiciendis, ad esse fugiat doloremque ut, vero iure. Placeat eum
            maxime magnam cumque.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
