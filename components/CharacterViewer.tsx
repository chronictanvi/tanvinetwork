'use client'

import { useState } from 'react'

export default function CharacterViewer() {
  // List of characters to display
  const characters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '!',
    '"',
    '#',
    '$',
    '%',
    '&',
    '(',
    ')',
    '*',
    '+',
    ',',
    '-',
    '.',
    '/',
    ':',
    ';',
    '<',
    '=',
    '>',
    '?',
    '@',
    '[',
    '^',
    '_',
    '`',
    '{',
    '|',
    '}',
    '~',
    ' ',
    '¡',
    '¢',
    '£',
    '¤',
    '¥',
    '¦',
    '§',
    '¨',
    '©',
    'ª',
    '«',
    '¬',
    '­®',
    '¯',
    '°',
    'µ',
    '¶',
    '·',
    '¸',
    '»',
    '¿',
    'À',
    'Á',
    'Â',
    'Ã',
    'Ä',
    'Å',
    'Æ',
    'Ç',
    'È',
    'É',
    'Ê',
    'Ë',
    'Ì',
    'Í',
    'Î',
    'Ï',
    'Ð',
    'Ñ',
    'Ò',
    'Ó',
    'Ô',
    '.',
    'Õ',
    'Ö',
    '×',
    'Ø',
    'Ù',
    'Ú',
    'Û',
    'Ü',
    'Ý',
    'Þ',
    'ß',
    'à',
    'á',
    'â',
    'ã',
    'ä',
    'å',
    'æ',
    'ç',
    'è',
    'é',
    'ê',
    'ë',
    'ì',
    'í',
    'î ',
    'ï',
    'ð',
    'ñ',
    'ò',
    'ó',
    'ô',
    'õ',
    'ö',
    '÷',
    'ø',
    'ù',
    'ú',
    'û',
    'ü',
    'ý',
  ]

  // State to track the character displayed in the circle
  const [hoveredChar, setHoveredChar] = useState('/') // Default character is '/'

  return (
    <div className="my-auto p-6">
      {/* Section Header */}
      <div className="mb-8 text-center" style={{ fontFamily: 'Euripides' }}></div>

      <div className=" grid w-full grid-cols-2">
        {/* Circle Element (Left Column - Sticky) */}
        <div className="sticky top-7 h-min">
          {/* <h1 className="pb-16 text-center text-2xl tracking-wider text-zinc-400">CHARACTERS</h1> */}
          <div
            className="mx-10 my-10 flex items-center justify-center rounded-full  py-32 text-[250px] font-bold leading-none text-white"
            style={{ fontFamily: 'Euripides' }}
          >
            {hoveredChar}
          </div>
        </div>

        {/* Characters Display (Right Column) */}
        <div className="mb-16">
          <div className="grid grid-flow-row-dense grid-cols-10 ">
            {characters.map((char) => (
              <div
                key={char}
                className="relative my-4 cursor-pointer text-center text-3xl hover:bg-gray-200"
                style={{
                  fontFamily: 'Euripides',
                  width: '48px',
                  height: '48px',
                  lineHeight: '48px',
                }}
                onMouseEnter={() => setHoveredChar(char)}
              >
                {char}
                {/* Hover effect with absolutely positioned border */}
                <div className="absolute inset-0 hidden rounded-full border-2 border-dotted hover:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
