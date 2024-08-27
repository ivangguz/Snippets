import React from 'react';

interface InputsProps {
  children: React.ReactNode; // Define el tipo de `children`
  tag: string;
  as?: 'input' | 'textarea'; // Prop para decidir qué tipo de elemento renderizar
}

export default function Inputs({ children, tag, as = 'input' }: InputsProps) {
  const Element = as; // Usa `as` para determinar el tipo de elemento a renderizar

  return (
    <div className="flex gap-4">
      <label className="w-12" htmlFor={tag}>
        {children}
      </label>
      <Element
        name={tag}
        className="border rounded p-2 w-full"
        id={tag}
        // Puedes agregar otras props aquí si es necesario
      />
    </div>
  );
}
