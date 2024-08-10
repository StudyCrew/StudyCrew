import { useMemo, useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/core';
import { bigEars } from '@dicebear/collection';

const USERCONFIGURATIONOPTIONS = [
  {
    label: 'Background Color',
    options: [
      "#b6e3f4", "#c0aede", "#d1d4f9", "#ffd5dc", "#ffdfbf"
    ]
  },
  {
    label: 'Eyes',
    options: [
      "variant03", "variant13", "variant21", "variant23", "variant24"
    ]
  },
  {
    label: 'Hair',
    options: [
      "long17", "long14", "long02", "long11", "no selection"
    ]
  },
  {
    label: 'Hair Color',
    options: [
      "#2c1b18", "#724133", "#d6b370", "#393305", "#f59797"
    ]
  },
  {
    label: "Skin Color",
    options: [
      "#89532c", "#a66637", "#c07f50", "#da9969", "#f8b788"
    ]
  },
  {
    label: "Mouth",
    options: [
      "variant0201", "variant0105", "variant0702", "variant0105", "variant0707"
    ]
  }
]

function Avatar() {
  const [background, setBackground] = useState('transparent');
  const [eyes, setEyes] = useState('default');
  const [hair, setHair] = useState('default');
  const [hairColor, setHairColor] = useState('default');
  const [skinColor, setSkinColor] = useState('default');
  const [mouth, setMouth] = useState('default');

  const avatar = useMemo(() => {
    return createAvatar(bigEars, {
      size: 128,
      flip: false,
      rotate: 0,
      scale: 1,
      radius: 0,
      backgroundType: ['solid'],
      backgroundRotation: [0],
      translateX: 0,
      translateY: 0,
      randomizeIds: false,
      cheekProbability: 0,
      ear: ['variant01'],
      face: ['variant02'],
      frontHair: ['variant02'],
      nose: ['variant05'],
      sideburn: ['variant04'],
    }).toDataUri();
  }, []);

  return (
    <div className='bg-gray-200 rounded-lg py-[25px] px-[35px] flex flex-col gap-3 mt-4'>
      <img src={avatar} alt="Avatar" />
    </div>
  );
}

export default Avatar;