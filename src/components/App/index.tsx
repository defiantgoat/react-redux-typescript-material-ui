import React from 'react';
import useStyles from './use-styles';

const App: React.FC = () =>  {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      App here
    </div>
  );
};

export default App;
