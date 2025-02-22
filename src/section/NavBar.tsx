"use client";
import ChatBot from "../component/chatbot";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../component/ui/navbar-menu";
import { setLanguage } from "../redux/languageSlice";
import ThemeToggle from "./ThemeToggle";

export default function NavbarDemo({ onLoginClick }: { onLoginClick: any }) {
  return (
    <div className="relative w-screen flex items-center justify-center">
      <Navbar onLoginClick={onLoginClick} className="" />
    </div>
  );
}

function Navbar({
  className,
  onLoginClick,
}: {
  className?: string;
  onLoginClick: any;
}) {
  const [active, setActive] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const dispatch = useDispatch();
  const currentLanguage = useSelector(
    (state: RootState) => state.language.currentLanguage
  );

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी" },
    { code: "pa", name: "ਪੰਜਾਬੀ" },
    { code: "be", name: "বাংলা" },
    { code: "mr", name: "मराठी" },
    { code: "ta", name: "தமிழ்" },
    { code: "te", name: "తెలుగు" },
    { code: "gu", name: "ગુજરાતી" },
  ];

  return (
    <div className="fixed top-3 inset-x-0 mx-auto z-50 max-w-5xl px-8">
      <Menu setActive={setActive}>
        <div className="flex items-center px-2 gap-6 text-lg font-bold">
          <Link href="#login-section">
            <MenuItem setActive={setActive} active={active} item="Login">
              <HoveredLink href="#login-section" onClick={onLoginClick}>
                Join Us Now
              </HoveredLink>
            </MenuItem>
          </Link>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Theoritical Courses"
          >
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Mathematics"
                href="/navComponents/maths"
                src="/assets/mathsnav.jpeg"
                description="Prepare for world of maths from class 1st to class 12th and Higher"
              />
              <ProductItem
                title="Chemistry"
                href="/navComponents/chemistry"
                src="/assets/physicsnav.jpeg"
                description="Chemistry for elementry and higher levels"
              />
              <ProductItem
                title="Physics"
                href="/navComponents/physics"
                src="/assets/chemnav.jpeg"
                description="Never learn complex physics with our teachers who makes physics understandable and easy"
              />
              <ProductItem
                title="English"
                href="/navComponents/english"
                src="/assets/englishnav.jpeg"
                description="Learn Better English Especially Designed For Rural Areas"
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Technical Courses"
          >
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Web Development</HoveredLink>
              <HoveredLink href="/navComponents/contribute">
                Designing
              </HoveredLink>
              <HoveredLink href="/navComponents/artificial">
                Artificial Intellegence Machine Learning
              </HoveredLink>
              <HoveredLink href="/navComponents/contribute">
                Branding
              </HoveredLink>
              <HoveredLink href="/navComponents/contribute">
                Teaching
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contribute">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/navComponents/contribute">
                Host Seminar
              </HoveredLink>
              <HoveredLink href="/navComponents/contribute">
                Donation Camps
              </HoveredLink>
              <HoveredLink href="/navComponents/contribute">
                Upload Your Course
              </HoveredLink>
              <HoveredLink href="/navComponents/contribute">
                Tech Non Tech Fair
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Language">
            <div className="flex flex-col space-y-4 text-sm">
              <select
                value={currentLanguage}
                onChange={(e) => dispatch(setLanguage(e.target.value))}
                className="border p-2 rounded bg-white dark:bg-black"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </MenuItem>
          <button
            onClick={() => setIsChatOpen(true)}
            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer"
          >
            <FaRobot className="h-6 w-6 text-green-500 hover:text-green-700" />
            <span className="text-green-500 hover:text-green-700">Chatbot</span>
          </button>
          {isChatOpen && <ChatBot />}
          <ThemeToggle className="ml-2" />
        </div>
      </Menu>
    </div>
  );
}
