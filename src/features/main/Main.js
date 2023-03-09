const Main = ({ activePage }) => {
  return (
    <main className={`main ${activePage}`}>
      <div className={activePage}></div>
    </main>
  );
};
export default Main;
