# AI Trading Bot

A Next.js application that provides trading metrics and analytics through both a web interface and a Telegram bot.

## Features

- Real-time trading metrics
- PnL analysis
- Distribution statistics
- Responsive web interface
- Telegram bot integration

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Telegram bot token (get it from [@BotFather](https://t.me/botfather))
- A Netlify account for deployment

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd aitrading
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```env
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
```

4. Install Netlify CLI and login:
```bash
npm install -g netlify-cli
netlify login
```

5. Run the development server:
```bash
netlify dev
```

6. Open [http://localhost:8888](http://localhost:8888) to view the web interface.

### Telegram Bot Setup

1. Create a new bot with [@BotFather](https://t.me/botfather):
   - Send `/newbot` to BotFather
   - Choose a name for your bot
   - Choose a username for your bot
   - Save the token provided by BotFather

2. Set up commands with BotFather:
   - Send `/setcommands` to BotFather
   - Select your bot
   - Send the following commands list:
   ```
   start - Start the bot
   metrics - Show trading metrics
   pnl - Show PnL details
   distribution - Show distribution stats
   help - Show help information
   ```

### Netlify Deployment

1. Push your code to a GitHub repository

2. Deploy to Netlify:
   ```bash
   # Initialize Netlify project
   netlify init
   ```

3. Configure environment variables in Netlify:
   - Go to Site settings > Environment variables
   - Add the following variables:
     - `TELEGRAM_BOT_TOKEN`: Your Telegram bot token

4. Deploy your site:
   ```bash
   # Deploy to production
   netlify deploy --prod
   ```

5. After deployment, set up the webhook:
   - Replace `YOUR_BOT_TOKEN` and `YOUR_NETLIFY_URL` in the following URL:
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/setWebhook?url=YOUR_NETLIFY_URL/.netlify/functions/webhook
   ```
   - Visit the URL in your browser to set up the webhook

## Usage

### Web Interface
Visit your deployed Netlify URL to access the web interface.

### Telegram Bot
1. Start a chat with your bot on Telegram
2. Send `/start` to see available commands
3. Use the commands to get trading information:
   - `/metrics` - View trading metrics
   - `/pnl` - View PnL details
   - `/distribution` - View distribution statistics
   - `/help` - Get help with commands

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
