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
    <div className="min-h-screen p-6">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl">Characters</h1>
      </div>

      <div className="flex flex-row justify-center">
        {/* Characters Display */}

        <div className="] grid-cols-10 mb-16 grid h-[90vh] max-w-2xl grid-flow-row-dense  gap-4 overflow-y-scroll">
          {characters.map((char) => (
            <div
              key={char}
              className="relative my-4 cursor-pointer text-center text-3xl hover:bg-gray-200"
              style={{ fontFamily: 'Euripides', width: '48px', height: '48px', lineHeight: '48px' }} // Ensures consistent size
              onMouseEnter={() => setHoveredChar(char)}
            >
              {char}
              {/* Hover effect with absolutely positioned border */}
              <div className="absolute inset-0 hidden rounded-full border-2 border-dotted hover:block"></div>
            </div>
          ))}
        </div>
        {/* Circle Element */}
        <div className="sticky mt-24 hidden basis-1/3 justify-center md:flex">
          <div
            className="mx-24 flex h-[60vh] w-[60vh] items-center justify-center rounded-full border-2 border-slate-100 bg-slate-100 text-[200px] font-bold text-black"
            style={{ fontFamily: 'Euripides' }}
          >
            {hoveredChar}
          </div>
        </div>
      </div>
    </div>
  )
}
