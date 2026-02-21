const libraryStructure = {
  categories: [
    {
      name: 'Fiction',
      subcategories: [
        {
          name: 'Novel',
          books: [
            'To Kill a Mockingbird',
            '1984',
            'Pride and Prejudice'
          ]
        },
        {
          name: 'Short Stories',
          books: [
            'The Lottery',
            'The Gift of the Magi'
          ]
        }
      ]
    },
    {
      name: 'Non-Fiction',
      subcategories: [
        {
          name: 'Biography',
          books: [
            'The Diary of a Young Girl',
            'Long Walk to Freedom'
          ]
        },
        {
          name: 'Self-Help',
          books: [
            'The Power of Habit',
            'Atomic Habits'
          ]
        }
      ]
    },
    {
      name: 'Science',
      subcategories: [
        {
          name: 'Physics',
          books: [
            'A Brief History of Time',
            'The Elegant Universe'
          ]
        },
        {
          name: 'Biology',
          books: [
            'The Selfish Gene',
            'Sapiens: A Brief History of Humankind'
          ]
        }
      ]
    }
  ]
};

export default libraryStructure;