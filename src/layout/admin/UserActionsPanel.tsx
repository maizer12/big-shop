import { Moon, SunIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import UserMenu from './UserMenu';
import UserNotification from './UserNotification';
import { useTheme } from 'next-themes';

function UserActionsPanel() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const switchTheme = () => {
		if (theme !== 'dark') return setTheme('dark');
		setTheme('light');
	};

	if (!mounted) return null;

	return (
		<div className='pr-12 flex items-center gap-7'>
			<button onClick={switchTheme}>{theme === 'dark' ? <SunIcon className='text-yellow-400 w-7 h-7' /> : <Moon className='text-blue-400 w-7 h-7' />}</button>
			<UserNotification />
			<UserMenu />
		</div>
	);
}

export default UserActionsPanel;
