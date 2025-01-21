import React from 'react';

export default function GlobeUkIcon({ color }: { color: string }) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'>
      <path
        fill={color}
        d='M12 20a7.176 7.176 0 0 0 1.7-.2L12.5 18H9v-1c0-.55.196-1.02.588-1.412A1.926 1.926 0 0 1 11 15h2v-3h-2a.968.968 0 0 1-.713-.287A.968.968 0 0 1 10 11V9h-.45c-.433 0-.8-.146-1.1-.438-.3-.291-.45-.654-.45-1.087a1.675 1.675 0 0 1 .25-.875L9.8 4.325C8.117 4.808 6.73 5.75 5.637 7.15 4.546 8.55 4 10.167 4 12h1v-1c0-.283.096-.52.287-.713A.967.967 0 0 1 6 10h2c.283 0 .52.096.713.287.191.192.287.43.287.713v1c0 .283-.096.52-.287.713A.967.967 0 0 1 8 13v1c0 .55-.196 1.02-.588 1.412A1.926 1.926 0 0 1 6 16h-.925a8.122 8.122 0 0 0 2.875 2.9c1.217.733 2.567 1.1 4.05 1.1Zm7.6-5.55c.133-.383.233-.78.3-1.188.067-.408.1-.829.1-1.262 0-1.867-.567-3.512-1.7-4.938C17.167 5.638 15.733 4.7 14 4.25V7c.55 0 1.02.196 1.412.588.392.391.588.862.588 1.412v2c.317 0 .6.037.85.113.25.075.492.229.725.462L19.6 14.45ZM12 22a9.738 9.738 0 0 1-3.9-.788 10.099 10.099 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.738 9.738 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.099 10.099 0 0 1 2.137-3.175c.9-.9 1.958-1.612 3.175-2.137A9.738 9.738 0 0 1 12 2c1.383 0 2.683.263 3.9.788a10.098 10.098 0 0 1 3.175 2.137c.9.9 1.613 1.958 2.137 3.175A9.738 9.738 0 0 1 22 12a9.738 9.738 0 0 1-.788 3.9 10.098 10.098 0 0 1-2.137 3.175c-.9.9-1.958 1.613-3.175 2.137A9.738 9.738 0 0 1 12 22Z'
      />
    </svg>
  );
}
