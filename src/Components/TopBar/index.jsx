import AvtarMenu from '../ProfileDropdown';

const TopBar = (ß) => {
    return (
        <div className='flex justify-between items-center mx-12 py-2'>
            <div>logo</div>
            <div></div>
            <AvtarMenu />
        </div>
    );
};

export default TopBar;
