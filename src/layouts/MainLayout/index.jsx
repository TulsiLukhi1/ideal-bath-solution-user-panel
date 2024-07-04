import TopBar from '@/Components/TopBar';

const MainLayout = ({ children }) => {

  return (
    <>
      <div className='nav-shadow'>
        <TopBar />
      </div>
      {children}
    </>
  );
};

export default MainLayout;
