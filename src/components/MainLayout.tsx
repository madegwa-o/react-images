import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="flex-grow">
                            Smokies Hub
                        </Typography>
                        <nav>
                            <a href="#home" className="text-white mx-2">Home</a>
                            <a href="#about" className="text-white mx-2">About</a>
                            <a href="#contact" className="text-white mx-2">Contact</a>
                        </nav>
                    </Toolbar>
                </AppBar>
            </header>

            {/* Main Content */}
            <main className="flex-grow p-6 bg-gray-100">{children}</main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; {new Date().getFullYear()} Smokies Hub. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainLayout;