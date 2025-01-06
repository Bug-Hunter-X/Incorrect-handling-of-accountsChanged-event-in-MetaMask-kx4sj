function checkIfWalletIsConnected() {
  const { ethereum } = window;

  if (!ethereum) {
    console.log('Make sure you have metamask!');
    return;
  }
  else {
    console.log('Wallet is connected!');
  }

  // This is an error, this should be:
  // ethereum.on('accountsChanged', (accounts) => {
  //   if (accounts.length === 0) {
  //     console.log('Wallet is not connected!');
  //   }
  // });
  ethereum.on('accountsChanged', accounts => {
    console.log('Accounts changed', accounts);
  });
}