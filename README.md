# Timer Challenge Game 🎯

A fun and interactive React-based timer challenge game where players must stop the timer as close as possible to the target time. Built with React 19 and Vite for a modern, fast development experience.

![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green)

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Multiple Difficulty Levels**: Four challenges with increasing difficulty (Easy, Medium, Hard, Very Hard)
- **Real-time Timer Display**: Live countdown showing elapsed time with 0.1s precision
- **Win Detection System**: Automatic detection when you stop within 1 second of target time
- **Visual Feedback**: Confetti animations for successful completions
- **Result Modal**: Detailed feedback showing your performance after each challenge
- **Score Tracking**: Keep track of all your wins throughout the session
- **Responsive Design**: Works seamlessly across different screen sizes
- **Modern UI**: Clean and intuitive interface

## 🎮 Demo

The game features four timer challenges:
- **Easy**: 1 second target
- **Medium**: 5 seconds target
- **Hard**: 10 seconds target
- **Very Hard**: 15 seconds target

Stop the timer as close to the target time as possible to win!

## 🚀 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Steps

1. Clone the repository:
```bash
git clone https://github.com/sina-soroush/starting-project.git
cd starting-project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local server address (usually `http://localhost:5173`)

## 💻 Usage

1. **Start a Challenge**: Click the "Start Challenge" button on any difficulty level
2. **Watch the Timer**: The timer will start counting up
3. **Stop at the Right Time**: Click "Stop Challenge" when you think you've reached the target time
4. **Check Your Result**: A modal will appear showing whether you won or lost
5. **Track Your Progress**: Your wins are displayed in the player section at the top

### Winning Condition

You win if you stop the timer within ±1 second of the target time!

## 📁 Project Structure

```
starting-project/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   ├── components/     # React components
│   │   ├── Confetti.jsx        # Confetti animation component
│   │   ├── Player.jsx          # Player info and score display
│   │   ├── ResultModal.jsx     # Modal for showing results
│   │   └── TimerChallenge.jsx  # Main timer challenge component
│   ├── App.jsx         # Root application component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
├── .gitignore          # Git ignore rules
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── README.md           # Project documentation
└── vite.config.js      # Vite configuration
```

## 🛠️ Technologies Used

- **React 19.0.0** - JavaScript library for building user interfaces
- **Vite 4.4.5** - Next-generation frontend tooling
- **React DOM 19.0.0** - React package for working with the DOM
- **ESLint** - Code linting and formatting
- **CSS3** - Styling

## 📜 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Coding Guidelines

- Follow the existing code style
- Write clear commit messages
- Update documentation as needed
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Sina Soroush**

- GitHub: [@sina-soroush](https://github.com/sina-soroush)

## 🙏 Acknowledgments

- Built as a learning project to practice React refs and timer management
- Inspired by classic reaction time games
- Thanks to the React and Vite communities for excellent documentation

## 📞 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

⭐ If you found this project helpful, please give it a star!
