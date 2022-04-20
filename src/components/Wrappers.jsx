export const WrapperContainerLarge = ({children}) => {
  return (
  <div className="container flex-row">
    {children}
    </div>);
};

export const WrapperContainerMiddle = ({ children }) => {
  return <div className="container-central">{children}</div>;
};

export const WrapperContainerSmall = ({ children }) => {
  return <div className="container-smaller">{children}</div>;
};



