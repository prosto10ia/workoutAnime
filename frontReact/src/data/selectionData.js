export const genderOptions = [
   { id: 'male', label: 'Парень', src: '/cards/gender/male.webp' },
   { id: 'female', label: 'Девушка', src: '/cards/gender/female.webp' },
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
   { id: 'none', label: 'слабачок' },
   { id: 'medium', label: 'среднячок' },
   { id: 'pro', label: 'качок', genders: ['male'], heights: ['medium', 'tall'], fats: ['low', 'medium'] },
]
