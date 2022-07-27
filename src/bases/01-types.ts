export let name: string = 'Kevin'
export const age: number = 29
export const isValid: boolean = true

name = 'Maria'


export const templateString: string = `Esto es un string
multilinea
que puede tener
" dobles
' simple
inyectar valores ${ name }
expresiones ${ 1 + 1 }
numeros: ${ age }
booleanos: ${ isValid }
`

console.log(templateString);