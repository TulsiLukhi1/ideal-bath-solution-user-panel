import { Search } from '@mui/icons-material';
import { AppBar, Avatar, Box, Button, IconButton, InputBase, Toolbar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Logo from '../Logo';

const TopBar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTabletOrBelow = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'white',
                zIndex: 1100,
                boxShadow: 'none',
                borderBottom: '1px solid #ddd',
                padding: { xs: '0 1rem', sm: '0 2rem', md: '0 3rem' }
            }}
        >
            <Toolbar sx={{ flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'center' : 'space-between' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobile ? 'space-between' : 'flex-start',
                    marginTop: isTabletOrBelow ? '1rem' : '0'
                }}>
                    <Logo />
                    {isMobile && (
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: '0.75rem',
                                    color: theme.palette.primary.main,
                                    borderColor: theme.palette.primary.main,
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    '&:hover': {
                                        backgroundColor: `${theme.palette.primary.main}33`,
                                        borderColor: theme.palette.primary.main,
                                        color: theme.palette.primary.main
                                    },
                                    marginRight: '1rem',
                                    marginLeft: '1rem'
                                }}
                            >
                                Enquiries
                            </Button>
                            <Avatar sx={{ bgcolor: theme.palette.primary.main, width: '2.1875rem', height: '2.1875rem', fontSize: '1rem' }}>T</Avatar>
                        </Box>
                    )}
                </Box>

                <Box sx={{
                    width: '100%',
                    mx: 'auto',
                    marginTop: '1.25rem',
                    marginBottom: '1.25rem',
                    marginRight: "1rem"
                }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            backgroundColor: 'white',
                            border: '1px solid #babcbf',
                            borderRadius: '0.75rem',
                            maxWidth: { xs: '100%', md: '67.5rem' },
                        }}
                    >
                        <InputBase
                            placeholder="What product are you looking for today?"
                            sx={{
                                ml: '0.625rem',
                                flex: 1,
                                fontSize: '0.95rem',
                                '&::placeholder': {
                                    fontSize: '0.95rem',
                                },
                                '& input::placeholder': {
                                    fontSize: '0.95rem',
                                },
                                '& input': {
                                    fontSize: '0.95rem',
                                },
                            }}
                        />
                        <IconButton
                            sx={{
                                bgcolor: 'black',
                                color: 'white',
                                padding: '0.5rem',
                                '&:hover': {
                                    bgcolor: 'black',
                                },
                                borderRadius: '0 0.75rem 0.75rem 0',
                            }}
                        >
                            <Search />
                        </IconButton>
                    </Box>
                </Box>

                {!isMobile && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Button
                            variant="outlined"
                            sx={{
                                borderRadius: '0.75rem',
                                color: theme.palette.primary.main,
                                borderColor: theme.palette.primary.main,
                                textTransform: 'none',
                                fontSize: '1rem',
                                '&:hover': {
                                    backgroundColor: `${theme.palette.primary.main}33`,
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main
                                },
                                marginRight: '1rem',
                                marginLeft: '1rem'
                            }}
                        >
                            Enquiries
                        </Button>
                        <Avatar sx={{ bgcolor: theme.palette.primary.main, width: '2.1875rem', height: '2.1875rem', fontSize: '1rem' }}>T</Avatar>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
