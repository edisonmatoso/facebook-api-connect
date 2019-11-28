import React from "react";
import FacebookLogin from "react-facebook-login";
import "./App.css";

function App() {
  function handleFacebookData() {
    window.parent.handleFacebookData(window.fbObj.getAccessToken());
  }

  return (
    <FacebookLogin
      appId={window.parent.appId || window.appId}
      autoLoad={false}
      fields="name,email,picture"
      scope="manage_pages,pages_messaging"
      onClick={() => {}}
      callback={response => handleFacebookData(response)}
      size="medium"
      icon="fa-facebook"
    />
  );
}

export default App;
