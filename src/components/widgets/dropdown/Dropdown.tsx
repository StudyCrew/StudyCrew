import React from 'react';
import { CaretRight } from "@phosphor-icons/react";

interface DropdownProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
  currentChoice: string;
  setCurrentChoice: (choice: string) => void;
  choices: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ opened, setOpened, currentChoice, setCurrentChoice, choices }) => {
  return (
    <div className="dropdown flex flex-col relative">
      <style>
        {`
          ::-webkit-scrollbar{
            background-color:transparent;
            width:10px;
          }
          ::-webkit-scrollbar-thumb{
            background-color:#98A2B3;
            border-radius:10px;
          }
        `}
      </style>
      <div className="currentchoice flex py-2 px-2 text-xl w-fit border-2 border-[#E5E5E5] rounded-t-[6px]">
        <div className="text w-[300px]">{currentChoice}</div>
        <div
          className={`chevron w-[28px] h-[28px] justify-center flex items-center transition-all ${opened ? "rotate-90" : ""}`}
          onClick={() => { setOpened(!opened); }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      </div>
      {opened && (
        <div className="w-[332px] bg-[#f3f4f8] absolute top-[46px] rounded rounded-b-[6px] p-2 flex flex-col">
          <div className="flex flex-col h-[200px] overflow-y-auto">
            {choices.map((option, i) => (
              <button
                className="p-2 text-left rounded-md transition-all hover:bg-[#3A86FF] hover:text-white"
                key={i}
                onClick={() => {
                  setCurrentChoice(option);
                  setOpened(false);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
