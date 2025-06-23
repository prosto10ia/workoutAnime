// src/data/selectionData.js

export const genderOptions = [
   { id: 'male',   label: 'Мужчина', src: '/cards/gender/male.png' },
   { id: 'female', label: 'Женщина', src: '/cards/gender/female.png' },
 ]
 
 export const heightOptions = [
   { id: 'short',  label: 'Ниже среднего' },
   { id: 'medium', label: 'Средний' },
   { id: 'tall',   label: 'Выше среднего' },
 ]
 
 // Жир: доступность по росту (примерные ограничения)
 export const fatOptions = [
   { id:'high',   label:'Много',   heights:['medium','tall'] },
   { id:'medium', label:'Средне' },
   { id:'low',    label:'Мало',    heights:['short','medium'] },
 ]
 
 // Мышцы: доступность по росту и по жирy
 export const muscleOptions = [
   { id:'none',   label:'Мало' },
   { id:'medium', label:'Средние' },
   { id:'pro',    label:'Мускулистый', genders:['male'], heights:['medium','tall'], fats:['low','medium'] },
 ]
 