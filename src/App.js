import React from "react";
import FacebookLogin from "react-facebook-login";
import "./App.css";

function App() {
  function handleFacebookData() {
    const { api } = window.fbObj;
    api("/me/accounts", function(response) {
      response.data.map(({ access_token, id }) =>
        api(
          `/${id}/subscribed_apps?subscribed_fields=messages,message_echoes,messaging_policy_enforcement`,
          "post",
          { access_token },
          response => console.log(response)
        )
      );
    });
  }

  return (
    <FacebookLogin
      appId={window.appId}
      autoLoad={false}
      fields="name,email,picture"
      scope="manage_pages,pages_messaging"
      onClick={() => {}}
      callback={response => handleFacebookData(response)}
    />
  );
}

export default App;
