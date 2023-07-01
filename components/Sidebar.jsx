import Link from 'next/link';
import React, { useState } from 'react';
import { RxDashboard, RxPlus, RxChevronUp, RxChevronDown } from 'react-icons/rx';

const Sidebar = ({ children }) => {
  const [isDashboardOpen, setDashboardOpen] = useState(false);
  const [isApplicationOpen, setApplicationOpen] = useState(false);
  const [isElementsOpen, setElementsOpen] = useState(false);
  const [isFormsOpen, setFormsOpen] = useState(false);
  const [isPluginsOpen, setPluginsOpen] = useState(false);
  const [isDatagridOpen, setDatagridOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const toggleDashboard = () => {
    setDashboardOpen(!isDashboardOpen);
  };

  const toggleApplication = () => {
    setApplicationOpen(!isApplicationOpen);
  };

  const toggleElements = () => {
    setElementsOpen(!isElementsOpen);
  };

  const toggleForms = () => {
    setFormsOpen(!isFormsOpen);
  };

  const togglePlugins = () => {
    setPluginsOpen(!isPluginsOpen);
  };

  const toggleDatagrid = () => {
    setDatagridOpen(!isDatagridOpen);
  };

  const toggleSettings = () => {
    setSettingsOpen(!isSettingsOpen);
  };

  return (
    <div className="flex">
      <div className="fixed w-64 h-screen bg-[#262626] border-r-[1px] flex flex-col">
        <div className="text-black bg-gray-200 m-4 mr-8 ml-8 rounded-md p-2">
          <Link href="/">
            <div className="flex items-center gap-2">
              <RxPlus size={30} />
              <span>New Item</span>
            </div>
          </Link>
        </div>
        <span className="border-b-[2px] border-black w-full"></span>
        <div className="flex flex-col p-4 pl-8">
          <button
            className="flex gap-2 text-white focus:outline-none"
            onClick={toggleDashboard}
          >
            <RxDashboard size={20} />
            <span>Dashboard</span>
            <span className="ml-auto mt-1">
              {isDashboardOpen ? (
                <RxChevronDown size={20} />
              ) : (
                <RxChevronUp size={20} />
              )}
            </span>
          </button>
          {isDashboardOpen && (
            <div className="pl-8 mt-2 flex flex-col">
              <div className="text-white">
                <Link href="/">Commarce</Link>
              </div>
              <div className="text-white">
                <Link href="/">Analytics</Link>
              </div>
              <div className="text-white">
                <Link href="/">Crypto</Link>
              </div>
              <div className="text-white">
                <Link href="/">Helpdesk</Link>
              </div>
              <div className="text-white">
                <Link href="/">Monitoring</Link>
              </div>
              <div className="text-white">
                <Link href="/">Fitness</Link>
              </div>
            </div>
          )}
        </div>
        <span className="border-b-[2px] border-black w-full"></span>
        <div className="flex flex-col p-4 pl-8">
          <button
            className="flex gap-2 text-white focus:outline-none"
            onClick={toggleApplication}
          >
            <RxDashboard size={20} />
            <span>Application</span>
            <span className="ml-auto mt-1">
              {isApplicationOpen ? (
                <RxChevronDown size={20} />
              ) : (
                <RxChevronUp size={20} />
              )}
            </span>
          </button>
          {isApplicationOpen && (
            <div className="pl-8 mt-2 flex flex-col">
              <div className="text-white">
                  <Link href="/">Application 1</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Application 2</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Application 3</Link>
              </div>
            </div>
          )}
        </div>
        <span className="border-b-[2px] border-black w-full"></span>
        <div className="flex flex-col p-4 pl-8">
          <button
            className="flex gap-2 text-white focus:outline-none"
            onClick={toggleElements}
          >
            <RxDashboard size={20} />
            <span>Elements</span>
            <span className="ml-auto mt-1">
              {isElementsOpen ? (
                <RxChevronDown size={20} />
              ) : (
                <RxChevronUp size={20} />
              )}
            </span>
          </button>
          {isElementsOpen && (
            <div className="pl-8 mt-2 flex flex-col">
              <div className="text-white">
                  <Link href="/">Element 1</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Element 2</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Element 3</Link>
              </div>
            </div>
          )}
        </div>
        <span className="border-b-[2px] border-black w-full"></span>
        <div className="flex flex-col p-4 pl-8">
          <button
            className="flex gap-2 text-white focus:outline-none"
            onClick={toggleForms}
          >
            <RxDashboard size={20} />
            <span>Forms</span>
            <span className="ml-auto mt-1">
              {isFormsOpen ? (
                <RxChevronDown size={20} />
              ) : (
                <RxChevronUp size={20} />
              )}
            </span>
          </button>
          {isFormsOpen && (
            <div className="pl-8 mt-2 flex flex-col">
              <div className="text-white">
                  <Link href="/">Form 1</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Form 2</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Form 3</Link>
              </div>
            </div>
          )}
        </div>
        <span className="border-b-[2px] border-black w-full"></span>
        <div className="flex flex-col p-4 pl-8">
          <button
            className="flex gap-2 text-white focus:outline-none"
            onClick={togglePlugins}
          >
            <RxDashboard size={20} />
            <span>Plugins</span>
            <span className="ml-auto mt-1">
              {isPluginsOpen ? (
                <RxChevronDown size={20} />
              ) : (
                <RxChevronUp size={20} />
              )}
            </span>
          </button>
          {isPluginsOpen && (
            <div className="pl-8 mt-2 flex flex-col">
              <div className="text-white">
                  <Link href="/">Plugin 1</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Plugin 2</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Plugin 3</Link>
              </div>
            </div>
          )}
        </div>
        <span className="border-b-[2px] border-black w-full"></span>
        <div className="flex flex-col p-4 pl-8">
          <button
            className="flex gap-2 text-white focus:outline-none"
            onClick={toggleDatagrid}
          >
            <RxDashboard size={20} />
            <span>Datagrid</span>
            <span className="ml-auto mt-1">
              {isDatagridOpen ? (
                <RxChevronDown size={20} />
              ) : (
                <RxChevronUp size={20} />
              )}
            </span>
          </button>
          {isDatagridOpen && (
            <div className="pl-8 mt-2 flex flex-col">
              <div className="text-white">
                  <Link href="/">Datagrid 1</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Datagrid 2</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Datagrid 3</Link>
              </div>
            </div>
          )}
        </div>
        <span className="border-b-[2px] border-black w-full"></span>
        <div className="flex flex-col p-4 pl-8">
          <button
            className="flex gap-2 text-white focus:outline-none"
            onClick={toggleSettings}
          >
            <RxDashboard size={20} />
            <span>Settings</span>
            <span className="ml-auto mt-1">
              {isSettingsOpen ? (
                <RxChevronDown size={20} />
              ) : (
                <RxChevronUp size={20} />
              )}
            </span>
          </button>
          {isSettingsOpen && (
            <div className="pl-8 mt-2 flex flex-col">
              <div className="text-white">
                  <Link href="/">Setting 1</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Setting 2</Link>
              </div>
              <div className="text-white">
                  <Link href="/">Setting 3</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <main className="ml-64 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
