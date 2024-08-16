"use client";
import Dropdown from '@/components/widgets/dropdown/Dropdown';
import React, { useState } from 'react';

const Check: React.FC = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const [currentChoice, setCurrentChoice] = useState<string>("Maths");
    const choices: string[] = ["English", "Math", "Science", "Social Science", "Computer Science", "Geography", "Chemistry", "Physics"];

    return (
        <div className="flex justify-center items-center h-screen">
            <Dropdown
                opened={opened}
                setOpened={setOpened}
                currentChoice={currentChoice}
                setCurrentChoice={setCurrentChoice}
                choices={choices}
            />
        </div>
    );
}

export default Check;
