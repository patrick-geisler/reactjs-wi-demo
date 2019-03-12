import React, { useState, useEffect } from "react";

const useClientStatus = clientID => {
  const [isOnline, setIsOnline] = useState(false);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  // useEffect(() => {
  //   Client.subscribeToClientStatus(clientID, handleStatusChange);
  //   return () => {
  //     Client.unsubscribeFromClientStatus(clientID, handleStatusChange);
  //   };
  // });

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
};

const ClientStatus = () => {
  const clientStatus = useClientStatus("1111");

  const clientStatusColor = () => {
    if (clientStatus === "Online") {
      return "Green";
    } else {
      return "Red";
    }
  };

  return (
    <div>
      {/* <StatusIcon fill={clientStatusColor(clientStatus)} /> */}
      <h1>Client Status:</h1>
      <br />

      {clientStatus}
    </div>
  );
};

export default ClientStatus;
