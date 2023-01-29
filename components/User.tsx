import { Fragment } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { IoIosLogOut, IoMdMoon } from 'react-icons/io';
import { MdWbSunny } from 'react-icons/md';
import useThemeStore from '../store/theme';
import themeToggler from '../utils/themeToggler';

export default function User() {
  const { data: user }: any = useSession();
  const { theme, setTheme } = useThemeStore();

  return (
    <Menu as='div' className='relative inline-block w-11 xs:w-12 h-11 xs:h-12'>
      <div className='flex items-center'>
        <Menu.Button className='inline-flex w-full justify-center items-center rounded-md'>
          <Image
            src={user?.image}
            width={100}
            height={100}
            alt='user_img'
            priority
            className='w-full h-full rounded-full p-[4px] duration-200 hover:bg-gray-200'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1'>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => themeToggler(setTheme)}
                  className={`${
                    active && 'bg-gray-200'
                  } text-gray-800 group flex justify-between w-full items-center rounded-md px-2 py-2`}
                >
                  <p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
                  {theme === 'dark' ? (
                    <MdWbSunny size={20} />
                  ) : (
                    <IoMdMoon size={20} />
                  )}
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active && 'bg-gray-200'
                  } text-gray-800 group flex justify-between w-full items-center rounded-md px-2 py-2`}
                  onClick={() => signOut()}
                >
                  <p>Log out</p>
                  <IoIosLogOut size={20} />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
