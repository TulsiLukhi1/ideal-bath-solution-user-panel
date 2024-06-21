import { categories } from '@/utills/constant';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useRef, useState } from 'react';

const CategoryBar = () => {
    const scrollContainerRef = useRef(null);
    const [showScrollButtons, setShowScrollButtons] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        // Check if scroll buttons are needed
        const checkOverflow = () => {
            if (scrollContainerRef.current) {
                const { scrollWidth, clientWidth } = scrollContainerRef.current;
                setShowScrollButtons(scrollWidth > clientWidth);
            }
        };

        checkOverflow();
        window.addEventListener('resize', checkOverflow);

        return () => {
            window.removeEventListener('resize', checkOverflow);
        };
    }, []);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth / 2;
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <Box
            sx={{
                position: 'sticky',
                top: isMobile ? '9.3rem' : '5.125rem',
                width: '100%',
                backgroundColor: 'white',
                boxShadow: 'none',
                borderBottom: '1px solid #ddd',
                height: isTabletOrBelow ? '2.8125rem' : '2.8125rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                overflow: 'hidden',
                transition: 'height 0.3s, top 0.3s',
            }}
        >
            {/* Left scroll button */}
            {showScrollButtons && (
                <IconButton
                    onClick={() => handleScroll('left')}
                    size="small"
                    sx={{
                        position: 'absolute',
                        left: 0,
                        zIndex: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                        padding: '0.3125rem',
                    }}
                >
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
            )}

            {/* Category links */}
            <Box
                ref={scrollContainerRef}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '90rem',
                    overflowX: 'auto',
                    paddingLeft: '0.125rem',
                    paddingRight: '0.125rem',
                    scrollBehavior: 'smooth',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                }}
            >
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        href={`/${category.toLowerCase().replace(/ /g, '-')}`}
                        underline="none"
                        sx={{
                            color: 'rgba(0, 0, 0, 0.6)',
                            fontWeight: 500,
                            padding: '0.5rem 1rem',
                            whiteSpace: 'nowrap',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            borderBottom: '0.25rem solid transparent',
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            fontSize: '1rem',
                            '&:hover': {
                                color: 'rgba(0, 0, 0, 0.8)',
                                borderBottomColor: theme.palette.primary.main,
                            },
                        }}
                    >
                        {category}
                    </Link>
                ))}
            </Box>

            {/* Right scroll button */}
            {showScrollButtons && (
                <IconButton
                    onClick={() => handleScroll('right')}
                    size="small"
                    sx={{
                        position: 'absolute',
                        right: 0,
                        zIndex: 1,
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 1)',
                        },
                        padding: '0.3125rem',
                    }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
            )}
        </Box>
    );
};

export default CategoryBar;
