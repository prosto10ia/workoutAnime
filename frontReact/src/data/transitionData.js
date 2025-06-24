export const transitions = {
   male: {
     fat: {
       high:   ['medium'],
       medium: ['low','medium'],
       low:    ['low']
     },
     muscle: {
       none:   ['medium'],
       medium: ['medium','pro'],
       pro:    ['pro']
     }
   },
   female: {
     fat: {
       high:   ['medium'],
       medium: ['low','medium'],
       low:    ['low']
     },
     muscle: {
       none:   ['medium'],
       medium: ['medium'],
       pro:    []  // «pro» (я – машина) недоступно
     }
   }
 }
 