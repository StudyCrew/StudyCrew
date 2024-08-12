import { useMemo, useState } from 'react'
import { createAvatar } from '@dicebear/core'
import { bigEars } from '@dicebear/collection'
import Image from 'next/image'

const USERCONFIGURATIONOPTIONS = [
  {
    label: 'Background',
    options: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc', 'ffdfbf']
  },
  {
    label: 'Eyes',
    options: ['variant03', 'variant13', 'variant21', 'variant23', 'variant24']
  },
  {
    label: 'Hair',
    options: ['long17', 'long14', 'long02', 'short03', 'short14']
  },
  {
    label: 'Hair Color',
    options: ['2c1b18', '724133', 'd6b370', '393305', 'f59797']
  },
  {
    label: 'Skin Color',
    options: ['89532c', 'a66637', 'c07f50', 'da9969', 'f8b788']
  },
  {
    label: 'Mouth',
    options: [
      'variant0201',
      'variant0105',
      'variant0702',
      'variant0704',
      'variant0707'
    ]
  }
]

function Avatar({
  onAvatarChange
}: {
  onAvatarChange: (avatarUrl: string) => void
}) {
  const [background, setBackground] = useState<
    'b6e3f4' | 'c0aede' | 'd1d4f9' | 'ffd5dc' | 'ffdfbf'
  >('ffd5dc')
  const [eyes, setEyes] = useState<
    'variant03' | 'variant13' | 'variant21' | 'variant23' | 'variant24'
  >('variant03')
  const [hair, setHair] = useState<
    'long17' | 'long14' | 'long02' | 'short03' | 'short14'
  >('long02')
  const [hairColor, setHairColor] = useState<
    '2c1b18' | '724133' | 'd6b370' | '393305' | 'f59797'
  >('d6b370')
  const [skinColor, setSkinColor] = useState<
    '89532c' | 'a66637' | 'c07f50' | 'da9969' | 'f8b788'
  >('89532c')
  const [mouth, setMouth] = useState<
    | 'variant0201'
    | 'variant0105'
    | 'variant0702'
    | 'variant0704'
    | 'variant0707'
  >('variant0105')

  const avatar = useMemo(() => {
    const generatedAvatar = createAvatar(bigEars, {
      seed: 'Casper',
      flip: false,
      rotate: 0,
      scale: 100,
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
      backgroundColor: [background],
      eyes: [eyes],
      mouth: [mouth],
      hair: [hair],
      hairColor: [hairColor],
      skinColor: [skinColor]
    }).toDataUri()

    onAvatarChange(generatedAvatar)
    console.log('Avatar:', generatedAvatar)
    return generatedAvatar
  }, [background, eyes, hair, hairColor, skinColor, mouth])

  const generatePreviewAvatars = (
    option: any,
    setState: (value: any) => void,
    currentValue: string
  ) => {
    return option.options.map((opt: string) => {
      const previewAvatar = createAvatar(bigEars, {
        seed: 'Preview',
        flip: false,
        rotate: 0,
        scale: 100,
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
        backgroundColor: option.label === 'Background' ? [opt] : [background],
        eyes: option.label === 'Eyes' ? [opt as typeof eyes] : [eyes],
        mouth: option.label === 'Mouth' ? [opt as typeof mouth] : [mouth],
        hair: option.label === 'Hair' ? [opt as typeof hair] : [hair],
        hairColor: option.label === 'Hair Color' ? [opt] : [hairColor],
        skinColor: option.label === 'Skin Color' ? [opt] : [skinColor]
      }).toDataUri()

      return (
        <div
          key={opt}
          onClick={() => setState(opt)}
          className={`cursor-pointer flex items-center ${opt === currentValue ? 'border-2 border-blue-500' : ''} rounded-full`}
        >
          <Image
            src={previewAvatar}
            width={70}
            height={70}
            alt={`${option.label} Option`}
            className="rounded-full"
          />
        </div>
      )
    })
  }

  const randomAvatar = () => {
    const getRandomOption = (label: string) => {
      const category = USERCONFIGURATIONOPTIONS.find(
        (option) => option.label === label
      )
      return category
        ? category.options[Math.floor(Math.random() * category.options.length)]
        : ''
    }

    setBackground(getRandomOption('Background') as typeof background)
    setEyes(getRandomOption('Eyes') as typeof eyes)
    setHair(getRandomOption('Hair') as typeof hair)
    setHairColor(getRandomOption('Hair Color') as typeof hairColor)
    setSkinColor(getRandomOption('Skin Color') as typeof skinColor)
    setMouth(getRandomOption('Mouth') as typeof mouth)
  }

  return (
    <div className="bg-gray-200 rounded-lg py-[25px] px-[35px] flex flex-col justify-center items-center gap-3 mt-4">
      <div className="relative flex justify-center w-fit">
        <Image
          src={avatar}
          width={150}
          height={150}
          alt="Big Ears Avatar"
          className="rounded-full"
        />
        <div className="absolute bottom-0 right-0">
          <button
            onClick={randomAvatar}
            className="bg-primary-500 p-2.5 rounded-lg"
          >
            <Image
              src={require('../../../public/assets/icons/Vector.svg')}
              alt="Dice"
              width={21}
              height={21}
            />
          </button>
        </div>
      </div>
      <form className="flex flex-col gap-4">
        {USERCONFIGURATIONOPTIONS.map((option) => (
          <div
            key={option.label}
            className="flex justify-center items-center gap-2"
          >
            <label htmlFor={option.label} className="text-left w-[110px]">
              {option.label}:
            </label>
            <div className="flex gap-4 justify-center">
              {generatePreviewAvatars(
                option,
                (value) => {
                  switch (option.label) {
                    case 'Background':
                      setBackground(value)
                      break
                    case 'Eyes':
                      setEyes(value)
                      break
                    case 'Hair':
                      setHair(value)
                      break
                    case 'Hair Color':
                      setHairColor(value)
                      break
                    case 'Skin Color':
                      setSkinColor(value)
                      break
                    case 'Mouth':
                      setMouth(value)
                      break
                  }
                },
                option.label === 'Background'
                  ? background
                  : option.label === 'Eyes'
                    ? eyes
                    : option.label === 'Hair'
                      ? hair
                      : option.label === 'Hair Color'
                        ? hairColor
                        : option.label === 'Skin Color'
                          ? skinColor
                          : mouth
              )}
            </div>
          </div>
        ))}
      </form>
    </div>
  )
}

export default Avatar
