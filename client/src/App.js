import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './router/MainPage/MainPage';
import ProjectsPage from './router/ProjectsPage/ProjectsPage';
import ProjectPage from './router/ProjectPage/ProjectPage';
import EventsPage from './router/EventsPage/EventsPage';

import { withLayout } from './layout/Layout';
import { Provider } from './contexts/Context';
import { ImageProvider } from './contexts/ImageContext';
import { ProjectProvider } from './contexts/ProjectsContext';
import { EventProvider } from './contexts/EventsContext';

const RouteWrapper = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <BrowserRouter>
    <Provider>
      <ImageProvider>
        <ProjectProvider>
          <EventProvider>
            <Switch>
              <RouteWrapper
                path="/"
                component={MainPage}
                layout={withLayout}
                exact
              />
              <RouteWrapper
                path="/projects"
                component={ProjectsPage}
                layout={withLayout}
                exact
              />
              <RouteWrapper
                path="/project/:name"
                component={ProjectPage}
                layout={withLayout}
                exact
              />
              <RouteWrapper
                path="/calendar"
                component={EventsPage}
                layout={withLayout}
                exact
              />
            </Switch>
          </EventProvider>
        </ProjectProvider>
      </ImageProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
