const Main = ({ activePage }) => {
  return (
    <main className="main">
      <div className="content">
        <div className={activePage}>
          <p></p>
        </div>
      </div>
    </main>
  );
};
export default Main;
