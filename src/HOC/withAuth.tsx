/**
 *
 * This is a Higher Order Component which will manage user authentication and role
 *
 */

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    // you can change this to your localstorage value
    const accessToken = localStorage.getItem('user');
    if (!accessToken) {
      window.location.replace('/login');
      return null;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
