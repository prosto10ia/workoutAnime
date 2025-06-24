// src/data/selectionData.js

export const genderOptions = [
   { id: 'male', label: 'Мужчина', src: '/cards/gender/male.webp' },
   { id: 'female', label: 'Женщина', src: '/cards/gender/female.webp' },
]

export const heightOptions = [
   { id: 'medium', label: 'Ниже среднего' },
   { id: 'tall', label: 'Выше среднего' },
]

// Жир: доступность по росту (примерные ограничения)
export const fatOptions = [
   { id: 'high', label: 'Пухлый', heights: ['medium', 'tall'] },
   { id: 'medium', label: 'Стандартный' },
   { id: 'low', label: 'Худощавый', heights: ['short', 'medium'] },
]

// Мышцы: доступность по росту и по жирy
export const muscleOptions = [
   { id: 'none', label: 'слабак' },
   { id: 'medium', label: 'среднячок' },
   { id: 'pro', label: 'качек', genders: ['male'], heights: ['medium', 'tall'], fats: ['low', 'medium'] },
]
