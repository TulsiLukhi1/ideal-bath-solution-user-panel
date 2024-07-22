import TopBar from "@/Components/TopBar";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <div className="nav-shadow">
        <TopBar />
      </div>
      <div className="children-div">{children}</div>
    </div>
  );
};

export default MainLayout;
