import { Handler } from '@netlify/functions';
import { TelegramService } from '../../lib/telegram-service';

export const handler: Handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const telegramService = new TelegramService();
    const body = JSON.parse(event.body || '{}');
    const { message } = body;

    if (!message?.text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'No message text provided' }),
      };
    }

    const chatId = message.chat.id;
    const command = message.text.split(' ')[0].toLowerCase();

    switch (command) {
      case '/start':
        await telegramService.handleStartCommand(chatId);
        break;
      case '/metrics':
        await telegramService.handleMetricsCommand(chatId);
        break;
      case '/pnl':
        await telegramService.handlePnLCommand(chatId);
        break;
      case '/distribution':
        await telegramService.handleDistributionCommand(chatId);
        break;
      case '/help':
        await telegramService.handleHelpCommand(chatId);
        break;
      default:
        await telegramService.sendMessage({
          chat_id: chatId,
          text: 'Unknown command. Type /help to see available commands.',
        });
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (error) {
    console.error('Webhook error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal server error' }),
    };
  }
}; 