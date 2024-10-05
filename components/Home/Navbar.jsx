import Navbar from '@/components/Nav';

const AnimatedMenu = ({ isOpen, setIsOpen }) => {
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-end items-center h-10 w-10 fixed md:top-10 md:right-10 top-7 right-7 z-[54] font-supermolot italic">
        <button
          className={`menu focus:outline-none`}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label="Main Menu"
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className='md:w-16 md:h-16 w-12 h-12'>
            {/* Top Line */}
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              style={{
                strokeDasharray: isOpen ? '90 207' : '60 207',
                strokeDashoffset: isOpen ? '-134' : '0',
                transition: 'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                stroke: '#B29146',
                strokeWidth: '3',
                fill: 'none',
              }}
            />
            {/* Middle Line */}
            <path
              className="line line2"
              d="M 20,50 H 80"
              style={{
                strokeDasharray: isOpen ? '1 60' : '60 60',
                strokeDashoffset: isOpen ? '-30' : '0',
                transition: 'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                stroke: '#B29146',
                strokeWidth: '3',
                fill: 'none',
              }}
            />
            {/* Bottom Line */}
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              style={{
                strokeDasharray: isOpen ? '90 207' : '60 207',
                strokeDashoffset: isOpen ? '-134' : '0',
                transition: 'stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1)',
                stroke: '#B29146',
                strokeWidth: '3',
                fill: 'none',
              }}
            />
          </svg>
        </button>
      </div>

      {/* Navbar Sliding In */}
      <div className='relative'>
        <Navbar isOpen={isOpen} closeNavbar={() => setIsOpen(false)} navHandler={handleToggle} />
        {isOpen && (<img src="/icon/footer/company_logo_2.svg" className='w-60 h-60 object-cover top-0 fixed z-[53]' />)}
      </div>
    </>
  );
};

export default AnimatedMenu;
